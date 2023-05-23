
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';

const dados = ()=>{
return(

<div>
<Card sx={{
  width:"100%",
  height:"500px",
  display:'flex',
  flexDirection:"column",
  background: "rgba(243, 239, 239, 0.5)",
  gap:"10px",
  padding:"12px"
}}>

<input type={"text"} placeholder='Primeiro Nome'/>
<input type={"text"} placeholder='Segundo Nome'/>
<input type={"tel"} placeholder='Numero'/>
<input type={"text"} placeholder='Rua'/>
<input type={"text"} placeholder='Cidade'/>
<input type={"text"} placeholder='Bairro'/>
<input type={"text"} placeholder='Codigo Postal'/>
<input type={"text"} placeholder='Completo Opcional'/>


</Card>


</div>
 
)
}

const steps = [
  {
    label: 'Complete o seu pedido',
    description: dados()
  },
  {
    label: 'Pagamento',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Estado',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}

                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finalizar' : 'Continuar'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Voltar
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Voce completou Todas Etapas - you&apos;re Finalizar</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reniciar
          </Button>
        </Paper>
      )}
    </Box>
  );
}
