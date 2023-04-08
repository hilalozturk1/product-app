<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    style="background-color: #563F7A"
  >
    <a class="navbar-brand" href="#"></a>
    <router-link to="/" class="navbar-brand" tag="a">
      Product List
    </router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link
          to="/product-operations"
          tag="li"
          class="nav-item"
          active-class="active"
        >
          <a class="nav-link">Product Operations</a>
        </router-link>
        <router-link
          to="/product-quit"
          tag="li"
          class="nav-item"
          active-class="active"
        >
          <a class="nav-link">Prodcut Quit</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>
