import React from 'react'
import Story from './Story'
import Post from './Post'


function Feed() {
    return (

        <>
            <div className='bg-info story'>
                <Story />
            </div>
            <div>
                <Post />
            </div>
        </>
    )
}

export default Feed