import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Nav.css';


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
    });


}
   
    return (
      <div class="accordionDiv">
        <button class="accordion">
            <i class="fi fi-rr-shop"></i>Home
        </button>
          <div class="panel">
            <ul type="none">
              <li class="panelLi"><Link to={'/'}>Main</Link></li>
              <li class="panelLi"><Link to={'/introduce'}>서비스소개</Link></li>
              <li class="panelLi"><Link to={'/login'}>Logout</Link></li>
            </ul>
          </div>
        <button class="accordion">Section 1</button>
          <div class="panel">
            <ul type="none">
              <li class="panelLi"><Link to={'/'}>Main</Link></li>
              <li class="panelLi"><Link to={'/login'}>Logout</Link></li>
            </ul>
          </div>

          <button class="accordion">Section 2</button>
          <div class="panel">
            <ul type="none">
              <li class="panelLi"><Link to={'/'}>Main</Link></li>
              <li class="panelLi"><Link to={'/login'}>Logout</Link></li>
            </ul>
          </div>

          <button class="accordion">Section 3</button>
          <div class="panel">
            <ul type="none">
              <li class="panelLi"><Link to={'/'}>Main</Link></li>
              <li class="panelLi"><Link to={'/login'}>Logout</Link></li>
            </ul>
      </div>
    </div>
    );
    
  };

export default AccordionMenu