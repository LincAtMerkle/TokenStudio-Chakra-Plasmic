import * as React from "react";

export function SwatchBoxShadow({
  className,
  boxShadow,
}: {
  className: string;
  boxShadow: string;
}) {
  console.log("boxShadow: "+boxShadow)
  return (
    <div
      className={className}
      style={{
        height: "24px",
        width: "24px",
        boxShadow: boxShadow,
      }}
    ></div>
  );
}
