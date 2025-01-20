import { useState } from "react";

export default function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "Show More",
  collapseButtonText = "Show Less",
  buttonColor = "blue",
  expanded = false,
  className = "",
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  function handleExpand() {
    setIsExpanded((expanded) => !expanded);
  }

  const buttonStyles = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };
  return (
    <div className={className}>
      {isExpanded
        ? children
        : `${children.split(" ").slice(0, collapsedNumWords).join(" ")}...`}
      <button onClick={handleExpand} style={buttonStyles}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
