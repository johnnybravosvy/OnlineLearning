import { useEffect, useState } from "react";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import img from "../../assets/gallery/photo-1501504905252-473c47e087f8.jpeg";

const Instructors = () => {
  const [instructors, setInstructor] = useState([]);
  const axiosFetch = useAxiosFetch();
  useEffect(() => {
    axiosFetch
      .get("/instructors")
      .then((data) => {
        setInstructor(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(instructors);

  return (
    <div className="md:w-[80%] mx-auto my-36">
      <div>
        <h1 className="text-5xl font-bold text-center">
          Our <span className="text-secondary">Best</span>Instructors
        </h1>
        <div className="w-[40%] text-center mx-auto my-4">
          <p className="text-gray-500">Explore our Instructors</p>
        </div>
      </div>

      {instructors ? (
        <div className="grid mb-28 md:grid-cols-2 lg:grid-cols-4 w-[90%] gap-4 mx-auto">
          {instructors.slice(0, 4).map((instructor, i) => (
            <div
              key={i}
              className="flex dark:text-white hover:-translate-y-2 duration-200 cursor-pointer flex-col shadow-md py-8 px-10 md:px-8 rounded-md mt-20"
            >
              <div className="flex-col flex gap-6 md:gap-8">
                <img
                  className="rounded-full border-4 border-gray-300 h-24 w-24 mx-auto"
                  src={instructor.photoUrl || `${img}`}
                  alt=""
                />
                <div className="flex flex-col text-center">
                  <p className="font-medium text-lg dark:text-white text-gray-800">
                    {instructor?.name}
                  </p>
                  <p className="text-gray-500 whitespace-nowrap">Instructor</p>
                  <p className="text-gray-500 whitespace-nowrap mb-4">
                    Email: {instructor?.email}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No Instructor available</p>
      )}
    </div>
  );
};

export default Instructors;
