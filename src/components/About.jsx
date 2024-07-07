import React from 'react';
import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <div>
      Abpout us page
      <User name={'Meghna Sharma'} description={'aint i your kkkg pooh in tech'} location={'wont disclose'} />
      <UserClass name={'Meghna Sharma'} description={'need to learn so much more, and have to have to acheive a lot more'} 
      location={'in my head'} />
    </div>
  )
}

export default About;
