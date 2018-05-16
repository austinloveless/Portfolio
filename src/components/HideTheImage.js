
import React from 'react'
import { Link } from 'react-router-dom'

class HideTheImage extends React.Component {


  render() {
    return (
      <div>
          <div class="container-img profile-img"> <figure class="snip1573">
  <img src="/img/IMG_1255.JPG" alt="sample89" />
  <figcaption>
    <h3>Austin Loveless</h3>
  </figcaption>
  <Link  to="/about" />
</figure>
    </div>
      </div>
    );
  }
}

export default HideTheImage
