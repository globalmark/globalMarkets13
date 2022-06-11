import React from 'react'
import Link from "next/link";

function formIndumentaria() {
  
  return (
    <div>
        <div><h1> Bienvenidos a la seccion de indumentaria </h1></div>
        <form>
          <div>
            <label> * Nombre: </label>
            <input type="text" />
          </div>
          <div>
            <label> Categoria </label>
            <select>
              <option> Remera</option>
              <option> Campera </option>
              <option>Gorra</option>
              <option>Sweater</option>
              <option>Pantalon</option>
              <option>Short</option>
            </select>
          </div>
          <div>
            <label> * Descripcion </label>
            <input type="text" />
          </div>
          <div>
            <label > * Precio: $ </label>
            <input type="text" />
          </div>
          <div>
            <label > Talles </label>
            <select>
            <option > Todos los talles </option>
            <option>XS </option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
            <option>XXXL</option>
            </select>
          </div>
          <div>
            <label > Stock: </label>
            <input type="number" min="0" />
          </div>
          <div>
            <label> Imagen: </label>
            <input type="file" />
          </div>
          <div>
            <button> Crear</button>
          </div>
        </form> 
        <div>
          <Link href="/home">
            <button>
              Home
              </button>
               </Link>
        </div>
        <div>
          <p>(*) estos puntos son obligatorios </p>
        </div>

    </div>
    

  )
}

export default formIndumentaria