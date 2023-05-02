import styles from '../../styles/contador.module.css'
interface IContatorProps{
    title:string
    onChange:(n:number)=>void
    value:number
}
export const Contatdor:React.FC<IContatorProps>=({title, onChange, value})=>{
    const handleInc=()=>{

        onChange(value+1)
    }
    const handleDec=()=>{
        if(value===1) {
            return
        } else{
            onChange(value-1)
        }
        
    }
    return(
        <div className={styles.box}>
            <h3>{title}</h3>
            <div className={styles.n}>
                {value}
            </div>
            <div className={styles.btns}>
                <div onClick={handleInc} className={styles.btn}>
                    +
                </div>
                <div className={styles.btn} onClick={handleDec}>
                    -
                </div>
            </div>
            
        </div>
    )
}