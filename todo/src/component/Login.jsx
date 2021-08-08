import React from "react";
import LoginInput from "./LoginInput";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../Auth/action";
import { Redirect } from "react-router-dom";


const Login = () => {
  const dispatch = useDispatch();
  const { isLoading, isAuth } = useSelector((state) => state.auth);

  const handleNewLogin = (payload) => {
    console.log(payload)
    dispatch(fetchUser(payload));
  };

  if (isAuth===true) {
   return <Redirect to='/'  />
  }
  if (isLoading) {
    return <h1>loading...</h1>;
  }

  return (
    <div>
      <LoginInput handleNewLogin={handleNewLogin} />
    </div>
  );
};

export default Login;
