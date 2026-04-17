import React from 'react';
import {ScaleLoader } from 'react-spinners';

const loading = () => {
    return (
        <div>
            <div className="flex justify-center items-center  h-screen font-bold text-5xl">
      
             {<ScaleLoader />}
             </div>
        </div>
    );
};

export default loading;