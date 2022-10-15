import React from 'react'
import MentorCard from '../../components/thecodersclub/mentorcard'
import mentors from '../../components/thecodersclub/mentorsData'
import '../../components/thecodersclub/thecodersclub.css'
import Footer from '../../components/thecodersclub/footer'
import LeadCard from '../../components/thecodersclub/leadCard'

export default function tccmentors() {
    return (
        <div className="root">
            <h1 className='text-center'>Mentors</h1>
            <LeadCard></LeadCard>
            {mentors.map(mentor => <MentorCard
                key={mentor.key}
                domain={mentor.domain}
                content={mentor.content}
                mentor1name={mentor.mentors[0].name}
                img1={mentor.mentors[0].img}
                mentor1linkedin={mentor.mentors[0].linkedIn}
                mentor1github={mentor.mentors[0].github}
                mentor2name={mentor.mentors[1].name}
                img2={mentor.mentors[1].img}
                mentor2linkedin={mentor.mentors[1].linkedIn}
                mentor2github={mentor.mentors[1].github}
            />
            )}
            <Footer></Footer>
        </div>

    )
}
