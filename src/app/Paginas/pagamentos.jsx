
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';


import {Typography} from '@mui/material'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

const Ver = () => {

  return (
    <div style={{ display: "flex", gap: "5px", flexDirection: "column" }}>
      <TextField
        required
        id="outlined-number"
        size='small'
        label="Nome completo"
        type="text"

      />
      <TextField
        required
        id="outlined-number"
        size='small'
        label="Endereco de email"
        type="email"

      />
      <TextField
        required
        id="outlined-number"
        size='small'
        label="Numero"
        type="number"

      />

      <div style={{textAlign:"start"}}>
      <h5 style={{fontSize:"10pt"}}>Pais</h5>
      <h5  style={{fontSize:"10pt"}}>Angola</h5>
      </div>
      <TextField
        required
        id="outlined-number"
        size='small'
        label="Nome da Rua e numero da casa"
        type="text"

      />
        <TextField
        required
        id="outlined-number"
        size='small'
        label="Numero BI/Passaporte da"
        type="text"

      />
       <TextField
        required
        id="outlined-number"
        size='small'
        label="Local de referencia"
        type="text"
      />
      

      
    </div>
  )
}

// const Formas = () => {
 
//   return (

    
//     <div>

//     </div>
//   )

// }

const steps = [
  {
    label: 'Preenche o Formulario das encomendas',
    description: Ver()
  },
  // {
  //   label: 'Formas de Pagamento',
  //   description: Formas()
  // },
  {
    label: 'Confirma os teus Dados Antes de Finalizar',
    description: ``,
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

    // const carrinhoData = localStorage.removeItem('Carrinho');
    // alert('Removido com sucesso')

    // return (carrinhoData  )


  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Ultima etapa</Typography>
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
                    {index === steps.length - 1 ? 'Finalizar' : 'Continua'}
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
          <Typography>Completa as etapas</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reniciar
          </Button>

        </Paper>
      )}

    </Box>
  );
}
