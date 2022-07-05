import React from 'react'

export default function FaqItem({question,answer,key,style}) {
    return (
        <div className="faq-questionContainer" key={key} style={style}>
        <div className="faq-question">
          <h1 >
            {question}
          </h1>
        </div>
        <p className="faq-answer">
          {answer}
          {/*76 words*/}
        </p>
      </div>
    )
}
