import {configureStore} from "@reduxjs/toolkit";
import {cryptoApi} from "./cryptoApi";

export const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer
    },
    middleware: (getMiddleware) => getMiddleware().concat(cryptoApi.middleware),

})