import Link from 'next/link'
import dbConnect from '../lib/cat-dbConnect'
import Cat from '../models/cadastrar-categorias'
import BarraTopo from '../components/Ecomprei/topo/barratopo'

const Index = ({ cats }) => (
  <>
    <div>
      <BarraTopo />
    </div>
    {/* Create a card for each pet */}
    {cats.map((cat) => (
      <div key={cat._id}>
        <div className="card">
          <h5 className="cat-name">{cat.nome_categoria}</h5>
          <div className="main-content">
            <p className="cat-name">{cat.nome_categoria}</p>
            <p className="owner">Ativo: {cat.ativo_categorias}</p>
            <p className="owner">subcategorias: {cat.subs_categorias}</p>
            <p className="owner">URL: {cat.url_categorias}</p>
            <p className="owner">Categoria pai: {cat.pai_categorias}</p>
            <p className="owner">Id: {cat.id_categorias}</p>

            <div className="btn-container">
              <Link href="/categorias/[id]/edit" as={`/categorias/${cat._id}/edit`}>
                <button className="btn edit">Edit</button>
              </Link>
              <Link href="/[id]" as={`/${cat._id}`}>
                <button className="btn view">View</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
)

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const result = await Cat.find({})
  const cats = result.map((doc) => {
    const cat = doc.toObject()
    cat._id = cat._id.toString()
    return cat
  })

  return { props: { cats: cats } }
}

export default Index
