import PortaModel from "@/src/model/porta";
import styles from "./presente.module.css"

interface IPortaProps{
    value: PortaModel;
    onChangee:(novaPorta: PortaModel)=>void;
}
export const Porta=(props:IPortaProps)=>{
    const porta=props.value
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
                <div className={styles.numero}>3</div>
                <div className={styles.macaneta}  onClick={abrir}></div>
                </div>
           
            
            </>
        )
    }
  
    return(
        <>
        <div className={styles.area} onClick={alternarSelecao} >
           <div className={`${styles.estrutura} ${selected}`} >
            {porta.aberta ? false : renderiza()}
            </div>
            <div className={styles.chao}></div>
        </div>
        </>
    )

}