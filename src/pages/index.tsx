import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Cartao } from '../components/cartao'
import Link from 'next/link'

export default function Home() {

  return(
     <div className={styles.box}>
         <div className={styles.main}>
         <div className={styles.Qd1}>
           <Cartao Title="Monty Hall"/>
         </div>
         <div className={styles.Qd2}>
           <Cartao Title="" />
         </div>
         <div className={styles.Qd3}>
           <Cartao Title="" />
         </div>
         <div className={styles.Qd4}>
           <Cartao Title="">
            <Link href="/jogo/10/4">
              Iniciar
            </Link>
            </Cartao>
         </div>
          </div>
  </div>
  )
}
