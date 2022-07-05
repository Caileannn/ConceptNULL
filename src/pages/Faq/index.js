import React from "react";
import "./style.css";
import Container from "../../components/container";
import { BigTitle } from "../../components/Titles";
import FaqItem from './Components/FaqItem'
import App from '../../app.json'
export default function index() {
  return (
    <Container className="faq-cont">
      <BigTitle label="F.A.Q" />
        {App.Faq.map((item, index) => (
            <FaqItem key={index} answer={item.answer} question={item.question}/>
        ))}
    </Container>
  );
}


