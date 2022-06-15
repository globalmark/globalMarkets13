/*
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Typography } from '@mui/material';


export default function SelectAutoWidth() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 0, minWidth: 65}}>
        <InputLabel id="demo-simple-select-autowidth-label" sx={{marginTop: -1}} ><Typography>Moda</Typography></InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
          size='small'
          sx={{paddingLeft:5}}
          >
          <MenuItem value="">
            <em>none</em>
          </MenuItem>
          <MenuItem value={22}>Todos</MenuItem>
          <MenuItem value={21}>Mujeres</MenuItem>
          <MenuItem value={10}>Hombres</MenuItem>
          <MenuItem value={22}>Unisex</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
*/
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectSmall() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small" sx={{fontFamily:'sans-serif',fontWeight:'Bold',color:'GrayText', borderColor:'red'}}>Moda</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Moda"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}