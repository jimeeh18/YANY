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
    </div>
  );
}

export default App;
