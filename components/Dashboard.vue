<template>
  <div class="lg:p-8 p-5 lg:mt-0 mt-16 w-full bg-gray-50">
    <div class="flex justify-between">
      <div class="text-4xl mb-8 relative w-64">
        <div class="opacity-40">Hey there!</div>
        <img
          class="absolute top-0 w-10 right-0"
          src="@/static/wave.png"
          alt=""
        />
      </div>
    </div>
    <div class="font-bold my-3 text-base opacity-80">30 Days Performance</div>
    <div class="lg:flex justify-between">
      <div class="p-4 bg-blue lg:w-72 lg:my-0 my-2 rounded-xl relative">
        <div class="text-white opacity-60 font-bold text-base">Pending</div>
        <div>
          <div class="text-4xl text-white font-black">200</div>
        </div>
        <div class="absolute top-0 right-0">
          <img class="h-24" src="@/static/patterns/1.png" alt="" />
        </div>
      </div>

      <div class="p-4 bg-blue lg:w-72 lg:my-0 my-2 rounded-xl relative">
        <div class="text-white opacity-60 font-bold text-base">Approved</div>
        <div>
          <div class="text-4xl text-white font-black">100</div>
        </div>
        <div class="absolute top-0 right-0">
          <img class="h-24" src="@/static/patterns/2.png" alt="" />
        </div>
      </div>

      <div class="p-4 bg-blue lg:w-72 lg:my-0 my-2 rounded-xl relative">
        <div class="text-white opacity-60 font-bold text-base">Completed</div>
        <div>
          <div class="text-4xl text-white font-black">20</div>
        </div>
        <div class="absolute top-0 right-0">
          <img class="h-24" src="@/static/patterns/3.png" alt="" />
        </div>
      </div>
    </div>
    <div class="lg:flex justify-between">
      <div class="lg:w-4/6 mt-5 lg:pr-3">
        <div class="font-bold my-3 text-base opacity-80">Booking History</div>
        <div class="relative bg-white overflow-x-auto shadow-md sm:rounded-lg">
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <thead
              class="
                text-xs text-gray-700
                uppercase
                bg-gray-50
                dark:bg-gray-700 dark:text-gray-400
              "
            >
              <tr>
                <th scope="col" class="px-6 py-3">Title</th>
                <th scope="col" class="px-6 py-3">Budget</th>
                <th scope="col" class="px-6 py-3">Status</th>
                <th scope="col" class="px-6 py-3">Date Created</th>
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
                  Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">White</td>
                <td class="px-6 py-4">Laptop PC</td>
                <td class="px-6 py-4">$1999</td>
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
                  Magic Mouse 2
                </th>
                <td class="px-6 py-4">Black</td>
                <td class="px-6 py-4">Accessories</td>
                <td class="px-6 py-4">$99</td>
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
                  Google Pixel Phone
                </th>
                <td class="px-6 py-4">Gray</td>
                <td class="px-6 py-4">Phone</td>
                <td class="px-6 py-4">$799</td>
              </tr>
              <tr
                class="
                  odd:bg-white
                  even:bg-gray-50
                  odd:dark:bg-gray-800
                  even:dark:bg-gray-700
                "
              >
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
                  Apple Watch 5
                </th>
                <td class="px-6 py-4">blue</td>
                <td class="px-6 py-4">Wearables</td>
                <td class="px-6 py-4">$999</td>
              </tr>
              <tr
                class="
                  odd:bg-white
                  even:bg-gray-50
                  odd:dark:bg-gray-800
                  even:dark:bg-gray-700
                "
              >
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
                  Apple Watch 5
                </th>
                <td class="px-6 py-4">blue</td>
                <td class="px-6 py-4">Wearables</td>
                <td class="px-6 py-4">$999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="lg:w-72">
        <div class="font-bold my-3 mt-8 text-base opacity-80">
          Notifications
        </div>

        <div
          class="
            flex
            lg:justify-evenly
            justify-between
            p-2
            bg-white
            rounded-md
            mt-2
          "
        >
          <div class="bg-gray-100 p-3 rounded-full">
            <img src="@/static/notification.png" alt="" />
          </div>
          <div class="text-base font-medium">
            Alabo accepted the task
            <div class="text-xs text-right text-blue font-normal">
              22 May 2020
            </div>
          </div>
        </div>
        <div
          class="
            flex
            lg:justify-evenly
            justify-between
            p-2
            bg-white
            rounded-md
            mt-2
          "
        >
          <div class="bg-gray-100 p-3 rounded-full">
            <img src="@/static/notification.png" alt="" />
          </div>
          <div class="text-base font-medium">
            Alabo accepted the task
            <div class="text-xs text-right text-blue font-normal">
              22 May 2020
            </div>
          </div>
        </div>
        <div
          class="
            flex
            lg:justify-evenly
            justify-between
            p-2
            bg-white
            rounded-md
            mt-2
          "
        >
          <div class="bg-gray-100 p-3 rounded-full">
            <img src="@/static/notification.png" alt="" />
          </div>
          <div class="text-base font-medium">
            Alabo accepted the task
            <div class="text-xs text-right text-blue font-normal">
              22 May 2020
            </div>
          </div>
        </div>
        <div
          class="
            flex
            lg:justify-evenly
            justify-between
            p-2
            bg-white
            rounded-md
            mt-2
          "
        >
          <div class="bg-gray-100 p-3 rounded-full">
            <img src="@/static/notification.png" alt="" />
          </div>
          <div class="text-base font-medium">
            Alabo accepted the task
            <div class="text-xs text-right text-blue font-normal">
              22 May 2020
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    toggle() {
      document.getElementById("");
    },
  },
};
</script>
<style scoped>
th,
td {
  padding: 10px;
}
</style>