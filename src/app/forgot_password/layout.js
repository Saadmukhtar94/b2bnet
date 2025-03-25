// import React from 'react';
// import Head from 'next/head';
// export const metadata = {
//   title: 'B2BNet - Forgot Password',
//   description: 'Reset your B2BNet account password',
// };

// export default function ForgotPasswordLayout({ children }) {
//   return (
//     <>
//     <Head>
//     <link rel="stylesheet" href="/assets/css/auth.css" />

//     </Head>
//       {children}
//     </>
//   );
// }
export const metadata = {
  title: 'B2BNet - Forgot Password',
  description: 'Reset your B2BNet account password',
  icons: {
    icon: '/favicon.ico', // Optional: Favicon
  },
  link: [
    {
      rel: 'stylesheet',
      href: '/assets/css/auth.css',
    },
  ],
};

export default function ForgotPasswordLayout({ children }) {
  return <>{children}</>;
}
