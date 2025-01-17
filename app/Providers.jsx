'use client';

import { SessionProvider } from 'next-auth/react';
import { EdgeStoreProvider } from '../lib/edgestore';
import { Toaster } from 'react-hot-toast';


export const Providers = ({ children }) => {
  return (
    <SessionProvider>
      <EdgeStoreProvider>
      <Toaster position="top-right" />
        {children}
      </EdgeStoreProvider>
    </SessionProvider>
  );
};