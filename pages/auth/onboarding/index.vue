<template>
  <div class="lg:flex bg-gray">
    <div class="lg:w-2/3 relative">
      <img class="w-full h-full" src="@/static/auth/foto3.png" alt="" />
      <div class="w-full h-full opacity-50 bg-black absolute top-0">
        <div class="text-white absolute bottom-20 sm:bottom-40 lg:px-20 px-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          neque. Ducimus dolor cupiditate delectus? Ducimus veniam, beatae
          libero, consectetur iste omnis repellat et obcaecati doloremque porro,
          itaque assumenda aperiam labore!
        </div>
      </div>
    </div>
    <div class="lg:w-2/3 lg:h-screen">
      <div class="mt-10 lg:block hidden">
        <img class="w-80 mx-auto" src="@/static/logo.png" alt="" />
      </div>
      <div
        class="
          sm:absolute
          top-80
          lg:w-2/3 lg:mt-0
          mx-auto
          lg:my-0
          w-full
          p-8
          shadow-lg
          rounded-md
          bg-white
        "
      >
        <div class="text-3xl mb-6 text-blue font-bold">Onboarding</div>
        <input class="hidden" type="file" id="photo" name="photo" />
        <div
          class="
            w-32
            mb-6
            mx-auto
            h-32
            border-none bg-gray border-none bg-gray-lavender
            rounded-xl
            text-center
          "
        >
          <label class="text-sm" for="photo">Upload Photo</label>
        </div>

        <div class="text-base">Guarantor Details</div>
        <div>
          <input
            type="text"
            placeholder="Enter Guarantor Name "
            class="border-none bg-gray my-3  text-sm w-full p-2"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Enter Guarantor Phone Number "
            class="border-none bg-gray my-3  text-sm w-full p-2"
          />
        </div>
        <div class="text-center my-6">
          <NuxtLink to="/">
            <input
              type="button"
              value="Register"
              class="uppercase text-sm p-3 bg-blue text-white lg:w-96 w-full"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
input:focus {
  outline: none !important;
}
div {
  font-family: "Poppins", sans-serif;
}
</style>