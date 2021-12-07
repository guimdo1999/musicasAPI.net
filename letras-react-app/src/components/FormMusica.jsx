import React from "react";
import { Form, Input, message, Button } from "antd";
import { putMusicaId } from "../Utils/Musica";

function FormMusica({ musica, handleOk }) {
  const layout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 12 },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} precisa ser preenchido!",
  };

  const key = "updatable";
  const onFinish = (values) => {
    message.loading({
      content: `Editando a Música: ${values.nome_musica}.`,
      key,
    });

    setTimeout(() => {
      putMusicaId(musica.id, values);

      message.success({
        content: `Música: ${values.nome_musica} atualizada.`,
        key,
        duration: 2,
      });
      handleOk();
    }, 1000);
  };
  return (
    <Form
      style={{ margin: 20 }}
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      initialValues={{
        nome_musica: musica.nome_musica,
        nome_cantor: musica.nome_cantor,
        nome_banda: musica.nome_banda,
        estilo_musica: musica.estilo_musica,
        nome_album: musica.nome_album,
      }}
    >
      <Form.Item
        name={"nome_musica"}
        label="Nome da Música"
        rules={[{ required: true }]}
      >
        <Input placeholder="Starway to heaven, Sinônimos..." />
      </Form.Item>
      <Form.Item
        name={"nome_cantor"}
        label="Nome do Cantor"
        rules={[{ required: true }]}
      >
        <Input placeholder="Zezé de Camargo" />
      </Form.Item>
      <Form.Item
        name={"nome_banda"}
        label="Nome da Banda"
        rules={[{ required: true }]}
      >
        <Input placeholder="Zezé de Camargo e Luciano" />
      </Form.Item>
      <Form.Item
        name={"estilo_musica"}
        label="Estilo musical"
        rules={[{ required: true }]}
      >
        <Input placeholder="Pop, Rock, Gospel, Punk, Sertanejo..." />
      </Form.Item>
      <Form.Item
        name={"nome_album"}
        label="Nome do Album"
        rules={[{ required: true }]}
      >
        <Input placeholder="Minutes to Midnight" />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 18 }}>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormMusica;
