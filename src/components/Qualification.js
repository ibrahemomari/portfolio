import React, { Component } from "react";
import { Flip } from "react-reveal/";
class Qualification extends Component {
  render() {
    return (
      <>
        <section class="qualification section" id="qualification">
          <h2 class="section_title">Qualification</h2>
          <span class="section_subtitle">My personal journey</span>
          <div class="qualification__container container">
            <div class="qualification__tabs">
              <div
                class="qualification__button button--flex qualification__active"
                data-target="#education"
              >
                <i class="uil uil-graduation-cap qualification__icon "></i>
                Education
              </div>
              <div
                class="qualification__button button--flex"
                data-target="#work"
              >
                <i class="uil uil-briefcase-alt qualification__icon"></i>
                Work
              </div>
            </div>
            <div class="qualification__sections">
              {/* <!--==================== QUALIFICATION contant 1 ====================--> */}
              <div
                class="qualification__content qualification__active"
                data-content
                id="education"
              >
                {/* <!--==================== QUALIFICATION  1 ====================--> */}
                <div class="qualification__data">
                  <Flip left cascade>
                    <div>
                      <h3 class="qualification__title">ASAC</h3>
                      <span class="qualification_subtitle">Jordan - Amman</span>
                      <div class="qualification__calender">
                        <i class="uil uil-calendar-alt"></i>
                        4/2021-11/2021
                      </div>
                    </div>
                  </Flip>
                  <div>
                    <span class="qualification__rounder"></span>
                    <span class="qualification__line"></span>
                  </div>
                </div>

                {/* <!--==================== QUALIFICATION  2 ====================--> */}
                <div class="qualification__data">
                  <div></div>

                  <div>
                    <span class="qualification__rounder"></span>
                    <span class="qualification__line"></span>
                  </div>
                  <Flip left cascade>
                    <div>
                      <h3 class="qualification__title">
                        Bachelor of Computer Science
                      </h3>
                      <span class="qualification_subtitle">
                        AL ALBAYT UNIVERSITY -Jordan - Almafraq
                      </span>
                      <div class="qualification__calender">
                        <i class="uil uil-calendar-alt"></i>
                        2016-2021
                      </div>
                    </div>
                  </Flip>
                </div>

                {/* <!--==================== QUALIFICATION  3 ====================--> */}
                <div class="qualification__data">
                  <Flip left cascade>
                    <div>
                      <h3 class="qualification__title">
                        High School , Scientific specialization
                      </h3>
                      <span class="qualification_subtitle">
                        Salman Al Farsi - Jordan - Almafraq
                      </span>
                      <div class="qualification__calender">
                        <i class="uil uil-calendar-alt"></i>
                        2015-2016
                      </div>
                    </div>
                  </Flip>
                  <div>
                    <span class="qualification__rounder qualification__rounder-extra"></span>
                    {/* <span class="qualification__line"></span> */}
                  </div>
                </div>
              </div>

              {/* <!--==================== QUALIFICATION contant 2 ====================--> */}
              <div class="qualification__content" data-content id="work">
                {/* <!--==================== QUALIFICATION  1 ====================--> */}
                <div class="qualification__data">
                  <div>
                    <h3 class="qualification__title">Freelancer</h3>
                    <span class="qualification_subtitle">Web developer</span>
                    <div class="qualification__calender">
                      <i class="uil uil-calendar-alt"></i>
                      2019
                    </div>
                  </div>
                  <div>
                    {/* <!-- <span class="qualification__rounder"></span> --> */}
                    {/* <!-- <span class="qualification__line"></span> --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Qualification;
