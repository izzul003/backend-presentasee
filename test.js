const convertapi = require('convertapi')('xM9UWd1Xi3dz4Mxe');
const path = require('path')
const Presentation = require('office-script').Presentation
let presentation
try {
  presentation = new Presentation(path.join(__dirname,'./public/uploads/15-puasa.ppt'))
    // get presentation slides
    var slides = presentation.slides()
    console.log('Slide count: ', slides.length)
    convertapi.convert('png', {
      File: './public/uploads/15-puasa.ppt'
    }, 'ppt')
    .then(function(result) {
      result.saveFiles('./public/output');
      console.log('success')
    })
} catch (error) {
  console.log(error)
}