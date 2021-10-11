import Link from 'next/link';
import styles from '../styles.module.css';
import Image from 'next/image'


function Topo() {
    return (
        <div>
            <div className={styles.areaTopo}>
                <div>
                    <Image className={styles.logotipo} src="/logo.png" alt="Logotipo ALT" width="250" height="75" />
                </div>
                <div className={styles.areaMenu}>
                    <ul className={styles.areaMenu.ul}>
                        <li className={styles.areaMenu.li}><a href="/">Página inicial</a></li>
                        <li className={styles.areaMenu.li}><a href="/paginapets">Pets MongoDb</a></li>
                        <li className={styles.areaMenu.li}><a href="/sobre">Sobre nós</a></li>
                        <li className={styles.areaMenu.li}><a href="/tempo">tempo</a></li>
                        <li className={styles.areaMenu.li}><a href="/ecomprei">Ecomprei</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Topo