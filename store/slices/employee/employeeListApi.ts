import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type EmployeeTypes = {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
};

type EmployeesResponse = {
  status: string;
  data: EmployeeTypes[];
  message: string;
};

export const employeeListApiSlice = createApi({
  reducerPath: "employeeListApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummy.restapiexample.com/api/v1/",
  }),
  endpoints: (builder) => ({
    fetchEmployees: builder.query<EmployeesResponse, void>({
      query: () => ({
        url: "employees",
        method: "Get",
      }),
    }),
    createEmployee: builder.mutation({
      query: (body) => ({
        url: "create",
        method: "POST",
        body,
      }),
    }),
    updateEmployee: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `update/${id}`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
  useFetchEmployeesQuery,
  useCreateEmployeeMutation,
  useUpdateEmployeeMutation,
} = employeeListApiSlice;
