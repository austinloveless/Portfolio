import React from "react";
import { Container, Row, Col } from "reactstrap";
import ContactForm from './ContactForm'
import Header from './Header'
import FooterTwo from './FooterTwo'

export class About extends React.Component {
  render() {
    return (
      <div>
      <Header />
      <div class="about">

        <div class="container">
        <br />
      <iframe width="560" height="315" src="https://www.youtube.com/embed/fztMa09_lOI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <hr />
        <div class="row co-sm">
          <h3 class="float-center">About</h3>
          <p class="float-left">
            I am a current part time Galvanize student soon to be full time on
            June 4th. I will graduate as a full stack JavaScript Developer,
            specifically the MERN stack on November 16. I already have JavaScript experience along with
            React experience. Outside of coding I have several other passion projects, such as
            Youtube, photography, cinematography and I enjoy doing various outdoor activies. I hope to land a job as a Software
            Engineer upon my graduation in Novemeber. I enjoy the act of creating projects
            along with enjoying the struggle of learning new things. Please contact me if you want to dicuss more about who I am.
          </p><img src="/img/IMG_1388.JPG" class="smaller-img"  />
          <img src="/IMG_1614-2.jpg" class="smaller-img"  />
        </div>
        <hr />

        <div class="row">
          <div class="pie">
            {" "}
            20%
            <h4> Photographer</h4>
          </div>

          <div class="pie-2">
            {" "}
            60%
            <h4> Fullstack Developer</h4>
          </div>

          <div class="pie-3">
            {" "}
            20%
            <h4>Outdoor Enthusist</h4>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
          <hr/>
          <div id="education" class='education'>
            <h3>Education</h3>
 <ul >
   <li id="image1">Galvanize Full Stack Immersive (06/04/18 - 11/16/18) </li>
   <p >6 Month Full Stack JavaScript Immersive</p>
   <li id="image5">Arapahoe Community College (01/25/18 - 05/08/18)</li>
   <p >Learn Economics and Accounting Through Business Classes</p>
   <li id="image2">JavaScript Accelerated (03/05/18 - 03/22/18)</li>
   <p >Built a Solid Foundation of JavaScript</p>
   <li id="image3">React Intensive (04/17/18 - 05/15/18)</li>
   <p >Learned the Foundation of React, Redux, and React-Router</p>
   <li id="image4">The Web Developer Bootcamp on Udemy(05/16/18 - 06/03/18)</li>
   <p > 46 Hour Udemy Course Taught by a Former Lead Instructor at Galvanize </p>

 </ul>
          </div>
          <hr/>
        <div id='move-left'>
          <ContactForm />
        </div>
      </div>
    </div>
  <FooterTwo />
  </div>
    );
  }
}
