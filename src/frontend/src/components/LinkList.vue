<template>
  <div :class="['link-list', orientationClass]">
    <ul>
      <li v-for="(item, index) in items" 
      :key="index" 
      :class="{ active: isActive(item.path) }">
        <a :href="item.path" @click="setActive(item.path)">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LinkList',
  props: {
    items: {
      type: Array,
      required: true,
      validator: (items) => {
        return items.every(
          item => 'name' in item && 'path' in item);
      }
    },
    orientation: {
      type: String,
      default: 'vertical', // default orientation
      validator: (value) => ['vertical', 'horizontal'].includes(value)
    }
  },
  data() {
    return {
      activeLink: null
    };
  },
  computed: {
    orientationClass() {
      return this.orientation === 'horizontal' ? 'horizontal' : 'vertical';
    }
  },
  methods: {
    setActive(path) {
      this.activeLink = path;
    },
    isActive(path) {
      return this.activeLink === path;
    }
  }
};
</script>

<style scoped>
.link-list {
  list-style-type: none;
  padding: 0;
}

.link-list ul {
  display: flex;
  flex-direction: column;
}

.link-list.horizontal ul {
  flex-direction: row;
}

.link-list li {
  margin: 0.5rem;
}

.link-list li a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.link-list li.active a {
  font-weight: bold;
  color: blue;
}
</style>