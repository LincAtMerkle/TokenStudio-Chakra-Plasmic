import * as React from "react";

export function ColorComponent({className,colorSwatch}:{className:string,colorSwatch:string}) {
    return <div className={className} style={{height:"24px",width:"24px",backgroundColor:colorSwatch}}> </div>
}