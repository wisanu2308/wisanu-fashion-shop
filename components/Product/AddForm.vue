<template>
  <div>

    <!-- Form -->
    <div class="text-2xl font-bold">เพิ่มข้อมูล</div>

    <div class="flex flex-col">

      <div class="w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 justify-between py-2">
        <div class="text-xl">Name</div>
        <div class="border rounded-2xl">
          <input type="text" class="text-xl px-4 py-1 rounded-2xl focus:outline-none" v-model="txtName">
        </div>
      </div>

      <div class="w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 justify-between py-2">
        <div class="text-xl">Description</div>
        <div class="border rounded-2xl">
          <input type="text" class="text-xl px-4 py-1 rounded-2xl focus:outline-none" v-model="txtDescription">
        </div>
      </div>

      <div class="w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 justify-between py-2">
        <div class="text-xl">Price</div>
        <div class="border rounded-2xl">
          <input type="text" class="text-xl px-4 py-1 rounded-2xl focus:outline-none" v-model="txtPrice">
        </div>
      </div>

      <!-- <div class="w-full lg:w-1/2 grid grid-cols-2 justify-between py-2">
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

import { addProduct } from '~/graphql/query.js'

export default {

  data() {
    return {
      txtName: "",
      txtDescription: "",
      txtPrice: "",
      // txtCategory: "",
    }
  },

  methods: {
    doSubmit() {
      this.$apollo.mutate({
        mutation: addProduct,
        variables: {
          txtName: this.txtName,
          txtDescription: this.txtDescription,
          txtPrice: parseFloat(this.txtPrice),
        }
      })
      alert("บันทึกข้อมูลเรียบร้อย")
      this.$router.push("/product")
    }
  }
}
</script>

<style>

</style>