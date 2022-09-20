<template>
  <div class="flex app">
    <Sidebar />
    <Dashboard />
  </div>
</template>

<script>
import Sidebar from "~/components/Sidebar.vue";
export default {
  components: { Sidebar },
  middleware: "auth",
  name: "IndexPage",
};
</script>
<style>
input:focus {
  outline: none !important;
}
.app {
  overflow-x: hidden !important;
}
</style>