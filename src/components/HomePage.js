import React from "react";
import { Button } from "reactstrap";
import HideTheImage from "./HideTheImage";
import Footer from "./Footer";
import Header from "./Header";
import { BackgroundVideo } from "./BackgroundVideo";
import { Link } from "react-router-dom";

export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BackgroundVideo />
        <hr />
        <div class="foo letter">
          <h1>DEVELOPMENT</h1>
        </div>
        {/* <Button outline color="secondary" id="homepage-btn">
          <a href="https://www.youtube.com/channel/UCqOJs8JQyo2SuKWnn4HVreg?view_as=subscriber">
          <Link to="#">
          </Link>
          <p id="text-color">YouTube</p>
        </a>
        </Button>{" "}

        <Button outline color="secondary" id="homepage-btn">
          <Link  to="/projects"><p id="text-color">Photography</p>
        </Link>
        </Button>{" "}
        <Button outline color="secondary" id="homepage-btn">
          <Link  to="/projects"><p id="text-color">Projects</p>
        </Link>

        </Button>{" "}
         <Link  to="/about"><p id="text-color">Learn More About Me
        <i
              class="fa fa-user"
              aria-hidden="true"
            /></p>
            </Link> */}
        <br />
        <HideTheImage />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <Footer />
      </div>
    );
  }
}
