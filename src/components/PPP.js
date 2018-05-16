import React from "react";
import Header from "./Header";
import FooterTwo from "./FooterTwo";
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: '/DSC00177.jpg',

    header: 'FlatIrons'
  },
  {
    src: '/DSC00096.jpg',

    header: 'Flower Portrait'
  },
  {
    src: '/IMG_1247.jpg',

    header: 'Aztecs Butte'
  },
  {
    src: '/IMG_1250.jpg',

    header: 'Double Window Arch'
  },
  {
    src: '/IMG_1254.jpg',

    header: 'Mesa Arch'
  },
  {
    src: '/IMG_4954.jpg',

    header: 'The Incline '
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
              I have several passions some on the coding side, and others
              on more of a personal side project side. As far as coding goes I really
              enjoy that struggle of figuring logically how to make things work
              like you expect. I like thinking through whats wrong and making it work.
              I am starting to become more creative and build more projects.
              It doesn't tend to feel like work, because I enjoy it so much.
              I hope to do this as a career and continue to work and build projects
              that relate to the things I am interested in.
            </div>
            <div class="col">
              Now outside of coding I do tons of outdoor activies. If I could hike
              as a job thats what I would do. I try to climb at least on mountain per week.
              When time and money align I go on bigger trip or do more adrenaline based things.
              In a week I am going white water rafting. In a month I am going skydiving again, and off roading
              through the Rocky Mountain National Park. On top of coding and outdoor activies I do alot of
              photography and cinematography. This is a new passion of mine, but it seems like its hear to stay.
            </div>
          </div>
        </div>
        <hr />
        <div class="container portfolio-background">

        <h3 class="white-text">Portfolio</h3>
          <div class="row">
            <div class="col">
              <figure class="snip1401 ">
                <img src="img/Screen Shot 2018-05-11 at 3.50.57 PM.png" alt="sample67" />
                <figcaption>
                  <h3>React Inbox</h3>
                  <p>Project was done in my React Intensive class which is using a local API. You can mark messages as read and unread. As well as delete messages and create new messages with posting to the API.</p>
                </figcaption>
              </figure>
            </div>
          <br/>
          <br/>

            <div class="col">
              <figure class="snip1401">
                <img src="/img/Screen Shot 2018-05-11 at 3.48.27 PM.png" alt="sample67" />
                <figcaption>
                  <h3>React-Redux Weather App</h3>
                  <p>Was built in my Modern React-Redux Udemy class with a weather API and Google Maps API. You can look up any city in the US and get a graph with the weather along with the Google Maps API location.</p>
                </figcaption>
              </figure>
            </div>
            <br/>
            <br/>

            <div class="col">
              <figure class="snip1401">
                <img src="/img/Screen Shot 2018-05-11 at 3.43.55 PM.png" alt="sample67" />
                <figcaption>
                  <h3>React YouTube App</h3>
                  <p>This was also built in my Modern React-Redux Udemy class with the YouTube API. It works the same as YouTubes search engine and will populate and play videos just the same as YouTube.</p>
                </figcaption>
              </figure>
            </div>
            <br/>
            <br/>

            <div class="col">
              <figure class="snip1401">
                <img src="/img/Screen Shot 2018-05-11 at 3.55.53 PM.png" alt="sample67" />
                <figcaption>
                  <h3>React Shopping-Cart App</h3>
                  <p>This was built in my React Intensive Class using a local API. You can calculate the total of the shopping cart along with add items to the cart. </p>
                </figcaption>
              </figure>
            </div>
            <br/>
            <br/>

            <div class="col">
              <figure class="snip1401">
                <img src="/img/Screen Shot 2018-05-11 at 3.59.12 PM.png" alt="sample67" />
                <figcaption>
                  <h3>Jquery StarWars App</h3>
                  <p>This was built at the end of my JavaScript Accelerated Class with the StarWars API. When you click the button it generates a new StarWars character and shows details about that character.</p>
                </figcaption>
              </figure>
            </div>
            <br/>
            <br/>

            <div class="col">
              <figure class="snip1401">
                <img src="/img/Screen Shot 2018-05-11 at 4.04.31 PM.png" alt="sample67" />
                <figcaption>
                  <h3>React Todo App</h3>
                  <p>This was also built in the React Intensive class as a demo. This demo was a guide to follow when we first started the React Intensive class. I found it helpful when starting off using React.</p>
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
