import PortaModel from "@/src/model/porta";
import styles from "./presente.module.css"

interface IPortaProps{
    value: PortaModel;
    onChangee:(novaPorta: PortaModel)=>void;
}
export const Porta=(props:IPortaProps)=>{
    const porta=props.value
    const selected= props.value.selecionada? styles.selecionada : ""
    
    const  alternarSelecao=(e: any)=>props.onChangee(porta.alternarSelecao())
    return(
        <>
        <div className={styles.box} >
            <div className={`${styles.area} ${selected}`} onClick={alternarSelecao}>
                <div className={styles.numero}>3</div>
                <div className={styles.macaneta}></div>
            </div>
            <div className={styles.chao}></div>
        </div>
        </>
    )

}