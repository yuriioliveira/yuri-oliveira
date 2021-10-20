import Link from 'next/link'
import dbConnect from '../lib/cat-dbConnect'
import Cat from '../models/cadastrar-categorias'
import BarraTopo from '../components/Epagou/topo/barratopo'
import { useLayoutEffect } from 'react'

const Index = ({ cats }) => (
  <>
    <div>
      <BarraTopo />
    </div>
    {/* Create a card for each pet */}
    <div className="divCategorias">
    <ul className="ulCategorias">
    {cats.map((cat) => (
            <li key={cat._id} className="liCategorias">
                <p className="pCategorias">{cat.nome_categoria}</p>
            </li>
    ))}
    </ul>
    <p>categorias pelo mongoDB</p>
    </div>
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