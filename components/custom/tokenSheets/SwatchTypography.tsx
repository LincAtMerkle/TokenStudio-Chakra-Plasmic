import * as React from "react";

export function SwatchTypography({
  className,
  typography,
}: {
  className: string;
  typography: string;
}) {
  console.log("!!!!typography: "+typography)
  return (
    <h1
      className={className}
      style={{ 
        fontFamily: typography
    }}
    >
      Typography
    </h1>
  );
}
