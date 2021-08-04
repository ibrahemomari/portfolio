import React, { Component } from "react";
class ContactMe extends Component {
  render() {
    return (
      <>
        <section class="contact section" id="contact">
          <h2 class="section_title">Contact Me</h2>
          <span class="section_subtitle">Git in touch</span>
          <div class="contact__container container grid">
            <div>
              <div class="contact__information">
                <i class="uil uil-phone contact__icon"></i>
                <div>
                  <h3 class="contact__title">Call Me</h3>
                  <span class="contact__subtitle">+962-792914176</span>
                </div>
              </div>

              <div class="contact__information">
                <i class="uil uil-envelope contact__icon"></i>
                <div>
                  <h3 class="contact__title">Email</h3>
                  <span class="contact__subtitle">ibrahem.omari96@gmail.com</span>
                </div>
              </div>

              <div class="contact__information">
                <i class="uil uil-map-marker contact__icon"></i>
                <div>
                  <h3 class="contact__title">Location</h3>
                  <span class="contact__subtitle">Jordan - Alzarqa</span>
                </div>
              </div>
            </div>
            <form action="" class="contact__form grid">
              <div class="contact__inputs grid">
                <div class="contact__content">
                  <lable class="contact__lable">Name</lable>
                  <input type="text" class="contact__input" />
                </div>
                <div class="contact__content">
                  <lable class="contact__lable">Email</lable>
                  <input type="email" class="contact__input" />
                </div>
              </div>
              <div class="contact__content">
                <lable class="contact__lable">Project</lable>
                <input type="text" class="contact__input" />
              </div>
              <div class="contact__content">
                <lable class="contact__lable">Message</lable>
                <textarea
                  name=""
                  id=""
                  cols="0"
                  rows="7"
                  class="contact__input"
                ></textarea>
              </div>
              <div>
                <a href="#" class="button button--flex">
                  Send Message
                  <i class="uil uil-message button__icon"></i>
                </a>
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default ContactMe;
