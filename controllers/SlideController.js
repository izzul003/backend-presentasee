const SlideModel = require('../models/SlidesModel')

module.exports = class SlideController {
  static async read (req, res, next){
    try {
      const {RoomId} = req.params
      const slides = await SlideModel.find({RoomId})
      res.status(200).json(slides)
    } catch (error) {
      console.log(error)
      res.status(500).json({error})
    }
  }

  static async addLike (req, res, next){
    try {
      const {_id} = req.params
      const getLastTotalLike = await SlideModel.findOne({_id})
      const updateRecord = {
        likes: +getLastTotalLike.likes + 1
      }

      const updatedOne = await SlideModel.findOneAndUpdate({_id},updateRecord, {new: true})

      res.status(200).json({status: updatedOne})
    } catch (error) {
      console.log(error)
      res.status(500).json({error})      
    }
  }

  static async addQuestions (req, res, next){
    try {
      const {_id} = req.params
      const getLastTotalQuestions = await SlideModel.findOne({_id})
      const updateRecord = {
        questions: +getLastTotalLike.questions + 1
      }

      const updatedOne = await SlideModel.findOneAndUpdate({_id},updateRecord, {new: true})

      res.status(200).json({status: updatedOne})
    } catch (error) {
      console.log(error)
      res.status(500).json({error})      
    }
  }
}