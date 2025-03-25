import Head from 'next/head';
import React from 'react';
export const metadata = {
  title: 'B2BNet - Register',
  description: 'Join the B2BNet business community',
};

export default function RegisterLayout({ children }) {
  return (
    <>
    <Head>
    <link rel="stylesheet" href="/assets/css/auth.css" />

    </Head>
      {children}
    </>
  );
}
