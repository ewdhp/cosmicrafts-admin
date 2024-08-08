<template>
  <div :class="['link-list', orientationClass]">
    <ul>
      <li v-for="(item, index) in links" :key="index" :class="{ active: isActive(item.path) }">
        <a :href="item.path" @click.prevent="setActive(item.path)">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    getLinks() {
      return this.$store.getters[`linkList/${this.name}/getLinks`];
    },
    getOrientation() {
      return this.$store.getters[`linkList/${this.name}/getOrientation`];
    },
    getActiveLink() {
      return this.$store.getters[`linkList/${this.name}/getActiveLink`];
    },
    links() {
      return this.getLinks();
    },
    orientation() {
      return this.getOrientation();
    },
    activeLink() {
      return this.getActiveLink();
    },
    orientationClass() {
      return this.orientation === 'horizontal' ? 'horizontal' : 'vertical';
    },
    moduleNamespace() {
      return `linkList/${this.name}`;
    }
  },
  methods: {
    setActive(path) {
      this.$store.dispatch(`${this.moduleNamespace}/updateActiveLink`, path);
    },
    isActive(path) {
      return this.activeLink === path;
    }
  },
  mounted() {
    if (!this.activeLink || this.activeLink === '') {
      this.setActive(this.links[0].path);
    }
  }
};
</script>

<style scoped>
.link-list.horizontal ul {
  display: flex;
  padding: 0;
  list-style-type: none;
}
.link-list.horizontal li {
  margin-right: 10px;
}
.link-list.vertical ul {
  display: block;
}
.link-list .active {
  font-weight: bold;
}
</style>
