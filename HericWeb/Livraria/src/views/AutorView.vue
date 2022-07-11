<script>
import axios from "axios";
export default {
  data() {
    return {
      autores: [],
      novo_autor: "",
    };
  },
  async created() {
    const autores = await axios.get("http://localhost:4000/autores");
    this.autores = autores.data;
  },

  methods: {
    async add() {
      const autor = {
        nome: this.novo_autor,
      };
      const autor_criado = await axios.post(
        "http://localhost:4000/autores",
        autor
      );
      this.autores.push(autor_criado.data);
      },
    },
    excluir(autor) {
      const indice = this.autores.indexOf(autor);
      this.autores.splice(indice, 1);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Autores</h2>
    </div>
    <div class="form-input" @keydown.enter="add">
      <input type="text" placeholder="Autores" v-model="novo_autor" />
      <button @click="add">Adicionar Autor</button>
    </div>
    <div class="list-table">
      <table v-if="autores.length > 0">
        <thead>
          <tr>
            <th>Autores</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="autor in autores" :key="autor.id">
            <td>{{ autor.autor }}</td>
            <td>
              <button @click="excluir(autor)">
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
