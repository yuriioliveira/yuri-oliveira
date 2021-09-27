import Link from 'next/link';
import styles from '../styles.module.css'
import Head from 'next/head'

function Home() {
    return (
        <div>
            <Head>
                <title>Yuri Oliveira</title>
            </Head>
            <div className={styles.title}>
                <h1>Home</h1>
            </div>
            <div>
                <ul className={styles.ul}>
                    <li className={styles.li}><Link href="/sobre"><a>Sobre nós</a></Link></li>
                    <li className={styles.li}><Link href="/tempo"><a>Tempo</a></Link></li>
                </ul>
            </div>
            <div>
            <div class="title">
                <h2>Parte 2 da home</h2>
            </div>
                <div>
                    <ul>
                        <li>LI 1</li>
                        <li>LI 2</li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

// log the pageview with their URL
export const pageview = (url) => {
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    })
  }
  
  // log specific events happening.
  export const event = ({ action, params }) => {
    window.gtag('event', action, params)
  }

export default Home;


//import { useState } from 'react';

//function Home() {
//    return (
//        <div>
//            <h2>home </h2>
//            <Contador />
//        </div>
//    )
//}

//function Contador() {
//    const [contador,setContador] = useState(1);
//
//    function adicionarContador() {
//        setContador(contador + 2);
//    }
//
//    return(
//        <div>
//            <div>{contador}</div>
//            <button onClick={adicionarContador}>Adicionar</button>
//        </div>
//    )
//}

// export default Home