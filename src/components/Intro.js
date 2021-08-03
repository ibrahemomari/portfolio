import React, { Component } from "react";
import Typed from "react-typed";
class Intro extends Component {
  render() {
    return (
      <>
        <div className="intro-container">
          <div className="intro-strings"></div>
          <br />
          <div class="bg"></div>
          <div class="bg bg2"></div>
          <div class="bg bg3"></div>
          <div class="content">
            <Typed
              strings={[
                "Hello, Welcome To My Portfolio",
                'My Name Is "Ibrahem Al-omari"',
                "Im a Full-Stack Web Developer",
                "Feel Free To Contact Me ♥",
              ]}
              typeSpeed={40}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Intro;
