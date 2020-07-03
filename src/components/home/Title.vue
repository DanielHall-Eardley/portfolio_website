<template>
  <div class='title'>
    <h1>Daniel Hall-Eardley</h1>
    <h2>Creator and Problem Solver</h2>
    <h3>I am a full stack developer with a passion for creation and creative problem solving. Let me know what I can build for you!</h3>
    <router-link :to="{name: 'About'}">Learn more about me</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .title {
    width: 25rem;
    margin-right: 10%;
  }

  .title h1 {
    color: var(--pale-gold);
    border: var(--bdr-gold);
    padding: var(--spc-xsm);
    text-align: center;
    margin-bottom: var(--spc-sm);
    border-radius: var(--bdr-radius-sm);
    font-family: var(--heading);
    font-weight: 900;
  }

  .title h2, .title h3 {
    color: var(--grey);
    margin-bottom: var(--spc-xsm);
    line-height: 135%;
    word-spacing: 3px;
    white-space: pre-line;
    font-family: var(--heading);
    font-weight: 400;
  }

  .title a {
    font-family: var(--heading);
    font-weight: 400;
    font-style: italic;
  }

  @media screen and (max-width: 1250px) {
    .title {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 500px) {
    .title {
      flex: 1;
      margin: var(--spc-md);
    }
  }
</style>