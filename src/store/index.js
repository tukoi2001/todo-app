import { createStore } from 'vuex';


export default createStore({
  state: {
    listTasks: [],
  },
  getters: {
    getAllTasks(state) {
      if(state.listTasks.length > 0) {
        return state.listTasks
      }
    },
    getTaskDone(state) {
      return state.listTasks.filter(task => task.status == 'done');
    }
  },
  mutations: {
    initTasks(state) {
      const data = JSON.parse(localStorage.getItem('listTasks'));
      if(data.length > 0) {
        state.listTasks = data;
      }
    },
    addNewTask(state, data) {
      const newTask = {
        id: new Date().toISOString(),
        title: data.title,
        description: data.description,
        status: 'todo',
        createdAt: new Date().toLocaleString(),
      }
      state.listTasks.unshift(newTask);
      localStorage.setItem('listTasks', JSON.stringify(state.listTasks));
    },
    removeTask(state, id) {
      const resId = state.listTasks.findIndex(res => res.id === id);
      if(resId > -1) {
        state.listTasks.splice(resId, 1);
      } 
      localStorage.setItem('listTasks', JSON.stringify(state.listTasks));
    },
    editTask(state, data) {
      state.listTasks.forEach(item => {
        if(item.id === data.id) {
          item.status = data.status;
        }
      });
      localStorage.setItem('listTasks', JSON.stringify(state.listTasks));
    },
    removeAllTasks(state) {
      state.listTasks.splice(0, state.listTasks.length);
      localStorage.setItem('listTasks', JSON.stringify(state.listTasks));
    }
  },
  actions: {
    actionInitTasks({commit}) {
      commit('initTasks')
    },
    actionAddNewTask({commit}, data) {
      commit('addNewTask', data);
    },
    actionRemoveTask({commit}, id) {
      commit('removeTask', id);
    },
    actionEditTask({commit}, data) {
      commit('editTask', data);
    },
    actionRemoveAllTasks({commit}) {
      commit('removeAllTasks');
    }
  },
  modules: {
  }
})
