import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ShopLayout } from "../../components/layouts";
import { useRouter } from "next/router";
import { id } from "../cart/index";

export var ordenP;
const AddressPage = () => {
  const router = useRouter();
  const _id = id;

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    phone: "",
  });

  const mandar = { shippingAddress: { ...input } };

  ordenP = mandar;

  const handleChange = (e: any) => {
    const { value, name } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      !input.firstName ||
      !input.lastName ||
      !input.address ||
      !input.zip ||
      !input.city ||
      !input.country ||
      !input.phone
    ) {
      alert("* parametro requerido");
    } else {
      sendDatos(input);
    }
  };

  const sendDatos = async (input: any) => {
    try {
      console.log("input", input);

      const x = await fetch(`http://localhost:9000/orders/${_id._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(mandar),
      });
      const data = await x.json();

      console.log("data", data);

      let y: String[] = [];
      y.push(input);

      console.log("mandar", mandar);
      console.log("esto es y", y);
    } catch (error) {
      console.log(error);
    }

    router.push(`/orders/${_id._id}`);
  };

  console.log("idd", ordenP);

  return (
    <ShopLayout
      title="Dirección"
      pageDescription="Confirmar dirección del destino">
      <Typography variant="h1" component="h1">
        Dirección
      </Typography>

      {/* <Grid container spacing={ 2 } sx={{ mt: 2 }}> */}

      <form onSubmit={handleSubmit}>
        <Grid item xs={12} sm={20}>
          <TextField
            label="Nombre"
            variant="filled"
            fullWidth
            name="firstName"
            defaultValue={input.firstName}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={20}>
          <TextField
            label="Apellido"
            variant="filled"
            fullWidth
            name="lastName"
            defaultValue={input.lastName}
            onChange={(e) => handleChange(e)}
          />
        </Grid>

        <Grid item xs={12} sm={20}>
          <TextField
            label="Dirección"
            variant="filled"
            fullWidth
            name="address"
            defaultValue={input.address}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={20}>
          <TextField
            label="Dirección 2 (opcional)"
            variant="filled"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={20}>
          <TextField
            label="Código Postal"
            variant="filled"
            fullWidth
            name="zip"
            defaultValue={input.zip}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={20}>
          <TextField
            label="Ciudad"
            variant="filled"
            fullWidth
            name="city"
            defaultValue={input.city}
            onChange={(e) => handleChange(e)}
          />
        </Grid>

        <Grid item xs={12} sm={20}>
          <TextField
            label="Pais"
            variant="filled"
            fullWidth
            name="country"
            defaultValue={input.country}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={20}>
          <TextField
            label="Teléfono"
            variant="filled"
            fullWidth
            name="phone"
            defaultValue={input.phone}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
      </form>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6}>
          <TextField label="Nombre" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Apellido" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Dirección" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Dirección 2 (opcional)"
            variant="filled"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Código Postal" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Ciudad" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <Select variant="filled" label="País" value={1}>
              <MenuItem value={1}>Argentina</MenuItem>
              <MenuItem value={1}>Peru</MenuItem>
              <MenuItem value={1}>Venezuela</MenuItem>
              <MenuItem value={1}>Ecuador</MenuItem>
              <MenuItem value={1}>Colombia</MenuItem>
              <MenuItem value={1}>Uruguay</MenuItem>
              <MenuItem value={1}>Bolivia</MenuItem>
              <MenuItem value={1}>Panama</MenuItem>
              <MenuItem value={1}>Estados Unidos</MenuItem>
              <MenuItem value={1}>Canada</MenuItem>
              <MenuItem value={1}>Costa Rica</MenuItem>
              <MenuItem value={2}>Honduras</MenuItem>
              <MenuItem value={3}>El Salvador</MenuItem>
              <MenuItem value={4}>México</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Teléfono" variant="filled" fullWidth />
        </Grid>
      </Grid>

      <Box sx={{ mt: 5 }} display="flex" justifyContent="center">
        <Button color="secondary" className="circular-btn" size="large">
          Revisar pedido
        </Button>
      </Box>
    </ShopLayout>
  );
};

export default AddressPage;
