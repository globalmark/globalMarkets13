import React from 'react'

import Link from "next/link";

function formElectrodomesticos() {
  return (
    <div>
        <div>
            <h1> Bienvenido a la seccion de Electrodomesticos </h1>
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
                   <option> Heladeras </option>
                   <option> Aires Acondicionados</option>
                   <option > Lavarropas</option>
                   <option >Microondas</option>
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

export default formElectrodomesticos