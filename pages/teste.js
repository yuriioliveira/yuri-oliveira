function testeApi({ estrelas }) {
  return (
    <div>
      <p>Next.js has {estrelas} ⭐️</p>
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