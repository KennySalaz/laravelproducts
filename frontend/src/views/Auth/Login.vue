
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
                      <h4 class="text-xl font-semibold mt-4 mb-12 pb-1">
                        Enter and add your product
                      </h4>
                    </div>

                    <form>
                      <div class="mb-1">
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
                          @keyup.enter="login"
                          placeholder="Email"
                        />
                      </div>
                      <div class="mb-4">
                        <input
                          type="password"
                          v-model="password"
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
                          placeholder="Password"
                        />
                      </div>
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
                          @click="login"
                        >
                          Login
                        </button>
                      </div>
                      <div class="text-center pt-1 mb-12 pb-1">
                        <div class="text-center mt-5 text-primary">
                          <router-link :to="{ name: 'Register' }">
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
                              Registrar
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
                    background-image: url(https://media.informabtl.com/wp-content/uploads/2020/01/50c41239-delivery.jpg);
                    background-size: cover;
                  "
                >
                  <div
                    class="flex items-center"
                    style="width: 100%; height: 100%; background: #b1b1b154"
                  >
                    <div
                      class="
                        text-white
                        w-full
                        px-4
                        py-6
                        md:p-15
                        text-center
                        md:mx-6
                      "
                      style=""
                    >
                      <p class="text-8xl">Welcome</p>
                    </div>
                  </div>
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
    hasVisiblePassword: false,
    remember_me: true,
    email: "",
    password: "",
    loadingIngresar: false,
  }),
  methods: {
    async login() {
      try {
        if (this.email.length < 1 || this.password.length < 1) {
          this.$vs.notification({
            progress: "auto",
            color: "danger",
            title: "You must enter the data",
          });
          return 0;
        }
        this.loadingIngresar = true;
        await this.$store.dispatch("Auth/login", {
          email: this.email,
          password: this.password,
          name: this.name,
          remember_me: this.remember_me,
        });

        this.$router.push({ name: "Dashboard" });
      } catch (error) {
        if (error.response.status == 401) {
          this.$vs.notification({
            progress: "auto",
            color: "danger",
            title: "Incorrect data",
            text: `Incorrect data or you do not have access.`,
          });
        } else {
          this.$vs.notification({
            progress: "auto",
            color: "danger",
            title: "An error occurred",
            text: `error message 👉 ${error.response.data}`,
          });
        }
        console.log(error.response.status);
      } finally {
        this.loadingIngresar = false;
      }
    },
  },
};
</script>