<template>
  <header class="app-bar">Encabezado</header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.app-bar {
  grid-area: 1 / 1 / 2 / 3;
  background-color: rgb(51, 51, 51);
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
