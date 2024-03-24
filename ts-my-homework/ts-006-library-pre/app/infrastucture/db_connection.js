const {mongoose} = require('mongoose');

const DB_NAME = "db_library";
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/'+DB_NAME;
 
(async ()=>{    
    try{
        const db = await mongoose.connect(MONGO_URL, {dbName:DB_NAME});        
        console.log("db connected!");
    }catch(e){
        console.log(e, "error connect to mongo / mongoose");        
    }    
})();
