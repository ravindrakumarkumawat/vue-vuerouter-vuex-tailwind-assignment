<template>
  <div class="join-room__outer-container">
    <div class="join-room__inner-container">
      <h1 class="heading">Join By</h1>
      <div v-for="user in users" :key="user.id">
        <router-link
          :to="`/chat?name=${user.firstName}&user_id=${user.id}`"
          @click="preventNavigation"
        >
          <div class="flex">
            <div class="join-room__avatar-container"><img :src="user.thumbnail" /></div>
            <div>{{user.firstName}} {{user.lastName}}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import UserList from '../mockup/user'; 
export default {
  data() {
    return {
      name: "",
      room: "",
      users: [...UserList],
    };
  },
  methods: {
    updateName(event) {
      this.name = event.target.value;
    },
    updateRoom(event) {
      this.room = event.target.value;
    },
    preventNavigation(event) {
      if (!this.name || !this.room) {
        event.preventDefault();
      }
    },
  },
};
</script>

<style scoped>
/* Add your CSS styles here if needed */
.join-room__outer-container {
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100vh;
  align-items: center;
  background-color: #9b9bce;
}

.join-room__inner-container {
  width: 60%;
}

.joinInput {
  border-radius: 0;
  padding: 15px 20px;
  width: 100%;
}

.heading {
  color: white;
  font-size: 2.5em;
  padding-bottom: 10px;
  border-bottom: 2px solid white;
}

.button {
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #2979FF;
    padding: 20px;
    border-radius: 5px;
    display: inline-block;
    border: none;
    width: 100%;
}

.mt-20 {
  margin-top: 20px;
}

@media (min-width: 320px) and (max-width: 480px) {
  .join-room__outer-container {
    height: 100%;
  }

  .join-room__inner-container {
    width: 90%;
  }


}

button:focus {
  outline: 0;
}

.join-room__avatar-container {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  overflow: hidden
}
</style>
