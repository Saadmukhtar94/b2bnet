// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Loginform from "../components/Loginform";
// // export const metadata = {
// //   title: "B2BNet - Login",
// //   description: "B2BNet - Business Networking Platform",
// //   icons: {
// //     icon: "/images/logo.png",
// //   },
// // };

// export default function Page() {
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   // const [rememberMe, setRememberMe] = useState(false);
//   // const [isLoading, setIsLoading] = useState(false);
//   // const [error, setError] = useState('');
//   // // const router = useRouter();
//   // const searchParams = useSearchParams();
//   // const { login, user, loading } = useAuth();
//   useEffect(() => {}, []);
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };
//   return (
//     <div className="auth-container">
//       <div className="auth-wrapper">
//         <div className="auth-left">
//           <div className="auth-content">
//             <div className="text-center mb-4">
//               <Image
//                 width={40}
//                 height={40}
//                 src="/images/logo.png"
//                 alt="B2BNet Logo"
//                 className="auth-logo"
//               />
//             </div>
//             <h2 className="auth-title">Welcome Back</h2>
//             <p className="auth-subtitle">Log in to your B2BNet account</p>
//             {/* <form className="auth-form">
//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label">
//                   Email
//                 </label>
//                 <div className="input-group">
//                   <span className="input-group-text">
//                     <i className="fas fa-envelope" />
//                   </span>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="email"
//                     placeholder="Enter your email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </div>
//               </div>
              
//               <div className="mb-3">
//                 <label htmlFor="password" className="form-label">
//                   Password
//                 </label>
//                 <div className="input-group">
//                   <span className="input-group-text">
//                     <i className="fas fa-lock" />
//                   </span>
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     className="form-control"
//                     id="password"
//                     placeholder="Enter your password"
//                     required
//                   />
//                   <button
//                     type="button"
//                     className="border btn btn-outline-secondary toggle-password"
//                     onClick={togglePasswordVisibility}>
//                     <i
//                       className={`fas ${
//                         showPassword ? "fa-eye-slash" : "fa-eye"
//                       }`}></i>
//                   </button>
//                 </div>
//               </div>
//               <div className="d-flex justify-content-between mb-4">
//                 <div className="form-check">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     id="rememberMe"
//                     checked={rememberMe}
//                     onChange={(e) => setRememberMe(e.target.checked)}
//                   />
//                   <label className="form-check-label" htmlFor="rememberMe">
//                     Remember me
//                   </label>
//                 </div>
//                 <Link href="/forgot_password" className="forgot-password">
//                   Forgot password?
//                 </Link>
//               </div>
//               <div className="d-grid gap-2 mb-4">
//                 <button
//                   type="submit"
//                   className="btn btn-primary"
//                   disabled={isLoading}
//                   >
//                   {isLoading ? (
//                     <>
//                       <span
//                         className="spinner-border spinner-border-sm me-2"
//                         role="status"
//                         aria-hidden="true"></span>
//                       Logging in...
//                     </>
//                   ) : (
//                     "Log In"
//                   )}
//                 </button>
//               </div>
//               <div className="auth-divider">
//                 <span>or continue with</span>
//               </div>
//               <div className="social-login">
//                 <button
//                   type="button"
//                   className="btn btn-outline-secondary social-btn">
//                   <i className="fab fa-google" />
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-outline-secondary social-btn">
//                   <i className="fab fa-facebook-f" />
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-outline-secondary social-btn">
//                   <i className="fab fa-linkedin-in" />
//                 </button>
//               </div>
//             </form> */}
//             <Loginform/>
//             <div className="auth-footer">
//               <p>
//                 Don&apos;t have an account?{" "}
//                 <Link href="/register" className="signup-link">
//                   Sign up
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="auth-right">
//           <div className="auth-image-container">
//             <div className="auth-overlay" />
//             <div className="auth-image-content">
//               <h2>Connect. Collaborate. Grow.</h2>
//               <p>
//                 Join thousands of businesses networking and growing together on
//                 B2BNet.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Loginform from "../components/Loginform";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-left">
          <div className="auth-content">
            <div className="text-center mb-4">
              <Image
                width={40}
                height={40}
                src="/images/logo.png"
                alt="B2BNet Logo"
                className="auth-logo"
              />
            </div>
            <h2 className="auth-title">Welcome Back</h2>
            <p className="auth-subtitle">Log in to your B2BNet account</p>

            {/* Login Form Component */}
            <Loginform />

            <div className="auth-footer">
              <p>
                Don&apos;t have an account?{" "}
                <Link href="/register" className="signup-link">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="auth-right">
          <div className="auth-image-container">
            <div className="auth-overlay" />
            <div className="auth-image-content">
              <h2>Connect. Collaborate. Grow.</h2>
              <p>
                Join thousands of businesses networking and growing together on
                B2BNet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
