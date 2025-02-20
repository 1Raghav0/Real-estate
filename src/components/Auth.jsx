import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { auth } from "../Firebase"; // Import Firebase Auth
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        alert("Sign-up successful!");
      } else {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
        alert("Sign-in successful!");
      }
      navigate("/"); // Redirect to Home Page after Sign In/Sign Up
    } catch (error) {
      alert(error.message);
    }
  };

  // Google Sign In
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Google Sign-in successful!");
      navigate("/"); // Redirect to Home Page after Google Sign In
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg p-8 rounded-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center">{isSignUp ? "Create an Account" : "Welcome Back!"}</h2>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            required
          />
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        {/* Google Sign-In */}
        <button onClick={googleSignIn} className="w-full bg-red-500 text-white py-2 mt-4 rounded-lg font-semibold">
          Sign In with Google
        </button>

        <p className="text-center mt-4">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button className="text-blue-600" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;




