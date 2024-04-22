import React from 'react';
import {Chart as ChartJS} from "chart.js/auto"
import {Bar,Doughnut, Radar} from "react-chartjs-2"
import DataTable from "react-data-table-component"

const columns = [
    { name: "Zona",
        selector: row => row.zona,
        sortable:true},
        
    { name: "Ordenes",
    selector: row => row.ordenes,
    sortable:true},
    { name: "Matriculas",
    selector: row => row.matriculas,
    sortable:true }
]

const dataT = [
    { zona: "CENTRO",
    ordenes: "469",
    matriculas: "150" },
    { zona: "NORTE",
    ordenes: "151",
    matriculas: "17" },
    { zona: "PACIFICO",
    ordenes: "1332",
    matriculas: "62" },
    { zona: "SUR",
    ordenes: "302",
    matriculas: "110" },
    { zona: "OCCIDENTE",
    ordenes: "337",
    matriculas: "139" }
]


const Normalizaciones = () => {
  return (
      <div className='bg-neutralSilver'>
          <div className="max-w-screen-2x1 mx-auto px-4 lg:px-14 mt-8">
          <h2 className="px-6 md:px-14 text-3xl md:text-4xl mb-4 md:mb-4 font-semibold text-neutralDGray leading-snug">
    Tipos de Actividad Ejecutada en Campo
  </h2>
              <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
                  <div className='bg-white rounded-lg shadow-md p-4 flex justify-center items-center m-4'>
                      <Radar
                          data={{
                              labels: ["CENTRO", "NORTE", "OCCIDENTE","PACIFICO","SUR"],
                              datasets: [{
                                label: "Normalizaciones",
                                data: [ 938,1025,423,756,591],
                                backgroundColor: "rgba(54, 162, 235, 0.5)", // Semi-transparent blue
      borderColor: "rgba(54, 162, 235, 1)", // Solid blue border
                                
                            }, {
                                label: "Inspeccion Tecnica",
                                data: [1844,1232,184,1018,649],
                                backgroundColor: "rgba(255, 206, 86, 0.5)", // Semi-transparent yellow
      borderColor: "rgba(255, 206, 86, 1)", // Solid yellow border
                                
                                
                            },
                            {
                                label: "Recuperacion de Energia",
                                data: [257,444,63,312,51],
                                backgroundColor: "rgba(75, 192, 192, 0.5)", // Semi-transparent green
                                borderColor: "rgba(75, 192, 192, 1)", // Solid green border
                                
                            },
                        ],
                          }}
                          options={{
                              plugins: {
                                  title: {
                                      display: true,
                                      text: 'Clasificación por Zona',
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
