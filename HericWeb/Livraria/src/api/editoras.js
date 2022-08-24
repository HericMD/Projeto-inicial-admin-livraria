import axios from "axios";
export default class editorassApi {
  async buscarTodosOsEditorass() {
    const response = await axios.get("http://localhost:4000/editorass");
    return response.data;
  }

  async buscarEditoras(id) {
    const response = await axios.get(`http://localhost:4000/editorass/${id}`);
    return response.data;
  }

  async adicionarEditoras(editoras) {
    const response = await axios.post(
      "http://localhost:4000/editorass",
      editoras
    );
    return response.data;
  }

  async excluirEditoras(id) {
    const response = await axios.delete(
      `http://localhost:4000/editorass/${id}`
    );
    return response.data;
  }

  async atualizarEditoras(editoras) {
    const response = await axios.put(
      `http://localhost:4000/editorass/${editoras.id}`,
      editoras
    );
    return response.data;
  }
}
