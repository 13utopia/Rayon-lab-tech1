import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { sendSubmissionEmail } from './api/email-service.js';

const readJsonBody = (req) =>
  new Promise((resolve, reject) => {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });

    req.on('error', reject);
  });

const localApiPlugin = (env) => ({
  name: 'local-api',
  configureServer(server) {
    server.middlewares.use('/api/send-email', async (req, res) => {
      res.setHeader('Content-Type', 'application/json');

      if (req.method !== 'POST') {
        res.statusCode = 405;
        res.setHeader('Allow', 'POST');
        res.end(JSON.stringify({ error: 'Method not allowed' }));
        return;
      }

      try {
        const { subject, body, replyTo } = await readJsonBody(req);
        const result = await sendSubmissionEmail({ subject, body, replyTo, env });
        res.statusCode = result.status;
        res.end(JSON.stringify(result.data));
      } catch (error) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Invalid request body.' }));
      }
    });
  },
});

export default defineConfig(({ mode }) => {
  const env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

  return {
    plugins: [react(), localApiPlugin(env)],
    resolve: {
      dedupe: ['react', 'react-dom'],
    },
  };
});
