import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { auth } from '../../firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push('/');
        }
      })
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          history.push('/');
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <LoginPage>
      <Link style={{ textDecoration: 'none' }} to='/'>
        <AmazonLogo
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt='Amazon logo'
        />
      </Link>

      <LoginContainer>
        <H1>Sign-in</H1>

        <Form>
          <H5>E-mail</H5>
          <Input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <H5>Password</H5>
          <Input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <SignInButton type='submit' onClick={signIn}>
            Sing In
          </SignInButton>
        </Form>

        <P>
          By singing in you agree to the AMAZON-CLONE Conditions of use & sale.
          please see our Privacy Notice, our Cookies Notice, and our
          Interest-Based Ads Notice.
        </P>

        <CreateAccButton onClick={register}>
          Create your Amazon Account
        </CreateAccButton>
      </LoginContainer>
    </LoginPage>
  );
}

export default Login;

const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: white;
`;

const AmazonLogo = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
  object-fit: contain;
  width: 100px;
  margin-right: auto;
  margin-left: auto;
`;

const LoginContainer = styled.div`
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid lightgrey;
  padding: 20px;
`;

const Form = styled.form``;

const Input = styled.input`
  height: 30px;
  margin-bottom: 10px;
  background-color: white;
  width: 98%;
`;

const SignInButton = styled.button`
  background: #f0c14b;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  outline: none;
`;

const CreateAccButton = styled.button`
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: darkgray;
  outline: none;
`;

const H1 = styled.h1`
  font-weight: 500;
  margin-bottom: 20px;
`;

const H5 = styled.h5`
  margin-bottom: 5px;
`;

const P = styled.p`
  margin-top: 15px;
  font-size: 12px;
`;
