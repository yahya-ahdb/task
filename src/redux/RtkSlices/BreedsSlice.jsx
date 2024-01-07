import {createApi } from '@reduxjs/toolkit/query/react';
import {fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { apiUrl } from '../../constants/url';

export const BreedsSlice = createApi({
    reducerPath:'BreedsSlice',
    baseQuery:fetchBaseQuery({baseUrl:apiUrl}),
    keepUnusedDataFor:2,
    endpoints:(builder)=>({
        breeds:builder.mutation({
            query:({id})=>({
                url:`breeds?page=${id}`,
                method:'GET'
            }),
            keepUnusedDataFor:20
        }),
        facts:builder.mutation({
            query:({id})=>({
                url:`facts?page=${id}`,
                method:'GET'
            }),
            keepUnusedDataFor:20
        }),
    })
    
})

export const {useBreedsMutation , useFactsMutation } = BreedsSlice
