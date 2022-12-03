import React from "react";
import '../styles/Region.css';

const Region = (informacion) => {
    // console.log(informacion)
    return (
        <div className="Region shadow">
            <div className='m-3'>
                <div className=''>
                    <div className="d-flex titulo mb-0">
                        <p>{informacion.ciudades}, {informacion.region}</p>
                    </div>
                    <div id="descripcion">
                        <h5>{informacion.descripcion}</h5>
                    </div>
                    <hr className="mt-0" />
                    <div id="info" className="mt-4">
                        <p>Humedad: <span>{informacion.humedad}%</span></p>
                        <p>Temp. Maxima: <span>{informacion.tempMax}</span></p>
                        <p>Temp. Minima: <span>{informacion.tempMin}</span></p>
                        <p>Temperatura: <span>{informacion.temperatura}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Region;