function MenuTopo() {

    return (
        <h3>Menu topo</h3>
    )
    
}

export default MenuTopo

// import axios from 'axios';



// export default function menuTopo({ cats }) {

//     return (
//         <div className="divCategorias">
//             <ul className="ulCategorias">
//                 {cats.map((cat) => (
//                     <li key={cat._id} className="liCategorias">
//                         <p className="pCategorias">{cat.nome_categoria}</p>
//                     </li>
//                 ))}
//             </ul>
//             <p>categorias pelo mongoDB</p>
//         </div>
//     )
// }

// export async function getServerSideProps() {
//     const { db } = await DbConnect();
//     const cats = await db
//     return {
//       props: {
//         cats: JSON.parse(JSON.stringify(cats)),
//       },
//     };
//   }
