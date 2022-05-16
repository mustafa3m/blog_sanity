<template>
  <header>
    <div class="header-menu">
      <router-link class="header-nav header-brand" to="/"><img src="images/logo.jpg" alt="apple-logo"/>Home</router-link>
    
    </div>
    <nav>
      <div class="nav-link header-brand"><a href="#">Contacts</a></div>
      <div class="nav-link header-brand"><a href="#">About us</a></div>
    </nav>
    <!--  <ul class="header-menu">
      <li>
        <a class="header-brand">Blog</a>
      </li>
      <li>
        <router-link class="header-nav" to="/">Home</router-link>
      </li>
    </ul> -->
  </header>
</template>
<style scope>
  header {
    background: var(--dark);
    padding: 20px;
  }
  .header-menu {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  .header-brand {
    font-size: 4rem;
    font-weight: 700;
  }

  .header-nav {
    font-size: 1.8rem;
    padding: 0px 10px;
  }
  .nav-link:after {
    position: absolute;
    content: '';
    left: 0;
    right: 25px;
    height: 3px;
    bottom: -5px;
    background-color: #3CBEBC;
    border-radius: 3px;
}
</style>
