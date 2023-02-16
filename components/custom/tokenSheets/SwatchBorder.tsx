import * as React from "react";

export function SwatchBorder({
  className,
  border,
}: {
  className: string;
  border: string;
}) {
  return (
    <div
      className={className}
      style={{
        border: border,
      }}
    >
      {" "}
    </div>
  );
}
