import React, { Component } from 'react';
import Pedidos from './Pedidos';
import { Link } from 'react-router';

class Lienzo extends Component{

	//
	// Renderización
	//

	render(){
		return(
			<div className="container">

				<div className="jumbotron" >
					<h2>Restaurante de Rafael San Vidal</h2>
				</div>

				{/* Dos botones: Platillos y Bebidas */} 
				<div>
					<ul className="nav nav-pills ListMargin">
						{/* Al pulsar sobre este enlace, la url es la raiz, lo que implica que la clase Route visualice elcomponente <Platillos/> */}
						<li role="presentation" className="active"><Link to="/">Comidas</Link></li>

						{/* Al pulsar sobre este enlace, se añade bebidas a la url, lo que implica que la clase Route visualice elcomponente <Bebidas/> */}
						<li role="presentation" className="active"><Link to="bebidas">Bebidas</Link></li>
					</ul>
				</div>
				

				{/* En lugar de renderizar directamente <Platillos/> o <Bebidas/>, se renderiza uno u otro según this.props.children y el path de la url (consultar direcciones en index.js) */}
				{this.props.children} 

				{/* Pedidos siempre se renderiza en la parte derecha de la página */}
				<Pedidos/>
			</div>
			)
	}
}

export default Lienzo;