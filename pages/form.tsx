import React from 'react';
import Link from "next/link";
import Button from "@material-ui/core/Button"


export default function form() {
  return (
    <div>
        <div>
            <h1>Bienvenido, aqui podras publicar un producto </h1>
        </div>
        <div>
            <Link href="/formIndumentaria" >
                <Button  >
                    Indumentaria
                </Button>
            </Link>
        </div>
        <div>
            <Link href="/formTecnologia">
                <Button >
                    Tecnologia
                </Button>
            </Link>
        </div>
        <div>
            <Link href="/formElectrodomesticos">
                <Button >
                    Electrodomesticos
                </Button>
            </Link>
        </div>
        <div>
            <Link href="/formMuebles">
                <Button >
                    Muebles
                </Button>
            </Link>
        </div>
        <div>
            <Link href="/formDeportes"> 
                <Button >
                    Deportes
                </Button>
                </Link>
            
        </div>
 
    </div>


    
  )
};

