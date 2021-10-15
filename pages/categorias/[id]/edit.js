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
  const { data: cat, error } = useSWR(id ? `/api/categorias/${id}` : null, fetcher)

  if (error) return <p>Failed to load</p>
  if (!cat) return <p>Loading...</p>

  const catForm = {
    nome_categoria: cat.nome_categoria,
    ativo_categorias: cat.ativo_categorias,
    subs_categorias: cat.subs_categorias,
    url_categorias: cat.url_categorias,
    pai_categorias: cat.pai_categorias,
    id_categorias: cat.id_categorias,
  }

  return <Form formId="edit-cat-form" catForm={catForm} forNewCat={false} />
}

export default EditCat
