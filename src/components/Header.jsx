
import React from "react";
import { Carousel } from "flowbite-react";
import banner from "../assets/banner.png"
import banner2 from "../assets/banner2.png"
import banner3 from "../assets/banner3.png"

const Header = () => {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto min-h-full">
        <div className="w-full mx-auto">
          
          {/* slide 3  */}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse  items-center justify-between">
            <div>
              <img src={banner} alt="" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold  text-neutralDGray md:w-3/4 leading-snug">
              Calidad de Generacion de ordenes
                <span className="block text-brandPrimary leading-snug">
                  {" "}
                  Mejoremos la efectividad 
                </span>
              </h1>
              <p className="text-neutralGray text-base">
              Obten informacion importante sobre el impacto de las ordenes generadas
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;