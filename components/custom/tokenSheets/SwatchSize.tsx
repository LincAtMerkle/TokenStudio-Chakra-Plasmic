import * as React from "react";

export function SwatchSize({
  className,
  size,
}: {
  className: string;
  size: string;
}) {
  console.log("!!!!size: "+size)
  return (
    <div
      className={className}
      style={{ 
        height: size, 
        width: size, 
        backgroundColor: "yellow" 
    }}
    >
      {" "}
    </div>
  );
}
