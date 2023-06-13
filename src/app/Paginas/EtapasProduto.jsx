import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Link } from 'react-router-dom';
import { Card, Button} from '@mui/material'
const steps = [
  'Encomendado',
  'Caminho',
  'Entregue',
];

export default function HorizontalLabelPositionBelowStepper() {
  return (
    <> 
   <Link to={"/Localizar"}> <Button variant='outlined' sx={{color:"red" , left:"0" , marginTop:"100px"}} >Lista de Pedidos</Button></Link>
    <Box sx={{ width: '100%',marginTop:5 ,display:"flex" ,justifyContent:"center"}}>
    
    <Card sx={{width:"150vh", height:"30vh" , paddingTop:"80px"}}>
      <Stepper activeStep={0} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      </Card>
    </Box>
    </>
  );
}