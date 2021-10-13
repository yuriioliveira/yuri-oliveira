import { useRouter } from 'next/router'
import useSWR from 'swr'
import Form from '../../../components/Form-categorias'

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data)

const EditCat = () => {
  const router = useRouter()
  const { id } = router.query
  const { data: cat, error } = useSWR(id ? `/api/categorias/categorias/${id}` : null, fetcher)

  if (error) return <p>Failed to load</p>
  if (!cat) return <p>Loading...</p>

  const catForm = {
    nome_categoria: pet.nome_categoria,
    ativo_categorias: pet.ativo_categorias,
    subs_categorias: pet.subs_categorias,
    url_categorias: pet.url_categorias,
    pai_categorias: pet.pai_categorias,
    id_categorias: pet.id_categorias,
  }

  return <Form formId="edit-cat-form" petForm={catForm} forNewPet={false} />
}

export default EditCat
