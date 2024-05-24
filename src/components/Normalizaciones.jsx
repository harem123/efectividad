import React from 'react';
import {Chart as ChartJS} from "chart.js/auto"
import {Bar,Doughnut, Radar} from "react-chartjs-2"
import DataTable from "react-data-table-component"


const Normalizaciones = () => {
  return (
      <div className='bg-neutralSilver'>
          <div className="max-w-screen-2x1 mx-auto px-4 lg:px-14 mt-8">
          <h2 className="px-6 md:px-14 text-3xl md:text-4xl mb-4 md:mb-4 font-semibold text-neutralDGray leading-snug">
    Recuperacion de Energia por Seccional
  </h2>
              <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
                  <div className='bg-white rounded-lg shadow-md p-4 flex justify-center items-center m-4'>
                      <Radar
                          data={{
                              labels: ["Recuperacion de Energia",  "Normalizacion","Visita Tecnica"],
                              datasets: [{
                                label: "Tumaco",
                                data: [90, 128, 143],
                                backgroundColor: "rgba(54, 162, 235, 0.5)", // Semi-transparent blue
      borderColor: "rgba(54, 162, 235, 1)", // Solid blue border
                                
                            }, {
                                label: "Tumaco Ami",
                                data: [174, 506, 372],
                                backgroundColor: "rgba(255, 206, 86, 0.5)", // Semi-transparent yellow
      borderColor: "rgba(255, 206, 86, 1)", // Solid yellow border
                                
                                
                            },
                            
                        ],
                          }}
                          options={{
                              plugins: {
                                  title: {
                                      display: true,
                                      text: 'Clasificación por Tecnologia',
                                      font: { size: 20 }
                                  }
                              }
                          }}
                      />
                  </div>
                  
              </div>
          </div>
      </div>
  );
};

export default Normalizaciones;