<script setup lang="ts">
</script>
<template>
  <div class="main-container">

    <!-- Main Panel -->
    <div class="main-panel">
      <!-- Top Nav -->
      <header class="top-nav">
        <div class="view-menu">
          <!-- Add account menu items here -->
           nav
        </div>
      </header>

      <!-- Main Content -->
      <main class="main-content">
        <!-- Dynamic content goes here -->
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-container {
  display: flex;

}

// Left Panel
.left-panel {
  width: 100px;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .nav-wrapper {
    display: flex;
    justify-content: center;
    padding-top: 20px;
  }

  .nav-sections {
    width: 100%;
    
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      
      li {
        margin: 10px 0;
        a {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .nav-item {
          display: flex;
          align-items: center;
          padding: 10px;
          
          background-color: #293646;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          transition: background-color 0.5s;
          
          img {
            margin-right: 10px;
          }

          span {
            font-size: 16px;
            color: #292929; /* Gray scale font color */
          }

          &:hover {
            background-color: #495057;
          }
        }
      }
    }
  }
}

// Right Panel
.main-panel {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;

  .top-nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 20px;
  }

  .main-content {
    background-color: #eaecee;
    border-radius: 8px;
    padding: 20px;
    flex-grow: 1;
    border: 1px solid #aaabac; /* Light gray border */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Moderate shadow */
  }
}
</style>
