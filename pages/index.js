import Link from 'next/link';

function Home() {
    return (
        <div>
            <h1>Home</h1>

            <Link href="/sobre">
                <a>Sobre nós</a>
            </Link>
        </div>
    )
}

export default Home


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