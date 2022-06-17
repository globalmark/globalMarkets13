import type { NextApiRequest, NextApiResponse } from 'next'
import { initialData } from '../../../database/products'
import { IProduct } from '../../../interfaces/products';
import {db} from "../../../database"



type Data = 
| { message: string }
| IProduct[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch( req.method ) {
        case 'GET':
            return getProducts( req, res )

        default:
            return res.status(400).json({
                message: 'Bad request'
            })
    }
}
export  async function getProducts(
    req: NextApiRequest,
    res: NextApiResponse<Data>
    ) {
        
        const { genero = 'all' } = req.query;
        if(genero === 'all' || !genero){
            res.status(200).json(initialData.products as any)
            return;
        }
        const products = initialData.products.filter(i=>i.gender === genero)
    res.status(200).json(products as any)
}
