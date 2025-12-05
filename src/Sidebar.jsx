import React from 'react'

function Sidebar() {
    return (
        <div className='m-3'>
            <div className='d-flex flex-column gap-3 position-fixed'>

                <img className='logoText' src="src/assets/instaText.png" alt="" />
                <div><i className="bi bi-house-door-fill"></i>Home</div>
                <div><i className="bi bi-search"></i>Search</div>
                <div><i className="bi bi-geo-alt-fill"></i>Explore</div>
                <div><i className="bi bi-camera-fill"></i>Reels</div>
                <div><i className="bi bi-chat-left-dots-fill"></i>Messages</div>
                <div><i className="bi bi-bell-fill"></i>Notifications</div>
                <div><i className="bi bi-plus-circle-fill"></i>Create</div>
                <div><i className="bi bi-person-fill"></i>Profile</div>


            </div >

            <div className='position-absolute bottom-0 d-flex flex-column gap-3 mb-3 position-fixed'>
                <div><i className="bi bi-chat-left-dots-fill"></i>Threads</div>
                <div><i className="bi bi-three-dots"></i>More</div>
            </div>


        </div>
    )
}

export default Sidebar