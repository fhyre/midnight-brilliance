import { courses } from "../static/courses";
import { FloatingCard } from "../components/cards";

const courseSelectors = [
  "New Courses",
  "Math",
  "Data",
  "Computer Science",
  "Science",
];

export const Courses = () => {
  const selectedCourse = courseSelectors[0];

  return (
    <div className="flex flex-col gap-10 px-3 py-10 md:mx-auto md:max-w-[1200px]">
      <h2 className="text-3xl font-bold">Browse all 60+ courses</h2>
      <div className="flex gap-2 overflow-scroll">
        {courseSelectors.map((selector) => (
          <button
            className={`text-nowrap rounded-full border-[1.5px] px-3 py-2 transition-all duration-200 hover:border-black ${
              selectedCourse === selector ? "border-black" : "border-gray-300"
            }`}
          >
            {selector}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="mb-2 text-2xl font-bold">New Courses</h3>
        <div className="grid grid-flow-row grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
          {courses.map((course) => {
            return (
              <div className="flex w-full flex-col items-center justify-center gap-4">
                <FloatingCard>
                  <div className="relative">
                    <div className="absolute -right-[5px] top-[5px] rounded-md bg-green-500 px-2 py-1 text-xs font-bold text-white">
                      NEW
                    </div>
                    <div className="flex items-center justify-center px-6 py-8">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-20 sm:w-24"
                      />
                    </div>
                  </div>
                </FloatingCard>
                <h4 className="text-center font-normal">{course.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
