import Link from 'next/link'
import React from 'react'

export default function page() {
    const blogs = [
        {
            id: 1,
            title: 'Blog 1',
            content: 'This is the content of blog 1',
        },
        {
            id: 2,
            title: 'Blog 2',
            content: 'This is the content of blog 2',
        },{
            id: 3,
            title: 'Blog 3',
            content: 'This is the content of blog 3',
        },{
            id: 4,
            title: 'Blog 4',
            content: 'This is the content of blog 4',
        },{
            id: 5,
            title: 'Blog 5',
            content: 'This is the content of blog 5',
        },
    ]

  return (
    <div>
      
      {
        blogs.map((blog) => (
          <div key={blog.id} className="border p-4 mb-4 rounded-md shadow-md">
            <Link href={`blogs/${blog.id}`}><h2 className="text-xl font-bold">{blog.title}</h2></Link>

          </div>
        ))
      }
    </div>
  )
}
