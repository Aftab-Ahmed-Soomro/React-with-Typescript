import type React from "react";
import { useState } from "react";
import type { ILogin } from "../models/ILogin";

interface ISTATE {
  user : ILogin
}

const Login: React.FC = () => {
  const [state, setState] = useState<ISTATE>({
    user : {
      email : '',
      password : ''
    }
  })

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) : void => {
    const {name, value} = event.target
    setState(prevState => ({
      user: {
        ...prevState.user,
        [name]: value
      }
    }))
  }

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) : void => {
    event.preventDefault();
    console.log(state.user); 
  }
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-4">
      <h1>Login Form Example</h1>
      <div className="w-50">
        <form onSubmit={handleSubmit} className="card p-4">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={state.user.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={state.user.password}
              name="password"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div className="mt-4 bg-light p-2">
          <p>{JSON.stringify(state.user)}</p> {/* JSON.stringify --> converts object to string */}
        </div>
      </div>
    </div>
  );
};

export default Login;
