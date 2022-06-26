import NextLink from 'next/link';

import { Link, Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { tesloApi } from '../../api';
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { CartList, OrderSummary } from '../../components/cart';
import {ordenP} from "../checkout/address"
import {id} from "../cart/index"

const SummaryPage = (props) => {

    const _id= id
  
                    

  return (
    <ShopLayout title='Resumen de orden' pageDescription={'Resumen de la orden'}>
        <Typography variant='h1' component='h1'>Resumen de la orden</Typography>

        <Grid container>
            <Grid item xs={ 12 } sm={ 7 }>
                <CartList />
            </Grid>
            <Grid item xs={ 12 } sm={ 5 }>
                <Card className='summary-card'>
                    <CardContent>
                        <Typography variant='h2'>Resumen (3 productos)</Typography>
                        <Divider sx={{ my:1 }} />

                        <Box display='flex' justifyContent='space-between'>
                            <Typography variant='subtitle1'>Dirección de entrega</Typography>
                            <NextLink href='/checkout/address' passHref>
                                <Link underline='always'>
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>

                        
                        <Typography>Nombre: {`${_id.shippingAddress.firstName}`}</Typography>
                        <Typography>Apellido: {`${_id.shippingAddress.lastName}`}</Typography>
                        <Typography>Calle: {`${_id.shippingAddress.address}`}</Typography>
                        <Typography>Ciudad: {`${_id.shippingAddress.city}`}</Typography>
                        <Typography>Pais: {`${_id.shippingAddress.country}`}</Typography>
                     

                        <Divider sx={{ my:1 }} />

                        <Box display='flex' justifyContent='end'>
                            <NextLink href='/cart' passHref>
                                <Link underline='always'>
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>

                        <OrderSummary />

                        <Box sx={{ mt: 3 }}>
                            <Button color="secondary" className='circular-btn' fullWidth>
                                Confirmar Orden
                            </Button>
                        </Box>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>


    </ShopLayout>
  )
}

export default SummaryPage;