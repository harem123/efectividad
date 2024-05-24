import React from 'react';

import {Bar,Doughnut} from "react-chartjs-2"
import DataTable from "react-data-table-component"

const columns = [
    { name: "Seccional",
        selector: row => row.Seccional,
        sortable: true },
        
    { name: "Anomalia",
    selector: row => row.Anomalias,
    sortable: true },
    
    { name: "Normalizacion",
    selector: row => row.Normalizacion,
    sortable: true },
    
    { name: "Visita",
    selector: row => row.Visita,
    sortable: true }
];

const dataT = [
    { Seccional: "Tumaco",
    Anomalias: "162",
    Normalizacion: "205",
    Visita: "278" },
    
    { Seccional: "Tumaco AMI",
    Anomalias: "342",
    Normalizacion: "1044",
    Visita: "903" },
    
    { Seccional: "Pie de Monte",
    Anomalias: "60",
    Normalizacion: "176",
    Visita: "180" },
    
    
];

const Dashboard = () => {
  return (
      <div className='bg-neutralSilver'>
          <div className="max-w-screen-2x1 mx-auto px-4 lg:px-14">
          <h2 className="px-6 md:px-14 text-3xl md:text-4xl mb-4 md:mb-4 font-semibold text-neutralDGray leading-snug">
    Actividades Realizadas en Campo
  </h2>
              <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
                  <div className='bg-white rounded-lg shadow-md p-4 flex justify-center items-center m-6'>
                  {/* Add margin classes */}
                      <Doughnut 
                          data={{
                              labels: ["Comercial", "Control Perdidas", "Caminantes"],
                              datasets: [{
                                  label: "Actividades",
                                  data: [1681, 1641, 231],
                                  backgroundColor:[
                                      "#006837","#1a9850","#a6d96a"
                                  ]
                              }],
                          }}
                          options={{
                              plugins: {
                                  title: {
                                      display: true,
                                      text: 'Pacifico 2024 Unidad Generadora',
                                      font: { size: 20 }
                                  }
                              }
                          }}
                      />
                     
                  </div>
                  <div className='bg-white rounded-lg shadow-md p-6 m-6'>
                      <Bar 
                          data={{
                              labels: ["Marzo", "Abril", "Mayo"],
                              datasets: [{
                                  label: "Recuperacion de Energia",
                                  data: [
                                    89,
                                    287,
                                    173
                                ],
                                  backgroundColor:[
                                      "#006837"
                                  ]
                              }, {
                                  label: "Normalizacion",
                                  data: [348,
                                    667,
                                    326],
                                  backgroundColor:[
                                      "#1a9850"
                                  ]
                              },
                              {
                                label: "Visita Tecnica",
                                data: [342,
                                    584,
                                    368],
                                backgroundColor:[
                                    "#a6d96a"
                                ]
                            },
                          ],
                          }}
                          options={{
                              plugins: {
                                  title: {
                                      display: true,
                                      text: 'Acumulado 2024 Pacifico',
                                      font: { size: 20 }
                                  }
                              }
                          }}
                      />
                      <div className='mt-4'>
                          <h5 className="px-6 md:px-14 text-xl md:text-2xl mb-2 md:mb-4 font-semibold text-neutralDGray leading-snug">
                              Detalle Actividades
                          </h5>
                          <DataTable columns={columns} data={dataT} />
                      </div>
                  </div> 
              </div>
          </div>
      </div>
  );
};

export default Dashboard;