/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"
import { criarPortas, atualizarPortas } from "../../../functions/portas"
import { Porta } from "../../../components/porta"
import styles from '../../../styles/Jogo.module.css'
import Link from "next/link"
import { useRouter } from "next/router"
import PortaModel from "@/src/model/porta"

export default function jogo(){

   const fullScreen=()=>{
          const full=document.documentElement
          full.requestFullscreen()
   }
   
   const router =useRouter()

    const [portas, setPortas] = useState([] as any)
    const [validar, setValidar] = useState(false)

    useEffect(()=>{
       const portas= Number(router.query.portas)
       const temPresente = Number(router.query.temPresente)

       const qtdePortasValida = portas >=3 && portas <=100
       const temPreseteValida= temPresente >=1 && temPresente <= portas
       setValidar(qtdePortasValida && temPreseteValida)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[portas])

    useEffect(()=>{
       const portas= Number(router.query.portas)
       const temPresente = Number(router.query.temPresente)
       setPortas(criarPortas(portas, temPresente))
       
    },
    [router?.query])
    
    useEffect(()=>{
      fullScreen()
    },[])
    
    return(

    <div className={styles.box} id="full">
      <div className={styles.main}>
      {validar ? portas.map((porta: PortaModel, i: number)=>(
       <Porta key={i+1} value={porta}
        numeroP={i+1}
        onChangee={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}
        />
      ))
      :
      <h1 className={styles.inv}>Dados inválidos</h1>
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