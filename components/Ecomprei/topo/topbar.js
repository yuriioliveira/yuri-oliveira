import Image from 'next/image';
import Link from 'next/link';
import styles from '../../../styles.module.css';

function Topbar() {
    return (
        <div>
        <div className={styles.topbar2area}>
            <div className={styles.topbar2entrega}>
                <Image src="/truck-icon.png" width="25" height="25" />
                <p>Entregamos em <b>TODO O BRASIL</b></p>
            </div>
            <div className={styles.topbar2cartao}>
            <Image src="/card-icon.png" width="25" height="25" />
                <p>Toda a Loja em até <b>12X SEM JUROS</b></p>
            </div>
            <div className={styles.topbar2desconto}>
            <Image src="/desconto-icon.png" width="25" height="25" />
                <p><b>5% DE DESCONTO</b> no boleto</p>
            </div>
            <div className={styles.topbar2rastreio}>
                <Image src="/rastreio-icon.png" width="25" height="25" />
                <p>Rastrear meu pedido</p>
                <div className={styles.myrastreio}>
                    <p>Insira o código de rastreio</p>
                    <input type="text" id="campoInput" placeholder="60647854"/>
                    <button id="btnInput" name="button">Rastrear</button>
                    <p className={styles.obsrastreio}>*apenas números</p>
                </div>
            </div>
            <div className={styles.topbar2meuspedidos}>
                <Link href="/painel-do-cliente/pedidos/">
                    <a>Meus pedidos</a>
                </Link>
            </div>
            <div className={styles.topbar2atendimento}>
                <Link href="/central-de-relacionamento/">
                    <a>Atendimento</a>
                </Link>
            </div>
        </div>
    </div>
    )
}


export default Topbar