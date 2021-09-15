//child component of profiles, to represent every single item
import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const ProfileItem = ({profile:{
    user:{_id,name,avatar},
    status,
    location,
    skills
}}) => {
    return (
        <div className="profile bg-light">
         <img src={avatar} alt="" className="round-img"/>
         <div>
             <h2>{name}</h2>
             <p>{status}</p>
             <p className="my-1">{location && <span>{location}</span>}</p>
             <p className="my-1"><h3>What I like-</h3>{skills.slice(0,4).map((skill,index)=>(
                <h4 key={index} className="text-primary">
                    {skill}
                </h4>
             ))}</p>
             <Link to={`/profile/${_id}`} className="btn btn-primary">View Profile</Link>
         </div>
        </div>
    )
}

ProfileItem.propTypes = {
    profile:PropTypes.object.isRequired,

}

export default ProfileItem
