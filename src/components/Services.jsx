import React from 'react';

const Services = () => {
    return (
        <div className='md:px-14 px-4 py-16 max-w-screen-2x1 mx-auto'>
            <div className='text-center my-8'>
                <h2 className='text-4xl text-neutralDGray font-semibold mb-2'>Nuestros Clientes</h2>
                <p className='text-neutralDGray'>Hemos trabajado con importantes sectores de la region</p>
                {/*comapny logs*/}
                <div className='my-12 flex flex-wrap justify-between items-center gaṕ-8'>
                    <img src="/src/assets/icons/company1.png" alt="" />
                    <img src="/src/assets/icons/company2.png" alt="" />
                    <img src="/src/assets/icons/company3.png" alt="" />
                    <img src="/src/assets/icons/company4.png" alt="" />
                    <img src="/src/assets/icons/company5.png" alt="" />
                    <img src="/src/assets/icons/company6.png" alt="" />
                    <img src="/src/assets/icons/company7.png" alt="" />
                    
                </div>
            </div>
        </div>
    );
};

export default Services;