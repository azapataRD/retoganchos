import { useEffect, useState } from 'react'

import './App.css'
import useFetch from './useFetch.jsx'

const App = () => {
  const [usuarios, setUsuarios] = useState([]);
  const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users");

  useEffect (() => {
    if (data) {
      setUsuarios(data);
    }
  }, [data]);
  return (    
    <div className='usuario-div'>
      <h2>Lista de Usuarios</h2>
      {loading && <p>Cargando...</p>}
      {error && <p>Error:{error}</p>}
      <div className='tarjetas-div'>
        {usuarios.map((usuario) => (
          <div key={usuario.id} className='tarjeta-div'>
            <h3>{usuario.name}</h3>
            <p>{usuario.company.catchPhrase}</p>
            </div>
        ))}
      </div>
    </div>
  );
  };

export default App
