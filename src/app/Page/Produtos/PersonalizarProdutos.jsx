import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import '../Estilos/Estilos.css'
import RemoveCircleIcon from '@mui/icons-material/EditOutlined';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { InputLabel } from '@mui/material';
//
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};




export default function PersonalizarPedidoModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div>
                <button id="butao" style={{ cursor: "pointer", position: "relative", left: "95px", backgroundColor: "white", border: "none", borderRadius: "12px", marginBottom: "0px" }}
                    onClick={handleOpen}><RemoveCircleIcon sx={{ color: "red" }} /></button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 500, textAlign: "center" }}>

                    <div>

                        <form action="" onSubmit={""} className='FormularioDadosCliente' style={{ display: "flex", textAlign: "start", flexDirection: "column", margin: "50px" }}>
                            <label htmlFor="">Personaliza o teu bolo</label>

                            <TextField
                                required
                                id="outlined-required"
                                label="Por favor digita o tema do seu Bolo"
                                type='text'
                                //   value={produto || ""}
                                //   onChange={(e) => {
                                //     cart.capturarProduto(setProduto(e.target.value))
                                //   }}
                                size='small'
                            />
                            <FormControl
                                size='small'

                            >
                                <InputLabel id="">Cobertura</InputLabel>
                                <Select
                                    label="Recheio"
                                    defaultValue='Cobertura'>
                                    {/* // value={categoria || " "}
                // onChange={(e) => { cart.capturarDisponibilidade(setCategoria(e.target.value)) }}
     */}
                                    <MenuItem value="Chantilly">Chantilly</MenuItem>
                                    <MenuItem value="Chocolate Branco">Chocolate Branco</MenuItem>
                                    <MenuItem value="Chocolate Preto">Chocolate Preto</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl
                                size='small'

                            >
                                <InputLabel id="">Recheio</InputLabel>
                                <Select
                                    label="Recheio"
                                    defaultValue='Recheio'>
                                    {/* // value={categoria || " "}
                // onChange={(e) => { cart.capturarDisponibilidade(setCategoria(e.target.value)) }}
     */}
                                    <MenuItem value="Creme Branco">Creme Branco</MenuItem>
                                    <MenuItem value="Brigadeiro de Chocolate">Brigadeiro de Chocolate</MenuItem>
                                    <MenuItem value="Brigadeiro de ginguba">Brigadeiro de ginguba</MenuItem>
                                    <MenuItem value="cremoso de maracuja">cremoso de maracuja</MenuItem>
                                </Select>
                            </FormControl>
                            {/*  */}
                            <FormControl
                                size='small'
                            >
                                <InputLabel id="">Formato</InputLabel>
                                <Select
                                    label="Formato"
                                    defaultValue='Formato'>
                                   <MenuItem value="Normal">Normal</MenuItem>
                                    <MenuItem value="Quadrado">Quadrado</MenuItem>
                                    <MenuItem value="Livro">Livro</MenuItem>
                                    <MenuItem value="1Andares">1andares</MenuItem>
                                    <MenuItem value="2Andares">2andares</MenuItem>
                                    <MenuItem value="3Andares">3andares</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl
                                size='small'
                            >
                                <InputLabel id="">Tamanho</InputLabel>
                                <Select
                                    label="Tamanho"
                                    defaultValue='Tamanho'>
                                   <MenuItem value="Normal">Medio</MenuItem>
                                    <MenuItem value="Quadrado">Pequeno</MenuItem>
                                    <MenuItem value="Livro">Grande</MenuItem>
                                </Select>
                            </FormControl>
                      <label htmlFor="">Carrega a imagem para o seu bolo</label><input type="file" name="" id="" />

                            <p>Valor : 10.000kz</p>

                            <button style={{
                textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px",
                backgroundColor: "yellow"
              }}>Adicionar ao carrinho</button>

                        </form>





                    </div>

















                </Box>
            </Modal>
        </div>
    );
}