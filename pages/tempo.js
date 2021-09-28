import Link from 'next/link';
import styles from '../styles.module.css';
import Header from '../components/header';
import Topo from '../components/topo';

function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <Header />
            <Topo />
            <div>
                <div className={styles.title}>
                    <h1>Tempo</h1>
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