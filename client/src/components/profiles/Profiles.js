import React,{Fragment,useEffect} from 'react'
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'
import ProfileItem from './ProfileItem'
import {getProfiles} from '../../actions/profile'

import { connect } from 'react-redux'
//as soon as this loads we want to run getprofiles
const Profiles = ({getProfiles,profile:{profiles,loading}}) => {
    useEffect(()=>{
        getProfiles();
    },[getProfiles]);//we have to run it as a dependancy
    return (
        <Fragment>
            <Fragment>
                <h1 className="large text-primary">Students</h1>
                <p className="lead">
                    <i className="fab fa-connectdevelop"></i>Browse and connect with users
                </p>
                <div className="profiles">
                    {profiles.length > 0 ? (
                        profiles.map(profile=>(
                            <ProfileItem key={profile._id} profile={profile}/>
                        ))
                    ):<h4>No profiles found</h4>}
                </div>
            </Fragment>
        </Fragment>
            
      
    )
}

Profiles.propTypes = {
getProfiles:PropTypes.func.isRequired,
profile:PropTypes.object.isRequired,
}

const mapStateToProps= state =>({
    profile:state.profile
})

export default connect(mapStateToProps,{getProfiles}) (Profiles)