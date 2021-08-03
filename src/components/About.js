import React, { Component } from "react";
import { Fade } from "react-reveal/";
import myPic2 from "../images/ibrahem (Ibrahem alomari).jpg";
import cvPDF from "../pdf/Ibrahem Al-omari.pdf";
export class About extends Component {
  render() {
    return (
      <>
        <section class="about section" id="about">
          <h2 class="section_title">About Me</h2>
          <span class="section_subtitle">My introduction</span>
          <div class="about__container container grid">
            <Fade left>
              <img src={myPic2} alt="" class="about__img" />
            </Fade>

            <Fade right>
              <div class="about__data">
                <p class="about__description">
                  I aim to contribute and participate in your company by
                  searching for a position to benefit from my experience and to
                  perform and expand my capabilities, which will enhance my
                  career, and I am committed and hardworking and have a positive
                  attitude towards challenges and opportunities.
                </p>
                <div class="about__info">
                  <div>
                    <span class="about__info-title">01+</span>
                    <span class="about__info-name">
                      Years <br /> experience
                    </span>
                  </div>

                  <div>
                    <span class="about__info-title">4+</span>
                    <span class="about__info-name">
                      Completed <br /> project
                    </span>
                  </div>

                  <div>
                    <span class="about__info-title">03+</span>
                    <span class="about__info-name">
                      Completed <br /> worked
                    </span>
                  </div>
                </div>

                <div class="about__buttons">
                  <a download="" href={cvPDF} class="button button--flex">
                    Download CV{" "}
                    <i class="uil uil-download-alt button__icon"></i>
                  </a>
                </div>
              </div>
            </Fade>
          </div>
        </section>
      </>
    );
  }
}

export default About;
