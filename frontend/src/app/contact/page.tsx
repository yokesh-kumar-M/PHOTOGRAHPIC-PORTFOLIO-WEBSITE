import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section-five">
          <div className="container">
            <div className="contact-top">
              <h3>CONTACT ME</h3>
              <p>If your concern/ query is related to MY WORLD contact us</p>
            </div>

            <div className="contact-middle">
              <div>
                <span className="contact-icon">
                  <i className="fas fa-map-signs"></i>
                </span>
                <span>Address</span>
                <p>Block - 45 BH - 1/2 Lovely Professional University</p>
              </div>

              <div>
                <span className="contact-icon">
                  <i className="fas fa-phone"></i>
                </span>
                <span>Contact Number</span>
                <p>+91 8921400680</p>
              </div>

              <div>
                <span className="contact-icon">
                  <i className="fas fa-paper-plane"></i>
                </span>
                <span>Email Address</span>
                <p>myworld@gmail.com</p>
              </div>

              <div>
                <span className="contact-icon">
                  <i className="fas fa-globe"></i>
                </span>
                <span>Website</span>
                <p>www.MyWorld.com</p>
              </div>
            </div>

            <div className="contact-bottom">
              <ContactForm />

              <div>
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.726564801246!2d75.70295481522345!3d31.255991981457846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5e9c489cf3%3A0x4049a5409d53c300!2sLovely%20Professional%20University!5e0!3m2!1sen!2sin!4v1669925404193!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                  <style>{`.mapouter{position:relative;text-align:right;width:600px;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:600px;height:400px;}.gmap_iframe {width:600px!important;height:400px!important;}`}</style>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
