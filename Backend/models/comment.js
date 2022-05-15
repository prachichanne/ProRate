const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentSchema = new Schema({
name: {
	type: String
},
review: {
	type:String
},
stars: {
	type: Number
}
}, {
	collection: 'comments'
})

module.exports = mongoose.model('Comment', commentSchema)
