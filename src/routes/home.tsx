import { useAuth } from "../contexts/auth-context";
import LightningOutlineIcon from "../assets/icons/lightning-outline.svg?react";
import { getNextFiveDays } from "../utils";
import LeaguesLocked from "../assets/icons/leagues-locked.svg?react";
import scientificThinking from "../assets/scientific-thinking.png";
import { FloatingCard } from "../components/cards";
import logic from "../assets/icons/logic.png";
import foundationalMath from "../assets/icons/foundational-math.png";
import computerScience from "../assets/icons/computer-science.png";

const recommended = {
  "Solving Equations": {
    category: "Math · Level 1",
    image: foundationalMath,
  },
  "Thinking in Code": {
    category: "CS · Level 1",
    image: computerScience,
  },
  Logic: {
    category: "Logic · Level 1",
    image: logic,
  },
};

export const Home = () => {
  const auth = useAuth();
  const firstName = auth?.authUser?.displayName?.split(" ")[0];
  const nextFiveDays = getNextFiveDays();

  return (
    <div className="mx-auto mt-10 flex max-w-[500px] flex-col items-start justify-center gap-6 p-4 lg:max-w-[800px] lg:flex-row">
      <div className="flex w-full flex-col gap-3">
        <div className="flex flex-col gap-5">
          <h3 className="text-xl font-bold">Welcome,&nbsp;{firstName}</h3>
          <div className="flex flex-col gap-5 rounded-2xl border-2 border-gray-200 p-4">
            <div className="flex items-center">
              <span className="text-5xl font-bold">0</span>&nbsp;
              <LightningOutlineIcon className="w-4" />
            </div>
            <p>
              Solve <span className="font-bold">3 problems</span> to continue
              your streak
            </p>
            <div className="flex justify-between gap-5">
              {nextFiveDays.map((day) => (
                <div className="flex flex-col items-center gap-2">
                  <div className="rounded-full border border-gray-200 px-[15px] py-[9px]">
                    <LightningOutlineIcon className="w-4" />
                  </div>
                  <p>{day}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center rounded-2xl border-2 border-gray-200 p-4">
          <LeaguesLocked className="w-20" />
          <div className="flex flex-col">
            <p className="text-sm font-bold">UNLOCK LEAGUES</p>
            <p className="text-gray-400">70 of 175 XP</p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-3 lg:max-w-[600px]">
        <h3 className="text-xl font-bold">Jump back in</h3>
        <div className="flex flex-col gap-5 overflow-hidden rounded-2xl border-2 border-gray-200">
          <div className="border-b-4 border-gray-100">
            <img src={scientificThinking} alt="" />
          </div>
          <div className="flex flex-col gap-5 p-4 pt-2">
            <div className="flex flex-col gap-2 self-center text-center">
              <p className="text-sm font-bold text-yellow-600">
                SCIENCE · LEVEL 1
              </p>
              <p className="text-2xl font-bold">Scientific Thinking</p>
            </div>
            <button className="rounded-full bg-neutral-800 p-4 font-bold text-white hover:brightness-[120%]">
              Continue path
            </button>
          </div>
        </div>
        <div className="mt-10 flex w-full flex-col gap-3">
          <h3 className="text-xl font-bold">Recommended for you</h3>
          <div className="flex gap-10 overflow-x-auto pt-2">
            {Object.entries(recommended).map(([title, { category, image }]) => (
              <FloatingCard key={title}>
                <div className="mx-3 my-12 flex w-[150px] flex-col items-center gap-3">
                  <img src={image} alt="" className="w-20" />
                  <p className="text-sm font-bold">{category}</p>
                  <p className="font-bold">{title}</p>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
