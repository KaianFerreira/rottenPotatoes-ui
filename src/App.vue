<template>
  <header>
    <div class="title">
      Rotten Potatoes
    </div>
    <div class="actions">
      <button
        v-if="!user.isLogged"
        @click="loginModalOpen = true"
      >
        Login
      </button>
    </div>
  </header>

  <RouterView />
  <LoginModal v-model="loginModalOpen"/>
</template>
<script>
import { ref } from 'vue'
import { useUserStore } from './stores/user'
import LoginModal from './components/LoginModal.vue'
export default {
  components: {
    LoginModal
  },
  setup() {
    const userStore = useUserStore()
    const loginModalOpen = ref(false)
    return { userStore, loginModalOpen }
  },
  computed: {
    user() {
      return this.userStore
    }
  }
}
</script>
<style lang="scss" scoped>

header {
  .title {
    font-family: 'Island Moments' !important;
    font-size: 3rem;
    font-weight: bold;
  }
  background-color: #eacf96;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  button {
    padding: 1rem;
    font-size: 1rem;
    font-weight: bold;
    background-color: #96B4EB;
    border: 1px solid #7C8596;
    border-radius: 1rem;
    cursor: pointer;
  }
}
</style>