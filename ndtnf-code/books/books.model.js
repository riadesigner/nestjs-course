const mongoose = require("mongoose");

const { Schema, SchemaTypes } = mongoose;
const schema = new Schema({
  title: SchemaTypes.String,
  description: SchemaTypes.String,
  authors: [SchemaTypes.String],
  favorite: SchemaTypes.String,
  fileCover: SchemaTypes.String
});

const Book = mongoose.model("Book", schema);

module.exports = { Book };
