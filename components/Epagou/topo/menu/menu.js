import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function MenuTopo() {
    const { data, error } = useSWR(
      "http://localhost:3000/api/categoriasfixa",
      fetcher
    );
  
    if (error) return "An error has occurred.";
    if (!data) return "Loading...";
    
    const categorias = data.categorias;

    console.log(data.categorias)
    
    return (
      <div>
        <ul>
            {categorias.map((cat) => (
                <li key={cat.id}>
                    <p>{ cat.Nome}</p>
                </li>
            ))}
        </ul>
      </div>
    );
  }
  



// function MenuTopo() {
    
//     return (
//         <h3>area de categorias</h3>
//     )
// }


// export default MenuTopo


// import { useEffect, useState } from "react";

// function MenuTopo() {
//     const[catgeral, setCategorias] = useState({})

//     useEffect(() => {
//         console.log('Passamos por aqui no menu');
//         handleGetCatData();
//     }, []);

//     export async function handleGetCatData() {
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