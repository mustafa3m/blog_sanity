<template>
  <div class="content">
    <form>
      <h2 class="title-underline">Add a blog post</h2>
      <div class="form-group">
        <img :src="image" alt="profile" />
      </div>

      <div class="form-group">
        <label>Title</label>
        <input v-model="title" type="text" />
      </div>

      <div class="form-group">
        <label>Author</label>
        <input v-model="author" type="text" />
      </div>

      <div class="form-group">
        <label>Categorys</label>
        <input v-model="categorys" type="text" />
      </div>

      <div class="form-group">
        <label>Description</label>
        <input v-model="description" type="text" />
      </div>

      <div class="form-btn-container">
        <button @click="createdPost" class="btn btn-primary">Save</button>

        <div v-show="errorMsg" class="alert alert-danger" role="alert">
          {{ errorMsg }}
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import sanity from "../sanity.js";
  
  export default {
    
    data() {
      return {
        //articles: [],
        image: "",
        title: "",
        author: "",
        categorys: "",
        description: "",
        errorMsg: "",
        errors: [],
      };
    },
    methods: {
      formIsValid() {
        if (this.articles.length === 0) {
          this.errorMsg = "You must fill in all the fields";
          return;
        } else {
          this.errorMsg = null;
        }
      },
      createdPost() {
        try {
          sanity.create({
            _type: "post",
            image: this.image,
            title: this.title,
            author: this.author,
            categorys: this.categorys,
            description: this.descriptions,
          });
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
</script>

<style lang="css" scoped>
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2 {
    margin-bottom: 4rem;
  }
  form {
    width: 700px;
    padding: 4rem;
    box-shadow: var(--box-shadow);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
  }
  .form-group {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 1.8rem;
    color: var(--accent);
    font-weight: 700;
    margin-bottom: 1rem;
  }
  input,
  textarea {
    border: 1px solid var(--divider);
    padding: 1rem;
    outline: 0;
    border-radius: 3px;
  }
  .form-group:focus {
    border-color: var(--accent);
  }
  textarea {
    min-height: 20rem;
  }

  .form-btn-container {
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }
  .btn {
    margin-left: 0.5rem;
  }
  .alert {
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    border-radius: 4px;
  }
  .alert-danger {
    background-color: rosybrown;
    border-color: #ebccd1;
    color: #a94442;
  }
</style>
