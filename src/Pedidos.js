import React, { Component } from 'react';
import VarTiendaController from './tiendaController';
import { observer } from 'mobx-react';

class Pedidos extends Component{

	render(){

		// Inicialzación del pedido, tanto de platillos como de bebidas. Inicialmente, el pedido estará vacio
		let PlatillosPedidos = [];
		let BebidasPedidas = [];

		// Incluir en PlatillosPedidos todos aquellos platillos cuya cantidad > 0 y se renderizarán (pues la variable PlatillosPedidos esta incluida en la renderización - Debajo de este codigo)
		const llenar_PlatillosPedidos = VarTiendaController.platillos.forEach(
			(value, index)=> {
				if(value.cantidad != 0){
					PlatillosPedidos.push(
					<div className="list-group-item" key={index}>
						<div className="panel-body">
							<h4> {value.nombre} </h4><br/>
							{/* RSV. Los estilos (Ej. APrecioCantidad, PrecioPlatillo) estan definidos en Platillos.css */}
							<div className="APrecioCantidad">
								<span>Cantidad: {value.cantidad}</span>
								<span className="PrecioPlatillo">Precio: {value.cantidad * value.precio}</span>
							</div>
						</div>
					</div>
					)
				}
			}
		)

		// Incluir en BebidasPedidas todas aquellas bebidas cuya cantidad > 0 y se renderizarán (pues la variable BebidasPedidas esta incluida en la renderización - Debajo de este codigo)
		const llenar_BebidasPedidas = VarTiendaController.bebidas.forEach(
			(value, index)=> {
				if(value.cantidad != 0){
					BebidasPedidas.push(
					<div className="list-group-item" key={index}>
						<div className="panel-body">
							<h4> {value.nombre} </h4><br/>
							{/* RSV. Los estilos (Ej. APrecioCantidad, PrecioPlatillo) estan definidos en Platillos.css */}
							<div className="APrecioCantidad">
								<span>Cantidad: {value.cantidad}</span>								
								<span className="PrecioPlatillo">Precio: {value.cantidad * value.precio}</span>
							</div>
						</div>
					</div>
					)
				}
			}
		)

		//
		// Renderización
		//

		return (
			<div className="container col-md-6">
				<div>
					<div className="panel panel-primary">
						<div className="list-group Pedidos-Menu" >
							{PlatillosPedidos} {/* Renderización de Platillos */}
							{BebidasPedidas} {/* Renderización de Bebidas */}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default observer(Pedidos);