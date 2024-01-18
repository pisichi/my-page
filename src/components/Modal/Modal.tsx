import React, { useEffect } from 'react'
import { useModal } from 'context/ModalContext'
import { useDarkMode } from 'context/DarkModeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

const Modal: React.FC = () => {
  const {
    isModalOpen,
    modalContent,
    closeModal,
    customStyle,
    customClassName
  } = useModal()
  const { isDark } = useDarkMode()

  // Close the modal on pressing the Escape key
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeModal()
    }
  }

  // Attach and detach keydown event listener
  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown)
    } else {
      document.removeEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isModalOpen])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity ${
        isModalOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div
        className={`modal-overlay fixed inset-0 bg-black transition-opacity ${
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
          modal-container mx-auto w-full max-w-md rounded-lg p-8
          ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}
          transform transition-transform ${
            isModalOpen
              ? 'scale-100 transition-transform duration-300 ease-out'
              : 'scale-0'
          }
          ${customClassName || ''} // Append customClassName if provided
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
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
          <FontAwesomeIcon size="xs" icon={faX} />
        </button>
        {modalContent}
      </div>
    </div>
  )
}

export default Modal
