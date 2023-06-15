import { requestHandler } from "@/libs/request-handler";
import { IBroker } from "@/models";
import { AddBrokerDTO } from "@/dtos";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseUrl = 'https://localhost:5001/';

export const brokerApi = createApi({
  reducerPath: 'brokerApi',
  baseQuery: requestHandler({ baseUrl }),
  tagTypes: ["Broker"],
  endpoints(builder) {
    return {
      getBroker: builder.query<IBroker, string>({
        query: (id) => ({
          url: `broker/${id}`,
          method: 'get',
        }),
        providesTags: (result, error, id) => [{ type: 'Broker', id }],
      }),
      getBrokers: builder.query<IBroker[], void>({
        query: () => ({
          url: `broker`,
          method: 'get',
        }),
        providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Broker' as const, id })),
              { type: 'Broker', id: 'LIST' },
            ]
          : [{ type: 'Broker', id: 'LIST' }],
      }),
      addBroker: builder.mutation<IBroker, AddBrokerDTO>({
        query: (data) => ({
          url: 'broker',
          method: 'POST',
          data,
        }),
        invalidatesTags: [{ type: 'Broker', id: 'LIST' }],
      })
    }
  }
});


export const { useGetBrokerQuery, useGetBrokersQuery, useAddBrokerMutation } = brokerApi;