<template>
  <div class="m-0 w-full">
    <div class="h-full gradient-form bg-gray-200 md:h-screen">
      <div class="h-full">
        <div
          class="
            flex
            justify-center
            items-center
            flex-wrap
            h-full
            g-6
            text-gray-800
          "
        >
          <div class="xl:w-8/12">
            <div class="block bg-white shadow-lg rounded-lg">
              <div class="lg:flex lg:flex-wrap g-0">
                <div class="lg:w-6/12 px-4 md:px-0">
                  <div class="md:p-12 md:mx-6">
                    <div class="text-center">
                      <img
                        class="mx-auto w-48"
                        src="https://media.kasperskydaily.com/wp-content/uploads/sites/92/2014/10/06042257/Why-it-can-be-unsafe-to-buy-Kaspersky-products-from-eBayAmazon-merchants.png"
                        alt="logo"
                      />
                      <h4 class="text-xl font-semibold mt-4 mb-6 pb-1">
                        Register and add your product
                      </h4>
                    </div>
                    <form>
                      <div class="mb-2">
                        <input
                          type="text"
                          class="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700
                            focus:bg-white
                            focus:border-blue-600
                            focus:outline-none
                          "
                          v-model="name"
                          placeholder="Name"
                        />
                      </div>
                      <div class="mb-2">
                        <input
                          type="email"
                          class="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700
                            focus:bg-white
                            focus:border-blue-600
                            focus:outline-none
                          "
                          v-model="email"
                          placeholder="Email"
                        />
                      </div>
                      <div class="mb-2">
                        <input
                          type="password"
                          v-model="password"
                          :visiblePassword="hasVisiblePassword"
                          class="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700
                            focus:bg-white
                            focus:border-blue-600
                            focus:outline-none
                          "
                          placeholder="Password"
                        />
                      </div>
                      <div class="mb-2">
                        <input
                          type="password"
                          v-model="passwordConfirme"
                          :visiblePassword="hasVisiblePassword"
                          @click-icon="hasVisiblePassword = !hasVisiblePassword"
                          @keyup.enter="login"
                          class="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700
                            focus:bg-white
                            focus:border-blue-600
                            focus:outline-none
                          "
                          placeholder="Confirm Password"
                        />
                      </div>
                      <vs-alert
                        v-model="validatePassword"
                        closable
                        color="danger"
                      >
                        Password do not match.
                      </vs-alert>
                      <div class="text-center pt-1 pb-1">
                        <button
                          class="
                            inline-block
                            px-6
                            py-2.5
                            text-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                            shadow-md
                            bg-blue-700
                            hover:text-blue-700
                            hover:bg-slate-200
                            hover:shadow-lg
                            focus:shadow-lg focus:outline-none focus:ring-0
                            active:shadow-lg
                            transition
                            duration-150
                            ease-in-out
                            w-full
                          "
                          type="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          :loading="loadingRegister"
                          v-on:click="register"
                        >
                          Registrar
                        </button>
                      </div>
                      <div class="text-center pt-1 mb-12 pb-1">
                        <div class="text-center mt-5 text-primary">
                          <router-link :to="{ name: 'Login' }">
                            <button
                              class="
                                inline-block
                                px-6
                                py-2.5
                                text-white
                                font-medium
                                text-xs
                                leading-tight
                                uppercase
                                rounded
                                shadow-md
                                bg-blue-700
                                hover:text-blue-700
                                hover:bg-slate-200
                                hover:shadow-lg
                                focus:shadow-lg focus:outline-none focus:ring-0
                                active:shadow-lg
                                transition
                                duration-150
                                ease-in-out
                                w-full
                              "
                              type="button"
                              data-mdb-ripple="true"
                              data-mdb-ripple-color="light"
                            >
                              Login
                            </button>
                          </router-link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  class="
                    lg:w-6/12
                    flex
                    items-center
                    lg:rounded-r-lg
                    rounded-b-lg
                    lg:rounded-bl-none
                  "
                  style="
                    background-color: currentcolor;
                    background-image: url(https://middleeast-business.com/wp-content/uploads/2020/04/Middle-east-package-boxes-cart-with-laptop-computer-online-shopping-concept.jpg);
                    background-size: cover;
                  "
                >
                  <div
                    class="flex items-center"
                    style="width: 100%; height: 100%; background: #b1b1b154"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { UserIcon, UnlockIcon, LockIcon } from "vue-feather-icons";
export default {
  components: {
    UserIcon,
    UnlockIcon,
    LockIcon,
  },
  data: () => ({
    name: "",
    email: "",
    password: "",
    passwordConfirme: "",
    hasVisiblePassword: false,
    loadingRegister: false,
  }),
  computed: {
    getProgress() {
      let progress = 0;
      if (/\d/.test(this.password)) {
        progress += 20;
      }
      if (/(.*[A-Z].*)/.test(this.password)) {
        progress += 20;
      }
      if (/(.*[a-z].*)/.test(this.password)) {
        progress += 20;
      }
      if (this.password.length >= 6) {
        progress += 20;
      }
      if (/[^A-Za-z0-9]/.test(this.password)) {
        progress += 20;
      }
      return progress;
    },
    validatePassword() {
      return this.password !== this.passwordConfirme;
    },
  },
  methods: {
    async register() {
      try {
        if (
          this.email.length === 0 ||
          this.name.length === 0 ||
          this.password.length === 0
        ) {
          this.$vs.notification({
            progress: "auto",
            color: "danger",
            title: "You must enter the data",
          });
          return 0;
        }
        this.loadingRegister = true;
        await this.$store.dispatch("Auth/signup", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        await this.$store.dispatch("Auth/login", {
          email: this.email,
          password: this.password,
        });
        this.$vs.notification({
          progress: "auto",
          color: "success",
          title: "Successful",
          text: `Successfully registered user.`,
        });
        this.$router.push({ name: "Dashboard" });
      } catch (error) {
        this.$vs.notification({
          progress: "auto",
          color: "danger",
          title: "An error occurred",
          text: `Error message👉 ${error.message}`,
        });
        console.log(error.response.status);
      } finally {
        this.loadingRegister = false;
      }
    },
  },
};
</script>
<style lang="scss">
#backgroundColor {
  background-color: #283046;
}
</style>
