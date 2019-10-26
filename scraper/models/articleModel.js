var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema ({
    body:{
        type:String
    },
    link:{
        type:String
    }
});

var Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;