"use-strict"
const mongoose = require("mongoose")
const Product = mongoose.model("Product")
const ValidationContrat = require("../validators/fluent-validator")
const repository = require("../repositories/product-repository")

exports.get = async (req, res, next) => {
  try {
    let data = await repository.get()
    res.status(200).send(data)
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processa sua requisição",
    })
  }
}
exports.getBySlug = async (req, res, next) => {
  try {
    let data = await repository.getBySlug(req.params.slug)
    res.status(200).send(data)
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    })
  }
}

exports.getById = async (req, res, next) => {
  try {
    let data = await repository.getById(req.params.id)
    res.status(200).send(data)
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    })
  }
}

exports.getByTag = async (req, res, next) => {
  try {
    const data = await repository.getByTag(req.params.tag)
    res.status(200).send(data)
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    })
  }
}

exports.post = async (req, res, next) => {
  let contract = new ValidationContrat()
  contract.hasMinLen(
    req.body.title,
    3,
    "O titulo deve conter pelo menos 3 caracteres"
  )
  contract.hasMinLen(
    req.body.slug,
    3,
    "O titulo deve conter pelo menos 3 caracteres"
  )
  contract.hasMinLen(
    req.body.description,
    3,
    "O titulo deve conter pelo menos 3 caracteres"
  )

  //se os dados forem inválidos

  if (!contract.isValid()) {
    res.status(400).send(contract.errors()).end()
    return
  }

  try {
    await repository.create(req.body)
    res.status(201).send({
      message: "Produto cadastrado com sucesso!",
    })
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    })
  }
}

exports.put = async (req, res, next) => {
  try {
    await repository.update(req.params.id, req.body)
    res.status(200).send({
      message: "Produto atualizado com sucesso!",
    })
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    })
  }
}

exports.del = async (req, res, next) => {
  try {
    await repository.delete(req.body.id)
    res.status(200).send({
      message: "Produto removido com sucesso",
    })
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    })
  }
}
