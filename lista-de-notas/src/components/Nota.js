import React from 'react';
function Nota({texto, funcEditar, funcEliminar }){
    return(
        <div className='nota'>
            <p>{texto}</p>
            <div className='buttons'>
                <button onClick={funcEditar}>editar</button>
                <button onClick={funcEliminar}>eliminar</button>
            </div>
        </div>
    );
}
export default Nota;