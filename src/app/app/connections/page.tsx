import React from 'react'
import { ServerStackIcon } from '@heroicons/react/16/solid'

const Page = () => {
  return (
    <div className='grid divide-y'>
      <section className='flex gap-4 p-4 py-3 items-center'>
        <ServerStackIcon className='size-6 text-primary/70' />
        <h4 className='text-lg'>Connections</h4>
      </section>
      <section className="p-4">
        Connection details will be here. So getConnectionById(id from url) then display<br/>
        Schema info will also be here for each connection.
      </section>
    </div>
  )
}

export default Page