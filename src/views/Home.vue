<template>
  <div class="home">
    <Title/>
  </div>
</template>

<script>
import Title from '../components/home/Title'

export default {
  name: 'Home',
  components: {
    Title,
  }
}
</script>

<style scoped>
  .home {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  @media screen and (max-width: 1250px) {
    .home {
      justify-content: center;
      height: 100vh;
      width: 100vw
    }
  }
</style>
