import heroAnimation from "../assets/brilliant-hero-animation.mp4";
import BrilliantLogo from "../assets/brilliant-logo.svg?react";
import MathIcon from "../assets/icons/math.svg?react";
import DataAnalysisIcon from "../assets/icons/data-analysis.svg?react";
import ComputerScienceIcon from "../assets/icons/computer-science.svg?react";
import ProgrammingAiIcon from "../assets/icons/programming-ai.svg?react";
import ScienceEngineeringIcon from "../assets/icons/science-engineering.svg?react";
import FiveStars from "../assets/icons/five-stars.svg?react";
import playBestApp from "../assets/icons/play-best-app.png";
import iosAppOfTheDay from "../assets/icons/app-of-the-day.png";
import theAtlantic from "../assets/icons/the-atlantic.png";
import theNewYorkTimes from "../assets/icons/the-new-york-times.png";
import { VerticalDivider } from "../components/dividers";
import { Link } from "react-router-dom";
import { RoundedPushableButton } from "../components/buttons";

export const Landing = () => {
  return (
    <div className="font-brilliant-san-serif h-screen w-screen">
      <div className="mx-auto flex max-w-[450px] flex-col bg-white md:max-w-[1220px]">
        <header className="flex items-center justify-between p-5">
          <BrilliantLogo className="w-24 md:w-32" />
          <Link
            className="rounded-full border-2 border-gray-300 px-4 py-2 font-semibold transition-all duration-200 hover:border-black"
            to="/login"
          >
            Log in
          </Link>
        </header>
        <div className="mt-8 flex flex-col-reverse items-center gap-10 p-3 md:flex-row">
          <main className="flex flex-col gap-7 md:w-1/2 md:gap-12">
            <h2 className="font-brilliant-serif text-4xl md:text-[4rem]">
              Learn by <span className="text-blue-500">doing</span>
            </h2>
            <p className="text-md md:text-xl">
              Guided interactive problem solving that's effective and fun.
              Master concepts in 15 minutes a day.
            </p>
            <RoundedPushableButton
              pushableStyles="md:w-[300px] bg-green-600"
              frontStyles="bg-green-500 py-4 font-bold text-white"
            >
              Get Started
            </RoundedPushableButton>
          </main>
          <aside className="md:w-1/2">
            <video loop autoPlay muted playsInline>
              <source src={heroAnimation} type="video/mp4" />
            </video>
          </aside>
        </div>
        <section className="my-6 flex flex-wrap justify-center px-2 md:my-10 md:justify-between [&>div]:flex [&>div]:items-center [&>div]:gap-3 [&>div]:p-4 [&_svg]:w-7">
          <div>
            <MathIcon />
            <p>Math</p>
          </div>
          <div>
            <DataAnalysisIcon />
            <p>Data Analysis</p>
          </div>
          <div>
            <ComputerScienceIcon />
            <p>Computer Science</p>
          </div>
          <div>
            <ProgrammingAiIcon />
            <p>Programming & AI</p>
          </div>
          <div>
            <ScienceEngineeringIcon />
            <p>Science & Engineering</p>
          </div>
        </section>
      </div>
      <div className="bg-gray-50 px-4 py-20">
        <section className="mx-auto flex max-w-[450px] flex-col items-center justify-center gap-10 md:max-w-[1220px]">
          <h3 className="text-xl font-bold md:text-2xl">
            Join over 10 million people learning on Brilliant
          </h3>
          <div className="flex flex-col justify-center gap-10 md:flex-row md:items-center">
            <div className="hidden flex-wrap gap-5 md:flex">
              <img
                src={theNewYorkTimes}
                alt=""
                className="w-[12rem] grayscale filter"
              />
              <img src={theAtlantic} alt="" className="w-15 grayscale filter" />
            </div>
            <VerticalDivider />
            <div className="flex flex-col gap-3">
              <FiveStars className="w-[7rem]" />
              <p>Over 50,000 5-star reviews on iOS App Store and Google Play</p>
            </div>
            <VerticalDivider />
            <div className="flex flex-wrap items-center gap-5 [&_img]:w-[6rem]">
              <img src={iosAppOfTheDay} className="grayscale filter" alt="" />
              <img src={playBestApp} className="grayscale filter" alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
