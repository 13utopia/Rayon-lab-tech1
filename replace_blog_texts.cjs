const fs = require('fs');

let content = fs.readFileSync('src/App.jsx', 'utf-8');

// The first blog post title and excerpt
content = content.replace(
  '<h3 className="blog-title-large">{blogPosts[0].title}</h3>',
  '<h3 className="blog-title-large">Laboratory Furniture Trends for Modern Labs in 2026</h3>'
);

content = content.replace(
  '<p className="blog-excerpt">Explore our latest product updates and insights on {blogPosts[0].title}...</p>',
  '<p className="blog-excerpt">Explore flexible furniture, smarter storage, safer layouts, and modern laboratory solutions...</p>'
);

// We need to replace the mapping for the small cards with hardcoded ones or keep mapping but use a switch/if statement for titles.
// The easiest way is to modify the loop in App.jsx to render specific titles for index 0 and 1.
// Let's replace the whole blog-list map.

const oldBlogList = `{blogPosts.slice(1, 3).map((post, index) => (
                    <React.Fragment key={post.id}>
                      <article className="blog-card-small" onClick={(e) => { e.preventDefault(); navigate('/updates/' + generateSlug(post.title)); window.scrollTo(0,0); }} style={{ cursor: 'pointer' }}>
                        <div className="blog-card-small-image" style={{ backgroundImage: \`url(\${post.image})\` }}></div>
                        <div className="blog-card-small-content">
                          <div className="blog-meta-small">
                            <span className="blog-meta-item"><CalendarIcon /> {post.date}</span>
                            <span className="blog-meta-item"><UserIcon /> BY RAYON</span>
                          </div>
                          <h4 className="blog-title-small">{post.title}</h4>
                        </div>
                      </article>
                      {index === 0 && <div className="blog-content-divider small-only"></div>}
                    </React.Fragment>
                  ))}`;

const newBlogList = `{blogPosts.slice(1, 3).map((post, index) => {
                    const customTitle = index === 0 ? "Choosing the Right Laboratory Fume Hood System" : "Laboratory Working Table and Island Table Guide";
                    return (
                      <React.Fragment key={post.id}>
                        <article className="blog-card-small" onClick={(e) => { e.preventDefault(); navigate('/updates/' + generateSlug(post.title)); window.scrollTo(0,0); }} style={{ cursor: 'pointer' }}>
                          <div className="blog-card-small-image" style={{ backgroundImage: \`url(\${post.image})\` }}></div>
                          <div className="blog-card-small-content">
                            <div className="blog-meta-small">
                              <span className="blog-meta-item"><CalendarIcon /> {post.date}</span>
                              <span className="blog-meta-item"><UserIcon /> BY RAYON</span>
                            </div>
                            <h4 className="blog-title-small">{customTitle}</h4>
                          </div>
                        </article>
                        {index === 0 && <div className="blog-content-divider small-only"></div>}
                      </React.Fragment>
                    );
                  })}`;

if (content.includes('{blogPosts.slice(1, 3).map((post, index) => (')) {
  content = content.replace(oldBlogList, newBlogList);
  console.log('Blog list updated.');
} else {
  console.log('Could not find blog list to update.');
}

fs.writeFileSync('src/App.jsx', content);
