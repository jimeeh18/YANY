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
            <!DOCTYPE html>
            <html lang= "es">
            <head>
             <meta charset="UTF-8">
             <meta name="viewport"
            content="width=device-width, 
            initial-scale=1.0">
                <title>Palìndromo Checker</
            title>
               <script>
                function 
            esPalindromo(palabra){
              //Eliminar espacios y 
            convertir a minùsculas 
               palabra = palabra.replace(/
            \s+/g,").tolowerCase();  
              //Comparar la palabra con su
            reverso 
                return palabra ===
            palabra.split(").reverse().join("); 
              }

              function
            verificarPalindromo(event){
                const texto = 
            document.getElementByld('texto
            ').value; 
                 if(esPalindromo(texto)){
                   alert("Es palìndromo");
                 }
              }
             </script>
            </head>
            <body>
               <h1>Verificador de 
            Palìndromos</h1>
             <input type="text" id="texto"
            placeholder="Ingresa una 
            palabra"
            onkeyup="verificarPalindromo(ev
            ent)">
            </body>
            </html>
  
   
                                                 
                
                 
            }
      
    </div>
  );
}

export default App;
