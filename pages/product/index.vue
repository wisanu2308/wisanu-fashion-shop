<template>
  <div class="mb-10">
   
    <div class="w-48 my-2 text-center">
      <NuxtLink to="/product/add">
        <div class="bg-blue-500 text-white px-4 py-2 cursor-pointer transition-all hover:bg-blue-600">
          + เพิ่ม Product
        </div>
      </NuxtLink>
    </div>

    <div class="grid grid-cols-6 items-center py-2 bg-slate-300 font-bold">
      <div class="text-center">No</div>
      <div class="text-center">id</div>
      <div class="text-center">Name</div>
      <div class="text-center">Description</div>
      <div class="text-center">Price</div>
      <div class="text-center">ตัวเลือก</div>
    </div>
    
    <div
      v-for="(product, i) in products.data"
      :key="i"
    > 
      <div 
        class="grid grid-cols-6 items-center py-1 border-b transition-all hover:bg-slate-200 "
      >
        <div class="text-center">{{i+1}}</div>
        <div class="text-center">{{product.id}}</div>
        <div class="text-center">{{product.attributes.Name}}</div>
        <div class="text-center">{{product.attributes.Description}}</div>
        <div class="text-center">{{product.attributes.Price}}</div>
        <div class="flex flex-row space-x-2 justify-center">
          
          <NuxtLink
            :to="`product/${product.id}`"
          >
            <div class="bg-green-500 text-white px-4 py-2 cursor-pointer transition-all hover:bg-green-600">
              ดู
            </div>
          </NuxtLink>

          <NuxtLink
            :to="`product/edit?id=${product.id}`"
          >
            <div class="bg-blue-500 text-white px-4 py-2 cursor-pointer transition-all hover:bg-blue-600">
              แก้ไข
            </div>
          </NuxtLink>
          
          <div 
            @click="doDelete(`${product.id}`)"
            class="bg-red-500 text-white px-4 py-2 cursor-pointer transition-all hover:bg-red-600"
          >
            ลบ
          </div>

        </div>
      </div>
    </div>
    
  </div>
</template>

<script>

import { getProduct, deleteProduct } from '~/graphql/query.js'
// import liff from '@line/liff';

export default {
  name: 'IndexPage',

  data() {
    return {
      products: [],
    }
  },

  async mounted() {

    // liff.init({
    //   liffId: '1657200038-ba6qNZd6', // Use own liffId
    // });

    this.products = await this.$axios.$get('http://localhost:1337/api/products')
  },
  
  // async fetch() {
  //   this.products = await this.$axios.$get('http://localhost:1337/api/products')
  // },

  methods: {
    doDelete(id) {
      if(confirm("ต้องการลบข้อมูล?")){
        this.$apollo.mutate({
          mutation: deleteProduct,
          variables: {
            id: id
          }
        })
        alert("ลบข้อมูลเรียบร้อย")
        window.location.reload()
      }
    }
  },

  // apollo: {
  //   products: {
  //     prefetch: true,
  //     query: getProduct,
  //   }
  // }
}
</script>