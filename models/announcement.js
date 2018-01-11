const mongoose = require('mongoose')
const Schema = mongoose.Schema

const announcementSchema = new Schema({
  content : {
    type: String
  },
  postedBy : {
      type : String
  },
  datePosted : {
    type : String
  }
})

const Announcement = mongoose.model('Announcement', announcementSchema)
module.exports = Announcement
