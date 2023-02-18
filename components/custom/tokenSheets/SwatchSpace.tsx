import * as React from "react";

export function SwatchSpace({
  className,
  space,
}: {
  className: string;
  space: string;
}) {
  return (
    <div
      className={className}
      style={{ 
        height: space, 
        width: space, 
        backgroundColor: "blue" 
    }}
    >
      {" "}
    </div>
  );
}
