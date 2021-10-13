import dbConnect from '../../../lib/cat-dbConnect'
import Cat from '../../../models/cadastrar-categorias'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const cat = await Cat.findById(id)
        if (!cat) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: cat })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        const cat = await Cat.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!cat) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: cat })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedCat = await Cat.deleteOne({ _id: id })
        if (!deletedCat) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}
