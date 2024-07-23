'use client';

import React from 'react'
import { Button } from '@/components/ui/button'
import { useSession } from 'next-auth/react'
import { ResizablePanel } from '@/components/ui/resizable';
import { DbSvg } from '@/components/svgImage';
import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"

import { Code2 as Code } from 'lucide-react';

import { RecentQueries, AnalyticsComponent, FeedbakCard } from '@/components/home-page';

import {
  DatabaseIcon,
  TerminalWindowIcon,
  Analytics,
  ServerIcon
} from '@/components/icons';

import { ChartComponent } from '@/components/chart-list';


const Page = async() => {
  // const { data } = useSession()

  return (
    <ResizablePanel>
      <div className="relative flex flex-col items-center py-2 gap-4 px-4 font-sans">
        <div className='w-full gap-5 relative grid lg:grid-cols-12'>
          <Card className='flex flex-row col-span-6 gap-4 h-[20rem] shadow border dark:bg-custom-gradient rounded-lg py-4 px-5 relative"'>
            <div className="flex justify-between flex-col gap-3 w-1/2">
              <div className='flex gap-3 flex-col'>
                <div className="icon bg-secondary w-fit p-3 rounded-lg">
                  <DatabaseIcon className="size-4 text-primaryblue" />
                </div>
                <div className="flex flex-col gap-1">
                  <CardTitle className='text-lg'>Database</CardTitle>
                  <CardDescription className='w-11/12'>
                    Connect and to database and run queries on your data with just a click
                  </CardDescription>
                </div>
              </div>


              <div className="footer flex flex-row gap-2 py-2">
                <div className='flex flex-row rounded-lg items-center gap-1'>
                  <Button size={'lg'} className='flex flex-row items-center gap-2 bg-primaryblue hover:bg-primaryblue-foreground'>
                    <ServerIcon />
                    <span>Connect</span>
                  </Button>
                </div>
                <div className='flex flex-row rounded-lg items-center gap-1'>
                  <Button size={'lg'} className='flex flex-row items-center gap-2'>
                    <Code></Code>
                    <span>Run Query</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className='w-1/2 relative'>
              <DbSvg className="size-11/12"></DbSvg>
            </div>
          </Card>
          <Card className='shadow border grid col-span-3 h-full dark:bg-custom-gradient rounded-lg py-4 px-5 relative'>
            <div className="flex justify-between flex-col gap-3">
              <div className="flex flex-col gap-3 items-center">
                <div className="icon bg-secondary w-fit p-3 rounded-lg">
                  <Analytics className="size-5 text-primaryblue" />
                </div>
                <CardTitle className='text-lg text-center'>Analytics</CardTitle>
              </div>

              <div className="tableContent flex-col flex gap-2 w-full relative">
                <AnalyticsComponent />
              </div>
            </div>

          </Card>
          <ChartComponent />
        </div>

        <div className="w-full gap-5 relative grid grid-cols-12">
          
          <Card className='shadow border grid col-span-5 lg:col-span-3 h-full dark:bg-custom-gradient bg-bottom  rounded-lg py-4 px-5 relative'>
            <div className="flex justify-between flex-col gap-3">
              <div className='flex gap-3 flex-col items-center justify-center'>
                <div className="icon bg-secondary w-fit p-3 rounded-lg">
                  <DatabaseIcon className="size-4 text-primaryblue" />
                </div>
                <div className="flex flex-col gap-1 items-center justify-center text-center">
                  <CardTitle className='text-lg'>Database</CardTitle>
                  <CardDescription className='w-12/12'>
                    Postgres database the world&apos;s most trusted relational database.
                  </CardDescription>

                </div>
              </div>

            </div>
          </Card>

          <FeedbakCard></FeedbakCard>

          <Card className='flex flex-row col-span-7 lg:col-span-6 gap-4 shadow border rounded-lg py-4 px-5 relative overflow-y-scroll'>
            <div className="flex flex-col justify-between gap-3 w-full">
              <div className='flex gap-3 flex-col'>
                <div className="icon bg-secondary w-fit p-3 rounded-lg">
                  <TerminalWindowIcon className="size-4 text-primaryblue" />
                </div>
                <CardTitle className='text-lg'>
                  Recent Queries
                </CardTitle>
              </div>

              <div className='flex flex-col gap-2 lg:h-[10rem] lg:overflow-y-scroll'>
                <RecentQueries />
              </div>
            </div>
          </Card>
          
        </div>
      </div>


    </ResizablePanel>
  )
}

export default Page
