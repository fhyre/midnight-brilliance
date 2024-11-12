import { signInWithEmailAndPassword } from "firebase/auth";
import { OAuthRow } from "../components/auth/oauth-row";
import { RoundedPushableButton } from "../components/buttons";
import { RoundedInput } from "../components/inputs";
import { auth } from "../firebase-config";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export const Login = () => {
  const [loginDetails, setLoginDetails] = useState<{
    email?: string;
    password?: string;
  }>({});

  const handleCredentialsChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: "email" | "password",
  ) => {
    setLoginDetails((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = loginDetails;
    if (!email || !password) return;
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
      toast.error("Invalid email or password");
    }
  };

  return (
    <main className="flex w-[400px] flex-col gap-6">
      <h2 className="text-center text-2xl font-bold">Login</h2>
      <OAuthRow />
      <form className="flex flex-col gap-6" onSubmit={handleLogin}>
        <div className="flex flex-col gap-3">
          <RoundedInput
            placeholder="Email"
            type="email"
            onChange={(e) => handleCredentialsChange(e, "email")}
            required
          />
          <RoundedInput
            placeholder="Password"
            type="password"
            onChange={(e) => handleCredentialsChange(e, "password")}
            required
          />
        </div>
        <RoundedPushableButton
          pushableStyles="bg-black/70"
          frontStyles="bg-neutral-800 py-4"
        >
          <span className="font-bold text-white">Log in</span>
        </RoundedPushableButton>
      </form>
      <p className="mx-auto flex gap-2">
        <span>New User?</span>
        <Link
          to="/signup"
          className="underline decoration-blue-500 decoration-[3px] underline-offset-4"
        >
          Sign Up
        </Link>
      </p>
    </main>
  );
};
