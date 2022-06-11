import React from 'react'
import Link from "next/link";

function formMuebles() {
  return (
    <div>
        <div>
            <h1> Buenvenidos a la seccion de Muebles </h1>
            
        </div>
        <form>
        <div>
                <label > * Nombre</label>
                <input type="text"></input>
           </div>
           <div>
               <label> * Categoria </label>
               <select >
                   <option>Todas las categorias </option>
                   <option> Sillas </option>
                   <option> Mesas</option>
                   <option > Ropero</option>
                   <option >Escritorio</option>
               </select>
           </div>
           <div>
               <label > Descripcion</label>
               <input type="text" />
           </div>
           <div>
               <label> *Precio</label>
               <input type="text" />
           </div>
           <div>
                <label>Stock</label>
                <input type="number" min="1" />
           </div>
           <div>
               <label> imagen: </label>
               <input type="file" />
           </div>
           <div>
               <button> Crear</button>
           </div>
           <div>
               <Link href="/home">
                   <button> HOME </button>
               </Link>

           </div>
        </form>
    
    </div>
    
  )
}

export default formMuebles