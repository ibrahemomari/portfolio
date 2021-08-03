import React, { Component } from "react";

class Service extends Component {
  render() {
    return (
      <>
        <section class="services section" id="services">
          <h2 class="section_title">Services</h2>
          <span class="section_subtitle">What i offer</span>

          <div class="services__container container grid">
            {/* <!--==================== SERVICES 1 ====================--> */}
            <div class="services__content">
              <div>
                <i class="uil uil-web-grid services__icon"></i>
                <h3 class="services__title">
                  Ui/Ux <br /> Designer
                </h3>
              </div>
              <span class="button button--flex button--small button--link services__button">
                View more
                <i class="uil uil-arrow-right button__icon"></i>
              </span>
              <div class="services__modal">
                <div class="services__modal-content">
                  <h4 class="services__modal-title">
                    Ui/Ux <br /> Designer
                  </h4>
                  <i class="uil uil-times services__modal-close"></i>

                  <ul class="services__modal-services grid">
                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p>Conduct user research.n</p>
                    </li>

                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p>Create user personas.</p>
                    </li>

                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p>
                        Determine the information architecture of a digital
                        product.
                      </p>
                    </li>

                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p>
                        Quickly and iteratively create user flows, wireframes,
                        prototypes, low and high fidelity mockups
                      </p>
                    </li>

                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p>
                        use prototyping tools such as Sketch, Invision, or
                        equivalent
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!--==================== SERVICES 2 ====================--> */}
            <div class="services__content">
              <div>
                <i class="uil uil-arrow services__icon"></i>
                <h3 class="services__title">
                  Frontend <br /> Developer
                </h3>
              </div>
              <span class="button button--flex button--small button--link services__button">
                View more
                <i class="uil uil-arrow-right button__icon"></i>
              </span>
              <div class="services__modal">
                <div class="services__modal-content">
                  <h4 class="services__modal-title">
                    Frontend <br /> Developer
                  </h4>
                  <i class="uil uil-times services__modal-close"></i>

                  <ul class="services__modal-services grid">
                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p>Modern web page designs</p>
                    </li>

                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p>Attracting users to the site and easy to deal with</p>
                    </li>

                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p>Responsive designs to fit all devices</p>
                    </li>

                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p>Client-side scripts</p>
                    </li>

                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p>Server-side scripts </p>
                    </li>

                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p>back-end server-side scripts</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!--==================== SERVICES 3 ====================--> */}
            <div class="services__content">
              <div>
                <i class="uil uil-brackets-curly services__icon"></i>
                <h3 class="services__title">
                  Backend <br /> Developer
                </h3>
              </div>
              <span class="button button--flex button--small button--link services__button">
                View more
                <i class="uil uil-arrow-right button__icon"></i>
              </span>
              <div class="services__modal">
                <div class="services__modal-content">
                  <h4 class="services__modal-title">
                    Backend <br /> Developer
                  </h4>
                  <i class="uil uil-times services__modal-close"></i>

                  <ul class="services__modal-services grid">
                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p>Web Development Languages.</p>
                    </li>

                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p>Database and Cache.</p>
                    </li>

                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p>Server.</p>
                    </li>

                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p>API (REST & SOAP).</p>
                    </li>

                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p>Algorithms.</p>
                    </li>

                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p> Frameworks.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Service;
