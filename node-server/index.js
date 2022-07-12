const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({router: 'ready'})
})

const port = process.env.PORT || 7766
app.listen(port, () => console.log(`app ready on ${port}`))