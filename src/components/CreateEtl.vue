<template>
    <div>
      <div class="field">
          <div class="control">
              <input class="input" placeholder="Name" type="text" v-model="etl.name">
          </div>
      </div>
      <div class="field">
          <div class="control">
              <input class="input" placeholder="Start routing key" type="text" v-model="etl.startKey">
          </div>
      </div>
      <div class="field">
          <div class="control">
              <input class="input" placeholder="Complete routing key" type="text" v-model="etl.completeKey">
          </div>
      </div>
      <div class="field">
        <div class="control">
          <ul>                  
            <li v-for="param in etl.parameters" v-bind:key="param">{{ param }}</li>
          </ul>
            <button @click="clearParams">Clear</button>
        </div>
      </div>
      <div class="field">
          <div class="control">
              <input class="input" placeholder="Add Parameter" type="text" v-model="paramToAdd" >
              <button @click="addParam">Add</button>
          </div>
      </div>
    </div>
</template>

<<script>
export default {
  name: 'create-etl',
  data () {
    return {
      etl: {parameters: []},
      paramToAdd: ''
    }
  },
  methods: {
    addParam: function () {
      this.etl.parameters.push(this.paramToAdd)
      this.paramToAdd = ''
    },
    clearParams: function() {
      console.log(this.etl)
      this.etl.parameters = []
    }
  }
}
</script>
