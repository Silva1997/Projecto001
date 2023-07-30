import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
// 
import boxImagem from './boxs.png';
import boxImagem1 from './boxlogistica.png';
import boxImagem2 from './boxentrega.png'
//
import { Card } from '@mui/material';
//
const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <img src={boxImagem} width={25} alt='P' />,
    2: <img src={boxImagem2} width={25} alt='P' />,
    3: <img src={boxImagem1} width={25} alt='P' />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

;


const steps = [
  'Encomendado',
  'Caminho',
  'Entregue',
];
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, width: "150vh" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

// aqui
export default function PerfilparausurarioacessartodososseuDados() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{ flexGrow: 1, display: 'flex', height: "auto", alignItems: "center" }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1, borderColor: 'divider',
            bgcolor: 'background.paper', padding: "20px 40px",
            marginLeft: 2, textAlign: "right", marginTop: 14,
            borderRadius: "15px 15px"
          }}
        >
          <Tab sx={{ textTransform: "none", borderRadius: "14px 14px" }} label="Ordem de pedidos" {...a11yProps(0)} />
          <Tab sx={{ textTransform: "none", borderRadius: "14px 14px" }} label="Suporte Tecnico" {...a11yProps(1)} />
          <Typography sx={{ textAlign: "center", borderRadius: "14px 14px" }}>CONFIGURAÇÕES DA CONTA</Typography>
          <Tab sx={{ textTransform: "none", borderRadius: "14px 14px" }} label=" Informações do perfil" {...a11yProps(2)} />
          <Tab sx={{ textTransform: "none", borderRadius: "14px 14px" }} label="Endereços" {...a11yProps(3)} />
          <Tab sx={{ textTransform: "none", borderRadius: "14px 14px" }} label="Formas de Pagamento" {...a11yProps(4)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          {Localizar()}
        </TabPanel>
        <TabPanel value={value} index={1}>
          Suporte
        </TabPanel>
        <TabPanel value={value} index={2}>
          p
        </TabPanel>
        <TabPanel value={value} index={3}>
          {ContaPerfil()}
        </TabPanel>
        <TabPanel value={value} index={4}>
          Endereco
        </TabPanel>
        <TabPanel value={value} index={5}>
          Pagamentos
        </TabPanel>
      </Box>
      {/* fundo ou rodape */}
      <div style={{ marginTop: "200px" }}>
        <footer>
          <div className="f-item-con">
            <div className="app-info">
              <span className='app-name'>
                <span className='app-initial'>C</span>onfeiteria
              </span>
              {/* <p>We provides you with <strong>Well organised</strong> and <strong>SEO friendly</strong> Website Designs.</p> */}
            </div>
            <div className="useful-links">
              <div className="footer-title">Nossos Links</div>
              <ul>
                <li>Cursos</li>
                <li>Sobre Nos</li>

              </ul>
            </div>
            <div className="help-sec">
              <div className="footer-title">Ajuda</div>
              <ul>
                <li>Ajuda me</li>
                <li>Feedback</li>
                <li>Reportar erros / Bug</li>
              </ul>
            </div>
            <div className="g-i-t">
              <div className="footer-title">Sugestoes</div>
              <form action="/" method="post" className="space-y-2">
                <input type="text" name="g-name" className="g-inp" id="g-name" placeholder='Nome' />
                <input type="email" name="g-email" className="g-inp" id="g-email" placeholder='Email' />
                <textarea type="text" name="g-msg" className="g-inp h-40 resize-none" id="g-msg"
                  placeholder='Escrever aqui Mensagem...'></textarea>
                <button type="submit" className='f-btn'>Enviar</button>
              </form>
            </div>
          </div>
          <div className='cr-con'>Copyright &copy; 2023 | Made by Angola</div>
        </footer>
      </div>

    </>
  );
}
// aqui o menu para os items que contem os dados dos perfils
const Localizar = () => {

  return (
    <>

      <Stack sx={{ width: '100%', display: "flex", flexWrap: "wrap", justifyContent: "center", background: "white", padding: "50px 50px", borderRadius: "10px 10px", marginTop: 10 }} spacing={4}>
        <Stepper alternativeLabel activeStep={1} connector={<ColorlibConnector />}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>


        <button style={{ background: "", width: "30vh", padding: "5px 5px", borderRadius: "3px 4px" }}>Prazo de entrega 4h</button>
      </Stack>
    </>

  )

}

// Aqui Dados necessarios para o perfil

const ContaPerfil = () => {
  return (
    <>


      <div className='PerfilCadrastos'>
        <Card>
          <div style={{ padding: " 20px 20px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <picture className="imagemCircular"> <img src={boxImagem} alt="" id='imagemCir' /></picture>
              <p style={{ margin: 5 }}>Eugenio Silva</p>
              <p style={{ margin: 5 }}>Usuario</p>
            </div>
          </div>
        </Card>

        <Card>
          <div style={{ display: "flex", padding: "20px", flexDirection: "column" }}>
            <h5 style={{ margin: 1, fontSize: "medium", color: "red" }}>16</h5>
            <p style={{ margin: 10, fontSize: "small" }}>Aguardando </p>
            <p style={{ margin: -8, fontSize: "small" }}>Envio</p>
          </div>
        </Card>
        <Card>
          <div style={{ display: "flex", padding: "20px", flexDirection: "column" }}>
            <h5 style={{ margin: 1, fontSize: "medium", color: "red" }}>16</h5>
            <p style={{ margin: 10, fontSize: "small" }}>Aguardando </p>
            <p style={{ margin: -8, fontSize: "small" }}>pagamento</p>
          </div>
        </Card>
        <Card>
          <div style={{ display: "flex", padding: "20px", flexDirection: "column" }}>
            <p style={{ margin: 1, fontSize: "medium", color: "red" }}>16</p>
            <p style={{ margin: 10, fontSize: "small" }}>Aguardando </p>
            <p style={{ margin: -8, fontSize: "small" }}>Entrega</p>
          </div>
        </Card>

        <Card>
          <div style={{ display: "flex", padding: "20px", flexDirection: "column" }}>
            <h5 style={{ margin: 1, fontSize: "medium", color: "red" }}>16</h5>
            <p style={{ margin: 10, fontSize: "small" }}>Todos os</p>
            <p style={{ margin: -8, fontSize: "small" }}>Pedidos</p>
          </div>
        </Card>
      </div>

      <div style={{ marginTop: 12 }}>
        <Card style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", gap: '10px', padding: "50px 10px", width: "123.5vh" }}>
          <div>
            <h5 style={{ fontSize: "small" }}>
              Nome próprio
            </h5>
          </div>
          <div>
            <h5 style={{ fontSize: "small" }}>
              Apelido
            </h5>
          </div>
          <div>
            <h5 style={{ fontSize: "small" }}>
              Email
            </h5>
          </div>

          <div>
            <h5 style={{ fontSize: "small" }}>
              Telefone
            </h5>
          </div>
          <div>
            <h5 style={{ fontSize: "small" }}>
              Data de nascimento
            </h5>
          </div>
        </Card>
      </div>
    </>

  )
}