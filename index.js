import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/notes'
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

// ...

export default { getAll, create, update }

//middleware//
const cors = require('cors')

app.use(cors())

const PORT = process.env.PORT || 3001app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})