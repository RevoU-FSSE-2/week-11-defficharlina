
const getAllBio = async (req, res) => {
    try {
      const bio = await req.db.collection('bio').find().toArray()
      
      res.status(200).json({
        message: 'Biodata successfully retrieved',
        data: blog
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
        message: 'Bio successfully created',
        data: newBio
      })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
  
  module.exports = {
    getAllBio,
    createBio
  }