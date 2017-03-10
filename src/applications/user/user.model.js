var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//TODO: Tek bir Schema içinde toplanabilir.

var userSchema = new Schema({
  username: String,
  email: String,
  language: String,
  time: String,
  country: String,
  password: String,
  screen_name: String,
  profile_description: String,
  profile_photo: String,
  profile_cover: String,
  location:  {
    type: Point,
    coordinates: [Number]
  },
  joined_in: {
    type: Date,
    default: Date.now
  },
  birthday: {
    type: Date
  }
}, {
  collection: "user"
});

var userPrivacyAndSafetySettingsSchema = new Schema({
  user: {
    Schema.Types.ObjectId,
    ref: 'User'
  },
  photo_tagging: Number,
  //Allow others to tag me[1],
  //Allow only i follow to tag me[2]
  //Allow no one to tag me[0]
  tweet_privacy: Boolean,
  tweet_location: Boolean,
  discoverability_by_email: Boolean,
  discoverability_by_phone: Boolean,
  //personalization: Boolean,
  //promoted_content: Boolean,
  recieve_dm: Boolean,
  send_recieve_read_receipts: Boolean
  sensitive_media: Boolean,
  mark_as_sensitive: Boolean
}, {
  collection: "user_pas_settings"
});

var userEmailNotificationsSettingsSchema = new Schema({
  user: {
    Schema.Types.ObjectId,
    ref: 'User'
  },
  like_tweet: {
    choice: Boolean,
    group: Number //[1] tailored for you, [2]anyone
  },
  rt_tweet: {
    choice: Boolean,
    group: Number //[1] tailored for you, [2]anyone
  },
  reply_or_mention: {
    choice: Boolean,
    group: Number //[1] tailored for you, [2]anyone
  },
  followed_by: Boolean,
  sent_message_to_me: Boolean,
  emails_tweet_to_me: Boolean,
  adress_book_joins: Boolean,
  top_tweets: {
    choice: Boolean,
    group: Number, //1-daily, 2-weekly, 3-periodically
  },
  performance_of_tweets: Boolean
},{
  collection: "user_email_notif_settings"
});

var userNotificationsSettingsSchema = new Schema({
  user: {
    Schema.Types.ObjectId,
    ref: 'User'
  },
  mute_dont_follow: Boolean,
  mute_default_photo: Boolean,
  mute_not_confirmed_email: Boolean,
  mute_noo_confirmed_phone: Boolean
},{
  collection: "user_notif_settings"
});

var userWebNotificationsSettingsSchema = new Schema({
  user: {
    Schema.Types.ObjectId,
    ref: 'User'
  },
  like_tweet: {
    choice: Boolean,
    group: Number //[1] tailored for you, [2]anyone
  },
  rt_tweet: {
    choice: Boolean,
    group: Number //[1] tailored for you, [2]anyone
  },
  reply_or_mention: {
    choice: Boolean,
    group: Number //[1] tailored for you, [2]anyone
  },
  followed_by: Boolean,
  sent_message_to_me: Boolean,
  trending: Boolean
}, {
  collection: "user_web_notif_settings"
});

var userMutedAccountsSettingsSchema = new Schema({
  //TODO: Buraya ne gelecek, çöz ve düzenle
}, {
  collection: "user_muted_accounts_settings"
});

var userMutedWordsSettingsSchema = new Schema({
  //TODO: Buraya ne gelecek, çöz ve düzenle
}, {
  collection: "user_muted_words_settings"
});

var userBlockedAccountsSettingsSchema = new Schema({
  //TODO: Buraya ne gelecek, çöz ve düzenle
}, {
  collection: "user_blocked_accounts_settings"
});

var userAccessibilitySettingsSchema = new Schema({
  user: {
    Schema.Types.ObjectId,
    ref: 'User'
  },
  //compose_images: Boolean,
  video_autoplay: Boolean
}, {
  collection: "user_accessibility_settings"
});
