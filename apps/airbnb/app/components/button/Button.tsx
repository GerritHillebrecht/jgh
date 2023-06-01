'use client';

import { IconType } from 'react-icons/lib';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import Styles from './Button.module.scss';

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  loading?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  loading = false,
  outline,
  small,
  icon: Icon,
}) => {
  console.log('loading: ', loading);
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full
      ${
        outline
          ? 'bg-white border-black text-black'
          : 'bg-rose-500 border-rose-500 text-white'
      }
      ${
        small
          ? 'py-1 text-sm font-light border-[1px]'
          : 'py-3 text-md font-semibold border-2'
      }
      `}
      >
        {Icon && <Icon size={24} className="absolute left-4 top-3"></Icon>}
        {loading ? (
          <div className="flex justify-center">
            <AiOutlineLoading3Quarters className={Styles.rotate} />
          </div>
        ) : (
          label
        )}
      </button>
      {loading}
    </>
  );
};

export default Button;
