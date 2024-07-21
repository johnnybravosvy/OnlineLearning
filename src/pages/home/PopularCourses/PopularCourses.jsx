import { useEffect, useState } from "react";

import useAxiosFetch from "../../../hooks/useAxiosFetch";
import Card from "./Card";

const PopularCourses = () => {
  const axiosFetch = useAxiosFetch();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axiosFetch.get("/courses");
      setCourses(response.data);
    };
    fetchCourses();
  }, []);
  return (
    <div className="md:w-[80%] mx-auto my-36">
      <div>
        <h1 className="text-5xl font-bold text-center">
          Our <span className="text-secondary">Popular</span> Courses
        </h1>
        <div className="w-[40%] text-center mx-auto my-4">
          <p className="text-gray-500">
            Explore our Popular Courses. Here is some popular classes based on
            How many student enrolled
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
