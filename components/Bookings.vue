<template>
  <div class="p-8 w-full">
    <div class="font-bold my-5 text-lg opacity-80">Booking History</div>
    <div class="relative bg-white overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="
            text-xs text-gray-700
            uppercase
            bg-gray-50
            dark:bg-gray-700 dark:text-gray-400
          "
        >
          <tr>
            <th scope="col" class="px-6 py-3">Booking Id</th>
            <th scope="col" class="px-6 py-3">Title</th>
            <th scope="col" class="px-6 py-3">Category</th>
            <th scope="col" class="px-6 py-3">Location</th>
            <th scope="col" class="px-6 py-3">Budget</th>
            <th scope="col" class="px-6 py-3">Status</th>
            <th scope="col" class="px-6 py-3">More</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="
              border-b
              dark:bg-gray-800 dark:border-gray-700
              odd:bg-white
              even:bg-gray-50
              odd:dark:bg-gray-800
              even:dark:bg-gray-700
            "
          >
            <td class="px-6 py-4">1</td>
            <th
              scope="row"
              class="
                px-6
                py-4
                font-medium
                text-gray-900
                dark:text-white
                whitespace-nowrap
              "
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Sliver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">$2999</td>
            <td class="px-6 py-4">Pending</td>
            <td class="px-6 py-4">
              <span class="mdi mx-3 mdi-dots-vertical"></span>
            </td>
          </tr>
          <tr
            class="
              border-b
              dark:bg-gray-800 dark:border-gray-700
              odd:bg-white
              even:bg-gray-50
              odd:dark:bg-gray-800
              even:dark:bg-gray-700
            "
          >
            <td class="px-6 py-4">1</td>
            <th
              scope="row"
              class="
                px-6
                py-4
                font-medium
                text-gray-900
                dark:text-white
                whitespace-nowrap
              "
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Sliver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">$2999</td>
            <td class="px-6 py-4">Pending</td>
            <td class="px-6 py-4">
              <span class="mdi mx-3 mdi-dots-vertical"></span>
            </td>
          </tr>
          <tr
            class="
              border-b
              dark:bg-gray-800 dark:border-gray-700
              odd:bg-white
              even:bg-gray-50
              odd:dark:bg-gray-800
              even:dark:bg-gray-700
            "
          >
            <td class="px-6 py-4">1</td>
            <th
              scope="row"
              class="
                px-6
                py-4
                font-medium
                text-gray-900
                dark:text-white
                whitespace-nowrap
              "
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Sliver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">$2999</td>
            <td class="px-6 py-4">Pending</td>
            <td class="px-6 py-4">
              <span class="mdi mx-3 mdi-dots-vertical"></span>
            </td>
          </tr>
          <tr
            class="
              border-b
              dark:bg-gray-800 dark:border-gray-700
              odd:bg-white
              even:bg-gray-50
              odd:dark:bg-gray-800
              even:dark:bg-gray-700
            "
          >
            <td class="px-6 py-4">1</td>
            <th
              scope="row"
              class="
                px-6
                py-4
                font-medium
                text-gray-900
                dark:text-white
                whitespace-nowrap
              "
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Sliver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">$2999</td>
            <td class="px-6 py-4">Pending</td>
            <td class="px-6 py-4">
              <span class="mdi mx-3 mdi-dots-vertical"></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: [],
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.$axios
      .post(
        `/artizan/getBookings`,
        {
          user: this.user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        // this.$toast("User profile updated successfully!");
        console.log(response.data);
      })
      .catch((e) => {
        // this.errors.push(e);
        this.loading = false;
      });
  },
};
</script>
<style scoped>
</style>