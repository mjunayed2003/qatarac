import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FloatingButton from "./FloatingButton";

const UserLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-[50px] md:pt-[50px] min-h-screen">
        <Outlet />
      </main>
      <FloatingButton />
      <Footer />
    </>
  );
};

export default UserLayout;