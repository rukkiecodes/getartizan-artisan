<template>
  <div class="lg:flex bg-gray">
    <div class="lg:w-2/3 relative">
      <img class="w-full h-full" src="@/static/auth/foto2.png" alt="" />
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
      <div class="lg:mt-32 lg:block hidden">
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
        <div class="text-3xl font-bold text-blue">Forgot password</div>
        <div class="text-sm">
          Enter your mail so we'll send you a link to reset your password
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            class="
              border-none bg-gray-none
              bg-gray
              my-3
              
              text-sm
              w-full
              p-2
              bg-gray-50
            "
          />
        </div>
        <div class="text-center my-6">
          <NuxtLink to="/auth/reset-password">
            <input
              type="button"
              value="Submit"
              class="uppercase text-sm p-3 bg-blue text-white w-full"
            />
          </NuxtLink>
        </div>
        <div class="capitalize text-sm">
          I've remembered my password now
          <NuxtLink class="text-blue" to="/auth/login">Login</NuxtLink>
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