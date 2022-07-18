import React, { Component } from 'react';

class Ordenar extends Component{

	actualizarCantidad(evento){
		console.log(evento);

		{/* RSV. this.props.indice ha sido pasado a este componente Ordenar desde la propia invocación desde Platillos.js */}
		this.props.hacerPedido(this.props.indice, evento.target.value);
	}

	//
	// Renderización
	// 

	render(){
		return(
			<div>
				<br/>
				<label> Cantidad: </label>

				{/* RSV. Invocación al método actualizarCantidad */}
				<input onChange={this.actualizarCantidad.bind(this)} type="number" min="0" max="20"/>

				{/* RSV. this.props.precio ha sido pasado a este componente Ordenar desde la propia invocación desde Platillos.js */}
				<label className="EspacioPlatillo"> Precio: {this.props.precio} </label>
			</div>
			)
	}
}

export default Ordenar;