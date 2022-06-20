import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { ShopLayout } from "../../components/layouts"
import React,{useState} from "react"
import NextLink from "next/link"
import { useRouter } from 'next/router'

const AddressPage = () => {
 
    const router = useRouter()

   const[input,setInput]=useState({
       firstName:"",
       lastName:"",
       address:"",
       zip:"",
       city:"",
       country:"",
       phone:""

   })

   const handleChange= (e:any)=>{
       const {value,name}= e.target
       setInput({
           ...input,
           [name]:value
       })     
   }

   const handleSubmit=(e:any)=>{
       e.preventDefault();
       if(!input.firstName||
          !input.lastName||
          !input.address||
          !input.zip||
          !input.city||
          !input.country||
          !input.phone
          
          ){
              alert("* parametros requerido")
          }
          else{
            //   {sendDatos(input)}
            router.push("/checkout/summary")
          }

   }

//    const sendDatos= async(input:any)=>{
//        try{
//            const x= await fetch("http://localhost:9000/orders/",{
//                method:"POST",
//                headers:{
//                     "Content-type":"application/json"
//                },
//                body: JSON.stringify(input)
//            })
//            const y= await x.json()

//            console.log("esto es y", y)
//        }
//        catch(error){
//            console.log("el error esta",error)
//        }
//    }

  




  return (
    <ShopLayout title="Dirección" pageDescription="Confirmar dirección del destino">
        <Typography variant="h1" component='h1'>Dirección</Typography>

        <form onSubmit={handleSubmit} >

            <Grid container spacing={ 2 } sx={{ mt: 2 }}>
                
                <Grid item xs={12} sm={ 6 }>
                    <TextField label='* Nombre' variant="filled" fullWidth name="firstName" defaultValue={input.firstName} onChange={(e)=> handleChange(e)} />
                </Grid>
                <Grid item xs={12} sm={ 6 }>
                    <TextField label='* Apellido' variant="filled" fullWidth name="lastName" defaultValue={input.lastName} onChange={(e)=> handleChange(e)} />
                </Grid>

                <Grid item xs={12} sm={ 6 }>
                    <TextField label='* Dirección' variant="filled" fullWidth name="address" defaultValue={input.address} onChange={(e)=> handleChange(e)} />
                </Grid>
                <Grid item xs={12} sm={ 6 }>
                    <TextField label='Dirección 2 (opcional)' variant="filled" fullWidth  />
                </Grid>

                <Grid item xs={12} sm={ 6 }>
                    <TextField label='* Código Postal' variant="filled" fullWidth name="zip" defaultValue={input.zip} onChange={(e)=> handleChange(e)} />
                </Grid>
                <Grid item xs={12} sm={ 6 }>
                    <TextField label='* Ciudad' variant="filled" fullWidth name="city" defaultValue={input.city} onChange={(e)=> handleChange(e)} />
                </Grid  >
                
                
                <Grid item xs={12} sm={ 6 }>
                    <TextField label='* Pais' variant="filled" fullWidth name="country" defaultValue={input.country} onChange={(e)=> handleChange(e)} />
                </Grid>
                <Grid item xs={12} sm={ 6 }>
                    <TextField label='* Teléfono' variant="filled" fullWidth name="phone" defaultValue={input.phone} onChange={(e)=> handleChange(e)} />
                </Grid>

            </Grid>


            <Box sx={{ mt: 5 }} display='flex' justifyContent='center'>
                <NextLink href="/summary" >
                <Button color="secondary" className="circular-btn" size="large" onClick={handleSubmit} >
                    Revisar pedido
                </Button>
                </NextLink>
            </Box>

        </form>

    </ShopLayout>
  )
}

export default AddressPage