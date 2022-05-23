<template>
  <div class="presentation">
    <div class="presentation-content-image">
      <img
        class="presentation-image"
        src="/images/5.jpg"
        alt="Presentation image"
      />
    </div>

    <div class="presentation-content-txt">
      <h2>Welcome to  Christiania book club</h2>
      <p>
        For the first time, you can find some of the best books by authors and
        historians from around the world who want to share their stories and
        research with you. You can get signed and personalised books too. You
        can read about our books, get regular blog posts and browse through the
        bookshop, while also having access to the authors too. Where else can
        you get this? Exactly. Sign up to receive notifications when a new blog
        post has been written and follow us on social media too.
      </p>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .presentation {
    display: flex;
    flex-flow: row nowrap;
  }
  .presentation-content-image {
    flex: 1;
  }
  .presentation-content-image .presentation-image {
    width: 100%;
  }

  .presentation-content-txt {
    flex: 1;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
.presentation-content-txt h2{
  margin-bottom: 2rem;
}

.presentation-content-txt p{
   font-size: 1.3rem;
  line-height: 1.8rem;
}

@media screen and (max-width: 500px) {
  .presentation {
    flex-direction: column-reverse;
  }
  .presentation-content-image {
    min-height: 300px;
  }
  .presentation-content-txt {
    padding: 4rem 2rem;
  }

}

</style>
