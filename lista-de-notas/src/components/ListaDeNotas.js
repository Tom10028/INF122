import React, {useState} from "react";
import Nota from "./Nota";
function ListaDeNotas(){
    const [notas, setNotas] = useState([]);
    const [texto,setTexto]=useState("");
    const onDelete=()=>{
        console.log("eliminar")
    };
    const onEdit=()=>{
        console.log("editar")
    };
    const agNota=()=>{
        setNotas([...notas.concat("otra nota")]);
        console.log(notas);
    };
    return(
        <div>
            <input className="input" type="text" value={texto} onChange={(e) => setTexto (e.target.value)}></input>
            <button onClick={agNota}>anadir nota</button>
            {notas.map((nota)=>(
                <Nota key={nota.id} nota={nota} onDelete={onDelete} onEdit={onEdit} />    
            ))}
            
        </div>

    );
}
export default ListaDeNotas;