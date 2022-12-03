import React, { useState, useRef, useEffect } from 'react';
import { render } from "@testing-library/react";
import * as ReactDOM from 'react-dom/client';
import './App.css';
import Region from './components/Region';
import EstablecerZona from './components/EstablecerZona';

function App() {
  //useState para guardar la informacion del clima ACTUAL
  let [informacion, setInformacion] = useState({
    descripcion: '',
    region: '',
    ciudades: '',
    humedad: '',
    temperatura: '',
    tempMax: '',
    tempMin: ''
  })
  let [semanal, setSemanal] = useState({
    descripcionS: '',
    humedadS: '',
    temperaturaS: '',
    tempMaxS: '',
    tempMinS: '',
    vientoS: '',
    fechaS: ''
  })

  const { descripcion, region, ciudades, humedad, temperatura, tempMax, tempMin } = informacion
  const { descripcionS, humedadS, temperaturaS, tempMaxS, tempMinS, vientoS, fechaS } = semanal

  //useState para actualizar el useEffect de mas abajo
  let [nose, setNose] = useState(false)
  let ciudad = useRef('montevideo');
  let climaSemanal = useRef()

  

  let urlActual = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad.current.value}&appid=2da9d4f857a47db822917f99da097952&lang=es&units=metric`

  let urlSemanal = `http://api.openweathermap.org/data/2.5/forecast?q=${ciudad.current.value}&appid=30caac51b0b0137872dc1f4bf06503d6&lang=es&units=metric`

  const mostrarSemanal = () => {

  }

  useEffect(() => {
    let elFetch = async () => {
      try {
        let res = await fetch(urlActual)
        let data = await res.json()
        // console.log('Diario:')
        // console.log(data)

        const { weather, sys, name, main } = data

        setInformacion({ ...informacion, descripcion: weather[0].description, region: sys.country, ciudades: name, humedad: main.humidity, tempMax: main.temp_max, tempMin: main.temp_min, temperatura: main.temp })

      } catch (error) {
        console.log('Hubo un error papa: ' + error)
        alert("Ciudad no encontrada :C")
      }
    }
    elFetch()

    let fetchSemanal = async () => {
      try {
        let res = await fetch(urlSemanal)
        let data = await res.json()
        console.clear()
        console.log('Semanal:')
        // console.log(data.list[1])

        let arraySemanal = [data.list[1], data.list[2], data.list[3], data.list[4], data.list[5]]

        render(
          {...arraySemanal.map((e, i) => {
            return <EstablecerZona key={i} />
          })},
          document.querySelector('#climaSemanal')
        )

        // let climaSemanall = ReactDOM.createRoot(
        //   document.querySelector('#climaSemanal')
        // ) 

        // climaSemanall.render(
        // <EstablecerZona/>,
        // <EstablecerZona/>
        // )

        // {...Array(5).fill( e => (<EstablecerZona/>))}
        // Array(5).foclimaSemanall.render(<EstablecerZona/>)

        // for (let semanales of arraySemanal) {
        //   ReactDOM.render(<EstablecerZona/>, document.querySelector('#climaSemanal'))
        //   // climaSemanall.render(<EstablecerZona/>)
        //   // Array(5).foclimaSemanall.render(<EstablecerZona/>)
        //   // console.log(semanales)
        // }

        const { main, weather, wind, dt_txt} = data.list[1]

        setSemanal({
          ...semanal, descripcionS: weather[0].description,  
        })

        

      } catch (error) {
        console.log('Error en el semanal: ' + error)
      }
    }
    fetchSemanal()
    
  }, [nose])

  return (
    <div className="App">
      <div className='container mt-3 buscar d-flex'>
        <input className='form form-control w-25' type="text" id="ciudad" ref={ciudad} placeholder='Busca una ciudad!' />
        <button className='btn btn-success ms-5' onClick={() => setNose(!nose)}>Enviar</button>
      </div>
      <hr className='w-75' />
      <div className='demas'>
        <Region ciudades={ciudades} region={region} descripcion={descripcion} temperatura={temperatura} humedad={humedad} tempMax={tempMax} tempMin={tempMin} />
      </div>
      <div className='d-flex' ref={climaSemanal} id='climaSemanal' >
        {/* <EstablecerZona descripcion={descripcionS} temperatura={temperaturaS} humedad={humedadS} tempMax={tempMaxS} tempMin={tempMinS} viento={vientoS}/> */}
      </div>
    </div>
  );
}

export default App;
