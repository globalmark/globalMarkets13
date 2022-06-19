import type { NextApiRequest, NextApiResponse } from 'next'
import product from '../../../../back/src/models/product'
import mongoose from "mongoose"
import {connect} from "../../../database/db"

export default async function deporte(req:NextApiRequest, res:NextApiResponse){
     
     await connect();


    const{method}= req

    switch (method){
        
        case "POST":
            try{
                const producto= new product(req.body)
                await producto.save()
                return res.status(200).json({succcess: true, producto} )

            }
            catch(error){

            }
            default:
                return res.status(500).json({success: false, error:"te faltan campos que llenar"
                 })
    }

}