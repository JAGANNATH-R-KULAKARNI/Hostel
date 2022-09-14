import React from "react";
import "./Developers.css";
import image1 from "./images/jaggu.jpeg";
import image2 from "./images/Vishakha_Passport.jpg";
import image3 from "./images/shreyas.jpg";
import image4 from "./images/niraj.jpg";

export default function Account() {
    return(
        <section class="testimonial text-center">
        <div class="container">

            <div class="heading white-heading">
                Developers
            </div>
            <div id="testimonial4" class="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">
             
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <div class="testimonial4_slide">
                            <img src={image1} class="img-circle img-responsive" />
                            <p>I am a very ambitious person who has lots of hobbies .I am a Full Stack Developer. I want to be a successfull Freelancer. I am very much interested in Machine Learning. I am very excited to be the part of web development team and also  for our next projects.</p>
                            <h4>jagannath R Kulakarni</h4>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="testimonial4_slide">
                            <img src={image2} class="img-circle img-responsive" /><p>"Everything that you see need not to be a truth". I am a Technophile. I am a Full-Stack Web-Developer and ML Enthusiast. My interests go with Spring-Boot and Neural-Networks. Want to end-up becoming an awesome Data Scientist.</p>
                            <h4>Vishakha V</h4>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="testimonial4_slide">
                            <img src={image3} class="img-circle img-responsive" />
                            <p>I am a passionate full-stack developer, DevOps enthusiast who enjoys experimenting with new technologies and getting hands dirty with them. Personal interests includes designing scalable systems , web and native applications</p>
                            <h4>Shreyas R Shettigar</h4>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="testimonial4_slide">
                            <img src={image4} class="img-circle img-responsive" />
                            <p>I am an ambitious and hardworking person. I love learning about latest technologies and listening to music. I am a Full-Stack Web-Developer. My interests go with ReactJs, Supabase. Want to end-up leading the greatest project ever.</p>
                            <h4>Niraj S Sharma</h4>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#testimonial4" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#testimonial4" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
    </section>
    );
}