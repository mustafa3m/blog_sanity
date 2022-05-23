<template>
  <footer  id="contact">
    <div class="icon">
      <p>Let s get in touch.</p>

      <div class="image">
        <a href="https://www.facebook.com/"
          ><img src="/images/1.svg" alt="image facebook"
        /></a>
        <a href="https://www.instagram.com/"
          ><img src="/images/2.svg" alt="image twitter"
        /></a>
        <a
          href="https://accounts.google.com/ServiceLogin/signinchooser?hl=no&passive=true&continue=https%3A%2F%2Fwww.google.no%2F&ec=GAZAmgQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
        >
          <img src="/images/3.svg" alt="image envelope"
        /></a>
      </div>
    </div>
  </footer>
</template>
;

<script>
  export default {};
</script>

<style scoped>
  footer {
    background: black;
    width: 100%;
    padding: 30px;
    font-size: 1.8rem;
    text-align: center;
    color: white;
  }

  .icon li {
    color: white;
    font-size: 30px;
    height: 60px;
    width: 60px;
    text-align: center;
    line-height: 60px;
    border-radius: 50%;
    margin: 0 15px;
  }
  .image {
    display: flex;
    justify-content: center;
  }

  .image a img {
    height: 6rem;
    width: 6rem;
    max-width: 100%;
    border-radius: 50%;
    margin-top: 1rem;
    cursor: pointer;
    transform: scale(1);
    transition: transform 0.3s ease-in-out;
  }

  .image a img:hover {
    transform: scale(1.1);
  }
  .icon p {
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 500px) {
    .image {
      flex-direction: column;
    }
    .icon p {
      margin-bottom: 2rem;
    }
    
  }
</style>
