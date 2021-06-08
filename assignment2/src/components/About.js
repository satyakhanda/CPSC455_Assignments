import React, { Component } from 'react';

class About extends Component{
    render() {
      return(
        <body class="mainpage">
        <div class="Introduction">
            <div class="container">
                <div class="name">
                    <h5>I am</h5>
                    <h1>Satyak Handa</h1>
                </div>
                <div class="intro-description">
                    <p>I am going into my fourth and final year at the University of British Columbia persuing a 
                        combined major in Computer Science and Statistics. Over the past three years I have taken 
                        courses in computer architeture, software engineering, machine learning, computer vision,
                        statistical analysis, time series, and so much more.  
                    </p>
                </div>
            </div>
        </div>
    
        <div class="course">
            <div class="container">
                <div class="course-description">
                    <p> This course—CPSC 455—will cover web development fundamentals. It includes HTML, CSS,
                        Javascript, NodeJS, MongoDB, etc. This project will outline works of art throughout 
                        history. You can upload new pieces by specifying the name of the work, the artist, 
                        and a link to a picture of the peice.
                    </p>
                </div>
            </div>
        </div>
    </body>
      );
    }
  }

export default About;