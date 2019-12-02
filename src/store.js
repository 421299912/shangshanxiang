export default {
  modules: {
    haiyishuzi: {
      strict: true,
      namespaced: true,
      state: {
        user: {
          userName: '',
          passWord: ''
        },
        baseUrl: 'http://127.0.0.1:9090/'
      },
      mutations: {
        setUser (state, user) {
          state.user = user
        }
      }
    },
    navigator: {
      strict: true,
      namespaced: true,
      state: {
        stack: [],
        options: {}
      },
      mutations: {
        push (state, page) {
          state.stack.push(page)
        },
        pop (state) {
          if (state.stack.length > 1) {
            state.stack.pop()
          }
        },
        replace (state, page) {
          state.stack.pop()
          state.stack.push(page)
        },
        reset (state, page) {
          state.stack = [page || state.stack[0]]
        },
        options (state, newOptions = {}) {
          state.options = newOptions
        }
      }
    },

    splitter: {
      strict: true,
      namespaced: true,
      state: {
        open: false
      },
      mutations: {
        toggle (state, shouldOpen) {
          if (typeof shouldOpen === 'boolean') {
            state.open = shouldOpen
          } else {
            state.open = !state.open
          }
        }
      }
    },

    tabbar: {
      strict: true,
      namespaced: true,
      state: {
        index: 0
      },
      mutations: {
        set (state, index) {
          state.index = index
        }
      }
    }
  }
}
