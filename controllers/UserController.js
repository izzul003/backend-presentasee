const UserModel = require('../models/UsersModel')
const bcrypt = require('bcryptjs')

module.exports = class UserController {
  static async read(req, res, next){
    try {
      const users = await UserModel.find().sort({'date':'descending'})
      res.status(200).json({data: users})
    } catch (error) {
      console.log(error.message)
      res.status(500).json({error})
    }
  }

  static async create (req, res, next) {
    try {
      let {name, email, password} = req.body
      password = bcrypt.hashSync(password,10)

      const record = {name, email, password}
      const response = await UserModel.create(record)

      res.status(201).json({response})
    } catch (error) {
      res.status(500).json({error})      
    }
  }

  static async login (req, res, next){
    try {
      const {email, password} = req.body
      
    } catch (error) {
      
    }
  }

  static async update(req, res, next){
    try {
      const {_id} = req.params
      const updateRecord = req.body

      const updatedOne = await UserModel.findOneAndUpdate({_id},updateRecord, {new: true})

      res.status(200).json({status: updatedOne})
    } catch (error) {
      console.log(error)
      res.status(500).json({error})      
    }
  }

  static async updatePassword(req, res, next){
    try {
      const {_id} = req.params
      let {password} = req.body
      password = bcrypt.hashSync(password,10)

      const updatedOne = await UserModel.findOneAndUpdate({_id}, {password}, {new: true})

      res.status(200).json({status: updatedOne})
    } catch (error) {
      console.log(error)
      res.status(500).json({error})      
    }
  }
  
  static async delete(req, res, next){
    try {
      const {_id} = req.params

      const deleteddOne = await UserModel.findOneAndDelete({_id})

      res.status(200).json({status: deleteddOne})
    } catch (error) {
      console.log(error)
      res.status(500).json({error})      
    }
  }
}