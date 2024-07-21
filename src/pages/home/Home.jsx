import Instructors from "../instructors/Instructors";
import HeroContainer from "./hero/HeroContainer";
import PopularCourses from "./PopularCourses/PopularCourses";

const Home = () => {
  return (
    <div>
      <HeroContainer />
      <PopularCourses />
      <Instructors />
    </div>
  );
};

export default Home;
