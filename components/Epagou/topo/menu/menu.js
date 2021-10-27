// import { useEffect, useState } from "react";

// function MenuTopo() {
//     const[catgeral, setCategorias] = useState({})

//     useEffect(() => {
//         console.log('Passamos por aqui no menu');
//         handleGetCatData();
//     }, []);

//     async function handleGetCatData() {
//         const res = await fetch('http://localhost:3000/api/categoriasfixa');
//         const data = await res.json();
//         console.log(data.categorias);
//         setCategorias(data.categorias);
//     }

//     return (
//         <>
//             <h1>Categorias estrela: </h1>
//             <ul className="ulCategorias">
//                 {catgeral.map((cat) => (
//                     <li key={cat._id} className="liCategorias">
//                         <p className="pCategorias">{cat.Nome}</p>
//                     </li>
//                 ))}
//         </ul>
//         </>
//     )
// }

// export default MenuTopo

function MenuTopo() {
    
    return (
        <h3>area de categorias</h3>
    )
}


export default MenuTopo