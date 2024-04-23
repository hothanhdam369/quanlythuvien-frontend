<script>
import AppHeader from "@/components/AppHeader.vue";
export default {
  components: {
    AppHeader,
  },
};
</script>
<template>
  <div id="app">
    <AppHeader />
    <div class="container-fluid mt-3">
      <div class="row justify-content-center">
        <div class="col"> 
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
