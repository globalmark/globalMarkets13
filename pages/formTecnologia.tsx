import React from 'react'
import Link from "next/link";

function formTecnologia() {
  return (
    <div>
       <div><h1> Bienvenidos a la seccion de Tecnologia </h1></div>
       <form >
           <div>
                <label > * Nombre</label>
                <input type="text"></input>
           </div>
           <div>
               <label> * Categoria </label>
               <select >
                   <option>Todas las categorias </option>
                   <option> Televisores </option>
                   <option> Computadoras</option>
                   <option > Celulares</option>
                   <option >Consolas</option>
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

export default formTecnologia