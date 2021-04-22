"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SlideModel = require('../models/SlidesModel');

module.exports =
/*#__PURE__*/
function () {
  function SlideController() {
    _classCallCheck(this, SlideController);
  }

  _createClass(SlideController, null, [{
    key: "read",
    value: function read(req, res, next) {
      var RoomId, slides;
      return regeneratorRuntime.async(function read$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              RoomId = req.params.RoomId;
              _context.next = 4;
              return regeneratorRuntime.awrap(SlideModel.find({
                RoomId: RoomId
              }));

            case 4:
              slides = _context.sent;
              res.status(200).json(slides);
              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
              res.status(500).json({
                error: _context.t0
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 8]]);
    }
  }, {
    key: "addLike",
    value: function addLike(req, res, next) {
      var _id, _getLastTotalLike, updateRecord, updatedOne;

      return regeneratorRuntime.async(function addLike$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _id = req.params._id;
              _context2.next = 4;
              return regeneratorRuntime.awrap(SlideModel.findOne({
                _id: _id
              }));

            case 4:
              _getLastTotalLike = _context2.sent;
              updateRecord = {
                likes: +_getLastTotalLike.likes + 1
              };
              _context2.next = 8;
              return regeneratorRuntime.awrap(SlideModel.findOneAndUpdate({
                _id: _id
              }, updateRecord, {
                "new": true
              }));

            case 8:
              updatedOne = _context2.sent;
              res.status(200).json({
                status: updatedOne
              });
              _context2.next = 16;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);
              res.status(500).json({
                error: _context2.t0
              });

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 12]]);
    }
  }, {
    key: "addQuestions",
    value: function addQuestions(req, res, next) {
      var _id, getLastTotalQuestions, updateRecord, updatedOne;

      return regeneratorRuntime.async(function addQuestions$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _id = req.params._id;
              _context3.next = 4;
              return regeneratorRuntime.awrap(SlideModel.findOne({
                _id: _id
              }));

            case 4:
              getLastTotalQuestions = _context3.sent;
              updateRecord = {
                questions: +getLastTotalLike.questions + 1
              };
              _context3.next = 8;
              return regeneratorRuntime.awrap(SlideModel.findOneAndUpdate({
                _id: _id
              }, updateRecord, {
                "new": true
              }));

            case 8:
              updatedOne = _context3.sent;
              res.status(200).json({
                status: updatedOne
              });
              _context3.next = 16;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](0);
              console.log(_context3.t0);
              res.status(500).json({
                error: _context3.t0
              });

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[0, 12]]);
    }
  }]);

  return SlideController;
}();