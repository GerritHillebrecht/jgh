'use client';

import { signIn } from 'next-auth/react';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

import useLoginModal from '../../hooks/useLoginModal';
import useRegisterModal from '../../hooks/useRegisterModal';
import Modal from './Modal';

import Heading from '../typographie/Heading';
import Button from '../button/Button';
import VerticalInputGroup from '../inputs/VerticalInputGroup';
import GroupInput from '../inputs/GroupInput';

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);
    console.log({ data });
    signIn('credentials', { ...data, redirect: false }).then((callback) => {
      setLoading(false);
      console.log('callback', callback);

      if (callback?.ok) {
        toast.success('Logged in successfully');
        router.refresh();
        loginModal.onClose();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome back" subtitle="Log into your account" />
      <VerticalInputGroup>
        <GroupInput
          id="email"
          label="Email"
          placeholder="E-Mail Address"
          autocomplete="email"
          disabled={loading}
          register={register}
          errors={errors}
          required
        />
        <GroupInput
          id="password"
          label="Password"
          placeholder="Password"
          autocomplete="current-password"
          type="password"
          disabled={loading}
          register={register}
          errors={errors}
          required
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
    </div>
  );

  return (
    <Modal
      disabled={loading}
      isOpen={loginModal.isOpen}
      title="Login"
      loading={loading}
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
