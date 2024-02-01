import './Modal.scss'

import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDarkMode } from 'context/DarkModeContext'
import { useModal } from 'context/ModalContext'
import React, { useEffect, useRef } from 'react'

const Modal: React.FC = () => {
  const {
    isModalOpen,
    modalContent,
    modalTitle,
    closeModal,
    customStyle,
    customClassName
  } = useModal()
  const { isDark } = useDarkMode()

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity mx-4 ${
        isModalOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div
        className={`fixed inset-0 bg-black transition-opacity ${
          isModalOpen
            ? 'opacity-50 transition-opacity duration-300 ease-out'
            : 'opacity-0'
        }`}
        onClick={closeModal}
      ></div>
      <div
        style={{
          ...customStyle
        }}
        className={`
          mx-auto w-full max-w-screen-md rounded-lg px-5 py-3
          ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}
          transform transition-transform ${
            isModalOpen
              ? 'scale-100 transition-transform duration-300 ease-out'
              : 'scale-0 transition-opacity duration-300 ease-out'
          }
          ${customClassName || ''}
          mx-3 sm:w-full md:w-full lg:w-full xl:w-[80%] 2xl:w-[70%]
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="flex h-full flex-col justify-center">
          <div className="mb-4 text-lg font-bold px-3">{modalTitle}</div>
          <button
            className={`absolute right-2 top-2 p-1 transition-colors duration-300 ease-in-out
        ${
          isDark
            ? 'text-white hover:text-blue-700'
            : 'text-black hover:text-blue-700'
        }
      `}
            onClick={closeModal}
          >
            <FontAwesomeIcon size="xl" icon={faTimes} />
          </button>
        </div>
        <div className="modal-content custom-scroll !sm:text-sm max-h-[70vh] overflow-x-hidden !text-sm md:text-base px-3">
          {modalContent}
        </div>
      </div>
    </div>
  )
}

export default Modal
