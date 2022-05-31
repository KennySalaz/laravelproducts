<template>
  <div>
    <section class="h-full gradient-form bg-gray-200 md:h-screen">
      <div class="py-12 px-6 h-full">
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
          <div class="xl:w-10/12">
            <div class="block bg-white shadow-lg rounded-lg">
              <div class="lg:flex lg:flex-wrap g-0">
                <div class="lg:w-6/12 px-4 md:px-0">
                  <div class="md:p-12 md:mx-6">
                    <div class="text-center">
                      <img
                        class="mx-auto w-48"
                        src="https://cdn-icons-png.flaticon.com/512/3523/3523887.png"
                        alt="logo"
                      />
                      <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">
                        Add Products
                      </h4>
                    </div>

                    <form>
                      <div class="flex justify-center">
                        <div class="relative z-0 w-full mb-6 group">
                          <input
                            v-model="formData.name"
                            type="text"
                            class="
                              block
                              py-2.5
                              px-0
                              w-10/12
                              text-sm text-gray-900
                              bg-transparent
                              border-0 border-b-2 border-gray-300
                              appearance-none
                              dark:text-white
                              dark:border-gray-600
                              dark:focus:border-blue-500
                              focus:outline-none
                              focus:ring-0
                              focus:border-blue-600
                              peer
                            "
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="
                              peer-focus:font-medium
                              absolute
                              text-sm text-gray-500
                              dark:text-gray-400
                              duration-300
                              transform
                              -translate-y-6
                              scale-75
                              top-3
                              -z-10
                              origin-[0]
                              peer-focus:left-0
                              peer-focus:text-blue-600
                              peer-focus:dark:text-blue-500
                              peer-placeholder-shown:scale-100
                              peer-placeholder-shown:translate-y-0
                              peer-focus:scale-75 peer-focus:-translate-y-6
                            "
                            >Name Products</label
                          >
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                          <input
                            v-model="formData.price"
                            type="number"
                            name="price"
                            class="
                              block
                              py-2.5
                              px-0
                              w-10/12
                              text-sm text-gray-900
                              bg-transparent
                              border-0 border-b-2 border-gray-300
                              appearance-none
                              dark:text-white
                              dark:border-gray-600
                              dark:focus:border-blue-500
                              focus:outline-none
                              focus:ring-0
                              focus:border-blue-600
                              peer
                            "
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="
                              peer-focus:font-medium
                              absolute
                              text-sm text-gray-500
                              dark:text-gray-400
                              duration-300
                              transform
                              -translate-y-6
                              scale-75
                              top-3
                              -z-10
                              origin-[0]
                              peer-focus:left-0
                              peer-focus:text-blue-600
                              peer-focus:dark:text-blue-500
                              peer-placeholder-shown:scale-100
                              peer-placeholder-shown:translate-y-0
                              peer-focus:scale-75 peer-focus:-translate-y-6
                            "
                            >Price
                          </label>
                        </div>
                      </div>

                      <div class="mb-3 w-full">
                        <label
                          for="exampleFormControlTextarea1"
                          class="form-label inline-block mb-2 text-gray-700"
                          >Descriptios</label
                        >
                        <textarea
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
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="Descriptios"
                          v-model="formData.description"
                        ></textarea>
                      </div>

                      <div class="text-center pt-1 mb-12 pb-1">
                        <button
                          class="
                            inline-block
                            bg-blue-700
                            px-6
                            py-2.5
                            text-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                            shadow-md
                            hover:bg-slate-50
                            hover:shadow-lg
                            hover:text-blue-700
                            focus:shadow-lg focus:outline-none focus:ring-0
                            active:shadow-lg
                            transition
                            duration-150
                            ease-in-out
                            w-full
                            mb-3
                          "
                          type="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          @click="saveUpdateProducts"
                        >
                          Add Products
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div
                  class="
                    lg:w-6/12
                    bg-slate-200
                    items-center
                    lg:rounded-r-lg
                    rounded-b-lg
                    lg:rounded-bl-none
                  "
                >
                  <div class="pl-2">
                    <vs-table class="bg-white" ref="tableList">
                      <template #header>
                        <vs-input
                          v-model="search"
                          placeholder="Search"
                          state="dark"
                          class="block"
                        />
                      </template>
                      <template #thead>
                        <vs-tr>
                          <vs-th
                            sort
                            @click="
                              productList = $vs.sortData(
                                $event,
                                productList,
                                'name'
                              )
                            "
                          >
                            Name Products
                          </vs-th>
                          <vs-th
                            sort
                            @click="
                              productList = $vs.sortData(
                                $event,
                                productList,
                                'description'
                              )
                            "
                          >
                            Description
                          </vs-th>
                          <vs-th
                            sort
                            @click="
                              productList = $vs.sortData(
                                $event,
                                productList,
                                'updated_at'
                              )
                            "
                          >
                            Price
                          </vs-th>
                          <vs-th
                            sort
                            @click="
                              productList = $vs.sortData(
                                $event,
                                productList,
                                'created_at'
                              )
                            "
                          >
                            Created At
                          </vs-th>

                          <vs-th> Actions </vs-th>
                        </vs-tr>
                      </template>
                      <template #tbody>
                        <vs-tr
                          color=""
                          :key="i"
                          v-for="(tr, i) in $vs.getPage(
                            $vs.getSearch(productList, search),
                            page,
                            max
                          )"
                          :data="tr"
                          :is-selected="tr.completed"
                        >
                          <vs-td>
                            {{ tr.name }}
                          </vs-td>
                          <vs-td>
                            {{ tr.description }}
                          </vs-td>
                          <vs-td class="text-nowrap">
                            {{ tr.price }}
                          </vs-td>
                          <vs-td class="text-nowrap">
                            {{ tr.created_at | formatDate }}
                          </vs-td>

                          <vs-td>
                            <div class="flex">
                              <vs-button
                                flat
                                class="mr-1"
                                @click="editProduct(tr)"
                              >
                                <edit-icon
                                  size="1.5x"
                                  class="custom-class"
                                ></edit-icon>
                              </vs-button>
                              <vs-button
                                flat
                                danger
                                @click="deleteProductConfirm(tr)"
                              >
                                <trash-2-icon size="1.5x" class="custom-class">
                                </trash-2-icon>
                              </vs-button>
                            </div>
                          </vs-td>
                        </vs-tr>
                      </template>
                      <template #footer>
                        <vs-pagination
                          v-model="page"
                          :length="
                            $vs.getLength(
                              $vs.getSearch(productList, search),
                              max
                            )
                          "
                        />
                      </template>
                    </vs-table>
                    <vs-dialog
                      :loading="loadingDelete"
                      v-model="activeConfirmeDelete"
                    >
                      <template #header>
                        <h4 class="text-xl font-semibold">Confirm</h4>
                      </template>
                      <div class="con-content">
                        <h4 class="text-lg">
                          Are you sure you want to delete this product?
                        </h4>
                      </div>
                      <template #footer>
                        <div class="flex justify-between">
                          <vs-button
                            @click="activeConfirmeDelete = false"
                            danger
                          >
                            Cancel
                          </vs-button>
                          <vs-button
                            :loading="loadingDelete"
                            success
                            @click="deleteProduct"
                          >
                            Accept
                          </vs-button>
                        </div>
                      </template>
                    </vs-dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
 <script>
import {
  BookmarkIcon,
  AlignCenterIcon,
  EditIcon,
  Trash2Icon,
} from "vue-feather-icons";
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  components: {
    BookmarkIcon,
    AlignCenterIcon,
    EditIcon,
    Trash2Icon,
  },
  filters: {
    formatDate(date) {
      // format date to dd/mm/yyyy hh:mm
      if (date) {
        let d = new Date(date);
        let month = "" + (d.getMonth() + 1),
          day = "" + d.getDate(),
          year = d.getFullYear();
        let hours = d.getHours();
        let minutes = d.getMinutes();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;

        return [day, month, year].join("/") + " " + [hours, minutes].join(":");
      }
    },
  },
  data: () => ({
    loadingSave: false,
    productSelect: {},
    search: "",
    page: 1,
    max: 4,
    formData: {
      name: "",
      description: "",
      price: 1,
    },
    activeConfirmeDelete: false,
    loadingDelete: false,
    modeEdit: false,
  }),
  computed: {
    productList() {
      return this.$store.state.Product.products;
    },
  },

  methods: {
    async indexProducts() {
      const loading = this.$vs.loading({
        target: this.$refs.tableList,
      });
      try {
        this.loadingSave = true;
        await this.$store.dispatch("Product/index");
      } catch (e) {
        console.log(e);
      } finally {
        loading.close();
        this.loadingSave = false;
      }
    },
    async saveUpdateProducts() {
      try {
        this.loadingSave = true;
        if (this.formData.name == "") {
          this.$vs.notification({
            progress: "auto",
            color: "danger",
            title: "Name is required",
            position: "top-right",
          });
          return;
        }
        if (this.formData.description == "") {
          this.$vs.notification({
            progress: "auto",
            color: "danger",
            title: "Descriptions is required",
            position: "top-right",
          });
          return;
        }
        if (!this.modeEdit) {
          await this.$store.dispatch("Product/store", this.formData);
        } else {
          await this.$store.dispatch("Product/update", this.formData);
        }

        this.$vs.notification({
          progress: "auto",
          color: "success",
          title: `Product ${
            this.modeEdit ? "Update " : "Created "
          } successfully`,
          position: "top-right",
        });
        this.indexProducts();
        this.blankForm();
      } catch (e) {
        console.log(e);
      } finally {
        this.loadingSave = false;
      }
    },
    deleteProductConfirm(product) {
      this.productSelect = product;
      this.activeConfirmeDelete = true;
    },
    async deleteProduct() {
      try {
        this.loadingDelete = true;
        await this.$store.dispatch("Product/delete", this.productSelect.id);
        this.$vs.notification({
          progress: "auto",
          color: "success",
          title: "Product Deleted",
          text: `Product successfully deleted`,
          position: "top-right",
        });
        this.indexProducts();
        this.activeConfirmeDelete = false;
      } catch (e) {
        console.log(e);
      } finally {
        this.loadingDelete = false;
      }
    },
    updateStatus(product) {
      this.$store.dispatch("Product/update", product);
    },
    editProduct(product) {
      this.modeEdit = true;
      this.formData = {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
      };
    },
    blankForm() {
      this.formData = {
        name: "",
        description: "",
        price: 1,
      };
      this.modeEdit = false;
    },
  },
  mounted() {
    this.indexProducts();
  },
};
</script>

