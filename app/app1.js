MongoClient.connect(url,{ useNewUrlParser: true },function(err,db){
    if(err){
        console.log(err);
    }
    else {
        console.log('connected to '+ url);
        db.close();
    }
  })