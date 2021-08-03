import React, { Component } from "react";

class ProjectInMind extends Component {
  render() {
    return (
      <>
        <section class="project section">
          <div class="project__bg">
            <div class="project__container container grid">
              <div class="project__data">
                <h2 class="project__title">You have a new Project</h2>
                <p class="project__description">
                  Quick response, neat work, and on time.
                </p>
                <a href="#contact" class="button button--flex button--white">
                  Contact Me
                  <i class="uil uil-message project__icon button__icon"></i>
                </a>
              </div>
              <img src="assets/img/project.png" alt="" class="project__img" />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ProjectInMind;
