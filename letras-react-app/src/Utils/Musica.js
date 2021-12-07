import * as backEndUtils from "./BackEnd";

export const insertMusica = async (dados) => {
  const registrar_musica = {
    nome_musica: dados.nome_musica,
    nome_cantor: dados.nome_cantor,
    nome_banda: dados.nome_banda,
    estilo_musica: dados.estilo_musica,
    nome_album: dados.nome_album,
  };
  return await backEndUtils
    .chamarBackEnd("POST", "/api/musicaModels", registrar_musica)
    .then((resposta) => {
      return resposta.json().then((data) => data);
    });
};

export const getMusica = async () => {
  return await backEndUtils
    .chamarBackEnd("GET", "/api/musicaModels")
    .then((resposta) => {
      return resposta.json().then((data) => data);
    });
};

export const getMusicaId = async (req) => {
  return await backEndUtils
    .chamarBackEnd("GET", "/api/musicaModels/" + req)
    .then((resposta) => {
      return resposta.json().then((data) => data);
    });
};

export const putMusicaId = async (id, dados) => {
  const update_musica = {
    id: id,
    nome_musica: dados.nome_musica,
    nome_cantor: dados.nome_cantor,
    nome_banda: dados.nome_banda,
    estilo_musica: dados.estilo_musica,
    nome_album: dados.nome_album,
  };
  return await backEndUtils
    .chamarBackEnd("PUT", "/api/musicaModels/" + id, update_musica)
    .then((resposta) => {
      return resposta.json().then((data) => data);
    });
};

export const deleteMusica = async (id) => {
  return await backEndUtils
    .chamarBackEnd("DELETE", "/api/musicaModels/" + id)
    .then((resposta) => {
      return resposta.json().then((data) => data);
    });
};
