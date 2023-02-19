import * as React from "react";

export function SwatchParagraphSpacing({
  className,
  paragraphSpacing,
}: {
  className: string;
  paragraphSpacing: string;
}) {
  console.log("!!!!paragraphSpacing: "+paragraphSpacing)
  return (
    <div
      className={className}
      style={{ 
        margin: paragraphSpacing, 
        backgroundColor: "yellow" 
    }}
    >
      {" "}
    </div>
  );
}
