import { extendObservable } from 'mobx';

class TiendaController {
	constructor(){
		extendObservable(this,
			{
				//
				// Simulación del catalogo de platillos y bebidas, que son observables desde otros componentes
				//

				platillos: [
				{	nombre: 'Lentejas con chorizo',
					descripcion: 'plato muy rico',
					precio: 12,
					cantidad: 0},

				{	nombre: 'Arroz a la cubana',
					descripcion: 'platillo muy rico',
					precio: 8,
					cantidad: 0},

				{	nombre: 'Cocido montañes',
					descripcion: 'platillo muy rico',
					precio: 15,
					cantidad: 0}],

				bebidas: [
				{	nombre: 'Agua natural',
					descripcion: 'bebida muy rica',
					precio: 1,
					cantidad: 0},

				{	nombre: 'Vino',
					descripcion: 'bebida muy rica',
					precio: 1,
					cantidad: 0},

				{	nombre: 'Cerveza',
					descripcion: 'bebida muy rica',
					precio: 2,
					cantidad: 0}]

			});
	}

	// Cuando se invoque esta función, incrementa la cantidad de platillos en el pedido
	ponerEnLaOrden(indicePlatillo, cantidadPlatillo){
		this.platillos.forEach((value, index)=>{
				if(indicePlatillo === index){
					this.platillos[index].cantidad = cantidadPlatillo;
				}
			}
		)
	}

	// Cuando se invoque esta función, incrementa la cantidad de bebidas en el pedido
	bebidasEnLaOrden(indicePlatillo, cantidadPlatillo){
		this.bebidas.forEach((value, index)=>{
				if(indicePlatillo === index){
					this.bebidas[index].cantidad = cantidadPlatillo;
				}
			}
		)
	}
}

var VarTiendaController = new TiendaController;
export default VarTiendaController;