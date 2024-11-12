import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { OAuthRow } from "../components/auth/oauth-row";
import { RoundedPushableButton } from "../components/buttons";
import { RoundedInput } from "../components/inputs";
import { auth } from "../firebase-config";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [signupDetails, setSignupDetails] = useState<{
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    age?: string;
  }>({});

  const handleCredentialsChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: "email" | "password" | "firstName" | "lastName" | "age",
  ) => {
    setSignupDetails((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password, firstName, lastName, age } = signupDetails;
    if (!email || !password || !firstName || !lastName || !age) return;
    try {
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      updateProfile(credentials.user, {
        displayName: `${firstName} ${lastName}`,
      });

      toast.success("Account created successfully");
    } catch (error) {
      console.log(error);
      toast.error("Could not create an account");
    }
  };

  return (
    <main className="flex w-[400px] flex-col gap-10">
      <h2 className="text-center text-2xl font-bold">
        Create a free account to discover your personalized learning path
      </h2>
      <OAuthRow />
      <form className="flex flex-col gap-6" onSubmit={handleSignup}>
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

          <div className="flex">
            <RoundedInput
              placeholder="First Name"
              type="text"
              className="rounded-br-none rounded-tr-none focus:z-[1]"
              onChange={(e) => handleCredentialsChange(e, "firstName")}
              required
            />
            <RoundedInput
              placeholder="Last Name"
              type="text"
              className="rounded-bl-none rounded-tl-none"
              onChange={(e) => handleCredentialsChange(e, "lastName")}
              required
            />
          </div>

          <RoundedInput
            placeholder="Age"
            type="number"
            onChange={(e) => handleCredentialsChange(e, "age")}
            required
          />
        </div>
        <RoundedPushableButton
          pushableStyles="bg-black/70"
          frontStyles="bg-neutral-800 py-4"
        >
          <span className="font-bold text-white">Sign up</span>
        </RoundedPushableButton>
      </form>
      <p className="-mt-6 text-sm text-gray-500">
        By clicking above, I agree to Brilliant's&nbsp;
        <span className="underline">Terms</span>&nbsp;and&nbsp;
        <span className="underline">Privacy Policy</span>
      </p>
      <p className="mx-auto flex gap-2">
        <span>Existing User?</span>
        <Link
          to="/login"
          className="underline decoration-blue-500 decoration-[3px] underline-offset-4"
        >
          Log in
        </Link>
      </p>
    </main>
  );
};
