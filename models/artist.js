const orm = require("../config/orm");

const artist = {
    all: function(cb) {
        orm.allArtists(function(res) {
          cb(res);
        });
      },
      create: function(cols, vals, cb) {
        orm.create("topArtists", cols, vals, function(res) {
          cb(res);
        });
      }
  };
  
  module.exports = artist;