import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOYfJrWexcM07MablJ8-xKPHdXjB6TwSo",
  authDomain: "realestateapp-b0806.firebaseapp.com",
  projectId: "realestateapp-b0806",
  storageBucket: "realestateapp-b0806.firebasestorage.app",
  messagingSenderId: "27345056561",
  appId: "1:27345056561:web:534b359efc2d8935fc7610",
  measurementId: "G-PM2YE97PNM"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;