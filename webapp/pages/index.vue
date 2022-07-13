<template>
<div class="container">
  <h1>Lista de posts</h1>
  <div v-for="item in response">
    {{item.id}}: {{item.title}}
    <nuxt-link :to="`/${item.id}`">abrir</nuxt-link>
  </div>
</div>
</template>


<script lang="ts">
import Vue from 'vue'
import { IPost } from '~/models'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      response: [] as IPost[]
    }
  },
  async asyncData({ $axios }) {
    const response = await $axios.$get('')
    return { response }
  },
})
</script>

