import React, { Component } from "react";
import { Carousel, Container, Row, Button } from "react-bootstrap";
import {
  DiCss3,
  DiHtml5,
  DiReact,
  DiJavascript,
  DiBootstrap,
  DiJqueryLogo,
} from "react-icons/di";
// import images
import baytAlbuyut from "../projects_images/baytAlbuyut.jpg";
import BusMall from "../projects_images/BusMall.jpg";
import canOfBokks from "../projects_images/canOfBokks.jpg";
import chocolatePizza from "../projects_images/chocolatePizza.jpg";
import cityExplorer from "../projects_images/cityExplorer.jpg";
import maqrumaJo from "../projects_images/maqrumaJo.jpg";
import o2Art from "../projects_images/o2Art.jpg";
import Portfiolio from "../projects_images/Portfiolio.jpg";
import salmonCookies from "../projects_images/salmonCookies.jpg";
import TheGoodTravel from "../projects_images/TheGoodTravel.jpg";

class Projects extends Component {
  render() {
    return (
      <>
        <section class="projects section" id="projects">
          <h2 class="section_title">My Projects</h2>
          <span class="section_subtitle">Creativ & Skills</span>
          <Carousel variant="dark">
            <Carousel.Item>
              <Container>
                <Row className="justify-content-md-center">
                  <ul class="cards">
                    <li>
                      <div href="" class="card">
                        <img src={maqrumaJo} class="card__image" alt="" />
                        <div class="card__overlay">
                          <div class="card__header">
                            <svg
                              class="card__arc"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path />
                            </svg>
                            <div class="card__header-text">
                              <DiHtml5 />
                              <DiCss3 />
                              <DiJavascript />
                              <DiJqueryLogo />
                              <DiBootstrap />
                              <h3 class="card__title">Maqrumah JO</h3>
                              <span class="card__status">January/2021</span>
                            </div>
                          </div>
                          <p class="card__description">
                            military scholarship system, easily hand over
                            salaries to students electronically with a single
                            click
                          </p>
                          <a
                            href="https://drive.google.com/file/d/1asBcwSsDsRfwFKyqeVSAvZUW9schHY1S/view?usp=sharing"
                            target="__blank"
                          >
                            <Button className="projects__btn">Demo</Button>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div href="" class="card">
                        <img src={o2Art} class="card__image" alt="" />
                        <div class="card__overlay">
                          <div class="card__header">
                            <svg
                              class="card__arc"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path />
                            </svg>
                            <div class="card__header-text">
                              <DiReact />
                              <DiHtml5 />
                              <DiCss3 />
                              <DiJavascript />
                              <DiJqueryLogo />
                              <DiBootstrap />
                              <h3 class="card__title">O2 Arts</h3>
                              <span class="card__status">July/2021</span>
                            </div>
                          </div>
                          <p class="card__description">
                            For artists, they can add own pictures and sell it
                            by adding them to store, and more.
                          </p>
                          <a href="https://o2art.netlify.app/" target="__blank">
                            <Button className="projects__btn">Demo</Button>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div href="" class="card">
                        <img src={baytAlbuyut} class="card__image" alt="" />
                        <div class="card__overlay">
                          <div class="card__header">
                            <svg
                              class="card__arc"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path />
                            </svg>
                            <div class="card__header-text">
                              <DiHtml5 />
                              <DiCss3 />
                              <DiJavascript />
                              <h3 class="card__title">Bayt Albuyut</h3>
                              <span class="card__status">June/2021</span>
                            </div>
                          </div>
                          <p class="card__description">
                            It's about finding a houses to pay, or add user
                            house to sell it, also easy to compare between
                            houses.
                          </p>
                          <a
                            href="https://seis-amigos.github.io/b-b/"
                            target="__blank"
                          >
                            <Button className="projects__btn">Demo</Button>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </Row>
              </Container>
            </Carousel.Item>

            <Carousel.Item>
              <Container>
                <Row className="justify-content-md-center">
                  <ul class="cards">
                    <li>
                      <div href="" class="card">
                        <img src={Portfiolio} class="card__image" alt="" />
                        <div class="card__overlay">
                          <div class="card__header">
                            <svg
                              class="card__arc"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path />
                            </svg>
                            <div class="card__header-text">
                              <DiReact />
                              <DiHtml5 />
                              <DiCss3 />
                              <DiJavascript />
                              <DiBootstrap />
                              <h3 class="card__title">Portfolio</h3>
                              <span class="card__status">July/2021</span>
                            </div>
                          </div>
                          <p class="card__description">
                            A nice Portfolio template , as a responsive design
                            using react & bootstrap
                          </p>
                          <a
                            href="https://ibrahemalomari.netlify.app/"
                            target="__blank"
                          >
                            <Button className="projects__btn">Demo</Button>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div href="" class="card">
                        <img src={canOfBokks} class="card__image" alt="" />
                        <div class="card__overlay">
                          <div class="card__header">
                            <svg
                              class="card__arc"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path />
                            </svg>
                            <div class="card__header-text">
                              <DiReact />
                              <DiHtml5 />
                              <DiCss3 />
                              <DiJavascript />
                              <DiBootstrap />
                              <h3 class="card__title">Can Of Books</h3>
                              <span class="card__status">3 hours ago</span>
                            </div>
                          </div>
                          <p class="card__description">
                            Simple application to add own user book list, also
                            he can edite the book information.
                          </p>
                          <a
                            href="https://canbook96.netlify.app/"
                            target="__blank"
                          >
                            <Button className="projects__btn">July/2021</Button>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div href="" class="card">
                        <img src={TheGoodTravel} class="card__image" alt="" />
                        <div class="card__overlay">
                          <div class="card__header">
                            <svg
                              class="card__arc"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path />
                            </svg>
                            <div class="card__header-text">
                              <DiHtml5 />
                              <DiCss3 />
                              <DiJavascript />
                              <h3 class="card__title">The Good Travel</h3>
                              <span class="card__status">June/2021</span>
                            </div>
                          </div>
                          <p class="card__description">
                            Aplication To pick a travel with all information
                            related , using LocalStroge
                          </p>
                          <a
                            href="https://ibrahemomari.github.io/301EntranceExam/"
                            target="__blank"
                          >
                            <Button className="projects__btn">Demo</Button>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </Row>
              </Container>
            </Carousel.Item>

            <Carousel.Item>
              <Container>
                <Row className="justify-content-md-center">
                  <ul class="cards">
                    <li>
                      <div href="" class="card">
                        <img src={cityExplorer} class="card__image" alt="" />
                        <div class="card__overlay">
                          <div class="card__header">
                            <svg
                              class="card__arc"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path />
                            </svg>
                            <div class="card__header-text">
                              <DiReact />
                              <DiHtml5 />
                              <DiCss3 />
                              <DiJavascript />
                              <DiBootstrap />
                              <h3 class="card__title">City Explorer</h3>
                              <span class="card__status">July/2021</span>
                            </div>
                          </div>
                          <p class="card__description">
                            A cool aplication that show the weather for next 16
                            days, location map, and movies cinema realated about
                            user search.
                          </p>
                          <a
                            href="https://city-explorer-doon.netlify.app/"
                            target="__blank"
                          >
                            <Button className="projects__btn">Demo</Button>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div href="" class="card">
                        <img src={chocolatePizza} class="card__image" alt="" />
                        <div class="card__overlay">
                          <div class="card__header">
                            <svg
                              class="card__arc"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path />
                            </svg>
                            <div class="card__header-text">
                              <DiHtml5 />
                              <DiCss3 />
                              <DiJavascript />
                              <h3 class="card__title">Chocolate Pizza</h3>
                              <span class="card__status">May/2021</span>
                            </div>
                          </div>
                          <p class="card__description">
                            How like chocolate? this website for more best
                            chocolate pizza can you ever get it, so delicios.
                          </p>
                          <a
                            href="https://ibrahemomari.github.io/chocolate-pizza/"
                            target="__blank"
                          >
                            <Button className="projects__btn">Demo</Button>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div href="" class="card">
                        <img src={BusMall} class="card__image" alt="" />
                        <div class="card__overlay">
                          <div class="card__header">
                            <svg
                              class="card__arc"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path />
                            </svg>
                            <div class="card__header-text">
                              <DiHtml5 />
                              <DiCss3 />
                              <DiJavascript />
                              <h3 class="card__title">Bus Mall</h3>
                              <span class="card__status">May/2021</span>
                            </div>
                          </div>
                          <p class="card__description">
                            Is like a game, no repated picturs evrey round,
                            total of votes, and cool chart to present the
                            result.
                          </p>
                          <a
                            href="https://ibrahemomari.github.io/BusMall/"
                            target="__blank"
                          >
                            <Button className="projects__btn">Demo</Button>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </Row>
              </Container>
            </Carousel.Item>

            <Carousel.Item>
              <Container>
                <Row className="justify-content-md-center">
                  <ul class="cards">
                    <li></li>
                    <li>
                      <div href="" class="card">
                        <img src={salmonCookies} class="card__image" alt="" />
                        <div class="card__overlay">
                          <div class="card__header">
                            <svg
                              class="card__arc"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path />
                            </svg>
                            <div class="card__header-text">
                              <DiHtml5 />
                              <DiCss3 />
                              <DiJavascript />
                              <h3 class="card__title">Salmon Cookies</h3>
                              <span class="card__status">June/2021</span>
                            </div>
                          </div>
                          <p class="card__description">
                            A website that provide a many services to stores,
                            the most powerfull feature is calculate the seals
                            for every day.
                          </p>
                          <a
                            href="https://ibrahemomari.github.io/cookie-stand/"
                            target="__blank"
                          >
                            <Button className="projects__btn">Demo</Button>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li></li>
                  </ul>
                </Row>
              </Container>
            </Carousel.Item>
          </Carousel>
        </section>
      </>
    );
  }
}

export default Projects;
