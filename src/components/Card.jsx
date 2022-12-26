// import React from 'react'

// const Card = () => {
//   return (
//     <div className='card'>
//     <h1>Product Add Form</h1>
//       <Link to="https://northwind.vercel.app/api/products">API link to check</Link>
      
//     </div>
//   )
// }

// export default Card
import { axios } from 'axios';
import '../components/Card.css'
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';

export default function ControlledOpenSelect() {
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
 const [data,setData] = useState([])
 useEffect(()=>{
 axios.get('https://northwind.vercel.app/api/catagories').then((res)=>{
    setData(res.data)
 })
 })
  return (
    <div className='card'>
    <h1>Product Add Form</h1>
    <Link href="https://northwind.vercel.app/api/products">API link to check</Link>
      {/* <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
        Open the select
      </Button> */}
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-controlled-open-select-label">Catagories</InputLabel>
        <Select
        
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label="Catagories"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            data.map((data)=>{

             return <MenuItem value={10}>{data.name}</MenuItem>
            })
          }
          
        </Select>
      </FormControl>
    </div>
  );
}