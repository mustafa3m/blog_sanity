<template>
  <Header class="header" />
  <div class="grid">
    <main>
      <Pres />
      <div v-if="loading">...</div>
      <div class="content" v-else>
        <div
          v-for="article in result"
          :key="article"
          class="articles-container"
        >
          <img :src="article.image.asset.url" alt="profile" />

          <h2>{{ article.title }}</h2>

          <p class="article-author">{{ article.author.name }}</p>

          <!-- <p class="article-category">{{ article.category._ref}}</p> -->

          <p class="articlecontent">{{ article.description }}</p>

          <div class="article-actions">
            <button @click="deleteArticle(article)" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
  <Footer class="footer" />

  <!-- <pre v-else>result: {{ JSON.stringify(result, null, 3) }}</pre> -->
</template>

<script>
  import query from "../groq/home.groq?raw";
  import viewMixin from "../mixins/viewMixin.js";
  import Header from "../components/Header.vue";
  import Footer from "../components/Footer.vue";
  import Pres from "../components/Pres.vue";
  import About  from "../views/About.vue";

  export default {
    components: {
      Footer,
      Pres,
      About 
    },
    mixins: [viewMixin],
    data() {
      return {
        result: [],
        currentFilter: "all",
      };
    },
    methods: {
      //delete fonction
      deleteArticle(id) {
        this.result.splice(id, 1);
        console.log("delete article");
      },
    },

    async created() {
      await this.sanityFetch(query, {
        documentType: "post",
      });
      console.log("salut", this.result);

      this.metaTags({
        title: "Hello from Home.vue",
      });
    },
  };
</script>

<style>
  .content {
    display: flex;
    gap: 2rem;
  }
  .grid {
    display: flex;
    gap: 3rem;
  }
  aside {
    margin-top: 2rem;
  }
  .articles-container {
    max-width: 800px;
    width: 100%;
    margin: 5rem 0 10rem 0;
    background: white;
    max-width: 700px;
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
  img {
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
  .article-content {
    max-width: 550px;
    white-space: pre-line;
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
  /* filter css  */
  .filter {
    font-family: arial;
    padding: 6px 6px;
    cursor: pointer;
    border-radius: 6px;
    transition: all 0.35s;
  }

  .filter.active {
    box-shadow: 0px 1px 3px 0px #00000026;
  }

  .filter:hover {
    background: lightgray;
  }

  .projects {
    margin-bottom: 50px;
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .projects-enter {
    transform: scale(0.5) translatey(-80px);
    opacity: 0;
  }

  .projects-leave-to {
    transform: translatey(30px);
    opacity: 0;
  }

  .projects-leave-active {
    position: absolute;
    z-index: -1;
  }

  .circle {
    text-align: center;
    position: absolute;
    bottom: -38px;
    left: 40px;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    /* 	border:1px solid black; */
    display: flex;
    box-shadow: 0px -4px 3px 0px #494d3257;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    /* 	box-shadow:0px -3px 3px #484848a6; */
  }

  .project {
    transition: all 0.35s ease-in-out;
    margin: 10px;
    box-shadow: 0px 2px 8px lightgrey;
    border-radius: 3px;
    width: 180px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .project-image-wrapper {
    position: relative;
  }

  .gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 150px;
    opacity: 0.09;
    background: linear-gradient(
        to bottom,
        rgba(0, 210, 247, 0.65) 0%,
        rgba(0, 210, 247, 0.64) 1%,
        rgba(0, 0, 0, 0) 100%
      ),
      linear-gradient(
        to top,
        rgba(247, 0, 156, 0.65) 0%,
        rgba(247, 0, 156, 0.64) 1%,
        rgba(0, 0, 0, 0) 100%
      );
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  .project-image {
    width: 100%;
    height: 150px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
</style>
