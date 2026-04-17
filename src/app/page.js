
import FriendsSection from '@/components/friends/FriendsSection';
import Banner from '@/components/homepage/banner/Banner';
import BannerCards from '@/components/homepage/banner/BannerCards';
import React from 'react';




const HomePage = async() => {
 
  return (
    <div>
      <Banner />
      <BannerCards />
      <FriendsSection />
    
    </div>
  );
};

export default HomePage;