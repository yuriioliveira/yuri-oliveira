import Link from 'next/link';

function Sobre() {
    return (
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
    )
}

export default Sobre