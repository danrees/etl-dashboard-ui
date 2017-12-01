<template>
  <div id="app">
     <links />
    <section class="section">
      <div class="container">
       
        <router-view/>
      </div>
    </section>
    
  </div>
</template>

<script>
import Links from '@/components/Links'
export default {
  name: 'app',
  components: {
    Links
  }
}
</script>
