// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  attachAuthIsReady: true,
  sessions: true,
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
};

export default rrfConfig;