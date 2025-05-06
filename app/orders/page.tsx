import React from 'react';
import { DataTable } from './data-table';
import { Payment, columns } from "./columns"

  export const payments: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "example@gmail.com",
    },
    // ...
  ]

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
          },
          {
            id: "489e1d42",
            amount: 125,
            status: "processing",
            email: "example@gmail.com",
          },
      // ...
    ]
  }

  

export default async function OrdersPage() {
    const data = await getData()
    return (
        <div className="flex flex-col items-start  justify-items-center min-h-screen  px-20 font-[family-name:var(--font-geist-sans)]">
             <main className="flex flex-col  sm:items-start w-full h-full gap-12 pb-20 pt-12">
             <h1 className="text-2xl font-bold">Customer Orders</h1>
             <DataTable columns={columns} data={data} />
             </main>
          
        </div>
      )
}
