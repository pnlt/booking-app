const fs = require('fs')
const data = require('./data.js')
const json = JSON.stringify(data)

fs.writeFile('data.json', json, 'utf8', err => {
  if (err) throw err
  console.log('File saved as data.json')
})
