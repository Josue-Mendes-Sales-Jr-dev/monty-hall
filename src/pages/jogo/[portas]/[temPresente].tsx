/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"
import { criarPortas, atualizarPortas } from "../../../functions/portas"
import { Porta } from "../../../components/porta"
import styles from '../../../styles/Jogo.module.css'
import Link from "next/link"
import { useRouter } from "next/router"
import PortaModel from "@/src/model/porta"

export default function jogo(){

   const router =useRouter()

    const [portas, setPortas] = useState([] as any)

    useEffect(()=>{
       const portas= Number(router.query.portas)
       const temPresente = Number(router.query.temPresente)
       setPortas(criarPortas(portas, temPresente))
       
    },
    [router?.query])
    
    
    return(

    <div className={styles.box}>
      <div className={styles.main}>
      {
      portas.map((porta: PortaModel, i: number)=>(
       <Porta key={i+1} value={porta}
        numeroP={i+1}
        onChangee={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}
        />
      ))
      }
       </div>

       <Link href="/" className={styles.a}>
       <div className={styles.btn}>
        Reiniciar o jogo
       </div>
       </Link>
      
    </div>
 
 )
}