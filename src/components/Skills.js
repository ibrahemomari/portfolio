import React, { Component } from "react";
import { Reveal } from "react-reveal/";
class Skills extends Component {
  render() {
    return (
      <>
        <section class="skills section" id="skills">
          <h2 class="section_title">Skills</h2>
          <span class="section_subtitle">My technical level</span>

          <div class="skills__container container grid">
            <div>
              {/* <!--==================== SKILLS 1 ====================--> */}
              <div class="skills__content skills__open">
                <div class="skills__header">
                  <i class="uil uil-brackets-curly skills__icon"></i>
                  <div>
                    <h1 class="skills__title">Frontend developer</h1>
                    <span class="skills__subtitle">More than 1 years</span>
                  </div>
                  <i class="uil uil-angle-down skills__arrow"></i>
                </div>
                <div class="skills_list grid">
                  <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">HTML / HTML5</h3>
                      <span class="skills__number">90%</span>
                    </div>
                    <Reveal effect="skill__bar--anmiation">
                      <div class="skills__bar">
                        <span class="skills__percentage skills__html"></span>
                      </div>
                    </Reveal>
                  </div>
                  <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">CSS3</h3>
                      <span class="skills__number">80%</span>
                    </div>
                    <Reveal effect="skill__bar--anmiation">
                      <div class="skills__bar">
                        <span class="skills__percentage skills__css"></span>
                      </div>
                    </Reveal>
                  </div>

                  <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">JavaScript</h3>
                      <span class="skills__number">60%</span>
                    </div>
                    <Reveal effect="skill__bar--anmiation">
                      <div class="skills__bar">
                        <span class="skills__percentage skills__js"></span>
                      </div>
                    </Reveal>
                  </div>

                  <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">React</h3>
                      <span class="skills__number">50%</span>
                    </div>
                    <Reveal effect="skill__bar--anmiation">
                      <div class="skills__bar">
                        <span class="skills__percentage skills__react"></span>
                      </div>
                    </Reveal>
                  </div>
                  <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">Bootstrap</h3>
                      <span class="skills__number">95%</span>
                    </div>
                    <Reveal effect="skill__bar--anmiation">
                      <div class="skills__bar">
                        <span class="skills__percentage skills__bootstrap"></span>
                      </div>
                    </Reveal>
                  </div>

                  <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">JQuery</h3>
                      <span class="skills__number">85%</span>
                    </div>
                    <Reveal effect="skill__bar--anmiation">
                      <div class="skills__bar">
                        <span class="skills__percentage skills__jquery"></span>
                      </div>
                    </Reveal>
                  </div>
                  <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">AJAX</h3>
                      <span class="skills__number">75%</span>
                    </div>
                    <Reveal effect="skill__bar--anmiation">
                      <div class="skills__bar">
                        <span class="skills__percentage skills__ajax"></span>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>

              {/* <!--==================== SKILLS 2 ====================--> */}
              <div class="skills__content skills__close">
                <div class="skills__header">
                  <i class="uil uil-server-network skills__icon"></i>
                  <div>
                    <h1 class="skills__title">Backend developer</h1>
                    <span class="skills__subtitle">More than 1 years</span>
                  </div>
                  <i class="uil uil-angle-down skills__arrow"></i>
                </div>
                <div class="skills_list grid">
                  <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">PHP</h3>
                      <span class="skills__number">50%</span>
                    </div><Reveal effect="skill__bar--anmiation">
                    <div class="skills__bar">
                      <span class="skills__percentage skills__php"></span>
                    </div>
                    </Reveal>
                  </div>

                  <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">Node Js</h3>
                      <span class="skills__number">70%</span>
                    </div><Reveal effect="skill__bar--anmiation">
                    <div class="skills__bar">
                      <span class="skills__percentage skills__node"></span>
                    </div>
                    </Reveal>
                  </div>

                  <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">Python</h3>
                      <span class="skills__number">55%</span>
                    </div><Reveal effect="skill__bar--anmiation">
                    <div class="skills__bar">
                      <span class="skills__percentage skills__python"></span>
                    </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* <!--==================== SKILLS 3 ====================--> */}
              <div class="skills__content skills__close">
                <div class="skills__header">
                  <i class="uil uil-swatchbook skills__icon"></i>
                  <div>
                    <h1 class="skills__title">Other</h1>
                    <span class="skills__subtitle">More than 2 years</span>
                  </div>
                  <i class="uil uil-angle-down skills__arrow"></i>
                </div>
                <div class="skills_list grid">
                  <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">GitHub</h3>
                      <span class="skills__number">70%</span>
                    </div>
                    <Reveal effect="skill__bar--anmiation">
                    <div class="skills__bar">
                      <span class="skills__percentage skills__github"></span>
                    </div>
                    </Reveal>
                  </div>

                  <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">git</h3>
                      <span class="skills__number">60%</span>
                    </div>
                    <Reveal effect="skill__bar--anmiation">
                    <div class="skills__bar">
                      <span class="skills__percentage skills__git"></span>
                    </div>
                    </Reveal>
                  </div>

                  <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">Linux</h3>
                      <span class="skills__number">60%</span>
                    </div>
                    <Reveal effect="skill__bar--anmiation">
                    <div class="skills__bar">
                      <span class="skills__percentage skills__linux"></span>
                    </div>
                    </Reveal>
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

export default Skills;
