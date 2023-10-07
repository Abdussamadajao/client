import Navbar from "components/Navbar";
import React from "react";
import Footer from "components/Footer";
import { AnimatePresence } from "framer-motion";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Wrapper;
