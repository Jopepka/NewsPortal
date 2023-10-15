import articlesReducer from "./articlesReducer";
import categoriesReducer from "./categoriesReducer";
import reposReducer from "./reposReducer";
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    reducer: {
        articles: articlesReducer,
        categories: categoriesReducer,
        repos: reposReducer,
    },
})
