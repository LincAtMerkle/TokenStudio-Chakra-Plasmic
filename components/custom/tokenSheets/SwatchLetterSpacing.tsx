import * as React from "react";

export function SwatchLetterSpacing({
  className,
  letterSpacing,
}: {
  className: string;
  letterSpacing: string;
}) {
  console.log("letterSpacing: "+letterSpacing)
  return (
    <div
      className={className}
      style={{ 
        letterSpacing: letterSpacing, 
        backgroundColor: "yellow" 
    }}
    >
      {" "}
    </div>
  );
}
