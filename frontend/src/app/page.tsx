import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="section-one">
          <div className="container">
            <div className="sec-one-left">
              <div>
                <h3>Memories are timeless treasures of the heart.</h3>
                <p>Life is shorter, live it. Love is rare, grab it. Anger is bad, dump it. Fear is awful, face it. Memories are sweet, cherish it.</p>
                <a href="#" className="btn">View All &#8594;</a>
              </div>
            </div>

            <div className="sec-one-right">
              <div className="work-content">
                <h3>THE STRUGGLE ENDS WHEN GRATITUDE BEGINS…</h3>
                <p>And what a wonderful healing effect it had on my mind and body!!! I felt as if some burden had been removed from my soul. I developed a sense of gratitude even for hardships and life rewarded me enormously.  </p>
                <a href="#" className="btn">View All &#8594;</a>
              </div>
              <div className="work-imgs">
                <div className="work-img-1"></div>
                <div className="work-img-2"></div>
              </div>
              <h3>“Taking pictures is savoring life intensely every hundredth of a second.”</h3>
            </div>
          </div>
        </section>

        <section className="section-two">
          <div className="container">
            <h2>FOLLOW ON INSTAGRAM</h2>
            <span>@amal_raj_a_</span>
            <div className="insta-imgs">
              {[1, 2, 3, 5].map((i) => (
                <div key={i}>
                  <img src={`/images/p${i}.${i === 3 ? 'jpeg' : 'jpg'}`} width="290px" height="200px" alt={`instagram ${i}`} />
                  <div className="icon-overlay flex">
                    <i className="fab fa-instagram"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
