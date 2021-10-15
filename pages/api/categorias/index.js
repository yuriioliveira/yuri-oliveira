import dbConnect from '../../../lib/cat-dbConnect'
import Cat from '../../../models/cadastrar-categorias'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const cats = await Cat.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: cats })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const cat = await Cat.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: cat })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
