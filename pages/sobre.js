import Link from 'next/link';
import Header from '../components/header';
import Topo from '../components/topo';
import styles from '../styles.module.css';

function Sobre() {
    return (
        <div>
            <Header />
            <Topo />
            <div className={styles.title}>
                    <h1>Sobre nós</h1>
            </div>
            <div>
                <p>Eu sou o Yuri Oliveira</p>
            </div>
        </div>
    )
}

export default Sobre