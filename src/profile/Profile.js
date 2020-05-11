import React from 'react' ;
import PropTypes from 'prop-types';
const Profile = (props) => {
    const handleName = (e) => {
        let name = props.fullName
        alert(name);
    }
    return (
        <div class="container">
                     <div class="row  bg-info text-white align-items-center  ">
                        <div class=" col-lg-6 ">
                            <h1>{props.fullName}</h1>
                            <h2>{props.profession}</h2>
                            <p>{props.bio}</p>
                            <button type="button" class="btn btn-warning" onClick={handleName}>Alerte !</button>
                        </div>
                        <div class=" col-lg-6 ">
                            {props.children}  
                         </div>
                     </div>
        </div>

    );
}
Profile.defaultProps = {
    fullName : "Trichilli Montassar",
    profession: "développeur Web",
    bio : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
}
Profile.propTypes = {
    fullName: PropTypes.string,
    profession: PropTypes.string,
    bio : PropTypes.string,
};
export default Profile;
