import * as React from "react";

export function SwatchTextDecoration({
  className,
  textDecoration,
}: {
  className: string;
  textDecoration: string;
}) {
  console.log("textDecoration: "+textDecoration)
  return (
    <div
      className={className}
      style={{ 
        textDecoration: textDecoration, 
        backgroundColor: "yellow" 
    }}
    >
      {" "}
    </div>
  );
}
