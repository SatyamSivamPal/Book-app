import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useParams, useNavigate } from 'react-router-dom';
import { Alert } from 'flowbite-react';

const EditBooks = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL } = useLoaderData();

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

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updateBookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
    }

    //send to database
    fetch(`http://localhost:5000/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateBookObj)
    }).then(res => res.json()).then(data => {
      navigate('/admin/dashboard')
    })

  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>
        Update the book data
      </h2>
      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/*first row*/}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" type="text" placeholder="Book name" required name='bookTitle' defaultValue={bookTitle} />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" type="text" placeholder="Author Name" required name='authorName' defaultValue={authorName} />
          </div>
        </div>
        {/*second row*/}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput id="imageURL" type="text" placeholder="Book Image URL" required name='imageURL' defaultValue={imageURL} />
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
          <Textarea id="bookDescription" name='bookDescription' placeholder="Write your book description..." required rows={5} className='w-full' defaultValue={bookDescription} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput id="bookPDFURL" type="text" placeholder="Book PDF URL" name='bookPDFURL' required defaultValue={bookPDFURL} />
        </div>
        <Button type="submit" className='mt-5'>Update Book</Button>
      </form>
    </div>
  )
}

export default EditBooks