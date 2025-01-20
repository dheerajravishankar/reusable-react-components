import ReactDOM from "react-dom/client";
import "./index.css";
import TextExpander from "./TextExpander";
import StarRating from "./StarRating";
import React, { useState } from "react";

function ImplementationWithCustomState() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating maxRating={10} color="green" onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TextExpander
      collapsedNumWords={20}
      expandButtonText="Show text"
      collapseButtonText="Collapse text"
      buttonColor="#ff6622"
      expanded={true}
      className="box"
    >
      Space travel requires some seriously amazing technology and collaboration
      between countries, private companies, and international space
      organizations. And while it's not always easy (or cheap), the results are
      out of this world. Think about the first time humans stepped foot on the
      moon or when rovers were sent to roam around on Mars.
    </TextExpander>
    <StarRating
      maxRating={5}
      messages={["terrible", "bad", "good", "great", "amazing"]}
      defaultRating={3}
      color="red"
      size={30}
      className="test"
    />
    <ImplementationWithCustomState />
  </React.StrictMode>
);
