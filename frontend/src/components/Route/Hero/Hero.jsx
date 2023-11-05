import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://news.easyshiksha.com/wp-content/uploads/MIT-World-Peace-University-Pune-1-scaled.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          MITEase - Seamlessly <br /> Serving MIT Community
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
        Where finding a lab partner is easier than finding your misplaced pen!Seamlessly serving the MIT community while  
         giving local businesses a reason to celebrate! Because even rocket scientists need convenience!
          <br /> 
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Services
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
