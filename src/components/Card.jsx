import React from "react";

const Card = ({question, answer}) => {
    return (  
        <div className="card">
            <h3>{question}</h3>
            <h4>{answer}</h4>
        </div>
    );
}
 
export default Card;
