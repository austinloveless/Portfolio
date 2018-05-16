import React, {Component} from 'react';

export class BackgroundVideo extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: '/My Movie 3.mp4'
        }
    }

    render () {
        return (
          <div class="bg-video">
            <video id="bg-video__content" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
            </video>

          </div>
        )
    }
};
