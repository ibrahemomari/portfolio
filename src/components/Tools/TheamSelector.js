import { Button } from "react-bootstrap";
import React, { Component } from "react";
import $ from 'jquery'
class TheamSelector extends Component {
    componentDidMount=()=>{
        $(".circle-btns").click(function() {
            let r = document.querySelector(':root');
            let index=$(this).attr('id');
            if(index=='btn1'){
                r.style.setProperty('--hue-color', 230); // blue
            }else if(index==='btn2'){
                r.style.setProperty('--hue-color', 1); // red
            }else if(index==='btn3'){
                r.style.setProperty('--hue-color', 40); // orange
            }else if(index==='btn4'){
                r.style.setProperty('--hue-color', 275); // purple
            }else if(index==='btn5'){
                r.style.setProperty('--hue-color', 300); // pink
            }else if(index==='btn6'){
                r.style.setProperty('--hue-color', 120); // green
            }
            
            
        });
    }
 
  render() {
    return (
      <>
        <br />
        <nav class="social">
          <ul>
            <li>
              <Button className="circle-btns btn1" id="btn1"></Button>
              <Button className="circle-btns btn2" id="btn2"></Button>
              <Button className="circle-btns btn3" id="btn3"></Button>
              <Button className="circle-btns btn4" id="btn4"></Button>
              <Button className="circle-btns btn5" id="btn5"></Button>
              <Button className="circle-btns btn6" id="btn6"></Button>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default TheamSelector;
