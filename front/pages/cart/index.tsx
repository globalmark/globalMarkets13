<<<<<<< HEAD
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import { ShopLayout } from "../../components/layouts/ShopLayout";
import { CartList, OrderSummary } from "../../components/cart";
=======
import { Box, Button, Card, CardContent, Divider, FormControl, Grid, Typography } from '@mui/material';
import NextLink from "next/link";
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { CartList, OrderSummary } from '../../components/cart';
import React,{useContext} from "react"
import {CartContext} from "../../context/cart/CartContext"
import { useRouter } from 'next/router' 
import {AuthContext} from "../../context/auth/AuthContext"
export var id 
>>>>>>> 93af31c16a0000a6a5de28f7dc2e644b59b51b07

const CartPage = () => {

    const{user,isLoggedIn}=useContext(AuthContext)

    const userId= user.email 

    

    const router = useRouter()

    const{cart,numberOfItems,subTotal,tax,total}=useContext(CartContext)
    const enviar= {numberOfItems,subTotal,total,orderItems:cart,userId}

    console.log("carrito",cart)

    const handleSubmit=(e:any)=>{
        e.preventDefault();
        if(!cart||
            !numberOfItems||
            !subTotal||
            !total           
                ){
                alert ("debe completar su carrito")
            }
        
        else{enviarDatos()}    

    }

    const enviarDatos= async()=>{
        try{
            const t= await fetch("http://localhost:9000/orders",{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(enviar)
            })
            const check= await t.json()
            id=check
            console.log("check", check )
        }
        catch(error){
            console.log(error)
        }

         

        router.push("/checkout/address")



    }

   


    






   
  

    


  return (
<<<<<<< HEAD
    <ShopLayout
      title="Carrito - 3"
      pageDescription={"Carrito de compras de la tienda"}>
      <Typography variant="h1" component="h1">
        Carrito
      </Typography>

      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList editable />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Orden</Typography>
              <Divider sx={{ my: 1 }} />
=======
    <ShopLayout title='Carrito - 3' pageDescription={'Carrito de compras de la tienda'}>
        <Typography variant='h1' component='h1'>Carrito</Typography>
        <FormControl onSubmit={handleSubmit} >
            <Grid container>
                <Grid item xs={ 12 } sm={ 7 }>
                    <CartList editable />
                </Grid>
                <Grid item xs={ 12 } sm={ 5 }>
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant='h2'>Orden</Typography>
                            <Divider sx={{ my:1 }} />

                            <OrderSummary />

                            <Box sx={{ mt: 3 }}>
                            <NextLink href="/checkout/address">
                                <Button color="secondary" className='circular-btn' fullWidth onClick={handleSubmit} disabled={!isLoggedIn}  >
                                    Checkout
                                </Button>
                            </NextLink>
                            </Box>

                        </CardContent>
                    </Card>
                </Grid>
                
            </Grid>
        </FormControl>
>>>>>>> 93af31c16a0000a6a5de28f7dc2e644b59b51b07

              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                <NextLink href="/checkout/address">
                  <Button color="secondary" className="circular-btn" fullWidth>
                    Chekear Orden
                  </Button>
                </NextLink>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default CartPage;
<<<<<<< HEAD
=======
 
>>>>>>> 93af31c16a0000a6a5de28f7dc2e644b59b51b07
