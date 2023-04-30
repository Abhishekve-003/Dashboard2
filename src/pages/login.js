import Head from "next/head";
import Layout from "../../layout/layout";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import Image from "next/image";
// import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { signIn, signOut } from "next-auth/react";

export default function Login() {
  // Google Handler function
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "https://resilient-cendol-6e5d4a.netlify.app" });
  }

  return (

    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <section className="  box1 gap2 ">
      <div className="margin-t">

        <h1 className=" text-8xl sign-in-text font-bold ">Sign In</h1>
        <p>
          Sign in to your account
        </p>
      </div>
        <div className="flex gap1 bg-white ">
          <button
            type="button"
            onClick={handleGoogleSignin}
            className="flex btnn gap1 "
          >
            Sign In with Google{" "}
            <Image src={"/assests/Google.png"} width={20} height={20}></Image>
          </button>


          <button type="button" className="btnn gap1 flex">
            Sign In with Apple{" "}
            <Image src={"/assests/Apple.png"} width="20" height={20}></Image>
          </button>
        </div>
        {/* form */}
        <div >





          <form className=" box1 form-padding gap1  main-bg" >

            <div>
              <h1>Email address</h1>
              <div className={styles.input_group}>
                <input className={styles.input_text}
                  type="email"
                  name="email"
                  placeholder="Email"

                />
              </div>
            </div>

            <div>
              <h1>Password</h1>
              <div >
                <input
                className={styles.input_text}
                  type="password"
                  name="password"
                  placeholder="password"

                />

              </div>
            </div>

            {/* login buttons */}
            <div className="input-button top-m">
              <button type="submit" className={styles.button}>
                Sign In
              </button>
            </div>
          <a href="" className="text-blue">Forgot Password </a>
          </form>
        </div>

        {/* bottom */}
        <p className="text-center neg-margin text-gray-400 ">
          Don&#39t have an account yet{" "}
          <Link href={"/register"} className="text-blue">
            Register here
          </Link>
        </p>
      </section>
    </Layout>

  );
}
