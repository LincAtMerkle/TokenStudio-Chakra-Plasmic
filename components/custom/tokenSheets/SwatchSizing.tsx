import * as React from "react";

export function SwatchSizing({
  className,
  sizing,
}: {
  className: string;
  sizing: string;
}) {
  console.log("!!!!size: "+sizing)
  return (
    <div
      className={className}
      style={{ 
        height: sizing, 
        width: sizing, 
        backgroundColor: "yellow" 
    }}
    >
      {" "}
    </div>
  );
}
