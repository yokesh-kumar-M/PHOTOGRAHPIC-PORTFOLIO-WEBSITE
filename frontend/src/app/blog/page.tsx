import Header from '@/components/Header';
import Footer from '@/components/Footer';

async function getBlogPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost/api'}/blog`, { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <Header />
      <main>
        <section className="section-four">
          <div className="container">
            <div className="blogs">
              <div className="blog-wrapper-lg">
                {posts.map((post: any) => (
                  <div className="blog" key={post.id}>
                    <img src={post.image_url} width="600px" height="400px" alt={post.title} />
                    <div className="blog-content">
                      <span className="badge">{post.badge}</span>
                      <span className="misc-info">{post.info}</span>
                      <h3 className="blog-title">{post.title}</h3>
                      <p className="blog-text">{post.text}</p>
                      <a href="#" className="btn">Read More &#8594;</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
