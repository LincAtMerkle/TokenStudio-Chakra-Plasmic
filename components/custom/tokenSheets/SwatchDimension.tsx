import * as React from "react";

export function SwatchDimension({
  className,
  dimension,
}: {
  className: string;
  dimension: string;
}) {
  console.log("!!!!dimension: "+dimension)
  return (
    <div
      className={className}
      style={{
        height: "24px",
        width: "24px",
        // dimension: dimension,
      }}
    ></div>
  );
}
