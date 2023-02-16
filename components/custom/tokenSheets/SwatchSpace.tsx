import * as React from "react";

export function SwatchSpace({
  className,
  size,
}: {
  className: string;
  size: string;
}) {
  return (
    <div
      className={className}
      style={{ 
        height: size, 
        width: size, 
        backgroundColor: "blue" 
    }}
    >
      {" "}
    </div>
  );
}
