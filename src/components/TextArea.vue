<template>
  <div class="parent-section">
    <textarea
      v-model="reply"
      @keydown.enter.prevent="sendMessage"
      @keyup="typing"
      rows="1"
      ref="textarea"
      class="b-text-area"
    ></textarea>
    <button class="btn-class" @click="sendMessage">Send</button>
  </div>
</template>
  
<script>
  export default {
    data() {
      return {
        reply: '',
      };
    },
    methods: {
      sendMessage() {
        if (this.validateMessage(this.reply)) {
          this.$emit('send', this.reply);
          this.reply = '';
          const element = document.getElementById("chat-room");
          setTimeout(()=>{
            console.log(element,element.scrollHeight)
            element.scrollTop = element.scrollHeight;
          },
          500)
        }
        
      },
      typing(){
        this.$emit('isTyping', this.reply);
      },
      validateMessage(message){
        return message.trim() !== '';
      }
    },
  };
  </script>
  
  <style scoped>
  /* Styles for compose section component */
  .b-text-area{
    width: 80%;
    height: 20px;
    margin-left: 2%;
    margin-right:10px;

  }
  .parent-section{
    display: flex;
    flex-direction: row;
    align-items: center;
    position: fixed;
    bottom: 10px;
    width: 100%;
    background: var(--theme-input-background);

  }
  .btn-class{
   background-color: blue;
   color: white;
   padding: 8px 16px;
   border-radius: 16px;
  }
</style>
  