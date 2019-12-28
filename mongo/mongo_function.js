var MongoClient = require('mongodb').MongoClient;
require('dotenv').config()
var url = process.env.MONGO;
class Mongo {
    insert(name_val,email_val,callback){
        MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
        if (err) {throw err};
        var dbo = db.db("stock");
        var myobj = { name: name_val, email: email_val };
        dbo.collection("user").insertOne(myobj,function(err, res) {
            if(err){throw err}
            return callback( {success:'OK'} )
            });
        });
    }
}


module.exports = Mongo