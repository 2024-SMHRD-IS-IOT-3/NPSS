import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Nav.css';
import { MdOutlineStorefront } from "react-icons/md";
import { HiHome } from "react-icons/hi2";

const AccordionMenu = () => {

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;

      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }

      /* animated (slide down)
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
      */
    });


}
   
    return (
      <div className="accordionDiv">
        <button className="accordion">
        <HiHome color='whitesmoke' size='18px'/><span> Home</span>
        </button>
          <div className="panel">
            <ul type="none">
              <li className="panelLi"><Link to={'/light'}>조명</Link></li>
              <li className="panelLi"><Link to={'/sign'}>간판</Link></li>
              <li className="panelLi"><Link to={'/solar'}>태양열</Link></li>
              <li className="panelLi"><Link to={'/cooler'}>냉난방장치</Link></li>
            </ul>
          </div>
        <button className="accordion">
        <MdOutlineStorefront color='whitesmoke' size='20px'/><span> Store 1</span>
        </button>
          <div className="panel">
            <ul type="none">
              <li className="panelLi"><Link to={'/light'}>조명</Link></li>
              <li className="panelLi"><Link to={'/sign'}>간판</Link></li>
              <li className="panelLi"><Link to={'/solar'}>태양열</Link></li>
              <li className="panelLi"><Link to={'/cooler'}>냉난방장치</Link></li>
            </ul>
          </div>

          <button className="accordion">
            <MdOutlineStorefront color='whitesmoke'size='20px'/><span> Store 2</span>
          </button>
          <div className="panel">
            <ul type="none">
              <li className="panelLi"><Link to={'/light'}>조명</Link></li>
              <li className="panelLi"><Link to={'/sign'}>간판</Link></li>
              <li className="panelLi"><Link to={'/solar'}>태양열</Link></li>
              <li className="panelLi"><Link to={'/cooler'}>냉난방장치</Link></li>
            </ul>
          </div>

          <button className="accordion">
            <MdOutlineStorefront color='whitesmoke' size='20px'/><span> Store 3</span>
          </button>
          <div className="panel">
            <ul type="none">
              <li className="panelLi"><Link to={'/light'}>조명</Link></li>
              <li className="panelLi"><Link to={'/sign'}>간판</Link></li>
              <li className="panelLi"><Link to={'/solar'}>태양열</Link></li>
              <li className="panelLi"><Link to={'/cooler'}>냉난방장치</Link></li>
            </ul>
            </div>
          
          
      
    </div>
    );
    
  };

export default AccordionMenu