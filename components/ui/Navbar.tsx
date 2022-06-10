import NextLink from "next/link";



import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref>
          <Link display="flex" alignItems="center">
            <Typography variant="h6">Global|</Typography>
            <Typography sx={{ ml: 0.5 }}>Market</Typography>
          </Link>
        </NextLink>
        <Link href="/form">
        <Button>  
          Crea tu producto
          
        </Button>
        </Link>
        

        <Box flex={1} />

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <NextLink href="/category/tecnologia" passHref>
            <Link>
              <Button>Tecnologia</Button>
            </Link>
          </NextLink>
          <NextLink href="/category/electrodomestico" passHref>
            <Link>
              <Button>Electrodomestico</Button>
            </Link>
          </NextLink>
          <NextLink href="/category/muebles" passHref>
            <Link>
              <Button>Muebles</Button>
            </Link>
          </NextLink>
          <NextLink href="/category/ropa" passHref>
            <Link>
              <Button>Ropa</Button>
            </Link>
          </NextLink>
          <NextLink href="/category/deportes" passHref>
            <Link>
              <Button>Deportes</Button>
            </Link>
          </NextLink>
        </Box>

        <Box flex={1} />

        <IconButton>
          <SearchOutlined />
        </IconButton>

        <NextLink href="/cart" passHref>
          <Link>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>

        <Button>Menú</Button>
      </Toolbar>
    </AppBar>
  );
};
