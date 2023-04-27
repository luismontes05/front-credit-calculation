import React from "react";

const Saldos = () => (

    <div className="row pe-4 m-0">
        <div className="text-center col">
            <p className="text-white m-0"><b>Disponible</b></p>
            <span className="badge text-bg-success fs-6">$10.000.000</span>
        </div>
 
        <div className="text-center col">
            <p className="text-white m-0"><b>Prestado</b></p>
            <span className="badge text-bg-secondary fs-6">$10.000.000</span>
        </div>
    
        <div className="text-center col">
            <p className="text-white m-0"><b>Intereses</b></p>
            <span className="badge text-bg-primary fs-6">$10.000.000</span>
        </div>
    </div>
);

export default Saldos