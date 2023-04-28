import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Presente} from '../components/presentes'
import { Porta } from '../components/porta'
import PortaModel from '../model/porta'


export default function Home() {
  const p1=new PortaModel(1, false, true)

  return (
    <>
      <div className={styles.main}>
      <Porta value={p1} onChangee={novaPorta => console.log(novaPorta)}/>
      </div>
    </>
  )
}
