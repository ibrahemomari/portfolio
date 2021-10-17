import React, { Component } from "react";
import Typed from "react-typed";
import { Fade } from "react-reveal/";
import myPic from "../images/ibrahem.png";
class Home extends Component {
  render() {
    return (
      <>
        <section class="home section" id="home">
          <Fade cascade>
            <div className="home__background--animaition">
              <svg
                class="home__blob"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g mask="url(#mask0)">
                  <path
                    d="M35.8,-35C44.1,-27.4,47.1,-13.7,46.1,-1C45.1,11.8,40.3,23.6,32,39.4C23.6,55.1,11.8,74.8,-4.4,79.2C-20.7,83.7,-41.4,72.9,-57.3,57.2C-73.1,41.4,-84.1,20.7,-84.4,-0.3C-84.7,-21.3,-74.3,-42.5,-58.4,-50.1C-42.5,-57.7,-21.3,-51.7,-3.8,-47.9C13.7,-44.1,27.4,-42.6,35.8,-35Z"
                    transform="translate(100 100)"
                  />
                </g>
              </svg>
              
            </div>
          </Fade>

          <div class="home__container container grid">
            <div class="home__content grid">
              <div class="home__social">
                <a
                  href="https://www.linkedin.com/in/ibrahem-al-omari-5967a5198/"
                  target="_blank "
                  class="home__social-icon"
                >
                  <i class="uil uil-linkedin-alt"></i>
                </a>

                <a
                  href="https://github.com/ibrahemomari"
                  target="_blank "
                  class="home__social-icon"
                >
                  <i class="uil uil-github-alt"></i>
                </a>
              </div>

              <div class="home__img">
                <svg
                  class="home__blob"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <mask id="mask0" mask-type="alpha">
                    <path
                      d="M35.8,-35C44.1,-27.4,47.1,-13.7,46.1,-1C45.1,11.8,40.3,23.6,32,39.4C23.6,55.1,11.8,74.8,-4.4,79.2C-20.7,83.7,-41.4,72.9,-57.3,57.2C-73.1,41.4,-84.1,20.7,-84.4,-0.3C-84.7,-21.3,-74.3,-42.5,-58.4,-50.1C-42.5,-57.7,-21.3,-51.7,-3.8,-47.9C13.7,-44.1,27.4,-42.6,35.8,-35Z"
                      transform="translate(100 100)"
                    />
                  </mask>
                  <g mask="url(#mask0)">
                    <path
                      d="M35.8,-35C44.1,-27.4,47.1,-13.7,46.1,-1C45.1,11.8,40.3,23.6,32,39.4C23.6,55.1,11.8,74.8,-4.4,79.2C-20.7,83.7,-41.4,72.9,-57.3,57.2C-73.1,41.4,-84.1,20.7,-84.4,-0.3C-84.7,-21.3,-74.3,-42.5,-58.4,-50.1C-42.5,-57.7,-21.3,-51.7,-3.8,-47.9C13.7,-44.1,27.4,-42.6,35.8,-35Z"
                      transform="translate(100 100)"
                    />

                    <image
                      class="home__blob-img"
                      x="-50"
                      y="60"
                      xlinkHref={myPic}
                    />
                  </g>
                </svg>
              </div>

              <div class="home__data">
                <h1 class="home__title">Hi,I'am Ibrahem</h1>
                <span className="home__typed-static">A</span>
                <Typed
                  strings={[
                    " FULL-STACK WEB DEVELOPER",
                    " UI/UX DESIGNER",
                    " DESIGNER",
                  ]}
                  loop={true}
                  typeSpeed={90}
                  className="home__typed-dynamic"
                />
                <h3 class="home__subtitle">
                  Skilled web developer, <br />
                  The ability to communicate between people and extensive
                  knowledge in the field of information technology, especially
                  in the field of web applications, and I never reply with a
                  rejection.
                </h3>
                <a
                  href="#contact"
                  class="button button--flex home--extra-animation"
                >
                  Hire Me <i class="uil uil-message button__icon"></i>
                </a>
              </div>
            </div>
            <div class="home__scroll">
              <a href="#about" class="home__scroll-button button--flex">
                <i class="uil uil-mouse-alt home__scroll-mouse"></i>
                <span class="home__scroll-name">Scroll down</span>
                <i class="uil uil-arrow-down home__scroll-arrow"></i>
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
