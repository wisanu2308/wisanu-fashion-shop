<template>
  <div>

    <!-- Form -->
    <div class="text-2xl font-bold">แก้ไขข้อมูล</div>

    <div class="flex flex-col">

      <div class="w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 py-2">
        <div class="text-xl">Name</div>
        <div class="border rounded-2xl">
          <input type="text" class="text-xl px-4 py-1 rounded-2xl focus:outline-none" v-model="txtName">
        </div>
      </div>

      <div class="w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 py-2">
        <div class="text-xl">Description</div>
        <div class="border rounded-2xl">
          <input type="text" class="text-xl px-4 py-1 rounded-2xl focus:outline-none" v-model="txtDescription">
        </div>
      </div>

      <div class="w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 py-2">
        <div class="text-xl">Price</div>
        <div class="border rounded-2xl">
          <input type="text" class="text-xl px-4 py-1 rounded-2xl focus:outline-none" v-model="txtPrice">
        </div>
      </div>

      <!-- <div class="w-full lg:w-1/2 grid grid-cols-2 py-2">
        <div class="text-xl">Category</div>
        <div class="border rounded-2xl">
          <input type="text" class="text-xl px-4 py-1 rounded-2xl focus:outline-none" v-model="txtCategory">
        </div>
      </div> -->

      <div class="w-20 my-2 text-center">
        <div @click="doSubmit()">
          <div class="bg-blue-600 text-white px-4 py-2 cursor-pointer transition-all hover:bg-blue-700">
            บันทึก
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import { getProductID, updateProduct } from '~/graphql/query.js'

export default {

  props: ['slug', 'id'],

  data() {
    return {
      products: [],
      txtName: "",
      txtDescription: "",
      txtPrice: "",
      // txtCategory: "",
    }
  },

  async mounted() {
    
    if(this.slug == "edit"){

      this.products = await this.$axios.$get(`http://localhost:1337/api/products/${this.id}`)
      
      const product = JSON.parse(JSON.stringify(this.products.data)).attributes

      this.txtName = product.Name
      this.txtDescription = product.Description
      this.txtPrice = product.Price
    } 
  },

  // mounted() {
  //   if (this.slug == "edit") {

  //     console.log(this.$router)
  //     this.txtName = this.products.data[0].attributes.Name
  //     this.txtDescription = this.products.data[0].attributes.Description
  //     this.txtPrice = this.products.data[0].attributes.Price
  //   }
  // },

  methods: {
    doSubmit() {
      this.$apollo.mutate({
        mutation: updateProduct,
        variables: {
          id: this.id,
          txtName: this.txtName,
          txtDescription: this.txtDescription,
          txtPrice: parseFloat(this.txtPrice),
        }
      })
      alert("บันทึกข้อมูลเรียบร้อย")
      this.$router.push("/product")
    }
  },

  // apollo: {
  //   products: {
  //     prefetch: true,
  //     query: getProductID,
  //     variables() {
  //       return {
  //         id: this.id,
  //       }
  //     },
  //   }
  // },

}
</script>

<style>

</style>