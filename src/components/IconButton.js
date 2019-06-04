import React from "react";

export default function IconButton(props) {
  const { type = "default", icon, className, ...otherProps } = props;

  let iconComponent;
  if (typeof icon === "function") {
    iconComponent = icon();
  } else {
    iconComponent = <i className={`glyphicon glyphicon-${icon}`} />;
  }

  return (
    <button
      type="button"
      className={`btn btn-${type} ${className}`}
      {...otherProps}>
      {iconComponent}
    </button>
  );
}
