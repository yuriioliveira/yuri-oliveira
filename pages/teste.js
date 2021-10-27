import MenuTopo2 from '../components/Epagou/topo/menu/menu2'

function testeApi({ estrelas }) {
  return (
    <div>
      <p>Next.js has {estrelas} ⭐️</p>
      <MenuTopo2/>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://www.yurioliveira.tec.br/api/categoriasfixa')
  const json = await res.json()

  return {
    props: {
        estrelas: json.estrelas,
    },
  }
}

export default testeApi