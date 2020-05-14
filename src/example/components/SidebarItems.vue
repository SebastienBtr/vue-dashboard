<template>
  <div class="margin-top">
    <router-link to="/">
      <button
        class="button is-medium is-fullwidth is-rounded is-white margin-btn"
      >
        <span class="icon is-medium">
          <i class="mdi mdi-24px mdi-home"></i>
        </span>
        <span>Home</span>
      </button>
    </router-link>
    <router-link to="/about">
      <button
        class="button is-medium is-fullwidth is-rounded is-white margin-btn"
      >
        <span class="icon is-medium">
          <i class="mdi mdi-24px mdi-information"></i>
        </span>
        <span>About</span>
      </button>
    </router-link>
    <router-link to="/account">
      <button
        class="button is-medium is-fullwidth is-rounded is-white margin-btn"
      >
        <span class="icon is-medium">
          <i class="mdi mdi-24px mdi-account"></i>
        </span>
        <span>Account</span>
      </button>
    </router-link>
    <router-link to="/statistics">
      <button
        class="button is-medium is-fullwidth is-rounded is-white margin-btn"
      >
        <span class="icon is-medium">
          <i class="mdi mdi-24px mdi-chart-bar"></i>
        </span>
        <span>Statistics</span>
      </button>
    </router-link>
  </div>
</template>

<style>
.router-link-exact-active > button {
  background-color: #44b783 !important;
  color: white !important;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2) !important;
  margin-bottom: 15px;
}
.button {
  justify-content: left !important;
}
.margin-top {
  margin-top: 2rem;
}
.margin-btn {
  margin-bottom: 10px;
}
</style>
