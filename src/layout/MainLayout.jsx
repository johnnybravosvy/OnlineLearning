import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/headers/Navbar";

const navLinks = [
  { name: "Home", route: "/" },
  { name: "Instructors", route: "/instructors" },
  { name: "Classes", route: "/class" },
];

const MainLayout = () => {
  return (
    <main className="dark:bg-black overflow-hidden">
      <Navbar />
      <Outlet />
      <footer>Footer</footer>
    </main>
  );
};

export default MainLayout;
