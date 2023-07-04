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


// import React from "react";
// import {
//   Drawer,
//   Button,
//   Typography,
//   IconButton,
// } from "@material-tailwind/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";
 
// export default function Example() {
//   const [open, setOpen] = React.useState(false);
//   const openDrawer = () => setOpen(true);
//   const closeDrawer = () => setOpen(false);
 
//   return (
//     <React.Fragment>
//       <Button onClick={openDrawer} style={{margin:"100px"}}>Open Drawer</Button>
//       <Drawer open={open} onClose={closeDrawer} className="p-4">
//         <div className="mb-6 flex items-center justify-between">
//           <Typography variant="h5" color="blue-gray">
//             Material Tailwind
//           </Typography>
//           <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
//             <XMarkIcon strokeWidth={2} className="h-5 w-5" />
//           </IconButton>
//         </div>
//         <Typography color="gray" className="mb-8 pr-4 font-normal">
//           Material Tailwind features multiple React and HTML components, all
//           written with Tailwind CSS classes and Material Design guidelines.
//         </Typography>
//         <div className="flex gap-2">
//           <Button size="sm">Get Started</Button>
//           <Button size="sm" variant="outlined">
//             Documentation
//           </Button>
//         </div>
//       </Drawer>
//     </React.Fragment>
//   );
// }