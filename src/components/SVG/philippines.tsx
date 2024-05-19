import React from "react";

export default function PhFlag({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1200"
      height="600"
      viewBox="-28 -45 180 90"
      fill="#fcd116"
      {...props}
    >
      <path
        fill="#0038a8"
        d="m-28-45h180V0L0 44z"
      />
      <path
        fill="#ce1126"
        d="m0 0h152v45H-28z"
      />
      <path
        fill="#fff"
        d="m49.942 0L-28 45v-90z"
      />
      <circle r="9" />
      <g id="c">
        <g id="b">
          <path
            id="a"
            d="m0 0-3.164-15.909.945-.946zl-1.169-17.831L0-19l1.169 1.169zl2.219-16.855.945.946z"
          />
          <use transform="scale(-1)" />
        </g>
        <use transform="rotate(90)" />
      </g>
      <use transform="rotate(45)" />
      <path
        id="s"
        d="m40.942 0-3.382 1.176L37.487 4.755l-2.163-2.853-3.427 1.037L33.942 0l-2.045-2.939 3.427 1.037 2.163-2.853L37.56-1.176z"
      />
      <use transform="rotate(120,-2.019,0)" />
      <use transform="rotate(240,-2.019,0)" />
    </svg>
  );
}
