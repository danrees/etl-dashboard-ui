<template>
<div>
  <div>
      <p>So, figure out how to load on startup, for now, lazy button</p>
      <button class="button" @click="load">Load</button>
  </div>
  <ul>
      <li v-for="etl in etls" v-bind:key="etl.id" class="tile">{{ etl.name }}</li>
  </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'list',
  data () {
    return {
      etls: []
    }
  },
  methods: {
    load: function () {
      axios.get('http://localhost:8002/api/etl')
      .then(response => {
        this.etls = response.data
      }).catch(e => {
        console.error(e)
      })
    }
  }
}
</script>

