import React from 'react';
import Link from "next/link";
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import BungalowOutlinedIcon from '@mui/icons-material/BungalowOutlined';
import SurfingOutlinedIcon from '@mui/icons-material/SurfingOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import AccessibilityOutlinedIcon from '@mui/icons-material/AccessibilityOutlined';
import { Grid, Button } from '@mui/material';
import { Box } from '@mui/system';
import { Icon } from '@mui/material';


export default function form() {
  return (
    <div>
        <div>
            <h1>Bienvenido, aqui podras publicar un producto </h1>
        </div>
        <Grid container>
            <Grid item xs={2}>
                <Box border={2}>
                    <Link href="formIndumentaria" >
                        <Button 
                            endIcon={<AccessibilityOutlinedIcon></AccessibilityOutlinedIcon>} >
                            Indumentaria
                        </Button>
                    </Link>
                    
                    
                </Box>    
            </Grid>
            <Grid item xs={2}>
                <Box border={2}>
                    
                        <Link href="formTecnologia">
                            <Button 
                            endIcon={<ComputerOutlinedIcon></ComputerOutlinedIcon>}>                                
                                    Tecnologia                                 
                            </Button>
                            
                        </Link>
                        
                    
                </Box>
            </Grid>
            
            <Grid item xs={2}>
                <Box border={2}>
                    <Link href="formHogar">
                        <Button 
                        endIcon={<BungalowOutlinedIcon></BungalowOutlinedIcon>}>
                            Hogar
                        </Button>
                    </Link>
                    
                </Box>
            </Grid>
            <Grid item xs={2}>
                    <Box border={2}>
                        <Link href="formDeporte"> 
                            <Button 
                            endIcon={<SurfingOutlinedIcon></SurfingOutlinedIcon>}>
                                Deportes
                            </Button>
                        </Link>
                        
                    </Box>
                
            </Grid>
        </Grid>
    </div>


    
  )
};
