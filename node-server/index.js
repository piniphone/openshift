const { faker } = require('@faker-js/faker');
const express = require('express')
const cors = require('cors')


const fakePosts = []
for (let i = 0; i < 100; i++) {
  fakePosts.push({
    id: i,
    title: faker.name.jobTitle(),
    body: faker.lorem.paragraph(),
  })
}

const app = express()
app.use(cors())
app.get('/', (req, res) => res.json(fakePosts))
app.get('/:id', (req, res) => res.json(fakePosts[req.params.id]))

const port = process.env.PORT || 7766

app.listen(port, () => console.log(`server ready on ${port}`))
