import React from "react";
import '../styles/Region.css';

<<<<<<< HEAD
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
=======
const Region = () => (
    <div className="Region">
        {/* <h2>Este es el tiempo en tu region</h2> */}
    </div>
)
>>>>>>> a056f843f14a66768ce256a118d8d5506f2d3192

export default Region;