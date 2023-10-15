import articlesReducer from "./articlesReducer";
import categoriesReducer from "./categoriesReducer";
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    reducer: {
        articles: articlesReducer,
        categories: categoriesReducer,
    },
})
