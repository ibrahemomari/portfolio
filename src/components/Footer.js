import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <>
        {/* <!--==================== FOOTER ====================--> */}
        <footer class="footer">
          <div class="footer__bg">
            <div class="footer__container container grid">
              <div>
                <h1 class="footer__title">Ibrahem Alomari</h1>
                <span class="footer__subtitle">Full stack web Developer</span>
              </div>
              <ul class="footer__links">
                <li>
                  <a href="#services" class="footer__link">
                    Services
                  </a>
                </li>

                <li>
                  <a href="#about" class="footer__link">
                    About
                  </a>
                </li>

                <li>
                  <a href="#contact" class="footer__link">
                    Contact me
                  </a>
                </li>
              </ul>
              <div class="footer__socials">
                <a
                  href="https://web.facebook.com/ibrahem.alomari.96"
                  target="_blank"
                  rel="noreferrer" 
                  class="footer__social"
                >
                  <i class="uil uil-facebook-f"></i>
                </a>

                <a
                  href="https://www.instagram.com/ibrahem0_0omari/"
                  target="_blank"
                  rel="noreferrer" 
                  class="footer__social"
                >
                  <i class="uil uil-instagram"></i>
                </a>

                <a
                  href="https://twitter.com/Ibrahem0_0omari"
                  target="_blank"
                  rel="noreferrer" 
                  class="footer__social"
                >
                  <i class="uil uil-twitter-alt"></i>
                </a>
              </div>
            </div>
            <p class="footer__copy">&#169; DOON All right reserved</p>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
