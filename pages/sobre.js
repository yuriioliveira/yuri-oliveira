import Link from 'next/link';
import Header from '../components/header';

function Sobre() {
    return (
        <div>
            <Header />
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