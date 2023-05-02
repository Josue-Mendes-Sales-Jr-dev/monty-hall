import PortaModel from "@/src/model/porta";
import styles from "./presente.module.css"
import { Presente } from "../presentes";

interface IPortaProps{
    value: PortaModel;
    numeroP:number;
    onChangee:(novaPorta: PortaModel)=>void;
}
export const Porta=(props:IPortaProps)=>{
    const porta=props.value
    const n=props.numeroP
    const selected= props.value.selecionada? styles.selecionada : ""

   const abrir=(e:any)=>{
    e.stopPropagation()
    props.onChangee(porta.abrir())
    console.log('click')
   }
    const  alternarSelecao=(e: any)=>props.onChangee(porta.alternarSelecao())
    
    const renderiza=()=>{
        return(
            <>  
                <div className={styles.box}>
                <div className={styles.numero}>{n}</div>
                <div className={styles.macaneta}  onClick={abrir}></div>
                </div>
           
            
            </>
        )
    }
  
    return(
        <>
        <div className={styles.area} onClick={alternarSelecao} >
           <div className={`${styles.estrutura} ${selected}`} >
            {
             porta.fechada ?
             renderiza(): porta.temPresente ? <Presente/> : false
             }
            </div>
            <div className={styles.chao}></div>
        </div>
        </>
    )

}