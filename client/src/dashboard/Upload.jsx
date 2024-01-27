import React from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

const Upload = () => {
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>
        Upload A book
      </h2>
      <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" type="text" placeholder="Book name" required name='bookTitle' />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Book Title" />
            </div>
            <TextInput id="bookTitle" type="text" placeholder="Book name" required name='bookTitle' />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Upload