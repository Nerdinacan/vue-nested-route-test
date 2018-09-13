<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/sometool/pageone">Page One</router-link> |
      <router-link to="/sometool/pagetwo">Page Two</router-link>
    </nav>
    <router-view/>
  </div>
</template>
