import React, { useState, useEffect } from 'react';
import AuthContext from './auth-context';
import { Auth } from 'aws-amplify';
import { User } from '../common/types';

const AuthContextProvider: React.FC<{ children: any }> = (props) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setUserHandler();
  }, []);

  const setUserHandler = async () => {
    try {
      console.log('setUserHandler start');
      const session = await Auth.currentSession();
      console.log(session);
      const user: User = {
        accessToken: {
          value: session.getAccessToken().getJwtToken(),
          expiresAt: new Date(session.getAccessToken().getExpiration() * 1000),
        },
      };
      setUser(user);
      console.log('setUserHandler end');
    } catch (e) {
      console.log('setUserHandler error', e);
      setUser(undefined);
    }
  };

  const signInHandler = async (email: string, token: string) => {
    try {
      console.log('signInHandler start');
      await signOutHandler();
      const user = await Auth.signIn(email);
      await Auth.sendCustomChallengeAnswer(user, token);
      await setUserHandler();
      console.log('signInHandler end');
    } catch (e) {
      console.log('signInHandler error', e);
    }
  };

  const signOutHandler = async () => {
    try {
      console.log('signOutHandler start');
      await Auth.signOut();
      await setUserHandler();
      console.log('signOutHandler end');
    } catch (e) {
      console.log('signOutHandler error', e);
    }
  };

  const value = {
    user,
    setUser: setUserHandler,
    signIn: signInHandler,
    signOut: signOutHandler,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
