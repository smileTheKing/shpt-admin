import { BarChartComponent } from "@/components/features/bar-chart"
import { LineChartComponent } from "@/components/features/line-chart"
import { TableDemo } from "@/components/features/tranaction-table"
import { Card, CardContent,CardDescription,CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MoreHorizontal } from "lucide-react"


export default function Page() {
  return (
    <div className="flex flex-col items-start  justify-items-center min-h-screen  sm:px-18 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col flex-1 p-8 sm:p-0 gap-8 sm:items-start w-full h-full sm:gap-12 sm:pb-20 sm:pt-12 ">
        {/* heading text */}
        <h1 className="text-2xl font-bold">Analytics</h1>

        <div className="flex w-full justify-between sm:space-x-4 gap-8 sm:gap-0 grow flex-col sm:flex-row">
          <BarChartComponent />
          <LineChartComponent />

          <div className="flex flex-col  gap-4">
            <div className="flex gap-4 ">
            <DashboardCard title={"New Customer"} description={"v.s the other day"} count={60} />
            <DashboardCard title={"Total shipment"}  description={" v.s the other day"} count={5}  />
            </div>
            <DashboardCard title={"Today Shipment"} count={40} description={"v.s yesterday"} />
          </div>      
        </div>

        {/* recently payment */}

        <div className="flex flex-col justify-between gap-4 w-full">
          <h1 className="text-lg font-bold">Recent Payments</h1>
          <div className="flex flex-row gap-4">
            <RecentPaymentCard />
            <RecentPaymentCard />
          </div>
        </div>

        <div className="w-full shadow">
          <TableDemo />
        </div>
      </main>
    </div>
  )
}

type CardType = {
  title: string,
  count: number,
  description: string,
  
}

// Utility function to get color based on count
export const getColorByCount = (count: number) => {
  const previousCount = 30; // Same value used in getPercent function
  return count < previousCount 
    ? 'text-red-500 bg-red-200' 
    : 'text-green-500 bg-green-200';
};
const getPercent = (count: number) => {
  const previousCount: number = 30; // This could be passed as a prop or fetched from state/API
  const percentChange = ((count - previousCount) / previousCount) * 100;
  return Math.round(percentChange); // Rounds to nearest integer
};

const DashboardCard = (data:CardType) => {
 

  return (
    <Card className=" max-w-[190px] w-[190px] flex h-[180px]  rounded-md">
     <CardHeader>
      <CardTitle>{data.title}</CardTitle>
     </CardHeader>
      <CardContent className="flex justify-between items-center space-x-4">
      <CardTitle className="text-5xl">{data.count}</CardTitle>
      <CardDescription className={` rounded-md max-w-[50px] w-[50px] p-1 text-center ${getColorByCount(data.count)} h-fit text-sm`}>{getPercent(data.count)}%</CardDescription>
      </CardContent>
    <CardFooter>
      <CardDescription className="text-gray-500 text-sm">{data.description}</CardDescription>
    </CardFooter>
    </Card>
  )
}

const RecentPaymentCard = () => {
  return (
    <Card className="w-full flex h-[90px]  rounded-md shadow">

      <CardContent className="flex justify-between w-full items-center">
        <div className="lfet flex gap-4 items-center">
          <h2 className="w-4 h-4 rounded-full bg-slate-400 p-4"></h2>
          <div className="text-sm">
            <h2 className="font-bold ">Emma Ryan Jr. </h2>
            <p className="font-normal">Mar 9, 2025</p>
          </div>
        </div>
        <h2 className="font-bold text-sm">$4,823</h2>
        <button className="text-green-700 bg-green-100 px-4 py-1 rounded-md text-sm">Done</button>
        <div className=""><MoreHorizontal fill="gray" /></div>
      </CardContent>
      <p></p>
    </Card>
  )
}