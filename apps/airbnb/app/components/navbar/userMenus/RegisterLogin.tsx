import MenuItem from './MenuItem';

import useRegisterModal from '../../../hooks/useRegisterModal';
import useLoginModal from '../../../hooks/useLoginModal';

const RegisterLogin = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  return (
    <>
      <MenuItem onClick={loginModal.onOpen} label="Login" />
      <MenuItem onClick={registerModal.onOpen} label="Sign up" />
    </>
  );
};

export default RegisterLogin;
