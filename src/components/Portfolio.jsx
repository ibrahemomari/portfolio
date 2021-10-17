import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Qualification from "./Qualification";
import "../style/styles.css";
import Service from "./Service";
import ProjectInMind from "./ProjectInMind";
import ContactMe from "./ContactMe";
import Intro from "./Intro";
import TheamSelector from "./Tools/TheamSelector";
import Projects from "./Projects";
import { Zoom } from "react-reveal";
import { Parallax } from "react-scroll-parallax";
import { Container, Row } from "react-bootstrap";

class Portfolio extends Component {
  componentDidMount() {
    /*==================== MENU SHOW Y HIDDEN ====================*/
    const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");

    /*===== MENU SHOW =====*/
    /* Validate if constant exists */
    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
      });
    }

    /*===== MENU HIDDEN =====*/
    /* Validate if constant exists */
    if (navClose) {
      navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      });
    }

    /*==================== REMOVE MENU MOBILE ====================*/
    const navLink = document.querySelectorAll(".nav__link");
    function linkAction() {
      const navMenu = document.getElementById("nav-menu");
      navMenu.classList.remove("show-menu");
    }
    navLink.forEach((n) => n.addEventListener("click", linkAction));

    /*==================== ACCORDION SKILLS ====================*/
    const skillsContent = document.getElementsByClassName("skills__content"),
      skillsHeader = document.querySelectorAll(".skills__header");

    function toggleSkills() {
      let itemClass = this.parentNode.className;
      for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close";
      }
      if (itemClass === "skills__content skills__close") {
        this.parentNode.className = "skills__content skills__open";
      }
    }

    skillsHeader.forEach((el) => {
      el.addEventListener("click", toggleSkills);
    });

    /*==================== QUALIFICATION TABS ====================*/
    const tabs = document.querySelectorAll("[data-target]"),
      tabContents = document.querySelectorAll("[data-content]");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach((tabContents) => {
          tabContents.classList.remove("qualification__active");
        });
        target.classList.add("qualification__active");
        tabs.forEach((tab) => {
          tab.classList.remove("qualification__active");
        });
        tab.classList.add("qualification__active");
      });
    });

    /*==================== SERVICES MODAL ====================*/
    const modalView = document.querySelectorAll(".services__modal"),
      modalBtns = document.querySelectorAll(".services__button"),
      modalClose = document.querySelectorAll(".services__modal-close");

    let modal = function (modalClick) {
      modalView[modalClick].classList.add("active-modal");
    };

    modalBtns.forEach((modalBtn, i) => {
      modalBtn.addEventListener("click", () => {
        modal(i);
      });
    });

    modalClose.forEach((modalClose) => {
      modalClose.addEventListener("click", () => {
        modalView.forEach((modalView) => {
          modalView.classList.remove("active-modal");
        });
      });
    });

    /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
    const sections = document.querySelectorAll("section[id]");

    function scrollActive() {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
        } else {
          document
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            .classList.remove("active-link");
        }
      });
    }
    window.addEventListener("scroll", scrollActive);

    /*==================== CHANGE BACKGROUND HEADER ====================*/
    function scrollHeader() {
      const nav = document.getElementById("header");
      const expandDiv = document.getElementById("expand");
      // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
      if (this.scrollY >= 80) {
        nav.classList.add("scroll-header");
        expandDiv.style.display = "block";
      } else {
        nav.classList.remove("scroll-header");
        expandDiv.style.display = "none";
      }
    }
    window.addEventListener("scroll", scrollHeader);
    /*==================== SHOW SCROLL UP ====================*/
    function scrollUp() {
      const scrollUp = document.getElementById("scroll-up");
      // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
      if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
      else scrollUp.classList.remove("show-scroll");
    }
    window.addEventListener("scroll", scrollUp);

    /*==================== DARK LIGHT THEME ====================*/
    const themeButton = document.getElementById("theme-button");
    const darkTheme = "dark-theme";
    const iconTheme = "uil-sun";

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");

    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () =>
      document.body.classList.contains(darkTheme) ? "dark" : "light";
    const getCurrentIcon = () =>
      themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

    // We validate if the user previously chose a topic
    if (selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
      );
      themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
        iconTheme
      );
    }

    // Activate / deactivate the theme manually with the button
    themeButton.addEventListener("click", () => {
      // Add or remove the dark / icon theme
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);
      // We save the theme and the current icon that the user chose
      localStorage.setItem("selected-theme", getCurrentTheme());
      localStorage.setItem("selected-icon", getCurrentIcon());
    });

    // on scroll change
    const expandDiv = document.getElementById("expand");
    const speed = 14;

    function expanding() {
      const scrolltop = window.pageYOffset;
      const scrollAndSpeed = scrolltop / speed;
      expandDiv.style.height =
        Math.min(Math.max(scrollAndSpeed, 5), 350) + "rem";
    }

    window.addEventListener(
      "scroll",
      function () {
        requestAnimationFrame(expanding);
      },
      false
    );
  }
  render() {
    return (
      <>
        <div className="test"></div>
        <div id="expand"></div>

        <div className="portfilio__svg--anmiation">
          <svg
            id="starry"
            filter="url(#goo)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="20"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  
                             0 1 0 0 0  
                             0 0 1 0 0  
                             0 0 0 55 -10"
                  result="goo"
                />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
              </filter>
            </defs>

            <g class="starry-els">
              <ellipse id="el1" rx="80" ry="200" />
              <ellipse id="el2" rx="200" ry="80" />
              <ellipse id="el3" rx="200" ry="80" />
              <ellipse id="el4" rx="80" ry="200" />
            </g>
          </svg>
        </div>

        {/* <!--==================== Intro ====================--> */}
        <Intro />
        {/* <!--==================== Theam Selector ====================--> */}
        <TheamSelector />

        {/* <!--==================== MAIN ====================--> */}
        <main class="main">
          {/* <!--==================== HOME ====================--> */}
          <Zoom>
            
              <Home />
            
          </Zoom>

          {/* <!--==================== ABOUT ====================--> */}
          <Zoom>
            
              <About />
            
          </Zoom>
          {/* <!--==================== SKILLS ====================--> */}
          <Zoom>
            
              <Skills />
            
          </Zoom>
          {/* <!--==================== QUALIFICATION ====================--> */}
          <Zoom>
            
              <Qualification />
           
          </Zoom>
          {/* <!--==================== SERVICES ====================--> */}
          <Zoom>
            
              <Service />
           
          </Zoom>
          {/* <!--==================== PROJECTS ====================--> */}
         
            <Projects />
          
          {/* <!--==================== PROJECT IN MIND ====================--> */}
          <Zoom>
            
              <ProjectInMind />
           
          </Zoom>
          {/* <!--==================== CONTACT ME ====================--> */}
          <Zoom>
            
              <ContactMe />
           
          </Zoom>
        </main>

        {/* <!--==================== svg ====================--> */}
        <div className="portfilio__svg--anmiation bottom--svg">
          <svg
            id="starry"
            filter="url(#goo)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="20"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  
                             0 1 0 0 0  
                             0 0 1 0 0  
                             0 0 0 55 -10"
                  result="goo"
                />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
              </filter>
            </defs>

            <g class="starry-els">
              <ellipse id="el1" rx="80" ry="200" />
              <ellipse id="el2" rx="200" ry="80" />
              <ellipse id="el3" rx="200" ry="80" />
              <ellipse id="el4" rx="80" ry="200" />
            </g>
          </svg>
        </div>
        {/* <!--==================== SCROLL TOP ====================--> */}
        <a href="#home" class="scrollup" id="scroll-up">
          <i class="uil uil-arrow-up scrollup__icon"></i>
        </a>
      </>
    );
  }
}

export default Portfolio;
