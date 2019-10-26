var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema ({
    body:{
        type:String
    }
});

var Note = mongoose.model('Note', ArticleSchema);
module.exports = Note;