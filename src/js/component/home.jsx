import React, { useState } from "react";

//create your first component
const Home = () => {
	// declarion de estados(esapacios de memoria)
	//   estado  , funcion    = hooks("valorinicial")
	// let [datos, setDatos] = useState(""); // estado del imput
	let [tareas, setTareas] = useState([]); //estado del array
	let [hoveredTarea, setHoveredTarea] = useState(null); // Estado para la tarea "hovered"

	// handle o manipular, tasks = tareas , data= datos
	const enviarDatos = (event) => {
		// previene el comportamiento por defecto, que al enviar el fomr no se cargue la pagina

		event.preventDefault()

		// guardando el valor en una variable
		let valorInput = event.target.lol.value;//accediendo al valor
		// accediendo al valor del input
		console.log(event.target.lol.value)
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
		// Cuando no haya tareas pendientes, la lista debería decir "No hay tareas, añadir tareas"
		// condicion por si no hay tareas pendientes 
		// if (valorInput == ''){
		// 	let sinValor= ["No hay tareas, añadir tareas"]
		// 	setTareas(tareas.concat(sinValor))
		// }else{}
	}
	// imprime las tareas
	console.log(tareas);

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
		<div className=" py-4 mx-auto w-75 d-flex flex-column justifyu-content-center vh-100" style={{ backgroundColor: '#e7efe9' }}>
			<h1 className="py-3 text-center fw-light " style={{ fontSize: '8rem', color: '#b7c1ba' }}>Lista de tareas</h1>
			<div className="bg-white border border-1 rounded-1 border-dark  mx-auto mb-1 w-50"  >
				<div className="bg-white border-bottom  border-1 rounded-1 border-dark  mx-auto mb-1" >
					<div className="bg-white  border-bottom border-top  border-1 rounded-1 border-dark  mx-auto mb-1">
						<form className="w-100 mx-auto d-flex flex-column justify-content-center" action="" onSubmit={enviarDatos}>
							{/* asignar el evento onChange para vigilar los cambios */}
							<input placeholder="What needs to be done?" className="mt-2 w-75 form-control-plaintext py-2  mx-auto ml-4" type="text" id="lol" />
							<hr />

						</form>
						{/* ya que ul no captura informacion,debe estar fuera de form */}
						{/* condicion por si no hay tareas */}
						{tareas.length === 0 ? (
							<p className="text-center my-0 pb-3 border-bottom">No hay tareas, añadir tareas</p>
						) : (tareas.map((tarea, i) => (
							<ul className="list-unstyled w-100 mx-auto mb-0 " key={i} onMouseEnter={() => setHoveredTarea(i)}
								onMouseLeave={() => setHoveredTarea(null)}>
								{/* saque id={i}  xq key es la identificacion como un id */}
								<li className="w-100  position-relative  my-0 "> {tarea} {hoveredTarea === i && ( // Condición para mostrar el botón cuando el ratón está sobre la tarea
									<a className="position-absolute" onClick={() => borrar(i)}><i className=" fa-solid fa-xmark"></i></a>
								)} </li> <hr />
							</ul>)))
						}
						{/* Mostrar el contador de tareas */}
						<p className="text-start py-2  ms-3 mb-2" >Total de tareas: {tareas.length}</p>
					</div>
				</div>

			 </div>



		</div>
	);
};

export default Home;
