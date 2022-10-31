//  Add your code here


const { Schema, model } = require('mongoose')

const celebritySchema = new Schema({
  name: {
    type: String
  },
  occupation: {
    type: [String]
  },
  catchPhrase: {
    type: String
  },
})

const celebrityModel = model('celebrity', celebritySchema)

module.exports = celebrityModel