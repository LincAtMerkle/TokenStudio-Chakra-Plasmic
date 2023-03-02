import * as React from "react";

export function SwatchBorderWidth({
  className,
  borderWidth,
}: {
  className: string;
  borderWidth: string;
}) {
  console.log("borderWidth: "+borderWidth)
  return (
    <div
      className={className}
      style={{ 
        borderWidth: borderWidth, 
        backgroundColor: "yellow" 
    }}
    >
      {" "}
    </div>
  );
}
