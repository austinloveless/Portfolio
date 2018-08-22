import React from "react";
import Header from "./Header";
import FooterTwo from "./FooterTwo";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: "/DSC00177.jpg",

    header: "FlatIrons"
  },
  {
    src: "/DSC00096.jpg",

    header: "Flower Portrait"
  },
  {
    src: "/IMG_1247.jpg",

    header: "Aztecs Butte"
  },
  {
    src: "/IMG_1250.jpg",

    header: "Double Window Arch"
  },
  {
    src: "/IMG_1254.jpg",

    header: "Mesa Arch"
  },
  {
    src: "/IMG_4954.jpg",

    header: "The Incline "
  }
];

export class PPP extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div class="about">
          <h3>Passions</h3>
          <div class="container">
            <div class="row">
              <div class="col">
                I have several passions some on the coding side, and others on
                more of a personal side. As far as coding goes I really enjoy
                that struggle of figuring logically how to make things work like
                you expect. I like thinking through whats wrong and making it
                work. I am starting to become more creative and build more
                projects. It doesn't tend to feel like work, because I enjoy it
                so much. I hope to do this as a career and continue to work and
                build projects that relate to the things I am interested in.
              </div>
              <div class="col">
                Now outside of coding I tend to do an abundance of outdoor
                activies. If I could hike as a job thats what I would do. I try
                to climb at least one mountain per week. When time and money
                align I go on bigger trips or do more heavy adrenaline based
                things. During my time at Galvanize I have many out door
                adrenaline trips planned such as rafting, skydiving, and bungjee
                jumping. On top of this I recently discovered a new found
                passion for Photography and Cinematography.
              </div>
            </div>
          </div>
          <hr />
          <div class="container portfolio-background">
            <h3 class="white-text">Projects</h3>
            <div class="row">
              <br />
              <br />

              <div class="col">
                <figure class="snip1401">
                  <img
                    src="https://lh3.googleusercontent.com/-8S1GDo6wSDI/W33nHaPW91I/AAAAAAAAC8g/jjo6y75lkhcXlVy270HFYydn3i4nPFY1gCL0BGAs/w1060-d-h536-n-rw/Screen%2BShot%2B2018-08-22%2Bat%2B4.43.13%2BPM.png"
                    alt="Warbler"
                  />
                  <figcaption>
                    <h3>Warbler</h3>
                    <p>
                      Decoupled app using React-Redux on the Frontend. For
                      Authentication I used Bcrypt, JWT, and localStorage. For
                      the Backend I used Node/Express and MongoDB.
                    </p>
                    <h6 className="col-sm-8">
                      <a href="https://github.com/austinloveless/warbler-client">
                        Github
                      </a>
                    </h6>
                  </figcaption>
                </figure>
              </div>
              <br />
              <br />

              <div class="col">
                <figure class="snip1401">
                  <img
                    src="https://lh3.googleusercontent.com/-ECk33ZNLhnM/W33mkclcytI/AAAAAAAAC8E/arZqKPJJ114H1A2QfeUiWM4TRQd2Nt54ACL0BGAs/w1060-d-h536-n-rw/Screen%2BShot%2B2018-08-22%2Bat%2B4.40.41%2BPM.png"
                    alt="Yelpcamp"
                  />
                  <figcaption>
                    <h3>YelpCamp</h3>
                    <p>
                      Server Side app with EJS templating. Uses Node/Express,
                      MongoDB, and Passport.js.
                    </p>
                    <h5 className="col-sm-8">
                      <a href="https://campgrounds-yelp-camp.herokuapp.com/">
                        YelpCamp
                      </a>
                    </h5>
                    <br />
                    <h6 className="col-sm-8">
                      <a href="https://github.com/austinloveless/yelpCamp">
                        Github
                      </a>
                    </h6>
                  </figcaption>
                </figure>
              </div>
              <br />
              <br />

              <div class="col">
                <figure class="snip1401">
                  <img
                    src="https://lh3.googleusercontent.com/-UkSbXowO9to/W33kvEr_CjI/AAAAAAAAC7g/AWluM1QfPVsXkpbqHoPAk2_OSI0iwh9ZwCL0BGAs/w1060-d-h552-n-rw/Screen%2BShot%2B2018-08-14%2Bat%2B1.40.03%2BPM.png"
                    alt="Gvideos"
                  />
                  <figcaption>
                    <h3>Gvideos</h3>
                    <p>
                      Decoupled group project built with Node/Express and
                      MongoDB on the Backend. Also used Passport.js and JWT for
                      user Authentication. Frontend uses Vue Vue-Router and
                      localstorage for the Authentication.
                    </p>
                    <h5 className="col-sm-8">
                      <a href="https://g90-videos.firebaseapp.com/">Gvideos</a>
                    </h5>
                    <br />
                    <h6 className="col-sm-8">
                      <a href="https://github.com/austinloveless/gvideos-client">
                        Github
                      </a>
                    </h6>
                  </figcaption>
                </figure>
              </div>
              <br />
              <br />

              <div class="col">
                <figure class="snip1401">
                  <img
                    src="https://lh3.googleusercontent.com/-LrOnyL2E-j0/W33oILB7z5I/AAAAAAAAC9E/F7_a9OJMvfUua3fBz3LhK4qg4vjhpCQpQCL0BGAs/w1060-d-h544-n-rw/Screen%2BShot%2B2018-08-22%2Bat%2B4.47.27%2BPM.png"
                    alt="React-Redux Todo"
                  />
                  <figcaption>
                    <h3>React-Redux Todo</h3>
                    <p>
                      Decoupled App with Node/Express on the backend with
                      MongoDB. Front end React-Redux.
                    </p>
                    <h6 className="col-sm-8">
                      <a href="https://github.com/austinloveless/Redux-Todos-Frontend">
                        Github
                      </a>
                    </h6>
                  </figcaption>
                </figure>
              </div>
              <div class="col">
                <figure class="snip1401">
                  <img
                    src="img/Screen Shot 2018-05-11 at 3.50.57 PM.png"
                    alt="sample67"
                  />
                  <figcaption>
                    <h3>React Inbox</h3>
                    <p>
                      Project was done in my React Intensive class which is
                      using a local API. You can mark messages as read and
                      unread. As well as delete messages and create new messages
                      with posting to the API.
                    </p>
                    <h6 className="col-sm-8">
                      <a href="https://github.com/austinloveless/React-Inbox">
                        Github
                      </a>
                    </h6>
                  </figcaption>
                </figure>
              </div>
              <br />
              <br />

              <div class="col">
                <figure class="snip1401">
                  <img
                    src="https://lh3.googleusercontent.com/-YCH4vnaRPo8/W33pwcwXpZI/AAAAAAAAC9w/CrxBj-KXzFk0dFe_50cEHAEucDp-H-MPgCL0BGAs/w1060-d-h892-n-rw/Screen%2BShot%2B2018-08-22%2Bat%2B4.54.38%2BPM.png"
                    alt="Stripe"
                  />
                  <figcaption>
                    <h3>Stripe Payment Processing</h3>
                    <p>
                      Built with Node/Express and EJS for server side rendering.
                      Stripe for payment processing.
                    </p>
                    <h6 className="col-sm-8">
                      <a href="https://github.com/austinloveless/Stripe-Payment-processing">
                        Github
                      </a>
                    </h6>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <hr />
          <h3>Photography</h3>

          <div class="small-img-photos">
            <UncontrolledCarousel items={items} />
          </div>
          <hr />
        </div>
        <FooterTwo />
      </div>
    );
  }
}
