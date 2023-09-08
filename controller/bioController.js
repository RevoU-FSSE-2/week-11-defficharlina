const bioRouter = require("../routes/bio-route")

const getAllBio = async (req, res) => {
    try {
      const bio = await req.db.collection('bio').find().toArray()
      
      res.status(200).json({
        message: 'Biodata successfully retrieved',
        data: bio
      })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
  
  const createBio = async (req, res) => {
    const { name, address, phone, major } = req.body
    
    console.log(name, address, phone, major, `<=================== bio ==================`);
    
    try {
      const newBio = await req.db.collection('bio').insertOne({ name, address, phone, major })
      
      res.status(200).json({
        message: 'Biodata successfully created',
        data: newBio
      })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  const editBio = async (req, res) => {
    const { name, address, phone, major } = req.body
    
    console.log(req.query, `<=================== query ==================`);
    
    try {
      const bio = await req.db.collection('bio').updateOne({ _id: new ObjectId(id) }, { $set: { name, address, phone, major } })
      
      res.status(200).json({
        message: 'Biodata successfully edit',
        data: newBio
      })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  const deleteBio = async (req, res) => {
    const { name, address, phone, major } = req.body
    
    console.log(req.query, `<=================== query ==================`);
    
    try {
      const bio = await req.db.collection('bio').findOneAndUpdate({ _id: new ObjectId(id) }, { $set: { is_deleted: true } })
      
      res.status(200).json({
        message: 'Biodata successfully delete',
        data: newBio
      })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  /*bioRouter.put('/:id', async (req, res) => {
    const id = req.params.id
    const { name, address, phone, major } = req.body
    console.log(req.query, `<=================== query ==================`);
    
    const bio = await req.db.collection('bio').updateOne({ _id: new ObjectId(id) }, { $set: { name, address, phone, major } })
    
    res.status(200).json({
      message: 'success',
      data: bio
    })
  })
  
  bioRouter.delete("/:id",  async (req, res) => {
    const { id } = req.params;
  
    const bio = await req.db.collection('bio').findOneAndUpdate({ _id: new ObjectId(id) }, { $set: { is_deleted: true } })
    
    res.status(200).json({
      message: 'success',
    })
  })*/
  
  module.exports = {
    getAllBio,
    createBio,
    editBio,
    deleteBio
  }