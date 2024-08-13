import React, { useState } from "react";

//create your first component
const Home = () => {
	// declarion de estados(esapacios de memoria)
	//   estado  , funcion    = hooks("valorinicial")
	let [datos, setDatos] = useState(""); // estado del imput
	let [tareas, setTareas]  = useState([]); //estado del array
	
	// handle o manipular, tasks = tareas , data= datos
	const enviarDatos = (event) => {
		event.preventDefault()
		// console.log('cam')
		// guardando el valor en una variable
		let valorInput = event.target.lol.value;//accediendo al valor
		if (valorInput !== '') {
			const nuevasTareas = tareas.concat(valorInput);
			setTareas(nuevasTareas);
			event.target.lol.value = '';
		}

	}
	// console.log(datos);
	
	// or (event) => setdatos(event.target.input.value)
	return (
		<div className="py-4 mx-auto w-75 d-flex flex-column justifyu-content-center vh-100" style={{ backgroundColor: '#e7efe9'}}>
			<h1 className="py-3 text-center fw-light " style={{fontSize: '8rem', color: '#b7c1ba'}}>todos</h1>
			<form  className="w-50 mx-auto d-flex flex-column justify-content-center" action="" onSubmit={enviarDatos}>
				{/* asignar el evento onChange para vigilar los cambios */}
				<input type="text" id="lol"/>
				<ul className="list-unstyled">
					<li>asdfsadf</li>
				</ul>

			</form>
		</div>
	);
};

export default Home;
