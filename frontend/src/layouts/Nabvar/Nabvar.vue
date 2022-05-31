
<template>
  <div class="center relative">
    <nav
      class="
        relative
        w-full
        flex flex-wrap
        items-center
        justify-between
        py-4
        bg-gray-100
        text-gray-500
        hover:text-gray-700
        focus:text-gray-700
        shadow-lg
        navbar navbar-expand-lg navbar-light
      "
    >
      <div
        class="
          container-fluid
          w-full
          flex flex-wrap
          items-center
          justify-between
          px-6
        "
      >
        <h1 class="text-center text-5xl mb-5 text-black">Products</h1>
        <span style="text-transform: uppercase">
          Bienvenido
          <template>
            <span style="color: #195bff; font-weight: 600">
              {{ $store.state.Auth.userInfo.name }}
            </span>
          </template>
        </span>

        <div class="flex items-center relative">
          <div class="flex items-center">
            <span class="border border-transparent"></span>

            <div class="relative">
              <button
                @click="activeTooltip1 = !activeTooltip1"
                class="
                  relative
                  z-10
                  block
                  p-2
                  transition-colors
                  duration-200
                  transform
                  bg-slate-50
                  rounded-md
                  hover:bg-slate-50
                  focus:outline-none
                  focus:ring
                  focus:ring-blue-300
                  focus:ring-opacity-80
                "
              >
                <svg
                  class="h-8 w-8 text-blue-500 hover:text-blue-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>

              <div
                v-show="activeTooltip1"
                class="
                  absolute
                  right-0
                  z-20
                  overflow-hidden
                  rounded-md
                  shadow-xl
                  dark:bg-gray-700
                "
              >
                <button
                  :active="activeTooltip1 == 3"
                  @click="cerrarSession"
                  class="
                    flex
                    items-center
                    justify-center
                    w-full
                    px-2
                    py-1
                    text-white
                    transition-colors
                    duration-200
                    transform
                    bg-blue-600
                    rounded-md
                    focus:outline-none
                    sm:w-auto sm:mx-1
                    hover:bg-blue-500
                    focus:bg-blue-500
                    focus:ring
                    focus:ring-blue-300
                    focus:ring-opacity-40
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 mx-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                    />
                  </svg>
                  <span class="mx-1"> Salir </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: "guide",
    activeTooltip1: false,
  }),
  methods: {
    cerrarSession() {
      this.$store.dispatch("Auth/logout").then((response) => {
        this.$router.push({ name: "Login" });
      });
    },
  },
  mounted() {
    this.$vs.notification({
      progress: "auto",
      color: "primary",
      title: "Exitoso",
      text: `Bienvenido ${this.$store.state.Auth.userInfo.name}.`,
    });
  },
};
</script>

        