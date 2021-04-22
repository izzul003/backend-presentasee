const RoomModel = require('../models/RoomsModel')
const SlideModel = require('../models/SlidesModel')
const convertapi = require('convertapi')(`xM9UWd1Xi3dz4Mxe`);
const path = require('path')
const Presentation = require('office-script').Presentation
module.exports = class RoomController {
  static async create(req, res, next){
    console.log('masuk')
    try {
      const {title} = req.body
      const newRoom = await RoomModel.create({
        title
      })
      res.status(201).json({newRoom})
    } catch (error) {
      console.log('error: ', error)
      res.status(500).json({error})
    }
  }

  static async uploadFile(req, res, next){
    try {
      const file = req.file
      const { _id } = req.params
        if (!file) {
          const error = new Error('Please upload a file')
          error.httpStatusCode = 400
          return next(error)
        }
        const uploadFileToRoom = await RoomModel.findOneAndUpdate({_id},{
          fileUrl: 'http://localhost:3000/static/uploads/'+file.filename 
        }, {new: true})

        if(uploadFileToRoom){
          let presentation
          presentation = new Presentation(path.join(__dirname,'../public/uploads/'+file.filename))
          // get presentation slides
          var slides = presentation.slides()
          console.log('Slide count: ', slides.length)
          await convertapi.convert('png', {
            File: path.join(__dirname,'../public/uploads/'+file.filename)
          }, 'ppt')
          .then(function(result) {
            result.saveFiles(path.join(__dirname,'../public/output/'));
            console.log('success')
          }).catch(err=> console.log('error >>>', error))
          let splittedFile = file.filename.split('.')
          for (let i = 1; i <= slides.length; i++) {
            if(i===1){
              SlideModel.create({
                RoomId: _id,
                fileUrl: 'http://localhost:3000/static/output/'+splittedFile[0]+'.png'
              }).then(res=>console.log())
            }else{
              SlideModel.create({
                RoomId: _id,
                fileUrl: 'http://localhost:3000/static/output/'+splittedFile[0]+'-'+i+'.png'
              }).then(res=>console.log())
            }            
          }
        }
          res.status(200).json({uploadFileToRoom})
    } catch (error) {
      console.log(error)
    }
  }

  static async read(req, res, next){
    try {
      const Rooms = await RoomModel.find()
      res.status(200).json({Rooms})
    } catch (error) {
      res.status(500).json({error})
    }
  }

  static async joinRoom (req, res, next) {
    try {
      const _id = req.body.RoomId
      const lastTotalJoin = await RoomModel.findOne({_id})
      const updatedTotalJoin = await RoomModel.findOneAndUpdate({_id},{
        joinned: +lastTotalJoin + 1
      }, {new: true})
      res.status(200).json({updatedTotalJoin})
    } catch (error) {
      res.status(500).json({error})
    }
  }
}