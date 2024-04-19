import React from "react";
import { useState, useEffect ,useRef} from "react";
import BotonExcelDefault from "./ExcelButton";
import banner from "../assets/banner.png"
import useFetch from "../customHooks/useFetch";
import Dashboard from "./Dashboard";

const Home = () => {
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

  const handleSendClick2 = () => {
    console.log("clicked")
    get("http://localhost:3000/api/v1/anomalies/lecturas")
    .then((income) => {
      console.log(income);
      setDataReceived(income);
      setConsulted(true)
    })
    .catch((error) => console.log("Something fails with request", error));
  };

  useEffect(() => {
    if (toSendData) {
      post("http://localhost:3000/api/v1/anomalies", toSendData)
        .then((income) => {
          console.log(income);
          setDataReceived(income);
          setConsulted(true)
        })
        .catch((error) => console.log("Could not send products", error));
    }
  }, [toSendData]);

  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto min-h-screen h-screen">
        <div className="w-full mx-auto">
          {/* slide 1  */}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse  items-center justify-between">
            <div>
              <img src={banner} alt="" />
            </div>
            <div className="md:w-3/4">
              <h1 className="text-5xl mb-8 font-semibold  text-neutralDGray md:w-3/4 leading-snug">
                Calidad de Generacion
                <span className="block text-brandPrimary leading-snug">
                  {" "}
                  Mejoremos la Efectividad
                </span>
              </h1>
              <p className="text-neutralGray text-base mb-8 text-center mt-4">
                Consulte aqui las anomalias de lectura de cada zona
              </p>

              <div class="max-w-sm mx-auto flex">
                <form class="flex-grow">

                  <select id="small" class="block w-full p-2 mb-6 text-sm text-neutralGray border border-gray-300 rounded-lg bg-gray-50 focus:ring-brandPrimary focus:border-brandPrimary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:primaryBrand dark:focus:border-blue-500">
                    <option selected>Elige una zona</option>
                    <option value="US">CENTRO</option>
                    <option value="CA">NORTE</option>
                    <option value="FR">SUR</option>
                    <option value="DE">OCCIDENTE</option>
                  </select>
                </form>
                <button onClick={handleSendClick2} className="inline-flex items-center justify-center h-10 px-4 ml-2 text-sm font-medium text-white bg-brandPrimary rounded-lg hover:bg-neutralDGray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandPrimary">
                  Consultar
                </button>
              </div>

              <p className="text-neutralGray text-base mb-8 text-center">
                Consulte aqui la ultima revision de cada producto
              </p>

              <div className="mb-4 flex justify-center">

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
              <div className="flex justify-center mt-4">
              {consulted && (
                <BotonExcelDefault products={dataReceived.data}  />
              )}
              </div>
            </div>
          </div>
        </div>
        <Dashboard></Dashboard>
      </div>
    </div>
  );
};

export default Home;
