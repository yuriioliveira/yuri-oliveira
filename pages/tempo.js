import Link from 'next/link';
import Head from 'next/head'

function Tempo(props) {
    console.log('> passando pelo Frontend;')
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <Head>
                <title>Yuri Oliveira port</title>
            </Head>
            <div>
                <div class="title">
                    <h1>Sobre</h1>
                </div>
                <div>
                    <ul>
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="/tempo"><a>Tempo</a></Link></li>
                    </ul>
                </div>
            </div>
            <div>
                <div>{dynamicDateString} (dinâmico)</div>
                <div>{props.staticDateString} (estático)</div>
            </div>
        </div> 
    )
}

export function getStaticProps() {
    console.log('> passando pelo getStaticProps();')
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        },
        revalidate: 1
    }
}

export default Tempo;