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

const seoPlugin = () => ({
  name: 'seo-plugin',
  transformIndexHtml(html, ctx) {
    const url = ctx.originalUrl || '/';
    let title = 'Manufacturer Of Laboratory Furniture & Equipment In Ahmedabad';
    let desc = 'Rayon Lab Tech is a leading manufacturer of premium laboratory furniture, fume hoods, and scientific equipment in Ahmedabad, providing high-quality solutions for modern research environments.';

    if (url.includes('/about-us')) {
      title = 'Manufacturer Of Laboratory Furniture & Equipment In India';
      desc = 'Rayon Lab Tech is a Manufacturer Of Laboratory Furniture & Equipment In Ahmedabad, delivering customised working tables, island tables, fume hoods, storage cabinets, exhaust systems, and stainless steel furniture for educational, research, healthcare, pharmaceutical, chemical, and industrial laboratory environments across India with professional support.';
    } else if (url.includes('/updates')) {
      title = 'Our Blogs - Rayon Lab Tech';
      desc = 'Latest insights for safer, smarter, and efficient laboratory planning.';
    } else if (url.includes('/portfolio')) {
      title = 'Our Portfolio - Rayon Lab Tech';
      desc = 'Explore our recent laboratory furniture installations and scientific equipment setups.';
    } else if (url.includes('/contact-us')) {
      title = 'Contact Us - Rayon Lab Tech';
      desc = 'Get in touch with Rayon Lab Tech for your laboratory furniture needs.';
    } else if (url.includes('/products/')) {
      title = 'Products - Rayon Lab Tech';
      desc = 'Explore our premium range of laboratory products.';
    }

    html = html.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);
    html = html.replace(/<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i, `<meta name="description" content="${desc}" />`);
    return html;
  }
});

export default defineConfig(({ mode }) => {
  const env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

  return {
    plugins: [react(), localApiPlugin(env), seoPlugin()],
    resolve: {
      dedupe: ['react', 'react-dom'],
    },
  };
});
