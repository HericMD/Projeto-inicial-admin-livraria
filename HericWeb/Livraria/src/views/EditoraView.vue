<script>
import EditorasApi from "@/api/editoras.js";
const editorasApi = new EditorasApi();
export default {
  data() {
    return {
      editoras: [],
      editora: {},
    };
  },
  async created() {
    this.editoras = await editorasApi.buscarTodosOsEditoras();
  },
  methods: {
    async salvar() {
      if (this.editora.id) {
        await editorasApi.atualizarEditora(this.editora);
      } else {
        await editorasApi.adicionarEditora(this.editora);
      }
      this.editoras = await editorasApi.buscarTodosOsEditoras();
      this.editora = {};
    },
    async excluir(editora) {
      await editorasApi.excluirEditora(editora.id);
      this.editoras = await editorasApi.buscarTodosOsEditoras();
    },
    editar(editora) {
      Object.assign(this.editora, editora);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Editora</h2>
    </div>
    <div class="form-input" @keydown.enter="add">
      <input type="text" placeholder="Editora" v-model="editora.nome" />
      <button @click="salvar">Adicionar Editora</button>
    </div>
    <div class="list-table">
      <table v-if="editoras.length > 0">
        <thead>
          <tr>
            <th>Editora</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="editora in editoras" :key="editora.id">
            <td>{{ editora.nome }}</td>
            <td>
              <button @click="excluir(editora)">
                <img src="@/assets/img/lixo-icon.png" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <span v-else><h1>Lista vazia!</h1></span>
    </div>
    <div></div>
  </div>
</template>
