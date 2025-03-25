import React from 'react';

export const metadata = {
  title: 'B2BNet - Forgot Password',
  description: 'Reset your B2BNet account password',
};

export default function ForgotPasswordLayout({ children }) {
  return (
    <>
      <link rel="stylesheet" href="/assets/css/auth.css" />
      {children}
    </>
  );
}