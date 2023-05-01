import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import {Presente} from '../components/presentes'
import { Porta } from '../components/porta'
import PortaModel from '../model/porta'


export default function Home() {
  const [p1,setP1]=useState(new PortaModel(1))

  return (
    <>
      <div className={styles.main}>
      <Porta value={p1} onChangee={novaPorta => setP1(novaPorta)}/>
      </div>
    </>
  )
}
