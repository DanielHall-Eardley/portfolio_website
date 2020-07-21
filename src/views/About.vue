<template>
  <main class="about">
    <h1 class='default-h1'><span>About me</span></h1>
    <!-- <img src="" alt=""> -->
    <p>I have been building applications for over two years. I have always enjoyed the act of creation and learning new skills as a way to increase the amount of different things I can build. I'm hardworking and a logical thinker that enjoys being challenged. I'm from Australia originally, but I have recently become a permanent resident of Canada.</p>
  </main>
</template>



<style scoped>
  .about p {
    margin: 0 15vw;
    border: var(--bdr-gold);
    border-radius: var(--bdr-radius-sm);
    overflow-y: auto;
    padding: var(--spc-md);
    max-height: 70%;
  }

  @media screen and (max-width: 650px) {
   .about p {
      margin: 0;
      max-height: auto;
      padding: var(--spc-sm);
    }
  }
</style>