<template>
  <div class="chat-room__container" id="chat-room">
    <div class="chat-room__message-list">
      <MessageList
        v-for="message in showMessagesList()"
        :key="message.id"
        :message="message"
      ></MessageList>
      <div class="chat-room__dot-loader" v-if="showTyping">typing...</div>
    </div>
    <TextArea @isTyping="isUserTyping" @send="sendMessage" />
  </div>
</template>
  
<script>
  import MessageList from './MessageList.vue';
  import TextArea from './TextArea.vue';
  import { mapActions, mapGetters } from 'vuex';
    
  export default {
    components: {
      MessageList,
      TextArea,
    },
    data(){
      return{
        showTyping: false,
      }
    },
    methods: {
      ...mapActions(['addMessage']),
      async sendMessage(message) {
        console.log('[sendMessage]::', message, this.createMessage(message));
        await this.addMessage(
          this.createMessage(message)
        );
        this.showTyping = false
      },
      isUserTyping(message){
        if(message.length > 0) {
          return this.showTyping = true;
        }
        return this.showTyping = false
      },
      async setAllMessagesList() {
        const data = await JSON.parse(window.localStorage.getItem('message-list'))
        if(this.$route.query && this.$route.query.user_id && data) {
          console.log('Hey')
          return data
        }
      },
      showMessagesList() {
        // const data = JSON.parse(window.localStorage.getItem('message-list'))
        // if(this.$route.query && this.$route.query.user_id && data) {
        //   return data
        // }
        return this.getAllMessages
      }
    },
    computed: {
      ...mapGetters(['getAllMessages', 'getAllUsers']),
      createMessage() {
        console.log('CreateMessage');
        return (message) => ({
          id: this.getAllMessages.length + 1,
          from: this.getAllUsers.filter(user => user.id === Number(this.$route.query.user_id))[0],
          message: message,
          date: new Date().toISOString(),
        })
      },
    }
  };
</script>
  
<style>
  .chat-room__container{
    height: 800px;
    overflow: auto;
  }
  .chat-room__dot-loader{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 40px;
  }
  .chat-room__message-list{
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    padding-bottom: 100px;
  }
</style>
  