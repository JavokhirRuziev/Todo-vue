<template>
  <div class="modal">
    <div class="modal-content">
      <span class="close" @click="$emit('close')">&times;</span>
      <form @submit.prevent="submit">
        <div class="form-childs">
          <label for="name">Имя:</label>
          <input id="name" class="input" v-model="form.name" required />
        </div>
        <div class="form-childs">
          <label for="phone">Телефон:</label>
          <input id="phone" class="input" v-model="form.phone" required />
        </div>
        <div class="form-childs">
          <label for="parent">Начальник:</label>
          <select
            id="parent"
            v-model="form.parent"
            class="input"
            style="max-width: 220px;"
          >
            <option value="">None</option>
            <option v-for="user in users" :key="user.id" :value="user.id">
              {{ user.name }}
            </option>
          </select>
        </div>
        <div class="form-actions">
          <button type="submit" class="btn-primary">Сохранить</button>
          <button type="button" class="btn-secondary" @click="$emit('close')">
            Отменить
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ['users'],
  data () {
    return {
      form: {
        name: '',
        phone: '',
        parent: ''
      }
    }
  },
  methods: {
    submit () {
      this.$emit('submit', this.form)
      this.$emit('close')
    }
  }
}
</script>
