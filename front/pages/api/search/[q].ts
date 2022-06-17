import type { NextApiRequest, NextApiResponse } from 'next';
import { initialData,SeedProduct } from '../../../database/products';
import { IProduct } from '../../../interfaces';

type Data = 
| { message: string }
| IProduct[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch( req.method ) {

        case 'GET':
            return searchProducts( req, res )

        default:
            return res.status(400).json({
                message: 'Bad request'
            });
    }

    
}
const searchProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    let { q = '' } = req.query;
    const db = await fetch("http://localhost:9000/products/").then(res=>res.json());
    if ( q.length === 0 ) {
        return res.status(400).json({
            message: 'Debe de especificar el query de búsqueda'
        })
    }
    q = q.toString().toLowerCase();
    const products = db.filter((i:any)=>{
        if(!!i.tags && i.tags[0].toLowerCase().includes(q as any)) return i;
        else if(i.description.toLowerCase().includes(q as any)) return i;
        else if (!!i.title && i.title.toLowerCase().includes(q as any)) return i;
        else if(!!i.type && i.type.toLowerCase().includes(q as any)) return i;
        else if (!!i.slug && i.slug.toLowerCase().includes(q as any)) return i
        })
    res.status(200).json(products as any)
}