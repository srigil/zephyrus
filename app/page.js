import Image from 'next/image'
import styles from './page.module.css'
import { Headerpage } from './headerpage'
import Task from './task/page'
import Allrecords from './allrecords'
import CrossoutWordsTable from './sample'

export default function Home() {
  return (
    <>
     <Headerpage/>
     <CrossoutWordsTable/>
    
    </>
   
  )
}
