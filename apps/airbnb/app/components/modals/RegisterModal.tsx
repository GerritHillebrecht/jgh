'use client';
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import useRegisterModal from '../../hooks/useRegisterModal';
import useLoginModal from '../../hooks/useLoginModal';

import Modal from './Modal';
import Heading from '../typographie/Heading';
import { toast } from 'react-hot-toast';
import Button from '../button/Button';
import GroupInput from '../inputs/GroupInput';
import VerticalInputGroup from '../inputs/VerticalInputGroup';
import { signIn } from 'next-auth/react';

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);
    axios
      .post('/api/register', data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create an Account." />
      <VerticalInputGroup>
        <GroupInput
          id="email"
          label="E-Mail"
          type="email"
          placeholder="E-Mail-Address"
          disabled={loading}
          register={register}
          errors={errors}
          autocomplete="email"
        />
        <GroupInput
          id="name"
          label="Username"
          placeholder="Select a username"
          type="text"
          disabled={loading}
          register={register}
          errors={errors}
          autocomplete="username"
        />
        <GroupInput
          id="password"
          label="Password"
          placeholder="Password"
          disabled={loading}
          register={register}
          errors={errors}
          autocomplete="new-password"
          type="password"
        />
      </VerticalInputGroup>
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <div className="divider my-2" data-content="OR">
        OR
      </div>
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {
          console.log('clicked');
        }}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => signIn('github')}
      />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="flex flex-row items-center gap-2 justify-center">
          <p className="">Already have an Account?</p>
          <p
            onClick={registerModal.onClose}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            Log in
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={loading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
