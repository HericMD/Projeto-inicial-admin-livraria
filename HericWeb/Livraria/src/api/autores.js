import axios from "axios";
export default class autoresApi {
  async buscarTodosOsAutores() {
    const response = await axios.get(
      "https://projeto-inicial-admin-livraria.herokuapp.com/autores"
    );
    return response.data;
  }

  async buscarAutor(id) {
    const response = await axios.get(
      `httpss://projeto-inicial-admin-livraria.herokuapp.com/autores/${id}`
    );
    return response.data;
  }

  async adicionarAutor(autor) {
    const response = await axios.post(
      "httpss://projeto-inicial-admin-livraria.herokuapp.com/autores",
      autor
    );
    return response.data;
  }

  async excluirAutor(id) {
    const response = await axios.delete(
      `https://projeto-inicial-admin-livraria.herokuapp.com/autores/${id}`
    );
    return response.data;
  }

  async atualizarAutor(autor) {
    const response = await axios.put(
      `https://projeto-inicial-admin-livraria.herokuapp.com/${autor.id}`,
      autor
    );
    return response.data;
  }
}
