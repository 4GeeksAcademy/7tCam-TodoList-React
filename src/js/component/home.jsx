import React, { useState } from "react";

//create your first component
const Home = () => {
	// declarion de estados(esapacios de memoria)
	//   estado  , funcion    = hooks("valorinicial")
	// let [datos, setDatos] = useState(""); // estado del imput
	let [tareas, setTareas] = useState([]); //estado del array

	// handle o manipular, tasks = tareas , data= datos
	const enviarDatos = (event) => {
		event.preventDefault()
		// console.log('cam')
		// guardando el valor en una variable
		let valorInput = event.target.lol.value;//accediendo al valor
		// accede al formulario
		// console.log(event.target);

		if (valorInput !== '') {
			// aqui vinculo mi form con el estado
			// añade un elemento a la lista
			const nuevasTareas = tareas.concat(valorInput);
			setTareas(nuevasTareas);
			// por cada enter se vacia el contenido
			event.target.lol.value = '';
			// console.log(tareas);
		}
	}
	// recibe el parametro postiion<>index, funcion solo hace referencia dentro de este bloque de codigo
	const borrar = (posicion) => {
		// filtro de cada tareas 
		let newList = tareas.filter((tarea, index) => index !== posicion);
		setTareas(newList);
		console.log(newList);
		
	}
	// console.log(datos);

	// or (event) => setdatos(event.target.input.value)
	return (
		<div className="py-4 mx-auto w-75 d-flex flex-column justifyu-content-center vh-100" style={{ backgroundColor: '#e7efe9' }}>
			<h1 className="py-3 text-center fw-light " style={{ fontSize: '8rem', color: '#b7c1ba' }}>todos</h1>
			<form className="w-50 mx-auto d-flex flex-column justify-content-center" action="" onSubmit={enviarDatos}>
				{/* asignar el evento onChange para vigilar los cambios */}
				<input type="text" id="lol" />		
			</form>
			{/* ya que ul no captura informacion,debe estar fuera de form */}
			<ul className="list-unstyled">
					{tareas.map((tarea, i) => (<li id={i} key={i}> {tarea} <button onClick={() => borrar(i)}>x</button> </li>))}
			</ul>
		</div>
	);
};

export default Home;
