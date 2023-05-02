import { Children } from "react";

interface ICartaoProps{
    Title:string;
    children?:React.ReactNode

}

export const Cartao:React.FC<ICartaoProps>=({Title,children})=>{
    return(
       <>
       <div>
         {Title}
         {children}
       </div>
       </>
    )
}