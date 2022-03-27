import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { useAuth } from "../../hook/useAuth";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ display: "popup" });
    const auth = getAuth();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      setAuth({ user, accessToken });
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential);
      // ...
    }
  };
  const handleLoginWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    provider.setCustomParameters({
      display: "popup",
    });

    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        const photoURL =
          user.photoURL + "?height=500&access_token=" + accessToken;

        setAuth({ user: { ...user, photoURL }, accessToken });
        navigate("/");

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
        // ...
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authentication = getAuth();
    try {
      const response = await signInWithEmailAndPassword(
        authentication,
        username,
        password
      );
      console.log(response);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <div className="grid flex-auto bg-gray-100 place-items-center">
      <form
        className="flex flex-col w-full max-w-lg gap-4 p-6 text-purple-700 bg-purple-200 rounded-lg shadow-xl"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-bold">Sign in</h1>
        <div className="flex flex-col gap-1">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            className="px-3 py-1 shadow-inner"
            onChange={handleUserNameChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            className="px-3 py-1 shadow-inner"
            onChange={handlePasswordChange}
          />
        </div>
        <button
          type="submit"
          className="py-1 font-bold text-purple-200 bg-purple-700 rounded-md shadow-lg shadow-indigo-500/40"
        >
          Login
        </button>
        <hr />
        <div className="flex flex-col gap-2">
          <GoogleLoginButton onClick={handleLoginWithGoogle} />
          <FacebookLoginButton onClick={handleLoginWithFacebook} />
        </div>
      </form>
      <p>{error && error}</p>
    </div>
  );
}

export default LoginPage;
