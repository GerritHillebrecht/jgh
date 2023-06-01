import { signOut } from 'next-auth/react';
import MenuItem from './MenuItem';

const UserData = () => {
  return (
    <>
      <MenuItem
        onClick={() => {
          console.log('clicked');
        }}
        label="My trips"
      />
      <MenuItem
        onClick={() => {
          console.log('clicked');
        }}
        label="My favorites"
      />
      <MenuItem
        onClick={() => {
          console.log('clicked');
        }}
        label="My reseverations"
      />
      <MenuItem
        onClick={() => {
          console.log('clicked');
        }}
        label="My properties"
      />
      <MenuItem
        onClick={() => {
          console.log('clicked');
        }}
        label="Airbnb my home"
      />
      <MenuItem onClick={() => signOut()} label="Logout" />
    </>
  );
};

export default UserData;
