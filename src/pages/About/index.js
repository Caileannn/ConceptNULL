import React from "react";
import "./style.css";
import Container from "../../components/container";
import { BigTitle } from "../../components/Titles";
import App from "../../app.json";
export default function Index() {
  const { intro, content } = App.About;
  return (
    <Container className="about-cont">
      <BigTitle label="About" className="about-cont-title" />
      {/**
       * <div className="about-header">
        <div className="about-header-content">
          {intro.map((item, index) => (
            <p key={index} className="about-header-paragraph">
              {item}
            </p>
          ))}
        60-65 words*
        </div>
        
        </div>
        <div className="about-content">
          <p className="about-header-paragraph">
            {content.map((item, index) => (
              <>
              <h1 className="about-title">{item.title}</h1>
              <p key={index} className="about-header-paragraph">
                {item.paragraph}
              </p>
              </>
            ))}
          </p>
        </div>
       */}
       <div className="main-text">
        <p>Welcome to the Concept NULL newsletter!</p>
        <p>We’re excited to welcome you to this little community we are building.</p>
        <p>
          The aim of the newsletter is to create a repository of all artists in Ireland who might identify part or all their practice as New Media art, and to ‘join the dots’ between all the individuals and groups in Ireland who have been working, making and establishing this area over the last few decades in Ireland.
          But this should not be limited to artists. Any technicians, researchers, creative coders, or enthusiasts interested in the interdisciplinary nature of art and technology are sought for and welcomed.
        </p>
        <p><u>Our overarching goal is this:</u></p>
        <div className="main-text-img">
          <img src="/about-ac.png"></img>
        </div>
        <p>Sin é. Establishing New Media art as a recognised artform in Ireland. 
          Furthermore, we need to have a clear distinction and appreciation for the difference between art practice, tech work and digital work. 
        </p>
        <p>Now, there are current solutions such as interdisciplinary art, which is a term that does encompass all of this BUT the problem is, like all catch-all terms, is that it ignores detail and therefore does not allow for any community to grow. And while the Digital Strategy rolled out by the arts council recently is a good start and much needed, it suffers from the same problem and also can not account for any physical representation of technological work. </p>
        <p>This is pretty big game to be tackling but hey, everything can happen in small steps. And ours is this newsletter.</p>
        <p>So here's the plan: We’ll be putting in any funding opportunities, open calls, residencies, workshops, events and online resources that are applicable to new media artists and creative technologists. It will be sent out on the 1st of every month. That’s it for now. </p>
        <p>Here's what we have planned! We will be revamping our Instagram to post more time-sensitive opportunities and events. We have plans for a Discord too where people can chat, post work, share tips and arrange meet ups. And the newsletter will be expanded to include write-ups on Irish artists and collectives defining new media art in Ireland.</p>
        <p>We encourage anyone to spread the word of the newsletter to anyone who may be interested in reading about this stuff and to share with us any opportunities that you think would fit the bill.</p>
        <p>Failte Riomhe mo Chara!</p>
        <p><i>Concept NULL Team 💖</i></p>
       </div>
      
    </Container>
  );
}
