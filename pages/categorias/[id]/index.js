import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import dbConnect from '../../../lib/cat-dbConnect'
import Cat from '../../../models/cadastrar-categorias'

/* Allows you to view pet card info and delete pet card*/
const CatPage = ({ cat }) => {
  const router = useRouter()
  const [message, setMessage] = useState('')
  const handleDelete = async () => {
    const catID = router.query.url_categorias

    try {
      await fetch(`/api/categorias/${catID}`, {
        method: 'Delete',
      })
      router.push('/')
    } catch (error) {
      setMessage('Failed to delete the category.')
    }
  }

  return (
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
            <button className="btn delete" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
      {message && <p>{message}</p>}
    </div>
  )
}

export async function getServerSideProps({ params }) {
  await dbConnect()

  const cat = await Cat.findById(params.id).lean()
  cat._id = cat._id.toString()

  return { props: { cat } }
}

export default CatPage
