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
      <div className="about-header">
        <div className="about-header-content">
          {intro.map((item, index) => (
            <p key={index} className="about-header-paragraph">
              {item}
            </p>
          ))}
          {/*60-65 words*/}
        </div>
        
      </div>
      <div className="about-content">
        <p className="about-header-paragraph">
          {content.map((item, index) => (
            <>
            <h1>{item.title}</h1>
            <p key={index} className="about-header-paragraph">
              {item.paragraph}
            </p>
            </>
          ))}
        </p>
      </div>
    </Container>
  );
}
