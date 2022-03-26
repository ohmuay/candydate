import React,{useState} from "react";
import Container from "../../components/Container/Container";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

function LoginPage() {

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')


  const handleUserNameChange = (e)=>{
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e)=>{
    setPassword(e.target.value);
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const authentication = getAuth();
    try{
      const response = await signInWithEmailAndPassword(authentication, username, password)
      console.log(response)
    }catch(err){
      console.log(err);
      setError(err.message)
    }
  }

  return (
    <div className="flex-auto bg-gray-200 grid place-items-center">
    <Container>
      <form className="border-2 p-6 bg-red-300 flex flex-col gap-4 rounded-lg"
        onSubmit={handleSubmit}
      >
          <div className="flex gap-2">
              <label htmlFor="username">username</label>
              <input type="text" name="username" id="username" value={username} onChange={handleUserNameChange}/>
          </div>
          <div className="flex gap-2">
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange}/>
          </div>
          <button type="submit" className="bg-white py-1 uppercase rounded-xl bg">login</button>
      </form>
      <p>{error && error}</p>
    </Container>
    </div>
  );
}

export default LoginPage;
