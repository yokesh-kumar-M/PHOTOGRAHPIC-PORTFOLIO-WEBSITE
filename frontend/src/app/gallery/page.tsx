import Header from '@/components/Header';
import Footer from '@/components/Footer';

async function getGalleryItems() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost/api'}/gallery`, { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

export default async function GalleryPage() {
  const items = await getGalleryItems();

  return (
    <>
      <Header />
      <main>
        <section className="section-three">
          <div className="container">
            <div className="gallery">
              {items.map((item: any) => (
                <a href={item.image_url} key={item.id}>
                  <div className="single-img">
                    <img src={item.image_url} alt={item.title} height="300px" width="400px" />
                    <div className="single-img-content">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
