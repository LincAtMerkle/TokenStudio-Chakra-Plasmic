import React, { useEffect, useMemo, useState } from "react";
import { Documentation } from "./Documentation";
import DesignTokenItem from "./DesignTokenItem";

export type ChakraDocsProps = JSX.IntrinsicAttributes & {
  set?: string;
  path?: string;
  theme?: string;
  className?: string;
};

export function ChakraDocs(
  { set, path, theme, className }: ChakraDocsProps,
  render: (data: any) => JSX.Element
) {
  {
    const [copiedToken, setCopiedToken] = useState("");
    const onTokenCopy = async (value: string, tokenName: any) => {
      if (!navigator?.clipboard) {
        alert("Clipboard not supported");
      }

      try {
        await navigator.clipboard.writeText(value);
        setCopiedToken(`${tokenName}${value}`);
      } catch (error) {
        alert("Error copying value");
      }
    };
    console.log(`SET: ${set}`);
    return (
      <div className={className}>
        <Documentation
          theme={theme}
          path={path}
          set={set}
          render={(data) => {
            console.log("data: "+JSON.stringify(data));
            return data.map(
              ({ value, tokenName, variant, description }: any, i: any) => {
                return (      
                  <div key={`token-docs-${i}`} style={{ padding: 0 }}>
                    <DesignTokenItem
                      //@ts-ignore
                      value={value}
                      tokenName={tokenName}
                      variant={variant}
                      description={description}
                      //
                      //
                      textValue={value} // do I need this?
                      // radius={value}
                      // fontSize={value} //parseInt(value)}
                      // color ={value}



                      // Only 1 needs to appear for each item
                      // THIS IS WORNG as also need to appear for comp/ or semantic/ or brandA/...
                      color ={set === "core/color" ? value : undefined}
                      size ={set === "core/size" ? value : undefined}
                      border ={set === "core/border" ? value : undefined}
                      opacity ={set === "core/opacity" ? value : undefined}
                      space ={set === "core/space" ? value : undefined}
                      typography ={set === "core/typography" ? value : undefined}
                    />
                  </div>
                );
              }
            );
          }}
        />
      </div>
    );
  }
}
