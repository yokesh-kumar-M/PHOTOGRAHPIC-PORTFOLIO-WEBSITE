export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div>
          <h2>MY STORY</h2>
          <p>
            Photography came to me at a time when i need it most - it was like walking right into what i was created to do , only i had no freakin' idea that's what i was heading into . It fit me , my personality , my strengths. It had me constantly thinking , changing , growing and it makes me feel alive to know that tomorrow will never be the same as today.I firmly believe each person was created to use their specific abilities and passion to bless other, no matter the industry , i am certain this is mine. I went after it full steam , no question asked, not a shred of a doubt. it's who i am ,feed me.
          </p>
        </div>
        <div>
          <h3>Free Subscription!</h3>
          <p>
            We just need one small favour from you - please confirm your email to continue using
            <span> MY WORLD.</span>
          </p>

          <div className="subs">
            <i className="fas fa-envelope"></i>
            <input type="email" id="email" placeholder="Email Address" />
            <button type="submit">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
