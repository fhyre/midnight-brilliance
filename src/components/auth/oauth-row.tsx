import { RoundedPushableButton } from "../buttons";
import GoogleIcon from "../../assets/icons/google.svg?react";
import FacebookIcon from "../../assets/icons/facebook.svg?react";

export const OAuthRow = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
        <RoundedPushableButton
          pushableStyles="w-full bg-gray-300"
          frontStyles="py-3 font-bold text-white bg-white border border-gray-300"
        >
          <div className="flex items-center justify-center">
            <GoogleIcon className="w-6" />
          </div>
        </RoundedPushableButton>
        <RoundedPushableButton
          pushableStyles="w-full bg-gray-300"
          frontStyles="py-3 font-bold text-white bg-white border border-gray-300"
        >
          <div className="flex items-center justify-center">
            <FacebookIcon className="w-6 text-blue-500" />
          </div>
        </RoundedPushableButton>
      </div>
      <div className="flex w-full items-center gap-2">
        <div className="relative w-full text-center">
          <span className="text-gray-400 before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-[45%] before:bg-gray-300 before:content-[''] after:absolute after:right-0 after:top-1/2 after:h-[1px] after:w-[45%] after:bg-gray-300 after:content-['']">
            OR
          </span>
        </div>
      </div>
    </div>
  );
};
