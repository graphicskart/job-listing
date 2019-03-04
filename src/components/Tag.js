import React from "react";

const Tag = props => {
  const { title = "" } = props;
  return (
    <span className={`tag ${title.toLowerCase().replace(" ", "_")}`}>
      {title}
    </span>
  );
};

export default Tag;
