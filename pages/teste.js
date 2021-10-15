import Link from 'next/link'

function testeApi() {
  return (
    <h1>Página de teste</h1>
  )
}


// function testeApi({ estrelas }) {
//   return (
//     <div>
//       <p>Next.js has {estrelas} ⭐️</p>
//       <Link href="/preact-stars">
//         <a>How about preact?</a>
//       </Link>
//       <p>Lista das categorias aqui pra baixo Está comentado</p>
//     </div>
//   )
// }

// export async function getStaticProps() {
//   const res = await fetch('https://www.yurioliveira.tec.br/api/categoriasfixa')
//   const json = await res.json()

//   return {
//     props: {
//         estrelas: json.estrelas,
//     },
//   }
// }

export default testeApi