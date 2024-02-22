import React from 'react'
import CoursesCard from '../components/CoursesCard'
import '../css/Profile.css'
import generalImage from '../assets/blue back ground cross.jpeg'
import books from '../assets/books-removebg-preview.png'
import laptop from '../assets/cartoon-laptop-removebg-preview.png'

const coursecardValues = [
    {
        progress: 45,
        image: generalImage,
        courseTitle: 'Cobol'
    },
    {
        progress: 60,
        image: generalImage,
        courseTitle: 'python'
    },
    {
        progress: 30,
        image: generalImage,
        courseTitle: 'Java '
    },
]
function Profile() {
    return (
        <div className='profile-main-container h-screen'>
            <div className='profile-top rounded-xl flex flex-row m-7  p-4'>
                <div>
                    <h3 className='font-bold text-lg mb-3'>Hello User</h3>
                    <p className='mr-4'>Learn anytime, anywhere. Boost your skills with flexible online courses</p>
                </div>
                <img src={laptop} alt='' width={135} height={85}/>
                <img src={books} alt='' width={165} height={105}/>
            </div>
            <div className='flex flex-row mb-2  ml-6'>
                <h3 className='mr-56 font-semibold'>Your Courses</h3>
                <button className='ml-80  border-x-2 border-blue-900 w-16 rounded-full'>More</button>
            </div>

            <div className=' ml-5 grid lg:grid-cols-3  '>
                    {coursecardValues.map((value, index) => (
                            <CoursesCard progress={value.progress} image={value.image} courseTitle={value.courseTitle}/>
                    ))}
            </div>

        </div>
    )
}

export default Profile
