/*=========================================================================================
  File Name: mutations.js
  Description: Vuex Store - mutations
==========================================================================================*/

const mutations = {


  CHANGE_LANGUAGE (state, lang) {
    localStorage.setItem('language', lang)
    state.language = lang
  },

  UPDATE_MAIN_LAYOUT_TYPE (state, val) {
    state.mainLayoutType = val
  },

  UPDATE_PRIMARY_COLOR (state, val) {
    state.themePrimaryColor = val
  },

  UPDATE_THEME (state, val) {
    localStorage.setItem('theme', val)
    state.theme = val
  },
}

export default mutations
