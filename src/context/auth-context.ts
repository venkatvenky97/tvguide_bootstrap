import React from 'react';
import { User } from '../common/types';

const AuthContext = React.createContext<{
  user?: User;
  setUser: () => Promise<void>;
  signIn: (email: string, token: string) => Promise<void>;
  signOut: () => Promise<void>;
}>({
  setUser: async () => {},
  signIn: async () => {},
  signOut: async () => {},
});

export default AuthContext;
