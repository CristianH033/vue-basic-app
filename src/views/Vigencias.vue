<template>
  <div>
    <h1>Vigencias</h1>
    <ul>
      <li v-for="vigencia in vigencias" :key="vigencia.id">
        <router-link :to="{ name: 'Vigencia', params: { id: vigencia.id } }">
          {{ vigencia.nombre }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    vigencias: state => state.vigencias
  })
};
</script>

<style lang="scss" scoped></style>
