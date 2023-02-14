import * as React from "react";

export function ColorComponent({
  className,
  color,
}: {
  className: string;
  color: string;
}) {
  return (
    <div
      className={className}
      style={{
        height: "24px",
        width: "24px",
        backgroundColor: color,
      }}
    ></div>
  );
}
