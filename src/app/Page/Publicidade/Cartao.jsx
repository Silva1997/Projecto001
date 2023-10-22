import { Card } from '@mui/material'
import React, { Component } from 'react'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import imagem from './Img/A8.jpg'
import '../Estilos/Estilos.css'
export default class Cartao extends Component {
  render() {
    return (
      <div>
<Card sx={{ maxWidth: 200 ,margin: 2 }} >
      <CardMedia
        sx={{ height: 250 ,
        }}
        image={imagem}
        title="Bolos"
        style={{objectFit:"contain" , width:"50vh" , cursor:"pointer"}}
      />
      <span style={{backgroundColor:"#f03c",padding:"4px 4px",color:"#EEE",
      borderRadius:"12px 12px ", fontSize:"8pt", position:"relative",
      top:"-250px", left:"-60px"}}>desconto7%</span>
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          Bolo de Aniversario
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Bolo tipico para 
          Aniversario
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Preço: 15.000,00
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex" , justifyContent:"center"}}>
<button style={{ textDecoration: "none", border: "none", padding: "4px 6px", borderRadius: "8px 9px",
backgroundColor: "yellow" }}>
Comprar</button>
      </CardActions>
    </Card>
      </div>
    )
  }
}
