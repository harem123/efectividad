import React from 'react';

import {Bar,Doughnut, Line} from "react-chartjs-2"
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


const Dashboard = () => {
  return (
      <div className='bg-neutralSilver'>
          <div className="max-w-screen-2x1 mx-auto px-4 lg:px-14">
          <h2 className="px-6 md:px-14 text-3xl md:text-4xl mb-4 md:mb-4 font-semibold text-neutralDGray leading-snug">
    Ordenes Por Ejecutar en Campo
  </h2>
              <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
                  <div className='bg-white rounded-lg shadow-md p-4 flex justify-center items-center m-6'>
                  {/* Add margin classes */}
                      <Doughnut 
                          data={{
                              labels: ["Nuevas conexiones", "Comercial", "Perdidas"],
                              datasets: [{
                                  label: "Ordenes Pendientes",
                                  data: [555, 1495, 1240],
                                  backgroundColor:[
                                      "#006837","#1a9850","#a6d96a"
                                  ]
                              }],
                          }}
                          options={{
                              plugins: {
                                  title: {
                                      display: true,
                                      text: 'Clasificación por area',
                                      font: { size: 20 }
                                  }
                              }
                          }}
                      />
                     
                  </div>
                  <div className='bg-white rounded-lg shadow-md p-6 m-6'>
                      <Bar 
                          data={{
                              labels: ["CENTRO", "SUR", "NORTE", "OCCIDENTE", "PACIFICO"],
                              datasets: [{
                                  label: "Revision Integral",
                                  data: [469, 302, 151, 337, 1322],
                                  backgroundColor:[
                                      "#1a9850"
                                  ]
                              }, {
                                  label: "Nuevas Conexiones",
                                  data: [150, 110, 17, 139, 62],
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
                                      text: 'Clasificación por zona',
                                      font: { size: 20 }
                                  }
                              }
                          }}
                      />
                      <div className='mt-4'>
                          <h5 className="px-6 md:px-14 text-xl md:text-2xl mb-2 md:mb-4 font-semibold text-neutralDGray leading-snug">
                              Detalle ordenes
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