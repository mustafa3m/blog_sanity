<template>
  <Header />

  
    <main>

      <Pres />
      <div v-if="loading">...</div>
      <div class="content" v-else>
        <div
          v-for="(article, index) in results"
          :key="index"
          class="articles-container"
        >
          <img class="article-image" :src="article.image" alt="profile" />

          <h2>{{ article.title }}</h2>

          <h2 class="article-author">{{ article.author }}</h2>

          <p class="article-content">{{ article.description }}</p>
        </div>
      </div>

    </main>
 
  <Footer />
</template>

<script>
  import query from "../groq/home.groq?raw";
  import viewMixin from "../mixins/viewMixin.js";
  import Header from "../components/Header.vue";
  import Footer from "../components/Footer.vue";
  import Pres from "../components/Pres.vue";
  import About from "../views/About.vue";

  export default {
    components: {
      Header,
      Footer,
      Pres,
      About,
    },
    mixins: [viewMixin],
    data() {
      return {
        results: [],
      };
    },

    methods: {},

    async created() {
      await this.sanityFetch(query, {
        documentType: "post",
      });
      console.log("salut", this.results);

      this.metaTags({
        title: "Blog",
      });
    },
  };
</script>

<style>


  .articles-container {
    max-width: 800px;
    width: 100%;
    margin: 5rem 0 10rem 0;
    background: white;

    width: 100%;
    padding: 4rem;
    box-shadow: var(--box-shadow);
    border-radius: 3px;
    margin-top: 2rem;
    /*  */
    margin-bottom: 5rem;
    border-radius: 0.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .article-actions {
    padding: 0 5rem;
    margin-bottom: 5rem;
    border-radius: 0.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .article-image {
    height: 6rem;
    width: 6rem;
    max-width: 100%;
    border-radius: 50%;
    margin-top: -3rem;
  }
  h2 {
    margin-top: 2rem;
    margin-bottom: 0;
  }
  .article-author {
    color: var(--hint);
    margin-bottom: 3rem;
  }
    .content {
    display: flex;
    gap: 2rem;
  }

  .article-content {
    max-width: 550px;
    white-space: pre-line;
  }
  .article-content p {
    font-size: 1.3rem;
    line-height: 1.8rem;
  }
  .article-actions {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    margin-top: 2rem;
    border-top: 1px solid var(--divider);
  }
  .article-author {
    margin-top: 1rem;
  }

  .btn {
    margin-left: 1rem;
  }
 
 @media screen and (max-width: 500px) {
    .content {
      margin-top: 2rem;
    flex-direction: column;
    
  }
  .articles-container{
    gap: 2rem;
    margin-top: 1rem;

  }

 }
</style>
