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

const handleSendClick2 = () => {
    console.log("clicked")

    .catch((error) => console.log("Something fails with request", error));
  };

const Dashboard = () => {
  return (
      <div className='bg-neutralSilver'>
          <div className="max-w-screen-2x1 mx-auto px-4 lg:px-14">
            <div>
            <h2 className="px-6 md:px-14 text-3xl md:text-4xl mb-4 md:mb-4 font-semibold text-neutralDGray leading-snug">
    Actividades Realizadas en Campo
  </h2>
  <p className="text-neutralGray text-base mb-8 ">
                Actualizado 17/04/2024
    </p>
  <div class="max-w-sm mx-auto flex">
                <form className="flex-grow">

                  <select id="small" class="block w-full p-2 mb-6 text-sm text-neutralGray border border-gray-300 rounded-lg bg-gray-50 focus:ring-brandPrimary focus:border-brandPrimary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:primaryBrand dark:focus:border-blue-500">
                    <option selected>Elige una Seccional</option>
                    <option value="COR">Cordillera</option>
                    <option value="IPI">Ipiales</option>
                    <option value="CRU ">La Cruz</option>
                    <option value="UNI ">La Union</option>
                    <option value="PAS">Pasto</option>
                    <option value="PIE">Pie de Monte</option>
                    <option value="SAN">Sandona</option>
                    <option value="TUM">Tumaco</option>
                    <option value="AMI">Tumaco AMI</option>
                    <option value="TUQ">Tuquerres</option>

                  </select>
                </form>
                <button onClick={handleSendClick2} className="inline-flex items-center justify-center h-10 px-4 ml-2 text-sm font-medium text-white bg-brandPrimary rounded-lg hover:bg-neutralDGray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandPrimary">
                  Consultar
                </button>
              </div>

            </div>
          
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
                                      "#1a4718","#83a561","#eae69e"
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
                                    "#eae69e"
                                  ]
                              }, {
                                  label: "Normalizacion",
                                  data: [348,
                                    667,
                                    326],
                                  backgroundColor:[
                                    "#83a561"
                                  ]
                              },
                              {
                                label: "Visita Tecnica",
                                data: [342,
                                    584,
                                    368],
                                backgroundColor:[
                                    "#1a4718"
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
