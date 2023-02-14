import * as React from "react";

export function ColorComponent({className,color}:{className:string,color:string}) {
    console.log("color: "+color)
    return <div className={className} style={{height:"24px",width:"24px",backgroundColor:color}}> </div>
}