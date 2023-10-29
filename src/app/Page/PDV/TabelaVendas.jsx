
import React, { useState, useEffect } from 'react';
import {  Popconfirm, Table} from 'antd';


import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Axios from 'axios';
import '../Estilos/Estilos.css'
import { Link } from 'react-router-dom';

const App = () => {
  const [dataSource, setDataSource] = useState([]);

  // useEffect(() => {
    //     if (id) {
    //       async function fetchProduto() {
    //         try {
    //           const response = await Axios.get(`http://localhost:3001/Tabela1/${id}`);
    //           setDados(response.data);
    //           console.log("Dados carregados com sucesso ", response.data);
    //           setProduto(response.data[0]?.Nome_Produto);
    //           setValor(response.data[0]?.Valor_Produto);
    //           setDescricao(response.data[0]?.Descricao_Produto);
    //           setEstoque(response.data[0]?.Estoque_Produto);
    //           setCategoria(response.data[0]?.Nome_Categoria);
    //           setDisponibilidade(response.data[0]?.Disponibilidade_Produto);
    
    //           // history('/CadrastarProdutos/id'); // 
    //         } catch (error) {
    //           console.error("Erro ao obter dados do produto", error);
    //         }
    //       }
    //    fetchProduto();
    
       
    //   }
    
      
    //  }, [id]);
  const save = async (key) => {
    
  };
//   aqui

  useEffect(() => {
    BuscarDados();

    // const intervalId = setInterval(() => {
    //     BuscarDados(); // Chame buscarDados a cada 20 segundos.
    //   }, 20000);
  
    //   // Certifique-se de limpar o intervalo quando o componente for desmontado.
    //   return () => clearInterval(intervalId);
  }, []);

  const BuscarDados = async () => {
    try {
      const response = await Axios.get('http://localhost:3001/Tabela');
      setDataSource(response.data);
    } catch (error) {
      console.error("Erro ao Listar", error);
    }
  };

 
  const handleDelete = (idProdutos_Cadrastar) => {
    const newData = dataSource.filter((item) => item.idProdutos_Cadrastar !== idProdutos_Cadrastar);
    setDataSource(newData);
    Axios.delete(`http://localhost:3001/Apagar/${idProdutos_Cadrastar}`).then((res)=>{
    console.log("Deleting item with idCategoria_Produto:",res.data, idProdutos_Cadrastar);
    }
    ).catch((err)=>console.log("Erro",err));
  };

//   const handleAdd = () => {
//     const newData = {
//       key: count,
//       name: `Edward King ${count}`,
//       age: '32',
//       address: `London, Park Lane no. ${count}`,
//     };
//     setDataSource([...dataSource, newData]);
//     setCount(count + 1);
//   };

 
  const columns = [
    {
        
        title: '#Codigo',
        dataIndex: 'idProdutos_Cadrastar',
    //   width: '30%',
      editable: true,
    //   render: (_, record) => {
    //     // Renderize um Input ou outro componente editável aqui
    //     return (
    //       <Input type='number' value={text} onChange={(e) => handleSave({ ...record, name: e.target.value })} />
    //     );
    //   },
    },
    {
        title: 'Imagem',
        dataIndex: 'Ficheiro_Imagem',
        editable: true,
        render: (text, record) => (
          <picture className="imagemCircular">
            <img
              src={`http://localhost:3001/uploads/${text}`}
              alt="ImagemItem"
               id='imagemCir' // Adicione as classes CSS desejadas para estilizar a imagem
            />
          </picture>
        ),
      },
  
    {
        
        title: 'Nome do Produto',
        dataIndex: 'Nome_Produto',
    //   width: '30%',
      editable: true,
    
    },
    {
        title: 'Valor',
        dataIndex: 'Valor_Produto',
    },
    {
      title: 'Categoria',
      dataIndex: 'Nome_Categoria',
    
    },
    {
        title: 'Quantidade',
        dataIndex: 'Estoque_Produto',
      
      },
    {
      title: 'Eliminar',
      dataIndex: 'idProdutos_Cadrastar',
      render: (_, record) => {
        return (
          <Popconfirm title="Deseja eliminar?" onConfirm={() => handleDelete(record.idProdutos_Cadrastar)}>
            <a>Eliminar<DeleteForeverRoundedIcon/></a>
          </Popconfirm>
        );
      },
    },
    {
        title: 'Editar',
        dataIndex: 'idProdutos_Cadrastar',
        render: (text, record) => {
          return (
             
              <Popconfirm title="Deseja Editar?" onConfirm={save}>
                <a><Link to={`/CadrastarProdutos/${text}`}>Editar</Link></a>
              </Popconfirm>
            
          ) 
        },
      },
  ];

  
  return (
    <div>
      {/* <Button
        onClick={handleAdd}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        Add a row
      </Button> */}
    
      <Table
        key={0}
        bordered
        dataSource={dataSource}
        columns={columns}
        rowClassName="editable-row"
       
      />

      {/* <Table
        bordered
        dataSource={dataSource}
        columns={columns}
      /> */}
    </div>
  );
};

export default App;
