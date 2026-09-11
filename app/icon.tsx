import { ImageResponse } from "next/og";
export const size={width:64,height:64};
export const contentType="image/png";
export default function Icon(){return new ImageResponse(<div style={{width:"100%",height:"100%",background:"#173e2e",color:"#e2c779",display:"flex",alignItems:"center",justifyContent:"center",fontSize:39,fontFamily:"serif"}}>A</div>,size);}
