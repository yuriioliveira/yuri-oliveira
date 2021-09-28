import Link from 'next/link';
import styles from '../styles.module.css';

function Topo() {
    return (
        <div>
            <div>
                <Link href="/">
                    <a>LOGOTIPO</a>
                </Link>
            </div>
            <div>
                <div>
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/sobre"><a>Sobre nós</a></Link>
                    <Link href="/tempo"><a>Tempo</a></Link>
                </div>
            </div>
        </div>
    )
}

export default Topo