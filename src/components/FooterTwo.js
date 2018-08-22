import React from "react";

class FooterTwo extends React.Component {
  render() {
    return (
      <footer id="footer2" class=" ">
        <a href="https://www.facebook.com/austin.loveless.56" class="fb-ic">
          <i
            id="black-text"
            class="fa fa-facebook fa-lg black-text mr-md-5 mr-3 fa-2x"
          >
            {" "}
          </i>
        </a>
        <a href="mailto:austinloveless5171@gmail.com" class="fb-ic">
          <i
            id="black-text"
            class="fa fa-envelope fa-lg black-text mr-md-5 mr-3 fa-2x"
            aria-hidden="true"
          />
        </a>
        <a href="https://www.linkedin.com/in/austin-loveless/" class="li-ic">
          <i
            id="black-text"
            class="fa fa-linkedin fa-lg black-text mr-md-5 mr-3 fa-2x"
          >
            {" "}
          </i>
        </a>
        <a
          href="https://www.instagram.com/austin.loveless/?hl=en"
          class="ins-ic"
        >
          <i
            id="black-text"
            class="fa fa-instagram fa-lg black-text mr-md-5 mr-3 fa-2x"
          >
            {" "}
          </i>
        </a>
        <a href="https://github.com/austinloveless" class="fb-ic">
          <i
            id="black-text"
            class="fa  fa-github
 fa-lg black-text mr-md-5 fa-2x"
          >
            {" "}
          </i>
        </a>
        <br />
        <br />

        <p class="copyright-size">&copy; Austin Loveless</p>
      </footer>
    );
  }
}

export default FooterTwo;
