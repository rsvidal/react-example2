import React from 'react';
import ReactDOM from 'react-dom';
// Es necesario importar el react-router previamente (si no, aparecerán errores en la compilación del proyecto)
// En mi caso, tuve que instalar una versión antigua, pues este proyecto tambien es antiguo
// npm install --save react-router@2.8.1
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Lienzo from './Lienzo';
import Platillos from './Platillos';
import Bebidas from './Bebidas';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

/* Se renderiza <Platillos/> por defecto. Pero si la ruta es bebidas, se renderizará el componente <Bebidas/> 
   Nota: La renderización se realiza con la invocación a {this.props.children}  (en el fichero Lienzo.js) */
const direcciones = (
	<Router history={ browserHistory }>
		<Route path="/" component={Lienzo}>			
			<IndexRoute component={Platillos}></IndexRoute> 
			<Route path="bebidas" component={Bebidas}></Route>
		</Route>
	</Router>
);

// En lugar de renderizar <Lienzo/> directamente, se renderiza la constante direcciones, que se encarga de mostrar diferentes componentes en función del path de la URL
// NOTA: Para usar Router es necesario usar la libreria 'react-router'
ReactDOM.render(
  direcciones,
  document.getElementById('root')
);