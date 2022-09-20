<template>
  <div class="flex">
    <Sidebar />
    <Subscriptions />
  </div>
</template>

<script>
import Sidebar from "~/components/Sidebar.vue";
export default {
  components: { Sidebar },
  name: "IndexPage",
  middleware: "auth",
};
</script>
<style>
input:focus {
  outline: none !important;
}
</style>