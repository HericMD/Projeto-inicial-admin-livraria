<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      livros: [],
      novo_categoria: "",
    };
  },
  methods: {
    add() {
      const novo_id = uuidv4();
      this.livros.push({
        id: novo_id,
        nome: this.novo_livro,
        categoria: this.novo_categoria,
      });
    },
    excluir(livro) {
      const indice = this.livros.indexOf(livro);
      this.livros.splice(indice, 1);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de categorias de livro</h2>
    </div>
    <div class="form-input" @keydown.enter="add">
      <input type="text" placeholder="Categoria" v-model="novo_categoria" />
      <button @click="add">Adicionar Categoria</button>
    </div>
    <div class="list-table">
      <table v-if="livros.length > 0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Categoria</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
            <td>{{ livro.id }}</td>
            <td>{{ livro.categoria }}</td>
            <td>
              <button @click="excluir(livro)">
                <img src="@/assets/img/lixo-icon.png" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <span v-else><h1>Lista vazia!</h1></span>
    </div>
  </div>
</template>
