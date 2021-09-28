import Link from 'next/link';
import Head from 'next/head'

function Sobre() {
    return (
        <div>
            <Head>
                <title>Yuri Oliveira</title>
            </Head>
            <div class="title">
                <h1>Sobre</h1>
            </div>
            <div>
                <ul>
                    <li><Link href="/"><a>Página inicial</a></Link></li>
                    <li><Link href="/tempo"><a>Tempo</a></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Sobre