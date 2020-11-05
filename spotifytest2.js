
var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: 'fcecfc72172e4cd267473117a17cbd4d',
  clientSecret: 'a6338157c9bb5ac9c71924cb2940e1a7',
});
spotifyApi.setAccessToken('BQDXW9fOPC0nYJpd3YyQx9Jsgag3wJkd2oNvmkRMbdQlxk33RI324R9zCGajM4HdDe3T_HozjCfS6O5pNOmTC_Bm_B2qiDxb3xVpIzF_TiATw7sDgR4jx0b-3xaAHdQwsR-9lmgDKsup');

async function albumList(artistID){ 
   let artist_albums = await spotifyApi.getArtistAlbums(artistID).then(
    
    function(data) {
    
    //   console.log('Artist albums', data.body.items[6].name);
        artistAlbums = data.body.items.map(item => item.name)
        // console.log(artistAlbums)
        return artistAlbums
    },
    function(err) {
      console.error(err);
    }
  );
  // console.log("test" ,artist_albums)
  return artist_albums;
}
async function albumTracks(albumID){

   let album_tracks = await spotifyApi.getAlbumTracks(albumID).then(
     
    function(data) {

      albumTracksList = data.body.items.map(item => item.name)
    // console.log(albumTracksList);
    return albumTracksList;
  }, function(err) {
    console.log('Something went wrong!', err);
  });
  // console.log(album_tracks)
  return album_tracks;
}
module.exports = {
    albumList: albumList,
    albumTracks: albumTracks
}
