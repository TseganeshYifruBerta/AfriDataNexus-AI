import { messageApi } from "./features/chat/message-history-api";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [messageApi.reducerPath]: messageApi.reducer,
   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(messageApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
