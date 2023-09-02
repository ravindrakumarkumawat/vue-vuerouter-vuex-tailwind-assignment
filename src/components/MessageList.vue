<template>
  <div 
    class="other-user" 
    :class="{ 'current-user': getCurrentUserId ===  message.from.id }"
  >
    <div v-if="showName">{{ message.from.firstName }}</div>
    <img 
      v-if="getCurrentUserId !==  message.from.id" 
      @mouseover="showHover" 
      @mouseleave="hideHover" 
      class="user" 
      :src="message.from.thumbnail" 
      alt="Logo" 
    />
    <div 
      class="message-bubble" 
      :class="{ 'message-bubble-right': getCurrentUserId ===  message.from.id }"
    >
      {{ message.message }}
    </div>
    <img v-if="getCurrentUserId ===  message.from.id" class="user" :src="message.from.thumbnail" alt="Logo" />
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Array,
    },
  },
  data() {
    return {
      showName: false,
    }
  },
  mounted() {
    // console.log(this.$route && this.);
    const route = this.$route && this.$route.query && this.$route.query.user_id
    if(!route) {
      this.$router.push({
        name: 'join'
      })
    }
  },
  computed: {
    getUserDetails() {
      return this.message.from.fistName
    },
    getCurrentUserId() {
      return Number(this.$route && this.$route.query && this.$route.query.user_id)
    }
  },
  methods: {
    showHover() {
      this.showName = true
    },
    hideHover() {
      this.showName = false
    },
  },
}
</script>

<style scoped>
.other-user {
    display: flex;
    width: 500px;
    margin-top: 20px;
    width: 100%;
    align-items: flex-end;
}
.message-bubble {
    background-color: var(--theme-line-separator);
    border-radius: 10px;
    width: 400px;
    margin: 0px 10px;
    text-align: left;
    padding: 10px;
}
.current-user {
    display: flex;
    justify-content: flex-end;
}
.user {
    background: black;
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}
.message-bubble-right {
  background-color: lightblue;
}
</style>
