import axios from "axios";
export default class editorasApi {
  async buscarTodosOsEditoras() {
    const response = await axios.get(
      "https://projeto-inicial-admin-livraria.herokuapp.com/editoras"
    );
    return response.data;
  }

  async buscarEditora(id) {
    const response = await axios.get(
      `https://projeto-inicial-admin-livraria.herokuapp.com/editoras/${id}`
    );
    return response.data;
  }

  async adicionarEditora(editora) {
    const response = await axios.post(
      "https://projeto-inicial-admin-livraria.herokuapp.com/editoras",
      editora
    );
    return response.data;
  }

  async excluirEditora(id) {
    const response = await axios.delete(
      `https://projeto-inicial-admin-livraria.herokuapp.com/editoras/${id}`
    );
    return response.data;
  }

  async atualizarEditora(editora) {
    const response = await axios.put(
      `https://projeto-inicial-admin-livraria.herokuapp.com/editoras/${editora.id}`,
      editora
    );
    return response.data;
  }
}
