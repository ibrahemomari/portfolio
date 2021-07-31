import React, { Component } from 'react'
import '../style/styles.css'
import myPic from '../images/ibrahem.png'
import myPic2 from '../images/ibrahem (Ibrahem alomari).jpg'
import cvPDF from '../pdf/Ibrahem Al-omari.pdf'
import Typed from 'react-typed'
class Portfolio extends Component {
    componentDidMount () {
        /*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu=document.getElementById('nav-menu'),
navToggle=document.getElementById('nav-toggle'),
navClose=document.getElementById('nav-close');  

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
navToggle.addEventListener('click',()=>{
  navMenu.classList.add('show-menu');
})
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
navClose.addEventListener('click',()=>{
  navMenu.classList.remove('show-menu');
})

}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink=document.querySelectorAll('.nav__link');
function linkAction() {
const navMenu=document.getElementById('nav-menu');
navMenu.classList.remove('show-menu');

}
navLink.forEach(n=>n.addEventListener('click',linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent=document.getElementsByClassName('skills__content'),
skillsHeader=document.querySelectorAll('.skills__header');

function toggleSkills() {
let itemClass=this.parentNode.className;
for (let i = 0; i < skillsContent.length; i++) {
  skillsContent[i].className='skills__content skills__close';
  
}
if (itemClass==='skills__content skills__close') {
  this.parentNode.className='skills__content skills__open'
}

}

skillsHeader.forEach((el)=>{
el.addEventListener('click',toggleSkills)
})


/*==================== QUALIFICATION TABS ====================*/
const tabs=document.querySelectorAll('[data-target]'),
tabContents=document.querySelectorAll('[data-content]');

tabs.forEach(tab=>{
tab.addEventListener('click',()=>{
  const target= document.querySelector(tab.dataset.target);
  tabContents.forEach(tabContents=>{
      tabContents.classList.remove('qualification__active');
  })
  target.classList.add('qualification__active');
  tabs.forEach(tab=>{
      tab.classList.remove('qualification__active');
  })
  tab.classList.add('qualification__active');
})
})

/*==================== SERVICES MODAL ====================*/
const modalView=document.querySelectorAll('.services__modal'),
modalBtns=document.querySelectorAll('.services__button'),
modalClose=document.querySelectorAll('.services__modal-close');

let modal=function(modalClick) {
modalView[modalClick].classList.add('active-modal');

}

modalBtns.forEach((modalBtn,i)=>{
modalBtn.addEventListener('click',()=>{
  modal(i);
})
})

modalClose.forEach((modalClose)=>{
modalClose.addEventListener('click',()=>{
  modalView.forEach((modalView)=>{
      modalView.classList.remove('active-modal')
  })
})
})



/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
const scrollY = window.pageYOffset

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight
  const sectionTop = current.offsetTop - 50;
  const sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
  }else{
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
  }
})
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
const nav = document.getElementById('header')
// When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
const scrollUp = document.getElementById('scroll-up');
// When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
// Add or remove the dark / icon theme
document.body.classList.toggle(darkTheme)
themeButton.classList.toggle(iconTheme)
// We save the theme and the current icon that the user chose
localStorage.setItem('selected-theme', getCurrentTheme())
localStorage.setItem('selected-icon', getCurrentIcon())
})
    }
    render() {
        return (
            <>
            <div className="intro-container">
                <div className="intro-strings">
                   

                </div>
                <br/>
                <div class="bg"></div>
                    <div class="bg bg2"></div>
                    <div class="bg bg3"></div>
                    <div class="content">
                    <Typed
                        strings={['Hello, Welcome To My Portfolio',
                        'My Name Is "Ibrahem Al-omari"',
                        'Im a Full-Stack Web Developer','Feel Free To Contact Me ♥']}
                        typeSpeed={40}
                    />
                </div>
            
                </div>
                        <header class="header" id="header">
                            <nav class="nav container">
                                <a href="#home" class="nav__logo">IBRAHEM AL-OMARI</a>

                                <div class="nav__menu" id="nav-menu">
                                    <ul class="nav__list grid">
                                        <li class="nav__item">
                                            <a href="#home" class="nav__link active-link">
                                                <i class="uil uil-estate nav__icon"></i> Home
                                            </a>
                                        </li>
                                        <li class="nav__item">
                                            <a href="#about" class="nav__link">
                                                <i class="uil uil-user nav__icon"></i> About
                                            </a>
                                        </li>
                                        <li class="nav__item">
                                            <a href="#skills" class="nav__link">
                                                <i class="uil uil-file-alt nav__icon"></i>Skills
                                            </a>
                                        </li>
                                        <li class="nav__item">
                                            <a href="#services" class="nav__link">
                                                <i class="uil uil-briefcase-alt nav__icon"></i> Services
                                            </a>
                                        </li>
                                    
                                        <li class="nav__item">
                                            <a href="#contact" class="nav__link">
                                                <i class="uil uil-message nav__icon"></i>Contact Me
                                            </a>
                                        </li>
                                    </ul>
                                    <i class="uil uil-times nav__close" id="nav-close"></i>
                                </div>
                                <div class="nav__btns">
                                    {/* <!-- theme change button --> */}
                                    <i class="uil uil-moon change-theme" id="theme-button"></i>

                                    <div class="nav__toggle" id="nav-toggle">
                                        <i class="uil uil-apps"></i>
                                    </div>
                                </div>
                            </nav>
                        </header>
                        {/* <!--==================== MAIN ====================--> */}
        <main class="main">
        {/* <!--==================== HOME ====================--> */}
            <section class="home section" id="home">
            <div class="home__container container grid">
                <div class="home__content grid">
                    <div class="home__social">
                        <a href="https://www.linkedin.com/in/ibrahem-omari-5967a5198/" target="_blank "
                            class="home__social-icon">
                            <i class="uil uil-linkedin-alt"></i>
                        </a>

                       

                        <a href="https://github.com/ibrahemomari" target="_blank " class="home__social-icon">
                            <i class="uil uil-github-alt"></i>
                        </a>
                    </div>
                    
                    <div class="home__img">
                        <svg class="home__blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink">
                            <mask id="mask0" mask-type="alpha">
                                <path  d="M35.8,-35C44.1,-27.4,47.1,-13.7,46.1,-1C45.1,11.8,40.3,23.6,32,39.4C23.6,55.1,11.8,74.8,-4.4,79.2C-20.7,83.7,-41.4,72.9,-57.3,57.2C-73.1,41.4,-84.1,20.7,-84.4,-0.3C-84.7,-21.3,-74.3,-42.5,-58.4,-50.1C-42.5,-57.7,-21.3,-51.7,-3.8,-47.9C13.7,-44.1,27.4,-42.6,35.8,-35Z" transform="translate(100 100)" />
                            </mask>
                            <g mask="url(#mask0)">
                                <path  d="M35.8,-35C44.1,-27.4,47.1,-13.7,46.1,-1C45.1,11.8,40.3,23.6,32,39.4C23.6,55.1,11.8,74.8,-4.4,79.2C-20.7,83.7,-41.4,72.9,-57.3,57.2C-73.1,41.4,-84.1,20.7,-84.4,-0.3C-84.7,-21.3,-74.3,-42.5,-58.4,-50.1C-42.5,-57.7,-21.3,-51.7,-3.8,-47.9C13.7,-44.1,27.4,-42.6,35.8,-35Z" transform="translate(100 100)" />

                                <image class="home__blob-img" x='-50' y='60' xlinkHref={myPic} />
                            </g>
                        </svg>
                    </div>
                    <div class="home__data">
                        <h1 class="home__title">Hi,I'am Ibrahem</h1>
                        <h3 class="home__subtitle">Skilled web developer, <br/>
                            The ability to communicate between people and extensive knowledge
                            in the field of information technology, especially in the field of web
                            applications, and I never reply with a rejection.</h3>
                        <a href="#contact" class="button button--flex">Contact Me <i
                                class="uil uil-message button__icon"></i></a>
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
            {/* <!--==================== ABOUT ====================--> */}
        </section>
        <section class="about section" id="about">
        <h2 class="section_title">About Me</h2>
            <span class="section_subtitle">My introduction</span>

            <div class="about__container container grid">
                <img src={myPic2} alt="" class="about__img"/>
                <div class="about__data">
                    <p class="about__description">I aim to contribute and participate in your company by searching for a
                        position to benefit from my experience and to perform and expand my
                        capabilities, which will enhance my career, and I am committed and
                        hardworking and have a positive attitude towards challenges and
                        opportunities.</p>
                    <div class="about__info">
                        <div>
                            <span class="about__info-title">01+</span>
                            <span class="about__info-name">Years <br/> experience</span>
                        </div>

                        <div>
                            <span class="about__info-title">4+</span>
                            <span class="about__info-name">Completed <br/> project</span>
                        </div>

                        <div>
                            <span class="about__info-title">03+</span>
                            <span class="about__info-name">Completed <br/> worked</span>
                        </div>
                    </div>

                    <div class="about__buttons">
                        <a download="" href={cvPDF} class="button button--flex">
                            Download CV <i class="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>

                </div>

            </div>

        </section>
        {/* <!--==================== SKILLS ====================--> */}
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
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__html"></span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">CSS3</h3>
                                    <span class="skills__number">80%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__css"></span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">JavaScript</h3>
                                    <span class="skills__number">60%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__js"></span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">React</h3>
                                    <span class="skills__number">50%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__react"></span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">Bootstrap</h3>
                                    <span class="skills__number">95%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__bootstrap"></span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">JQuery</h3>
                                    <span class="skills__number">85%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__jquery"></span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">AJAX</h3>
                                    <span class="skills__number">75%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__ajax"></span>
                                </div>
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
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__php"></span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">Node Js</h3>
                                    <span class="skills__number">70%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__node"></span>
                                </div>
                            </div>

                           

                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">Python</h3>
                                    <span class="skills__number">55%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__python"></span>
                                </div>
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
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__github"></span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">git</h3>
                                    <span class="skills__number">60%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__git"></span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">Linux</h3>
                                    <span class="skills__number">60%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__linux"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        {/* <!--==================== QUALIFICATION ====================--> */}
        <section class="qualification section">
            <h2 class="section_title">Qualification</h2>
            <span class="section_subtitle">My personal journey</span>
            <div class="qualification__container container">
                <div class="qualification__tabs">
                    <div class="qualification__button button--flex qualification__active" data-target='#education'>
                        <i class="uil uil-graduation-cap qualification__icon "></i>
                        Education
                    </div>
                    <div class="qualification__button button--flex" data-target='#work'>
                        <i class="uil uil-briefcase-alt qualification__icon"></i>
                        Work
                    </div>
                </div>
                <div class="qualification__sections">
                    {/* <!--==================== QUALIFICATION contant 1 ====================--> */}
                    <div class="qualification__content qualification__active" data-content id="education">
                        {/* <!--==================== QUALIFICATION  1 ====================--> */}
                        <div class="qualification__data">
                            <div>
                                <h3 class="qualification__title">ASAC</h3>
                                <span class="qualification_subtitle">Jordan - Amman</span>
                                <div class="qualification__calender">
                                    <i class="uil uil-calendar-alt"></i>
                                    4/2021-11/2021
                                </div>
                            </div>
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
                            <div>
                                <h3 class="qualification__title">Bachelor of Computer Science</h3>
                                <span class="qualification_subtitle">AL ALBAYT UNIVERSITY -Jordan - Almafraq</span>
                                <div class="qualification__calender">
                                    <i class="uil uil-calendar-alt"></i>
                                    2016-2021
                                </div>
                            </div>

                        </div>

                        {/* <!--==================== QUALIFICATION  3 ====================--> */}
                        <div class="qualification__data">
                            <div>
                                <h3 class="qualification__title">High School , Scientific specialization</h3>
                                <span class="qualification_subtitle">Salman Al Farsi - Jordan - Almafraq</span>
                                <div class="qualification__calender">
                                    <i class="uil uil-calendar-alt"></i>
                                    2015-2016
                                </div>
                            </div>
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

        {/* <!--==================== SERVICES ====================--> */}
        <section class="services section" id="services">
            <h2 class="section_title">Services</h2>
            <span class="section_subtitle">What i offer</span>

            <div class="services__container container grid">
                {/* <!--==================== SERVICES 1 ====================--> */}
                <div class="services__content">
                    <div>
                        <i class="uil uil-web-grid services__icon"></i>
                        <h3 class="services__title">Ui/Ux <br/> Designer</h3>
                    </div>
                    <span class="button button--flex button--small button--link services__button">
                        View more
                        <i class="uil uil-arrow-right button__icon"></i>
                    </span>
                    <div class="services__modal">
                        <div class="services__modal-content">
                            <h4 class="services__modal-title">Ui/Ux <br/> Designer</h4>
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
                                    <p>Determine the information architecture of a digital product.</p>
                                </li>

                                <li class="services__modal-service">
                                    <i class="uil uil-check-circle services__modal-icon"></i>
                                    <p>Quickly and iteratively create user flows, wireframes, prototypes, low and high fidelity mockups</p>
                                </li>

                                <li class="services__modal-service">
                                    <i class="uil uil-check-circle services__modal-icon"></i>
                                    <p>use prototyping tools such as Sketch, Invision, or equivalent</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <!--==================== SERVICES 2 ====================--> */}
                <div class="services__content">
                    <div>
                        <i class="uil uil-arrow services__icon"></i>
                        <h3 class="services__title">Frontend <br/> Developer</h3>
                    </div>
                    <span class="button button--flex button--small button--link services__button">
                        View more
                        <i class="uil uil-arrow-right button__icon"></i>
                    </span>
                    <div class="services__modal">
                        <div class="services__modal-content">
                            <h4 class="services__modal-title">Frontend <br/> Developer</h4>
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
                        <h3 class="services__title">Backend <br/> Developer</h3>
                    </div>
                    <span class="button button--flex button--small button--link services__button">
                        View more
                        <i class="uil uil-arrow-right button__icon"></i>
                    </span>
                    <div class="services__modal">
                        <div class="services__modal-content">
                            <h4 class="services__modal-title">Backend <br/> Developer</h4>
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

        {/* <!--==================== PROJECT IN MIND ====================--> */}
        <section class="project section">
            <div class="project__bg">
                <div class="project__container container grid">
                    <div class="project__data">
                        <h2 class="project__title">You have a new Project</h2>
                        <p class="project__description">Quick response, neat work, and on time.</p>
                        <a href="#contact" class="button button--flex button--white">
                            Contact Me 
                            <i class="uil uil-message project__icon button__icon"></i>
                        </a>
                    </div>
                    <img src="assets/img/project.png" alt="" class="project__img"/>
                </div>
            </div>

        </section>

        {/* <!--==================== CONTACT ME ====================--> */}
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
                            <span class="contact__subtitle">ibrahem.omari@gmail.com</span>
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
                            <input type="text" class="contact__input"/>
                        </div>
                        <div class="contact__content">
                            <lable class="contact__lable">Email</lable>
                            <input type="email" class="contact__input"/>
                        </div>
                    </div>
                    <div class="contact__content">
                        <lable class="contact__lable">Project</lable>
                        <input type="text" class="contact__input"/>
                    </div>
                    <div class="contact__content">
                        <lable class="contact__lable">Message</lable>
                        <textarea name="" id="" cols="0" rows="7" class="contact__input"></textarea>
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
    </main>
    
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
                        <a href="#services" class="footer__link">Services</a>
                    </li>
                    

                    <li>
                        <a href="#about" class="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#contact" class="footer__link">Contact me</a>
                    </li>
                </ul>
                <div class="footer__socials">
                    <a href="https://web.facebook.com/ibrahem.alomari.96" target="_blank" class="footer__social">
                        <i class="uil uil-facebook-f"></i>
                    </a>

                    <a href="https://www.instagram.com/ibrahem0_0omari/" target="_blank" class="footer__social">
                        <i class="uil uil-instagram"></i>
                    </a>
                    
                    <a href="https://twitter.com/Ibrahem0_0omari" target="_blank" class="footer__social">
                        <i class="uil uil-twitter-alt"></i>
                    </a>
                </div>
            </div>
            <p class="footer__copy">&#169; DOON All right reserved</p>
        </div>

    </footer>
    {/* <!--==================== SCROLL TOP ====================--> */}
    <a href="#" class="scrollup" id="scroll-up">
        <i class="uil uil-arrow-up scrollup__icon"></i>
    </a>

   
            </>
        )
    }
}

export default Portfolio
