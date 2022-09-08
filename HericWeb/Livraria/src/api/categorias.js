import axios from "axios";
export default class categoriasApi {
  async buscarTodosOsCategorias() {
    const response = await axios.get(
      "https://projeto-inicial-admin-livraria.herokuapp.com/categorias"
    );
    return response.data;
  }

  async buscarCategoria(id) {
    const response = await axios.get(
      `https://projeto-inicial-admin-livraria.herokuapp.com/categorias/${id}`
    );
    return response.data;
  }

  async adicionarCategoria(categoria) {
    const response = await axios.post(
      "https://projeto-inicial-admin-livraria.herokuapp.com/categorias",
      categoria
    );
    return response.data;
  }

  async excluirCategoria(id) {
    const response = await axios.delete(
      `https://projeto-inicial-admin-livraria.herokuapp.com/categorias/${id}`
    );
    return response.data;
  }

  async atualizarCategoria(categoria) {
    const response = await axios.put(
      `https://projeto-inicial-admin-livraria.herokuapp.com/categorias/${categoria.id}`,
      categoria
    );
    return response.data;
  }
}
