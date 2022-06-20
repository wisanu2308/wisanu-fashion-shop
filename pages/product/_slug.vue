<template>
  <div>

    <!-- <div class="w-20 my-2 text-center">
      <NuxtLink to="/product">
        <div class="bg-blue-600 text-white px-4 py-2 cursor-pointer transition-all hover:bg-blue-700">
          กลับ
        </div>
      </NuxtLink>
    </div> -->

    <div v-if="slug == 'add'">
      <AddForm />
    </div>
    <div v-else-if="slug == 'edit'">
      <EditForm :slug="slug" :id="id" />
    </div>
    <div v-else>
      
      <div class="text-2xl font-bold">รายละเอียด</div>

      <div class="flex flex-col">
        <div class="w-full lg:w-1/2 grid grid-cols-2 justify-between py-2">
          <div class="text-xl">Name</div>
          <div class="">{{Name}}</div>
        </div>

        <div class="w-full lg:w-1/2 grid grid-cols-2 justify-between py-2">
          <div class="text-xl">Description</div>
          <div class="">{{Description}}</div>
        </div>

        <div class="w-full lg:w-1/2 grid grid-cols-2 justify-between py-2">
          <div class="text-xl">Price</div>
          <div class="">{{Price}}</div>
        </div>
        
      </div>

    </div>

  </div>
</template>

<script>

import AddForm from '~/components/Product/AddForm.vue'
import EditForm from '~/components/Product/EditForm.vue'
import { getProductID } from '~/graphql/query.js'

export default {

  components: { AddForm, EditForm },

  async asyncData({params, query}) {
    const slug = params.slug
    const id = query.id
    return { slug, id }
  },

  data() {
    return {
      products: [],
      Name: "",
      Description: "",
      Price: ""
    }
  },

  async mounted() {
    
    if(this.slug !== "add" && this.slug !== "edit"){

      this.products = await this.$axios.$get(`http://localhost:1337/api/products/${this.slug}`)
      
      const product = JSON.parse(JSON.stringify(this.products.data)).attributes

      this.Name = product.Name
      this.Description = product.Description
      this.Price = product.Price
    } 
  },

  // apollo: {
  //   products: {
  //     prefetch: true,
  //     query: getProductID,
  //     variables() {
  //       return {
  //         id: this.slug,
  //       }
  //     },
  //   }
  // },

}
</script>

<style>

</style>