import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer" class=" ">
        <a href="https://www.facebook.com/austin.loveless.56" class="fb-ic">
          <i class="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        <a href="mailto:austinloveless5171@gmail.com" class="fb-ic">
          <i
            class="fa fa-envelope fa-lg white-text mr-md-5 mr-3 fa-2x"
            aria-hidden="true"
          />
        </a>
        <a href="https://www.linkedin.com/in/austin-loveless/" class="li-ic">
          <i class="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        <a
          href="https://www.instagram.com/austin.loveless/?hl=en"
          class="ins-ic"
        >
          <i class="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        <a href="https://github.com/austinloveless" class="fb-ic">
          <i
            class="fa  fa-github
 fa-lg white-text mr-md-5 fa-2x"
          >
            {" "}
          </i>
        </a>

        <p class="copyright-size">&copy; Austin Loveless</p>
      </footer>
    );
  }
}

export default Footer;
