
import * as React  from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';


import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const Ver=()=>{

  return(
    <div style={{ display:"flex",gap:"5px", flexDirection:"column"}}>
<TextField
required
id="outlined-number"
size='small'
label="Cidade"
type="text"

/>
<TextField
required
id="outlined-number"
size='small'
label="Bairro"
type="text"

/>
  <TextField
  required
  id="outlined-number"
  size='small'
  label="Numero"
  type="number"
 
/>
<TextField
required
id="outlined-number"
size='small'
label="Rua"
type="text"

/>
</div>
)
}

const steps = [
  {
    label: 'Preenche o Formulario da encomenda',
    description: Ver()
  },
  {
    label: 'Formas de Pagamento',
    description:
      'Cartao Multicaixa , Referencia..',
  },
  {
    label: 'Confirma os teus Dados Antes de Finalizar',
    description: ``,
  },
];


export default function VerticalLinearStepper({product}) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);

    const carrinhoData = localStorage.removeItem('Carrinho');
    alert('Removido com sucesso')

    return (carrinhoData  )
    

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
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reniciar
          </Button>
        
        </Paper>
      )}
      
    </Box>
  );
}
