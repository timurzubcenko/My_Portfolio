import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './themeSlice'


export default configureStore({
    reducer: {
        theme: themeSlice,
    },
})