import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> YANY.
        </p>
        <p>Hola Mundo</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <table>
        <thead>
                <tr>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Correo</th>
                    <th>Celular</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Jimena</td>
                    <td>Hurtado</td>
                    <td>hurtadoreyesjimena81@gmail.com</td>
                    <td>1234567890</td>
                </tr>
                <tr>
                    <td>María</td>
                    <td>Hurtado</td>
                    <td>maria.huratdo@gmail.com</td>
                    <td>2345678901</td>
                </tr>
                <tr>
                    <td>Samuel</td>
                    <td>Andrade</td>
                    <td>andradesamuel@gmail.com</td>
                    <td>3456789012</td>
                </tr>
            </tbody>
        </table>
      </header>
      <p class="title">¿Qué es Babel?</p>
      <p class="Parrafo">  R//Babel es un transpilador de JavaScript. Su función principal es convertir el código JavaScript moderno (ES6/ES7/ES8 y versiones más nuevas) en una versión más compatible con navegadores antiguos, de modo que el código pueda ejecutarse en una mayor variedad de entornos.</p>
      <p class="title"> ¿Que es Webpack?</p>
      <p class="parrafo"> R//Webpack es una herramienta de construcción y empaquetado para aplicaciones web modernas. Su objetivo principal es tomar varios archivos y recursos de un proyecto (como JavaScript, CSS, imágenes, y otros activos) y combinarlos en un número menor de archivos de salida, usualmente llamados "bundles", que pueden ser cargados más eficientemente por el navegador.</p>
      <p class="title"> ¿Para qué se usa en React?</p>
      <p class="parrafo"> R// En el contexto de React, Babel se utiliza para:
         1.Transformar JSX: JSX es una extensión de la sintaxis de JavaScript que permite escribir HTML en el mismo archivo que JavaScript. Babel convierte el código JSX en llamadas a React.createElement, lo cual es necesario para que el código funcione en el navegador. 
         2.Convertir características modernas de JavaScript: Babel permite usar características modernas del lenguaje, como las clases, módulos, y funciones de flecha, y las convierte en una sintaxis más antigua y ampliamente soportada. 
         3.Uso de plugins y presets: Babel se configura mediante plugins y presets, como @babel/preset-react para JSX y @babel/preset-env para características modernas de JavaScript.</p>
    </div>
  );
}

export default App;
