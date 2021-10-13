import Form from '../components/Form-categorias'

const NewCategoria = () => {
  const catForm = {
    nome_categoria: '',
    ativo_categorias: false,
    subs_categorias: '',
    url_categorias: '',
    pai_categorias: '',
    id_categorias: 0,
  }

  return <Form formId="add-cat-form" catForm={catForm} />
}

export default NewCategoria
