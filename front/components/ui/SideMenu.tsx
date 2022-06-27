import { useContext, useState } from 'react';

import { Accordion, Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader,AccordionSummary,AccordionDetails, Link, Typography } from "@mui/material"
import { AccountCircleOutlined, AdminPanelSettings, CategoryOutlined, ConfirmationNumberOutlined, EscalatorWarningOutlined, ExpandMoreRounded, FemaleOutlined, LoginOutlined, MaleOutlined, SearchOutlined, VpnKeyOutlined,ShoppingBagOutlined,HomeOutlined,KitchenOutlined,ChairOutlined,AirOutlined,DevicesOutlined,ComputerOutlined,DevicesOtherOutlined,SportsEsportsOutlined,SportsOutlined,SportsSoccerOutlined,SportsBasketballOutlined,SportsMmaOutlined } from "@mui/icons-material"

import { UiContext } from '../../context/ui/UiContext';
import { useRouter } from 'next/router';
import { AuthContext } from '../../context/auth/AuthContext';


export const SideMenu = () => {

    const router = useRouter();
    const { isMenuOpen, toggleSideMenu } = useContext( UiContext );
    const {user, isLoggedIn, logout} = useContext (AuthContext)



    const [searchTerm, setSearchTerm] = useState('');

    const onSearchTerm = () => {
        if( searchTerm.trim().length === 0 ) return;
        navigateTo(`/search/${ searchTerm }`);
    }

    
    const navigateTo = ( url: string ) => {
        toggleSideMenu();
        router.push(url);
    }

    const onLogout = () => {
        logout();
    }


  return ( 
    <Drawer
        open={ isMenuOpen }
        anchor='right'
        sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
        onClose={ toggleSideMenu }
    >
        <Box sx={{ width: 250, paddingTop: 5 }}>
            
            <List>

                <ListItem>
                    <Input
                        autoFocus
                        value={ searchTerm }
                        onChange={ (e) => setSearchTerm( e.target.value ) }
                        onKeyPress={ (e) => e.key === 'Enter' ? onSearchTerm() : null }
                        type='text'
                        placeholder="Buscar..."
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={ onSearchTerm }
                                >
                                 <SearchOutlined />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </ListItem>
                <Accordion 
                sx={{ display: { xs: '', sm: 'none' } }}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreRounded />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <ListItemIcon>
                        <ShoppingBagOutlined/>
                    </ListItemIcon>
                    <Typography variant="h5" component="h5">Moda
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                <ListItem 
                    button 
                    sx={{ display: { xs: '', sm: 'none' } }} 
                    onClick={ () => navigateTo('/category/men') }
                    >
                    <ListItemIcon>
                        <MaleOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Hombres'} />
                </ListItem>

                <ListItem 
                    button 
                    sx={{ display: { xs: '', sm: 'none' } }}
                    onClick={ () => navigateTo('/category/women') }
                >
                    <ListItemIcon>
                        <FemaleOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Mujeres'} />
                </ListItem>

                <ListItem 
                    button 
                    sx={{ display: { xs: '', sm: 'none' } }}
                    onClick={ () => navigateTo('/category/kid') }
                    >
                    <ListItemIcon>
                        <EscalatorWarningOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Niños'} />
                </ListItem>
                    </AccordionDetails>
                </Accordion>

                <Accordion 
                sx={{ display: { xs: '', sm: 'none' } }}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreRounded />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <ListItemIcon>
                        <HomeOutlined/>
                    </ListItemIcon>
                    <Typography variant="h5" component="h5">Hogar
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                <ListItem 
                    button 
                    sx={{ display: { xs: '', sm: 'none' } }} 
                    onClick={ () => navigateTo('/category/cocina') }
                    >
                    <ListItemIcon>
                        <KitchenOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Cocina'} />
                </ListItem>

                <ListItem 
                    button 
                    sx={{ display: { xs: '', sm: 'none' } }}
                    onClick={ () => navigateTo('/category/muebles') }
                >
                    <ListItemIcon>
                        <ChairOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Muebles'} />
                </ListItem>

                <ListItem 
                    button 
                    sx={{ display: { xs: '', sm: 'none' } }}
                    onClick={ () => navigateTo('/category/calefaccion') }
                    >
                    <ListItemIcon>
                        <AirOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Calefacción y Enfriamento'} />
                </ListItem>
                    </AccordionDetails>
                </Accordion>

                <Accordion 
                sx={{ display: { xs: '', sm: 'none' } }}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreRounded />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <ListItemIcon>
                        <DevicesOutlined/>
                    </ListItemIcon>
                    <Typography variant="h5" component="h5">Tecnologia
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                <ListItem 
                    button 
                    sx={{ display: { xs: '', sm: 'none' } }} 
                    onClick={ () => navigateTo('/category/computacion') }
                    >
                    <ListItemIcon>
                        <ComputerOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Computación'} />
                </ListItem>

                <ListItem 
                    button 
                    sx={{ display: { xs: '', sm: 'none' } }}
                    onClick={ () => navigateTo('/category/dispositivos') }
                >
                    <ListItemIcon>
                        <DevicesOtherOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Varios'} />
                </ListItem>

                <ListItem 
                    button 
                    sx={{ display: { xs: '', sm: 'none' } }}
                    onClick={ () => navigateTo('/category/videojuegos') }
                    >
                    <ListItemIcon>
                        <SportsEsportsOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'VideoJuegos'} />
                </ListItem>
                    </AccordionDetails>
                </Accordion>

                <Accordion 
                sx={{ display: { xs: '', sm: 'none' } }}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreRounded />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <ListItemIcon>
                        <SportsOutlined/>
                    </ListItemIcon>
                    <Typography variant="h5" component="h5">Deportes
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                <ListItem 
                    button 
                    sx={{ display: { xs: '', sm: 'none' } }} 
                    onClick={ () => navigateTo('/category/futbol') }
                    >
                    <ListItemIcon>
                        <SportsSoccerOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Futbol'} />
                </ListItem>

                <ListItem 
                    button 
                    sx={{ display: { xs: '', sm: 'none' } }}
                    onClick={ () => navigateTo('/category/basquetbol') }
                >
                    <ListItemIcon>
                        <SportsBasketballOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Basquetbol'} />
                </ListItem>

                <ListItem 
                    button 
                    sx={{ display: { xs: '', sm: 'none' } }}
                    onClick={ () => navigateTo('/category/box') }
                    >
                    <ListItemIcon>
                        <SportsMmaOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Box'} />
                </ListItem>
                    </AccordionDetails>
                </Accordion>
                {
                    isLoggedIn && (
                        <>
                        <ListItem button>
                        <ListItemIcon>
                            <AccountCircleOutlined/>
                        </ListItemIcon>
                        <ListItemText primary={'Perfil'} />
                    </ListItem>
    
                    <ListItem button
                     onClick={ () => navigateTo('/orders/history') }
                    >
                        <ListItemIcon>
                            <ConfirmationNumberOutlined/>
                        </ListItemIcon>
                        <ListItemText primary={'Mis Ordenes'} />
                    </ListItem>
                    </>
                    )
                }
                {
                    isLoggedIn ? (
                        <ListItem button onClick={onLogout}>
                    <ListItemIcon>
                        <LoginOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Salir'} />
                </ListItem>
        
                    ) : (
                        <>
                        <ListItem button
                        onClick={ () => navigateTo(`/auth/login?p=${router.asPath }`) }
                        >
                            <ListItemIcon>
                                <VpnKeyOutlined/>
                            </ListItemIcon>
                            <ListItemText primary={'Ingresar'} />
                        </ListItem>
                 <ListItem button
                onClick={ () => navigateTo('/auth/register') }
                >
                    <ListItemIcon>
                    <AdminPanelSettings/>
                    </ListItemIcon>
                    <ListItemText primary={'Registrarse'} />
                </ListItem>
                </>
                    )
                }



                


                {/* Admin */}
                {
                    user?.role === 'admin' && (
                        <>
                        <Divider />
                        <ListSubheader>Admin Panel</ListSubheader>
        
                        <ListItem button
                        onClick={ () => navigateTo('/formulario/form') } 
                        >
                            <ListItemIcon>
                                <CategoryOutlined/>
                            </ListItemIcon>
                            <ListItemText primary={'Productos'} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <ConfirmationNumberOutlined/>
                            </ListItemIcon>
                            <ListItemText primary={'Ordenes'} />
                        </ListItem>
        
                        <ListItem button>
                            <ListItemIcon>
                                <AdminPanelSettings/>
                            </ListItemIcon>
                            <ListItemText primary={'Usuarios'} />
                        </ListItem>
                        </>
                    )
                }
               
            </List>
        </Box>
    </Drawer>
  )
}
