import {configureStore} from "@reduxjs/toolkit";
import {cryptoApi} from "./cryptoApi";
import {cryptoNewsApi} from "./cryptoNewsApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer
    },
    middleware: (getMiddleware) => getMiddleware().concat(cryptoApi.middleware, cryptoNewsApi.middleware),

})