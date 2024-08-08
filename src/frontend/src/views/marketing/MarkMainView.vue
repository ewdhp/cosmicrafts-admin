<script setup>
import LinkList from '@/components/LinkList.vue';
</script>
<template>
  <div class="main-container">
    <div class="main-panel">
      <div class="nav-sections">
        <ul>
          <li>
            <router-link to="/marketing">
              <span>Main</span>
            </router-link>
          </li>
          <li>
            <router-link to="/marketing/tiers">
              <span>Tiers</span>
            </router-link>
          </li>
          <li class="active-border">
            <router-link to="/marketing/twitter">
              <span>Twitter</span>
            </router-link>
          </li>
          <li>
            <router-link to="/marketing/instagram">
              <span>Instagram</span>
            </router-link>
          </li>
          <li>
            <router-link to="/marketing/tiktok">
              <span>TikTok</span>
            </router-link>
          </li>
          <li>
            <router-link to="/marketing/events">
              <span>Events</span>
            </router-link>
          </li>
          <li>
            <router-link to="/marketing/mailer">
              <span>Mailer</span>
            </router-link>
          </li>
        </ul>
      </div>
      <main >
        <div class="content" style="padding:20px;background-color:#ffff">
            <div  style="padding:20px;">
              <img width="35" height="35"  src="@/assets/logos/twitter.png"/>
            </div>

    <h1>horizontal</h1>
    <LinkList
      :items="[
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
      ]"
      orientation="horizontal"
    />

    <h1>vertical</h1>
    <LinkList
      :items="[
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
      ]"
      orientation="vertical"
    />

        </div>
      </main>
    </div>
  </div>
</template>
<style scoped lang="scss">
.main-container {
  display: flex;

}
.main-panel {

  flex-grow: 1;
  display: flex;
  flex-direction: column;
  
  .content {
    background-color: #ffffff;
    padding: 5px;
    flex-grow: 1;
    color: #484949;
    margin-top : 17px;
  }
  .nav-sections {
    width: 100%;
    background-color: #293646;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .nav-sections ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex; /* Display list items in a row */
    justify-content: center; /* Center the navigation items */
    align-items: center; /* Align items vertically */
  }
  .nav-sections li {
    margin: 0 15px; /* Space between list items */
  }
  .nav-sections a {
    text-decoration: none;
    color: rgb(223, 223, 223);
    padding: 10px 15px;
    display: block;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;
  }
  .nav-sections a:hover {
    background-color: #495057;
    color: #ffffff;
  }
  .nav-sections img {
    margin-right: 8px;
    vertical-align: middle;
  }
  .nav-sections span {
    font-size: 16px;
    vertical-align: middle;
  }
}
</style>
