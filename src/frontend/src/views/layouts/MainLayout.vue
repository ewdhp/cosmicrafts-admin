<script setup lang="ts">
import ViewLayout from './ViewLayout.vue';
</script>

<template>
  <div class="dashboard-container">
    <!-- Left Panel -->
    <aside class="left-panel">
      <div style="margin-top: 15px; margin-left: 5px;">
        <img src="@/assets/icons/logo.svg" alt="Logo Icon"/>
      </div>
      
      <div class="nav-wrapper">
        <nav class="nav-sections">
          <ul>
            <li>
              <router-link to="/dashboard">
                <div class="nav-item">
                  <img src="@/assets/icons/dashboard.svg" alt="Dashboard Icon"/>
                  <span style="color: white;">Dashboard</span>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/marketing">
                <div class="nav-item">
                  <img src="@/assets/icons/marketing.svg" alt="Marketing Icon"/>
                  <span style="color: white;">Marketing</span>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/users">
                <div class="nav-item">
                  <img src="@/assets/icons/users.svg" alt="Users Icon"/>
                  <span style="color: white;">Users</span>
                </div>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>

    <!-- Right Panel -->
    <div class="right-panel">
      <!-- Top Nav -->
      <header class="top-nav">
        <div class="account-menu">
          <!-- Add account menu items here -->
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
.dashboard-container {
  display: flex;
  background: linear-gradient(to bottom, #161a20, #3d475a);
  height: 100vh;
}

// Left Panel
.left-panel {
  width: 100px;
  color: #fff;
  padding-left: 18px;
   margin-right: 20px;
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
      padding: 0px;
      margin: 0;
     
      
      li {
        margin-bottom: 15px ;
        
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
.right-panel {
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
    background-color: #bec4cc;
    border-radius: 8px;
    padding: 10px 15px 10px 15px;
    margin-top: 20px;
    flex-grow: 1;
    border: 1px solid #1c1f22; /* Light gray border */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Moderate shadow */
  }
}
</style>
