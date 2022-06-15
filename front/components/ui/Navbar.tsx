import { useContext, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  Link,
  Toolbar,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent
} from "@mui/material";
import {
  ClearOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

import { UiContext } from "../../context";
import SelectAutoWidth from "../products/prueba";



export const Navbar = () => {
  const { asPath, push } = useRouter();
  const { toggleSideMenu } = useContext(UiContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;
    push(`/search/${searchTerm}`);
  };

  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref>
          <Link display="flex" alignItems="center">
            <Typography variant="h6">Global |</Typography>
            <Typography sx={{ ml: 0.5 }}>Market</Typography>
          </Link>
        </NextLink>

        <Box flex={1} />

        <Box
          sx={{
            display: isSearchVisible ? "none" : { xs: "none", sm: "block" },
          }}
          className="fadeIn">
          <Button>
          <FormControl sx={{ m: 0, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small" sx={{fontFamily:'sans-serif',fontWeight:'Bold',color:'GrayText'}}>Moda</InputLabel>
              <Select
                sx={{borderRadius:10}}
                labelId="demo-select-small"
                id="demo-select-small"
                label="Moda">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <NextLink href='/category/men' passHref>
                  <Link sx={{color:'black'}}>
                    <MenuItem value={10} color = {asPath === '/category/men' ? 'primary' : 'info'}>Hombres</MenuItem>
                  </Link>
                </NextLink>
                <NextLink href='/category/women' passHref>
                  <Link sx={{color:'black'}}>
                    <MenuItem value={10} color = {asPath === '/category/women' ? 'primary' : 'info'}>Mujeres</MenuItem>
                  </Link>
                </NextLink>
                <NextLink href='/category/kid' passHref>
                  <Link sx={{color:'black'}} >
                    <MenuItem value={10} color = {asPath === '/category/kid' ? 'primary' : 'info'}>Niños</MenuItem>
                  </Link>
                </NextLink>
              </Select>
    </FormControl>
    </Button>
          {/*
          <NextLink href="/category/men" passHref>
            <Link>
              <Button color={asPath === "/category/men" ? "primary" : "info"}>
                Hombres
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/category/women" passHref>
            <Link>
              <Button color={asPath === "/category/women" ? "primary" : "info"}>
                Mujeres
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/category/kid" passHref>
            <Link>
              <Button color={asPath === "/category/kid" ? "primary" : "info"}>
                Niños
              </Button>
            </Link>
          </NextLink>*/}
          <NextLink href="/category/women" passHref>
            <Link>
              <Button
                color={asPath === "/category/tecnologia" ? "primary" : "info"}>
                Tecnologia
              </Button>
            </Link>
          </NextLink>

          <NextLink href="/category/hogar" passHref>
            <Link>
              <Button color={asPath === "/category/hogar" ? "primary" : "info"}>
                Hogar
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/category/deporte" passHref>
            <Link>
              <Button
                color={asPath === "/category/deporte" ? "primary" : "info"}>
                Deporte
              </Button>
            </Link>
          </NextLink>
        </Box>

        <Box flex={1} />

        {/* Pantallas pantallas grandes */}
        {isSearchVisible ? (
          <Input
            sx={{ display: { xs: "none", sm: "flex" } }}
            className="fadeIn"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => (e.key === "Enter" ? onSearchTerm() : null)}
            type="text"
            placeholder="Buscar..."
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setIsSearchVisible(false)}>
                  <ClearOutlined />
                </IconButton>
              </InputAdornment>
            }
          />
        ) : (
          <IconButton
            onClick={() => setIsSearchVisible(true)}
            className="fadeIn"
            sx={{ display: { xs: "none", sm: "flex" } }}>
            <SearchOutlined />
          </IconButton>
        )}

        {/* Pantallas pequeñas */}
        <IconButton
          sx={{ display: { xs: "flex", sm: "none" } }}
          onClick={toggleSideMenu}>
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

        <Button onClick={toggleSideMenu}>Menú</Button>
      </Toolbar>
    </AppBar>
  );
};
