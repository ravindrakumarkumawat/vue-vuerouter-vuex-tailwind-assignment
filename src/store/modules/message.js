import Messages from '../../mockup/messages'
import Users from '../../mockup/user';

export default {
  state: {
    messages: [...Messages],
    users: [...Users],
    currentUser: {},
  },
  getters: {
    getAllMessages(state) {
      return state.messages;
    },
    getAllUsers(state) {
      return state.users
    }
  },
  mutations: {
    SET_MESSAGE(state, message) {
      state.messages = [...state.messages, message];
    },
  },
  actions: {
    async addMessage({ commit, state }, payload) {
      commit('SET_MESSAGE', payload)
      await window.localStorage.setItem('message-list', JSON.stringify([...state.messages]))
    }
  }
};