import { useState } from 'react'
import { useRouter } from 'next/router'
import { mutate } from 'swr'

const Form = ({ formId, catForm, forNewCat = true }) => {
  const router = useRouter()
  const contentType = 'application/json'
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

  const [form, setForm] = useState({
    nome_categoria: catForm.nome_categoria,
    ativo_categorias: catForm.ativo_categorias,
    subs_categorias: catForm.subs_categorias,
    url_categorias: catForm.url_categorias,
    pai_categorias: catForm.pai_categorias,
    id_categorias: catForm.id_categorias,
  })

  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form) => {
    const { id } = router.query

    try {
      const res = await fetch(`/api/categorias/${id}`, {
        method: 'PUT',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status)
      }

      const { data } = await res.json()

      mutate(`/api/categorias/${id}`, data, false) // Update the local data without a revalidation
      router.push('/')
    } catch (error) {
      setMessage('Failed to update Categorias novas')
    }
  }

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const res = await fetch('/api/categorias', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status)
      }

      router.push('/')
    } catch (error) {
      setMessage('Failed to add categorias aqui errou')
    }
  }

  const handleChange = (e) => {
    const target = e.target
    const value =
      target.name === 'ativo_categorias' ? target.checked : target.value
    const name = target.name

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = formValidate()
    if (Object.keys(errs).length === 0) {
      forNewCat ? postData(form) : putData(form)
    } else {
      setErrors({ errs })
    }
  }

  /* Makes sure pet info is filled for pet name, owner name, species, and image url*/
  const formValidate = () => {
    let err = {}
    if (!form.nome_categoria) err.name = 'Name da categoria é obrigatório'
    if (!form.url_categorias) err.owner_name = 'URL é obrigatório'
    return err
  }

  return (
    <>
      <form id={formId} onSubmit={handleSubmit}>
        <label htmlFor="nome_categoria">Nome da categoria</label>
        <input
          type="text"
          maxLength="20"
          name="nome_categoria"
          value={form.nome_categoria}
          onChange={handleChange}
          required
        />

        <label htmlFor="ativo_categorias">Ativo</label>
        <input
          type="checkbox"
          name="ativo_categorias"
          checked={form.ativo_categorias}
          onChange={handleChange}
        />

        <label htmlFor="subs_categorias">Subcategoria</label>
        <input
          type="text"
          maxLength="30"
          name="subs_categorias"
          value={form.subs_categorias}
          onChange={handleChange}
          required
        />

        <label htmlFor="url_categorias">Url</label>
        <input
          type="text"
          maxLength="30"
          name="url_categorias"
          value={form.url_categorias}
          onChange={handleChange}
          required
        />

        <label htmlFor="pai_categorias">Categoria pai</label>
        <input
          type="text"
          maxLength="30"
          name="pai_categorias"
          value={form.pai_categorias}
          onChange={handleChange}
          required
        />

        <label htmlFor="id_categorias">ID</label>
        <input
          type="number"
          name="id_categorias"
          value={form.id_categorias}
          onChange={handleChange}
        />

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </>
  )
}

export default Form
