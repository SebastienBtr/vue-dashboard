<template>
  <div class="is-pulled-right">
    <div class="columns is-mobile padding-right">
      <div class="column">
        <span class="icon is-medium">
          <i class="mdi mdi-36px mdi-magnify"></i>
        </span>
      </div>
      <div class="column">
        <span class="icon is-medium">
          <i class="mdi mdi-36px mdi-bell"></i>
        </span>
      </div>
      <div class="column">
        <router-link to="/account">
          <figure class="image">
            <img class="is-rounded" src="@/assets/avatar.jpg" />
          </figure>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
.column {
  display: flex !important;
  align-items: center !important;
}
.columns {
  margin-top: 0 !important;
}
.padding-right {
  padding-right: 15px;
}
.image {
  height: 40px;
  width: 40px;
}
</style>
