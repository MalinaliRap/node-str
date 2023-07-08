"Use strict"
const mongoose = require("mongoose")
const Costumer = mongoose.model("Costumer")

exports.create = async (data) => {
  let costumer = new Costumer(data)
  await costumer.save()
}
