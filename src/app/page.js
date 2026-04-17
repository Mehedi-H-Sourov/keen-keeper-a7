import FriendsSection from '@/components/FriendsSection';
import Banner from '@/components/homepage/banner/Banner';
import BannerCards from '@/components/homepage/banner/BannerCards';
import React from 'react';




const HomePage = async() => {
  const friends = await getFriends();
  return (
    <div>
      <Banner />
      <BannerCards />
      <FriendsSection />

    </div>
  );
};

export default HomePage;