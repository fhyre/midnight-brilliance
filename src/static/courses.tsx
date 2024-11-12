import { Course } from "../types";
import realWordAlgebra from "../assets/icons/real-word-algebra.png";
import howLLMsWork from "../assets/icons/how-llms-work.png";
import clustering from "../assets/icons/clustering.png";
import vectors from "../assets/icons/vectors.png";
import thinkingInCode from "../assets/icons/thinking-in-code.png";
import caseStudyAirbnb from "../assets/icons/airbnb-case-study.png";
import caseStudyTwitterX from "../assets/icons/case-study-twitter-x.png";
import caseStudySpotify from "../assets/icons/case-study-spotify.png";
import caseStudyElectricCars from "../assets/icons/case-study-electric-cars.png";

export const courses: Course[] = [
  {
    id: "1",
    title: "Real-World Algebra",
    category: "Math",
    isNew: true,
    image: realWordAlgebra,
  },
  {
    id: "2",
    title: "How LLMs Work",
    category: "Computer Science",
    isNew: true,
    image: howLLMsWork,
  },
  {
    id: "3",
    title: "Clustering",
    category: "Data",
    isNew: true,
    image: clustering,
  },
  {
    id: "4",
    title: "Vectors",
    category: "Math",
    isNew: true,
    image: vectors,
  },
  {
    id: "5",
    title: "Thinking in Code",
    category: "Computer Science",
    isNew: true,
    image: thinkingInCode,
  },
  {
    id: "6",
    title: "Case Study: Unlocking Rental Value on Airbnb",
    category: "Data",
    isNew: true,
    image: caseStudyAirbnb,
  },
  {
    id: "7",
    title: "Case Study: Going Viral on X",
    category: "Data",
    isNew: true,
    image: caseStudyTwitterX,
  },
  {
    id: "8",
    title: "Case Study: Topping the Charts with Spotify",
    category: "Data",
    isNew: true,
    image: caseStudySpotify,
  },
  {
    id: "9",
    title: "Case Study: Maximizing Electric Car Value",
    category: "Data",
    isNew: true,
    image: caseStudyElectricCars,
  },
];
