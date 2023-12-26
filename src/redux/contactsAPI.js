import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsAPI = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://658adc34ba789a962238086d.mockapi.io/api/vvlad'}),
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => '/contacts',
        })
    })
})

export const { useGetContactsQuery } = contactsAPI