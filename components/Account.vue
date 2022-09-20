<template>
  <div v-if="edit" class="pt-8 text-center">
    <div class="text-3xl">Update Information</div>
    <div class="w-full mx-auto">
      <div class="font-bold my-3 text-base opacity-80 text-left lg:ml-11">
        Personal Information
      </div>

      <div>
        <input
          type="text"
          placeholder="Full Name"
          v-model="name"
          class="
            border
            my-3
            border-t-0
            text-sm
            w-full
            border-l-0 border-r-0
            p-2
            bg-gray-50
          "
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          v-model="email"
          class="
            border
            my-3
            border-t-0
            text-sm
            w-full
            border-l-0 border-r-0
            p-2
            bg-gray-50
          "
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Phone Number"
          v-model="phone"
          class="
            border
            my-3
            border-t-0
            text-sm
            w-full
            border-l-0 border-r-0
            p-2
            bg-gray-50
          "
        />
      </div>
      <div>
        <select
          class="
            border
            my-3
            border-t-0
            text-sm
            w-full
            border-l-0 border-r-0
            p-2
            bg-gray-50
          "
          v-model="gender"
        >
          <option value="">Select your gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div>
        <select
          class="
            border
            my-3
            border-t-0
            text-sm
            w-full
            border-l-0 border-r-0
            p-2
            bg-gray-50
          "
          v-model="state"
        >
          <option value="">Select your state</option>
          <option value="rivers">Rivers</option>
          <option value="lagos">Lagos</option>
        </select>
      </div>
      <div>
        <select
          class="
            border
            my-3
            border-t-0
            text-sm
            w-full
            border-l-0 border-r-0
            p-2
            bg-gray-50
          "
          v-model="lga"
        >
          <option value="">Select your LGA</option>
          <option value="Abua">Abua</option>
          <option value="Omoku">Omoku</option>
        </select>
      </div>
      <div>
        <select
          class="
            border
            my-3
            border-t-0
            text-sm
            w-full
            border-l-0 border-r-0
            p-2
            bg-gray-50
          "
          v-model="specialty"
        >
          <option value="specialty">Select your Specialty</option>
          <option value="sewing">Sewing</option>
          <option value="cleaning">Cleaning</option>
        </select>
      </div>
      <!--       
      <div class="font-bold my-3 text-base opacity-80 text-left lg:ml-11">
        Guarantors Information
      </div>
      <div>
        <input
          type="text"
          placeholder="Guarantors Name"
          class="
            border
            my-3
            border-t-0
            text-sm
            w-full
            border-l-0 border-r-0
            p-2
            bg-gray-50
          "
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Phone Number"
          class="
            border
            my-3
            border-t-0
            text-sm
            w-full
            border-l-0 border-r-0
            p-2
            bg-gray-50
          "
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Email"
          class="
            border
            my-3
            border-t-0
            text-sm
            w-full
            border-l-0 border-r-0
            p-2
            bg-gray-50
          "
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Address"
          class="
            border
            my-3
            border-t-0
            text-sm
            w-full
            border-l-0 border-r-0
            p-2
            bg-gray-50
          "
        />
      </div> -->
    </div>
    <div class="text-center my-6">
      <button
        @click="edit = false"
        class="bg-blue text-white p-4 w-44 font-bold uppercase"
      >
        Back
      </button>
      <button
        @click="update"
        class="bg-blue text-white p-4 w-44 font-bold uppercase"
      >
        {{ loading ? "Loading..." : "Update" }}
      </button>
    </div>
  </div>
  <div v-else class="m-4">
    <!-- <div class="border border-gray-50 w-[10px] h-10 rounded-full"></div> -->
    <div class="p-3 lg:mx-4 mt-10  flex justify-between">
      <div>
        <img
          class="w-10 h-10 my-4 cursor-pointer"
          src="/photo-camera.png"
          alt=""
        />
        <div class="text-3xl font-bold">{{ user.name }}</div>
      </div>
      <section class="my-4 cursor-pointer" @click="edit = true">
        <img class="w-8 h-8" src="/edit.png" alt="" />
        <span>edit</span>
      </section>
    </div>
    <div class="p-3">
      <div class="lg:flex my-4 justify-between">
        <div class="bg-gray p-3 lg:mx-4">Email: {{ user.email }}</div>
        <div class="bg-gray p-3 lg:mx-4">Phone: {{ user.phone }}</div>
      </div>
      <div class="lg:flex my-4 justify-between capitalize">
        <div class="bg-gray p-3 lg:mx-4">Gender: {{ user.gender }}</div>
        <div class="bg-gray p-3 lg:mx-4">Specialty: {{ user.specialty }}</div>
      </div>
      <div class="lg:flex my-4 justify-between capitalize">
        <div class="bg-gray p-3 lg:mx-4">State: {{ user.state }}</div>
        <div class="bg-gray p-3 lg:mx-4">LGA: {{ user.lga }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      edit: false,
      user: [],
      name: "",
      email: "",
      phone: "",
      gender: "",
      state: "",
      lga: "",
      specialty: "",
      loading: false,
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getUser();
    this.name = this.user.name;
    this.email = this.user.email;
    this.phone = this.user.phone;
    this.gender = this.user.gender;
    this.state = this.user.state;
    this.lga = this.user.lga;
    this.specialty = this.user.specialty;
  },
  methods: {
    getUser() {
      this.$axios
        .post(
          `/auth/profile`,
          {
            email: this.user.email,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("user", JSON.stringify(response.data.user));

          // this.user = response.data.user;
        })
        .catch((e) => {
          // this.errors.push(e);
          this.loading = false;
        });
    },
    update() {
      this.loading = true;
      this.$axios
        .post(
          `/auth/updateProfile`,
          {
            name: this.name,
            email: this.email,
            phone: this.phone,
            gender: this.gender,
            state: this.state,
            lga: this.lga,
            specialty: this.specialty,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          this.$toast("User profile updated successfully!");
          console.log(response.data);
          this.loading = false;
          this.edit = false;
        })
        .catch((e) => {
          // this.errors.push(e);
          this.loading = false;
        });
    },
  },
};
</script>
<style scoped>
input,
div,
textarea,
select {
  width: 90% !important;
}
textarea:focus {
  outline: none;
}
select:focus {
  outline: none;
}
/* input::placeholder, textarea::placeholder{
    color: #000;
} */
@media (max-width: 600px) {
  input,
  div,
  textarea,
  select {
    width: 100% !important;
  }
}
</style>