import React, { useState } from "react";

import * as XLSX from "xlsx";

const BotonExcelDefault = ({ products }) => {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);

    const libro = XLSX.utils.book_new();

    const hoja = XLSX.utils.json_to_sheet(products);

    XLSX.utils.book_append_sheet(libro, hoja, "Productos");

    setTimeout(() => {
      XLSX.writeFile(libro, "ProductosDefault.xlsx");
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      {!loading ? (
        <button className="btn-primary" onClick={handleDownload}>
          Descarga Excel 
        </button>
      ) : (
        <button  disabled>
          
        </button>
      )}
    </>
  );
};

export default BotonExcelDefault;