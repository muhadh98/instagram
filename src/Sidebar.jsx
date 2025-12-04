import React from 'react'

function Sidebar() {
    return (
        <div className='m-3'>
            <div className='d-flex flex-column gap-3'>

                <img className='logoText' src="src/assets/instaText.png" alt="" />
                <div><i class="bi bi-house-door-fill"></i>Home</div>
                <div><i class="bi bi-search"></i>Search</div>
                <div><i class="bi bi-geo-alt-fill"></i>Explore</div>
                <div><i class="bi bi-camera-fill"></i>Reels</div>
                <div><i class="bi bi-chat-left-dots-fill"></i>Messages</div>
                <div><i class="bi bi-bell-fill"></i>Notifications</div>
                <div><i class="bi bi-plus-circle-fill"></i>Create</div>
                <div><i class="bi bi-person-fill"></i>Profile</div>


            </div >

            <div className='position-absolute bottom-0 d-flex flex-column gap-3 mb-3'>
                <div><i class="bi bi-chat-left-dots-fill"></i>Threads</div>
                <div><i class="bi bi-three-dots"></i>More</div>
            </div>


        </div>
    )
}

export default Sidebar