export default {
    SET_CATEGORIES(state, categories) {
        state.categories = categories
    },
    SET_CATEGORY(state, category) {
        state.category = category
    },
    ADD_CATEGORY_TO_LIST(state,category){
        state.categories.push(category)
    }

}
