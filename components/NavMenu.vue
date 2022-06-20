<template>
  <div class="flex flex-row space-x-2 py-4">

    <div
      v-for="(menu, i) in menuList"
      :key="i"
    >
      <NuxtLink
        :to="menu.url"
        class="bg-slate-200 px-4 py-2 cursor-pointer transition-all hover:bg-slate-400 hover:text-white"
      >
        {{menu.name}}
      </NuxtLink>
    </div>

  </div>
</template>

<script>
export default {

  data() {
    return {
      menuList: [
        {
          name: "Index",
          url: "/",
        },
        {
          name: "Product",
          url: "/product",
        },
      ]
    }
  }
}
</script>

<style>

</style>