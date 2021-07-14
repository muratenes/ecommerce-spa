export default {
    SET_CATEGORIES(state, categories) {
        state.categories = categories
    },
    ADD_CATEGORY_TO_LIST(state,category){
        state.categories.push(category)
    }

}
