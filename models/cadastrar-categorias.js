import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const CategoriasSchema = new mongoose.Schema({
  nome_categoria: {
    /* The name of this pet */

    type: String,
    required: [true, 'Insira o nome da categoria'],
    maxlength: [20, 'Name cannot be more than 60 characters'],
  },
  ativo_categorias: {
    /* The owner of this pet */

    type: Boolean,
  },
  subs_categorias: {
    /* The species of your pet */

    type: Array,
  },
  url_categorias: {
    /* Pet's age, if applicable */

    type: String,
    required: [true, 'Insira a URL da categoria'],
    maxlength: [20, 'Name cannot be more than 60 characters'],
  },
  pai_categorias: {
    /* Boolean poddy_trained value, if applicable */

    type: String,
    maxlength: [20, 'Name cannot be more than 60 characters'],
  },
  id_categorias: {
    /* List of dietary needs, if applicable */

    type: Number,
  },
})

export default mongoose.models.Categorias || mongoose.model('Categorias', CategoriasSchema)
