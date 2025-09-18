'use client';

import React from 'react';
import { SignOutButton } from '@clerk/nextjs';
import { useToast } from '@/hooks/use-toast';

function SignOutLink() {
  const { toast } = useToast();

  const handleLogOut = () => {
    toast({ description: 'You have been signed out.' });
  };

  return (
    <SignOutButton redirectUrl='/'>
      <button className='w-full text-left' onClick={handleLogOut}>
        Logout
      </button>
    </SignOutButton>
  );
}

export default SignOutLink;
