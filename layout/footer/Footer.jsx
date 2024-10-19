import React, { Fragment } from "react";

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  return (
    <Fragment>
      <div className="p-2 dark:bg-black bg-[#ecf8f9] font-sans text-lg text-center">
        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="mt-4 bg-[#f08b86] hover:bg-[#e06d68] text-white font-bold py-2 px-4 rounded transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Back to Top
        </button>
      </div>
    </Fragment>
  );
};

export default Footer;
