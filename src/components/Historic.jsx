import React from 'react';
import aboutImg from "../assets/mobile-login.png";
import banner3 from "../assets/banner3.png";
import banner2 from "../assets/banner2.png";
import maecenas from "../assets/maecenas.png";
import { useState, useEffect ,useRef} from "react";
import useFetch from "../customHooks/useFetch";

const Historic = () => {

  const [consulted, setConsulted] = useState(false);
  const [toSendData, setToDataSent] = useState([]);
  const [dataReceived, setDataReceived] = useState([])
  const [inputValue, setInputValue] = useState('');
  const { post , get } = useFetch();

  const productString = useRef(null);

  const [producto, setProducto] = useState('');

  // Handler function to update the state when input changes
  const handleProductoChange = (event) => {
    setProducto(event.target.value);
  };

  const handleSendClick = () => {
    const rawData = producto;
    const splitedData = rawData.split(" ");
    const jsonData = { products: splitedData };
    setToDataSent(jsonData);
  };

    return (
      <div>
        {/*about text*/}
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
          <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div>
              <img src={banner3} alt="" />
            </div>
            <div className="md:w-3/5 mx-auto">
              <h2 className="text-4xl text-neutralDGray font-semibold mb-4 md-4/5">
                Productos con anomalias de lectura 
              </h2>
              <p className="md:w-3/4 text-sm text-neutralGray mb-8">
                Obten por cada zona informacion de los productos donde el lector reporto mas de 50 anomalias de lectura a dicho predio en el ultimo año y que ademas no se genero una revision integral en los ultimos 6 meses, al final te generara un archivo Excel   
              </p>
              <div className="max-w-sm mx-0 flex">
                <form className="flex-grow">

                  <select id="small" className="block w-full p-2 mb-6 text-sm text-neutralGray border border-gray-300 rounded-lg bg-gray-50 focus:ring-brandPrimary focus:border-brandPrimary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:primaryBrand dark:focus:border-blue-500">
                    <option selected>Elige una zona</option>
                    <option value="US">CENTRO</option>
                    <option value="CA">NORTE</option>
                    <option value="FR">SUR</option>
                    <option value="DE">OCCIDENTE</option>
                  </select>
                </form>
                <button className="inline-flex items-center h-10 px-4 ml-2 text-sm font-medium text-white bg-brandPrimary rounded-lg hover:bg-neutralDGray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandPrimary">
                  Consultar
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*ordenes de revision*/}
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
          <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            
            <div className="md:w-3/5 mx-auto">
              <h2 className="text-4xl text-neutralDGray font-semibold mb-4 md-4/5">
                Verifica si tu producto ya tiene ordenes generadas
              </h2>
              <p className="md:w-3/4 text-sm text-neutralGray mb-8">
                Ingresa el un listado de productos separados por espacio y obten la informacion de cuales ya tiene una orden revision integral en los ultimos 6 meses ademas te entrega informacion si ha tenido procesos administrativos recientes, al final te generara un archivo Excel
              </p>
              <div className="mb-4 flex ">

                <input
                  className="shadow appearance-none border border-gray-300 rounded py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-brandPrimary focus:border-brandPrimary w-80"
                  id="producto"
                  type="text"
                  placeholder="Productos"
                  value={producto} // Bind input value to the state
                  onChange={handleProductoChange} // Call handler function on change
                />
                <button onClick={handleSendClick} className="inline-flex items-center justify-center h-10 px-4 ml-2 text-sm font-medium text-white bg-brandPrimary rounded-lg hover:bg-neutralDGray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandPrimary">
                  Consultar
                </button>
              </div>
            </div>
            <div>
              <img src={banner2} alt="" />
            </div>
          </div>
        </div>
        {/*ordenes de revision*/}
      </div>
    );
};

export default Historic;