<template>
  <div class="lg:flex bg-gray">
    <div class="lg:w-2/3 relative">
      <img
        class="w-full h-full"
        src="@/static/auth/Image1.jpg"
        alt=""
      />
      <div class="w-full h-full opacity-50 bg-black absolute top-0">
        <div class="text-white absolute bottom-20 sm:bottom-40 lg:px-20 px-8">
        </div>
      </div>
    </div>
    <div class="lg:w-2/3 lg:h-screen">
      <div class="mt-10 lg:block hidden">
        <img
          class="w-80 mx-auto"
          src="@/static/logo.png"
          alt=""
        />
      </div>
      <div class="
          sm:absolute
          top-80
          lg:w-4/5 lg:mt-0
          mx-auto
          lg:my-0
          w-full
          p-8
          shadow-lg
          rounded-md
          bg-white
        ">
        <div class="text-3xl mb-6 text-blue font-bold">Sign Up</div>
        <div>
          <input
            type="text"
            placeholder="Full Name"
            v-model="name"
            class="border-none bg-gray my-3 text-sm w-full p-2 bg-gray-50"
          />
        </div>
        <div class="lg:flex justify-between">
          <div class="lg:w-56">
            <input
              type="email"
              placeholder="Email"
              v-model="email"
              class="border-none bg-gray my-3 text-sm w-full p-2 bg-gray-50"
            />
          </div>
          <div class="lg:w-56">
            <input
              type="number"
              placeholder="Phone Number"
              v-model="phone"
              class="border-none bg-gray my-3 text-sm w-full p-2 bg-gray-50"
            />
          </div>
        </div>
        <div class="lg:flex justify-between">
          <div class="lg:w-56">
            <select
              class="border-none bg-gray my-3 text-sm w-full p-2 bg-gray-50"
              v-model="gender"
            >
              <option value="">Select your gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div class="lg:w-56">
            <select
              class="border-none bg-gray my-3 text-sm w-full p-2 bg-gray-50 state-options"
              v-model="state"
            >
              <option value="">Select your state</option>
              <option
                :value="state.state"
                v-for="(state, i) in states"
                :key="i"
              >{{ state.state }}</option>
            </select>
          </div>
        </div>
        <div class="lg:flex justify-between">
          <div class="lg:w-56">
            <select
              class="border-none bg-gray my-3 text-sm w-full p-2 bg-gray-50"
              v-model="lga"
            >
              <option value="">Select your LGA</option>
              <option
                :value="lga"
                v-for="(lga, i) in lgas"
                :key="i"
              >{{ lga }}</option>
            </select>
          </div>
          <div class="lg:w-56">
            <select
              class="border-none bg-gray my-3 text-sm w-full p-2 bg-gray-50"
              v-model="specialty"
            >
              <option value="">Select your Area of Specialization</option>
              <option
                :value="specialty"
                v-for="(specialty, i) in allSpecialty"
                :key="i"
              >{{ specialty }}</option>
            </select>
          </div>
        </div>
        <div class="lg:flex justify-between">
          <div class="lg:w-56">
            <input
              type="password"
              placeholder="Password"
              class="border-none bg-gray my-3 text-sm w-full p-2 bg-gray-50"
              v-model="password"
            />
          </div>
          <div class="lg:w-56">
            <input
              type="password"
              placeholder="Confirm Password"
              class="border-none bg-gray my-3 text-sm w-full p-2 bg-gray-50"
              v-model="confirmPassword"
            />
          </div>
        </div>
        <div class="text-center my-6">
          <input
            type="button"
            :value="loading === true ? 'Loading...' : 'SIGN UP'"
            @click="signup"
            class="uppercase text-sm p-3 bg-blue text-white lg:w-96 w-full"
          />
        </div>
        <!-- <div class="text-center capitalize text-sm">or sign up with</div>
        <div class="text-center">
            
        </div> -->
        <div class="text-center capitalize text-sm">
          already have an account?
          <NuxtLink
            to="/auth/login"
            class="text-blue mx-3"
          >Login</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import states from './states';
import _specialty from './specialty';
export default {
  data () {
    return {
      name: "",
      email: "",
      phone: "",
      gender: "",
      state: "",
      lga: "",
      specialty: "",
      password: "",
      confirmPassword: "",
      loading: false,
      states,
      lgas: [],
      allSpecialty: _specialty
    };
  },

  mounted () {
    const stateOptions = document.querySelector('.state-options')

    stateOptions.addEventListener('click', () => {
      this.lgas = []
      let lga = this.states.find(x => x.state === stateOptions.value)
      this.lgas = [...lga.lgas]
    })
  },

  methods: {
    signup () {
      this.loading = true;
      if (this.name === "" && this.password === "" && this.email === "") {
        this.$toast.warning("Please fill in your details to submit!");
        this.loading = false;
      } else {
        if (this.password === this.confirmPassword) {
          this.$axios
            .post(`/auth/signup`, {
              name: this.name,
              email: this.email,
              phone: this.phone,
              gender: this.gender,
              state: this.state,
              lga: this.lga,
              specialty: this.specialty,
              password: this.password,
            })
            .then((response) => {
              // console.log(response);
              this.loading = false;
              this.$toast("Account created successfully Please login to proceed!");
              this.$router.push("/auth/login");
            })
            .catch((e) => {
              // this.errors.push(e);
              this.loading = false;
            });
        } else {
          this.$toast.error("Passwords must match!");
        }
      }
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
input:focus {
  outline: none !important;
}
div {
  font-family: "Poppins", sans-serif;
}
</style>