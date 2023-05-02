import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Cartao } from '../components/cartao'
import Link from 'next/link'
import { useState } from 'react'
import { Contatdor } from '../components/contador'

export default function Home() {

  const[nPortas, setNPortas]=useState(3)
  const[nTemPresente, setNTemPresente]=useState(1)


  return(
     <div className={styles.box}>
         <div className={styles.main}>
         <div className={styles.Qd1}>
           <Cartao Title="Monty Hall"/>
         </div>
         <div className={styles.Qd2}>
           <Cartao>
            <Contatdor title='Qtde de portas' value={nPortas} onChange={n=>setNPortas(n)}/>
           </Cartao>
         </div>
         <div className={styles.Qd3}>
           <Cartao>
           <Contatdor title='Porta Premiada' value={nTemPresente} onChange={n=>setNTemPresente(n)}/>
           </Cartao>
         </div>
         <div className={styles.Qd4}>
           <Cartao Title="">
            <Link href={`jogo/${nPortas}/${nTemPresente}`}>
              Iniciar
            </Link>
            </Cartao>
         </div>
          </div>
  </div>
  )
}
