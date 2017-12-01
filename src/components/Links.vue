<<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation" >
      <div class="navbar-brand">          
          <img alt="Autodata Logo" class="brand-logo" src="http://www.autodata.net/img/AutodataGroup_logo.png">
      </div>
      <div class="navbar-menu">
          <div class="navbar-start">
            <router-link to="/" class="navbar-item">Home</router-link>
            <router-link to="/about" class="navbar-item">About</router-link>
            <router-link to="/create" class="navbar-item">Create</router-link>
          </div>
      </div>
  </nav>
</template>

<style>
    .brand-logo {
        width: 50px;
        height: 50px;
        padding: 5px;
    }
</style>