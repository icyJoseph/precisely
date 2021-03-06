import React from "react";
import "./spinner.css";

const SPINNER_SIZES = {
  small: 30,
  medium: 50,
  large: 70
};

const STROKE_WIDTHS = {
  small: 4,
  medium: 5,
  large: 6
};

const PATH_CLASS_NAMES = {
  small: "SmallSpinnerPath",
  medium: "MediumSpinnerPath",
  large: "LargeSpinnerPath"
};

// Heavily inspired by https://codepen.io/mrrocks/pen/EiplA
export function Spinner({
  size = "large",
  containerClassName = "SpinnerContainer"
}) {
  const baseSize = SPINNER_SIZES[size];
  const pathSize = baseSize / 2;
  const strokeWidth = STROKE_WIDTHS[size];
  const pathRadius = `${baseSize / 2 - strokeWidth}px`;
  const className = PATH_CLASS_NAMES[size];

  return (
    <div className={containerClassName}>
      <svg
        className={className}
        width={baseSize}
        height={baseSize}
        viewBox={`0 0 ${baseSize} ${baseSize}`}
      >
        <circle
          className="SpinnerPath"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          cx={pathSize}
          cy={pathSize}
          r={pathRadius}
        />
      </svg>
    </div>
  );
}

export default React.memo(Spinner);
