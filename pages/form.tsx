import type { NextPage } from "next"
import Link from "next/link"

const form: NextPage= () =>{
    return ( 
        <div>
            <div>
                <h2> En esta seccion podra añadir a su perfil un nuevo producto para la venta </h2>
            </div>
            <div>
                <Link href="/home">
                     <button> Home </button>
                    </Link>
            </div>
            <div>
                <label > Nombre:
                 </label>
                 <input type="text" />
            </div>
            
            
        </div>

    )
}

export default form
