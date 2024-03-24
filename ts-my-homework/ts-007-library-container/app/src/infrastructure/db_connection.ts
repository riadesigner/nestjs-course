import { connect } from 'mongoose';

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017';

run().catch(err => console.log(err));

async function run() {  
  await connect(MONGO_URL,{dbName:'db_library'});
}
