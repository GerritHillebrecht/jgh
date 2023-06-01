'use client';

import { useCallback, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Button from '../button/Button';

import Styles from './Modal.module.scss';

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  loading?: boolean;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  loading = false,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) return null;

  return (
    <>
      <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
        <div className="relative w-full md:w-2/3 lg:w-2/5 xl:2/5 my-6 mx-auto h-full sm:max-h-[calc(100%_-_2rem)]">
          {/*content*/}
          <div
            className={`transition duration-300 h-full
            ${
              showModal
                ? 'translate-y-0 opacity-100'
                : 'translate-y-full opacity-0'
            }           
            `}
          >
            <div className="transition h-full border-0 sm:rounded-lg shadow-lg relative grid grid-rows-[max-content,auto,max-content] w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                <button
                  onClick={handleClose}
                  className="p-1 border-0 hover:opacity-70 transition absolute left-9"
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
              {/*body*/}
              <div className={`${Styles['scrollbar-custom']} overflow-y-auto`}>
                <div className="relative p-6 flex-auto">{body}</div>
                {/*footer*/}
                <div className="flex flex-col gap-2 p-6">
                  <div className="flex flex-row items-center gap-4 w-full">
                    {secondaryAction && secondaryActionLabel && (
                      <Button
                        outline
                        disabled={disabled}
                        label={secondaryActionLabel}
                        onClick={handleSecondaryAction}
                      />
                    )}
                    <Button
                      disabled={disabled}
                      label={actionLabel}
                      loading={loading}
                      onClick={handleSubmit}
                    />
                  </div>
                  {footer}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
