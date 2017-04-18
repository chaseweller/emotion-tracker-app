import Rebase from 're-base';

export const base = Rebase.createClass({
  apiKey: "AIzaSyAJCfOD-ESXHmnuYhe9AlvS3JoWH6UJFzo",
  authDomain: "emotion-tracker-fc3ab.firebaseapp.com",
  databaseURL: "https://emotion-tracker-fc3ab.firebaseio.com",
  storageBucket: "emotion-tracker-fc3ab.appspot.com",
  messagingSenderId: "635552038798"
});

export const defaultConfig = {
  userProfile: null,
  enableLogging: false,
  updateProfileOnLogin: true,
  enableRedirectHandling: true,
  autoPopulateProfile: true,
  setProfilePopulateResults: false,
  distpatchOnUnsetListener: false
}

export const supportedAuthProviders = [
  'google',
  'facebook'
]
