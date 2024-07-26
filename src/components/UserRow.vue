<template>
  <tbody>
    <tr>
      <td @click="toggle" :class="{ expandable: hasChildren }">
        <strong v-if="hasChildren">{{ expanded ? "-" : "+" }}</strong>
        {{ user.name }}
      </td>
      <td>{{ user.phone }}</td>
    </tr>
    <tr v-if="expanded" class="child-row">
      <td colspan="2">
        <user-row
          v-for="child in children"
          :key="child.id"
          :user="child"
          :users="users"
        />
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'UserRow',
  props: ['user', 'users'],
  data () {
    return {
      expanded: false
    }
  },
  computed: {
    children () {
      return this.users.filter(u => u.parent === this.user.id)
    },
    hasChildren () {
      return this.children.length > 0
    }
  },
  methods: {
    toggle () {
      if (this.hasChildren) {
        this.expanded = !this.expanded
      }
    }
  }
}
</script>
