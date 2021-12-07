import { Button, Modal, Space } from "antd";
import React, { useEffect, useState } from "react";
import { Table, message } from "antd";
import DeletePop from "../components/DeletePop";
import FormMusica from "../components/FormMusica";
import { deleteMusica, getMusica } from "../Utils/Musica";

function Mainpage() {
  const [busca, setBusca] = useState([]);

  const [reload, setReload] = useState(true);
  const key = "updatable";

  /*MODAL*/
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOk = () => {
    setModalContent("");
    setVisible(false);
    setReload(true);
  };

  const handleCancel = () => {
    setModalContent("");
    setReload(false);
  };
  /*MODAL*/

  /*Pop*/
  const handlePopOk = (value) => {
    deleteMusica(value.id);
    message.success({
      content: `Materia: ${value.nome_musica} foi deletado.`,
      key,
    });
    handleOk();
  };
  /* setTimeout(() => {
      deleteMusica(value.id);
      message.success({
        content: `Materia: ${value.nome_materia} foi deletado.`,
        key,
      });
      handleOk();
    }, 1000); */

  /*Pop*/

  useEffect(() => {
    getMusica().then((data) => {
      setBusca(data);
      setReload(false);
    });
  }, [reload]);

  const columns = [
    {
      title: "Nome do Música ",
      dataIndex: "nome_musica",
      key: "nome_musica",
    },
    {
      title: "Nome do Cantor",
      dataIndex: "nome_cantor",
      key: "nome_cantor",
    },
    {
      title: "Nome da Banda",
      dataIndex: "nome_banda",
      key: "nome_banda",
    },
    {
      title: "Estilo Musical",
      dataIndex: "estilo_musica",
      key: "estilo_musica",
    },
    {
      title: "Nome do Albúm",
      dataIndex: "nome_album",
      key: "nome_album",
    },
    {
      title: "Ações",
      key: "id",
      render: (record) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => {
              setModalContent(
                <Modal
                  title={`Editando a musica: ${record.nome_musica}`}
                  visible={visible}
                  onCancel={handleCancel}
                  footer={null}
                >
                  <FormMusica musica={record} handleOk={handleOk} />
                </Modal>
              );
              setVisible(true);
              setReload(true);
            }}
          >
            Editar
          </Button>

          <DeletePop
            deleteFunction={() => {
              handlePopOk(record);
            }}
          />
        </Space>
      ),
    },
  ];
  return (
    <>
      <Table
        columns={columns}
        pagination={{ pageSize: 10 }}
        dataSource={busca}
        showSorterTooltip={false}
        placeholder="vazio"
        footer={() => {
          if (busca) {
            return (
              <h5>
                Existem <b>{busca.length}</b> resultados.
              </h5>
            );
          } else {
            return <h5>Existe nenhum resultado.</h5>;
          }
        }}
      />
      {modalContent}
    </>
  );
}

export default Mainpage;
