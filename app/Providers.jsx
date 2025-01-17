'use client';
import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { EdgeStoreProvider } from '../lib/edgestore';


export const Providers = ({ children }) => {
  return (
    <SessionProvider>
      <EdgeStoreProvider>
        {children}
      </EdgeStoreProvider>
    </SessionProvider>
  );
};