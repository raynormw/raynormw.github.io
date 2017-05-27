const passport = require('passport')
const twitteStrategy = require('passport-twitter').Strategy
require('dotenv').config();
const User = require('../models/user_model');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;


passport.use(new twitteStrategy({
  consumerKey: process.env.Consumer_Key,
  consumerSecret: process.env.Consumer_Secret,
  callbackURL: 'http://localhost:3000/login/twitter/return'
  // callbackURL: 'http://127.0.0.1:3000/login/twitter/return'
},
function(token, tokenSecret, profile, cb) {
  // console.log("token : ", token,"| tokenSecret : ", tokenSecret,"| profile : ", profile);

  User.findOne( {username : profile.username}, function(err, user) {
    if(err){
      res.json({ err })
    } else {
      if(!user){
        User.create({
          name : profile.displayName,
          username : profile.username,
          location : profile._json.location || "jakarta",
          role : "user",
          token : token,
          tokenSecret : tokenSecret,
          profile : profile
        }, function(err, data) {
          err ? console.log({err}) : profile = data
        })
      }
      else{
        console.log(5);
        User.update({username : profile.username}, {
          $set: {
            token : token,
            tokenSecret : tokenSecret,
            profile : profile
          }
        }, function( err, data ){
          err ? console.log({err}) : profile = user
        })
      }
      // return cb(null, user);
    }
  })
  return cb(null, profile);
}));

module.exports = {
  a : passport.authenticate('twitter'),

  b : passport.authenticate('twitter', { failureRedirect: '/login' })

  // create : function(req, res){
  //   jwt.verify(req.headers.token, secret, function(err, decoded) {
  //   })
  // }

}
//
// profile :  {
//   id: '2199671826',
//   username: 'ridho230994',
//   displayName: 'Ridho Pratama',
//   photos: [ { value: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png' } ],
//   provider: 'twitter',
//   _raw: '{"id":2199671826,"id_str":"2199671826","name":"Ridho Pratama","screen_name":"ridho230994","location":"","description":"","url":null,"entities":{"description":{"urls":[]}},"protected":false,"followers_count":1,"friends_count":4,"listed_count":0,"created_at":"Sun Nov 17 15:07:53 +0000 2013","favourites_count":0,"utc_offset":null,"time_zone":null,"geo_enabled":false,"verified":false,"statuses_count":83,"lang":"en","status":{"created_at":"Thu May 18 17:48:21 +0000 2017","id":865262796316958720,"id_str":"865262796316958720","text":"tt","truncated":false,"entities":{"hashtags":[],"symbols":[],"user_mentions":[],"urls":[]},"source":"\\u003ca href=\\"http:\\/\\/twitter.com\\" rel=\\"nofollow\\"\\u003eTwitter Web Client\\u003c\\/a\\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":0,"favorite_count":0,"favorited":false,"retweeted":false,"lang":"und"},"contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"C0DEED","profile_background_image_url":"http:\\/\\/abs.twimg.com\\/images\\/themes\\/theme1\\/bg.png","profile_background_image_url_https":"https:\\/\\/abs.twimg.com\\/images\\/themes\\/theme1\\/bg.png","profile_background_tile":false,"profile_image_url":"http:\\/\\/abs.twimg.com\\/sticky\\/default_profile_images\\/default_profile_normal.png","profile_image_url_https":"https:\\/\\/abs.twimg.com\\/sticky\\/default_profile_images\\/default_profile_normal.png","profile_link_color":"1DA1F2","profile_sidebar_border_color":"C0DEED","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":true,"has_extended_profile":false,"default_profile":true,"default_profile_image":true,"following":false,"follow_request_sent":false,"notifications":false,"translator_type":"none"}',
//   _json:
//    { id: 2199671826,
//      id_str: '2199671826',
//      name: 'Ridho Pratama',
//      screen_name: 'ridho230994',
//      location: '',
//      description: '',
//      url: null,
//      entities: { description: [Object] },
//      protected: false,
//      followers_count: 1,
//      friends_count: 4,
//      listed_count: 0,
//      created_at: 'Sun Nov 17 15:07:53 +0000 2013',
//      favourites_count: 0,
//      utc_offset: null,
//      time_zone: null,
//      geo_enabled: false,
//      verified: false,
//      statuses_count: 83,
//      lang: 'en',
//      status:
//       { created_at: 'Thu May 18 17:48:21 +0000 2017',
//         id: 865262796316958700,
//         id_str: '865262796316958720',
//         text: 'tt',
//         truncated: false,
//         entities: [Object],
//         source: '<a href="http://twitter.com" rel="nofollow">Twitter Web Client</a>',
//         in_reply_to_status_id: null,
//         in_reply_to_status_id_str: null,
//         in_reply_to_user_id: null,
//         in_reply_to_user_id_str: null,
//         in_reply_to_screen_name: null,
//         geo: null,
//         coordinates: null,
//         place: null,
//         contributors: null,
//         is_quote_status: false,
//         retweet_count: 0,
//         favorite_count: 0,
//         favorited: false,
//         retweeted: false,
//         lang: 'und' },
//      contributors_enabled: false,
//      is_translator: false,
//      is_translation_enabled: false,
//      profile_background_color: 'C0DEED',
//      profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
//      profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
//      profile_background_tile: false,
//      profile_image_url: 'http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png',
//      profile_image_url_https: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png',
//      profile_link_color: '1DA1F2',
//      profile_sidebar_border_color: 'C0DEED',
//      profile_sidebar_fill_color: 'DDEEF6',
//      profile_text_color: '333333',
//      profile_use_background_image: true,
//      has_extended_profile: false,
//      default_profile: true,
//      default_profile_image: true,
//      following: false,
//      follow_request_sent: false,
//      notifications: false,
//      translator_type: 'none' },
//   _accessLevel: 'read-write' }
