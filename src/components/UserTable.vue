<template>
  <div>
    <div class="button-wrapper">
      <div></div>
      <button @click="showModal = true" class="btn-primary">Добавить</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Телефон</th>
        </tr>
      </thead>
      <template v-if="users.length > 0">
        <user-row
          v-for="user in rootUsers"
          :key="user.id"
          :user="user"
          :users="users"
        />
      </template>
      <tr v-else>
        <td colspan="2" style="text-align: center;">
          Пользователи отсутствуют!
        </td>
      </tr>
    </table>

    <user-form
      v-if="showModal"
      @close="showModal = false"
      @submit="addUser"
      :users="users"
    />
  </div>
</template>

<script>
import UserForm from './UserForm.vue'
import UserRow from './UserRow.vue'

export default {
  components: { UserForm, UserRow },
  data () {
    return {
      showModal: false,
      users: JSON.parse(localStorage.getItem('users') || '[]')
    }
  },
  computed: {
    rootUsers () {
      return this.users.filter(user => !user.parent)
    }
  },
  methods: {
    addUser (user) {
      user.id = Date.now().toString()
      this.users.push(user)
      localStorage.setItem('users', JSON.stringify(this.users))
    }
  }
}
</script>
