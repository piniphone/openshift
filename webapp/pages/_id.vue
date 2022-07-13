<template>
  <div class="container">
    <h1>{{response.title}}</h1>
    <p>{{response.body}}</p>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import { IPost } from '~/models'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      response: {} as IPost
    }
  },
  async asyncData({ $axios, route }) {
    const response = await $axios.$get(route.params.id)
    return { response }
  },
})
</script>

