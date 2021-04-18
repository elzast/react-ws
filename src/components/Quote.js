import React from "react";
import "./Quote.css";

function Quote({ text, author, date }) {
  return (
    <div className="Quote">
      <h3>Quote by {author}</h3>
      <p>
        <span className="Quote__symbol">"</span>
        {text}
        <span className="Quote__symbol">"</span>
      </p>
      {date && <p>Date: {date}</p>}
    </div>
  );
}

export default Quote;
