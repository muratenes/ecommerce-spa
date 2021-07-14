const actions = {


  // /////////////////////////////////////////////
  // Errors and Successes
  // /////////////////////////////////////////////
  error (_, payload) {
    this._vm.$vs.loading.close()
    const { message, errors } = payload
    if (errors && this._vm.errors) {
      Object.keys(errors).map(field => {
        const msg = errors[field][0]

        this._vm.errors.add({ field, msg })
      })
    }
    this._vm.$vs.notify({
      color: 'danger',
      icon: 'icon-alert-circle',
      iconPack: 'feather',
      position: 'top-center',
      text: message,
      time: 8000,
      title: 'Error'
    })
  },

  success (_, payload) {
    this._vm.$vs.loading.close()
    const { message } = payload
    this._vm.$vs.notify({
      color: 'success',
      icon: 'icon-check',
      iconPack: 'feather',
      position: 'top-center',
      text: message,
      time: 8000,
      title: 'Success'
    })
  },


  updateLanguage ({ commit }, val) {
    commit('CHANGE_LANGUAGE', val)
  },

  // VxAutoSuggest
  updateStarredPage ({ commit }, payload) {
    commit('UPDATE_STARRED_PAGE', payload)
  },

  updateTheme ({ commit }, val) {
    commit('UPDATE_THEME', val)
  },
}

export default actions
