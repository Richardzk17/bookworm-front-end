import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as profileService from '../../services/profileService';

const MyProfile = () => {
  const [profile, setProfile] = useState(null);
  const { profileId } = useParams(); // Assuming your route has a parameter named profileId

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await profileService.getProfileById(profileId);
        setProfile(profileData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, [profileId]);

  return (
    <div>
      <h1>My Profile</h1>
      
    </div>
  );
};

export default MyProfile;
