import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://88ec-196-191-60-177.ngrok-free.app/api";

export const messageApi = createApi({
  reducerPath: "messageApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: (params) => {
        let url = "/chatbot/chat";

        const body = params;

        return {
          url: url,
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const { useGetMessagesQuery } = messageApi;
