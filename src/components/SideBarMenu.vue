<template>
  <nav class="side-bar-menu">
    <ul>
      <li>
        <router-link :to="{ name: 'Inicio' }">Inicio</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Usuarios' }">Usuarios</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Fotos' }">Fotos</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Posts' }">Posts</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Vigencias' }">Vigencias</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.side-bar-menu {
  grid-area: 2 / 1 / 3 / 2;
  // border-right: 1px solid black;
  background-color: rgb(240, 240, 240);
  border-radius: 15px;
}
</style>
