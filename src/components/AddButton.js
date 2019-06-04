import React from "react";
import IconButton from "./IconButton";

export default function AddButton({
  className,
  icon = "plus",
  onClick,
  disabled,
}) {
  return (
    <div className="row">
      <p className={`col-xs-3 col-xs-offset-9 text-right ${className}`}>
        <IconButton
          type="info"
          icon={icon}
          className="btn-add col-xs-12"
          tabIndex="0"
          onClick={onClick}
          disabled={disabled}
        />
      </p>
    </div>
  );
}
