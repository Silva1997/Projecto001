
import React, { useState, useEffect } from 'react';
import { Button, Popconfirm, Table, Input,Form,Typography,InputNumber} from 'antd';
import Axios from 'axios';
import '../Estilos/Estilos.css'

const App = () => {
  const [dataSource, setDataSource] = useState([]);
  const [count, setCount] = useState(1);
  const [form] = Form.useForm();





  const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };


  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record) => record.key === editingKey;
  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.key);
  };
  const cancel = () => {
    setEditingKey('');
  };
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...dataSource];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };
//   aqui

  useEffect(() => {
    BuscarDados();
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
    // Axios.delete(`http://localhost:3001/Apagar/${idProdutos_Cadrastar}`);
    const newData = dataSource.filter((item) => item.idProdutos_Cadrastar !== idProdutos_Cadrastar);
    console.log("Deleting item with idCategoria_Produto:", idProdutos_Cadrastar);
    setDataSource(newData);
  };

  const handleAdd = () => {
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: '32',
      address: `London, Park Lane no. ${count}`,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };

  const handleSave = (row) => {
    // Implemente a lógica para salvar os dados aqui
    // Você precisa atualizar o dataSource com os dados editados
    console.log("AA")
  };

  const columns = [
    {
        
        title: 'key',
        dataIndex: 'idProdutos_Cadrastar',
      width: '30%',
      editable: true,
    //   render: (_, record) => {
    //     // Renderize um Input ou outro componente editável aqui
    //     return (
    //       <Input type='number' value={text} onChange={(e) => handleSave({ ...record, name: e.target.value })} />
    //     );
    //   },
    },
    {
        
        title: 'Nome do Produto',
        dataIndex: 'Nome_Produto',
      width: '30%',
      editable: true,
    //   render: (text, record) => {
    //     // Renderize um Input ou outro componente editável aqui
    //     return (
    //       <Input value={text} onChange={(e) => handleSave({ ...record, name: e.target.value })} />
    //     );
    //   },
    },
    {
        title: 'Valor',
        dataIndex: 'Valor_Produto',
    //   render: (text, record) => {
    //     // Renderize um Input ou outro componente editável aqui
    //     return (
    //       <Input value={text} onChange={(e) => handleSave({ ...record, age: e.target.value })} />
    //     );
    //   },
    },
    {
      title: 'address',
      dataIndex: 'address',
    //   render: (text, record) => {
    //     // Renderize um Input ou outro componente editável aqui
    //     return (
    //       <Input value={text} onChange={(e) => handleSave({ ...record, address: e.target.value })} />
    //     );
    //   },
    },
    {
      title: 'operation',
      dataIndex: 'idProdutos_Cadrastar',
      render: (_, record) => {
        return (
          <Popconfirm title="Deseja eliminar?" onConfirm={() => handleDelete(record.idProdutos_Cadrastar)}>
            <a>Eliminar</a>
          </Popconfirm>
        );
      },
    },
    {
        title: 'operation',
        dataIndex: 'operation',
        render: (_, record) => {
          const editable = isEditing(record);
          return editable ? (
            <span>
              <Typography.Link
                onClick={() => save(record.key)}
                style={{
                  marginRight: 8,
                }}
              >
                Save
              </Typography.Link>
              <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                <a>Cancel</a>
              </Popconfirm>
            </span>
          ) : (
            <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
              Edit
            </Typography.Link>
          );
        },
      },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <div>
      <Button
        onClick={handleAdd}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        Add a row
      </Button>
      <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={dataSource}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
      {/* <Table
        bordered
        dataSource={dataSource}
        columns={columns}
      /> */}
    </div>
  );
};

export default App;
