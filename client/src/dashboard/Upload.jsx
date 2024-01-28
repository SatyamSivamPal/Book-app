import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';

const Upload = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Romance",
    "History",
    "Science Fiction",
    "Horror",
    "Fantasy",
    "Mistery",
    "Programming",
    "Autobiography",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
    "Historical Fiction",
    "Science",
    "Indian Literature",
    "Comics",
    "Sports",
    "Suspense",
    "Music",

  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  }

  const handleBooksubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL
    }

    //send to database
    fetch("http://localhost:5000/upload", {
      method: "POST",
      headers: {
        "Content-type":"application/json"
      },
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data => {
      alert('Book update sucessfully!!!')
      form.reset();
    })
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>
        Upload A book
      </h2>
      <form onSubmit={handleBooksubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/*first row*/}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" type="text" placeholder="Book name" required name='bookTitle' />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" type="text" placeholder="Author Name" required name='authorName' />
          </div>
        </div>
        {/*second row*/}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput id="imageURL" type="text" placeholder="Book Image URL" required name='imageURL' />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <select name="categoryName" id="inputState" className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
              {
                bookCategories.map((option) => <option key={option} value={option}>
                  {option}
                </option>)
              }
            </select>
          </div>
        </div>
        {/*third row*/}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea id="bookDescription" name='bookDescription' placeholder="Write your book description..." required rows={5} className='w-full' />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput id="bookPDFURL" type="text" placeholder="Book PDF URL" name='bookPDFURL' required />
        </div>
         <Button type="submit" className='mt-5'>Upload Book</Button>
      </form>
    </div>
  )
}

export default Upload