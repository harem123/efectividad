import React from 'react';

import {Bar} from "react-chartjs-2"
import DataTable from "react-data-table-component"

const columns = [
    { name: "Seccional",
      selector: row => row.Seccional,
      sortable: true },
    { name: "Recuperado (kWh)",
      selector: row => row.Recuperado,
      sortable: true },
    { name: "Esperado (kWh)",
      selector: row => row.Esperado,
      sortable: true }
];

const dataT = [
    { Seccional: "Cordillera", Recuperado: "99053", Esperado: "123000" },
    { Seccional: "Ipiales", Recuperado: "21170", Esperado: "82200" },
    { Seccional: "La Cruz", Recuperado: "326235", Esperado: "240000" },
    { Seccional: "La Union", Recuperado: "180976", Esperado: "195000" },
    { Seccional: "Pasto", Recuperado: "35765", Esperado: "75000" },
    { Seccional: "Pie de Monte", Recuperado: "17532", Esperado: "60000" },
    { Seccional: "Sandona", Recuperado: "892", Esperado: "60000" },
    { Seccional: "Tumaco", Recuperado: "318746", Esperado: "600000" },
    { Seccional: "Tumaco AMI", Recuperado: "75126", Esperado: "60000" },
    { Seccional: "Tuquerres", Recuperado: "49561", Esperado: "60000" }
];

const Recuperacion = () => {
    return (
      <div className='bg-neutralSilver'>
        <div className="max-w-screen-2x1 mx-auto px-4 lg:px-14">
        <div className="flex justify-center"> {/* Wrapping div to center */}
          <h2 className="mt-10 px-6 md:px-14 text-3xl md:text-4xl mb-4 md:mb-4 font-semibold text-neutralDGray leading-snug">
            Recuperacion de Energia Revisiones Integrales
          </h2>
        </div>
          <div className='w-full flex justify-center'>
            <div className='bg-white rounded-lg shadow-md p-6 m-6 w-full md:w-2/3'>
              <Bar 
                data={{
                  labels: [
                    "Cordillera",
                    "Ipiales",
                    "La Cruz",
                    "La Union",
                    "Pasto",
                    "Pie de Monte",
                    "Sandona",
                    "Tumaco",
                    "Tumaco AMI",
                    "Tuquerres"
                  ],
                  datasets: [{
                    label: "Recuperacion de Energia",
                    data: [
                      99053,
                      21170,
                      326235,
                      180976,
                      35765,
                      
                      17532,
                      892,
                      318746,
                      75126,
                      49561
                    ],
                    backgroundColor:[
                      "#a6d96a"
                    ]
                  }, {
                    label: "Meta Recuperacion",
                    data: [
                      123000, // Cordillera
                      82200,  // Ipiales
                      240000, // La Cruz
                      195000, // La Union
                      75000,  // Pasto
                      81000,  // Pie de Monte
                      60000,  // Sandona
                      600000, // Tumaco
                      60000,  // Tumaco AMI
                      60000   // Tuquerres
                    ],
                    backgroundColor:[
                      "#1a9850"
                    ]
                  }]
                }}
                options={{
                  plugins: {
                    title: {
                      display: true,
                      text: 'Recuperacion 3 meses',
                      font: { size: 20 }
                    }
                  }
                }}
              />
              <div className='mt-4'>
                <h5 className="px-6 md:px-14 text-xl md:text-2xl mb-2 md:mb-4 font-semibold text-neutralDGray leading-snug">
                  Detalle Recuperacion
                </h5>
                <DataTable columns={columns} data={dataT} />
              </div>
            </div> 
          </div>
        </div>
      </div>
    );
  };
  
  export default Recuperacion;
  