<template>
  <main class="recommendation">
    <h1 class="default-h1"><span>Recommendations</span></h1>
    <section class='container'>
      <div class='recommendation-item' v-for='rec in recommendationArray' :key='rec.company'>
        <h2>{{rec.name}}@{{rec.company}}</h2>
        <p>{{rec.content}}</p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      recommendationArray: [
        {
          name: 'Harry Monroe',
          company: 'Litt',
          content: `Daniel is a hard working and intelligent developer. In his time at Litt Inc. he was able to ramp up on our architecture (Django/React Native) and make meaningful contributions. He upgraded our native app from react-navigation v3 to v5, a difficult upgrade requiring rewriting most of the app. He got upto speed on our project layout and helped pay down technical debt, evaluated common patterns like spinners and standardized them across the app. He learned Django on the job and made nontrivial improvements to our information serialization and notification system. He upgraded our api to Django 3.0. He even taught me some js tips despite my 10 years of js experience.
          
          Daniel is the definition of an "Experienced, Disciplined, Professional". He has the maturity to question what is being asked for and suggest ways to simply the problem at hand. This is a characteristic that takes engineers some years to develop and he has it. He is also responsible enough to work remotely. Daniel would make a fine addition to any engineering team`
        }
      ]
    }
  }
}
</script>

<style scoped>
  .container {
    margin: 0 8vw;
    border: var(--bdr-gold);
    border-radius: var(--bdr-radius-sm);
    max-height: 70%;
    padding: var(--spc-md);
    overflow-y: auto;
  }

  .recommendation-item:not(:last-child) {
    margin-bottom: var(--spc-md);
  }

  .recommendation-item h2 {
    color: var(--pale-gold);
    margin-bottom: var(--spc-sm);
    font-family: var(--heading);
    font-size: 1.8rem;
    font-weight: 300;
  }

  @media screen and (max-width: 650px) {
    .container {
      margin: 0;
      padding: var(--spc-sm);
    }
  }
</style>