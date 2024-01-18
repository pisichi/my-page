import React, { createContext, useContext, useState, ReactNode } from 'react'

interface ModalContextProps {
  isModalOpen: boolean
  modalContent: ReactNode
  openModal: (
    content: ReactNode,
    customStyle?: React.CSSProperties,
    customClassName?: string
  ) => void
  closeModal: () => void
  customStyle?: React.CSSProperties
  customClassName?: string
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined)

interface ModalProviderProps {
  children: ReactNode
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState<ReactNode | null>(null)
  const [customStyle, setCustomStyle] = useState<
    React.CSSProperties | undefined
  >(undefined)
  const [customClassName, setCustomClassName] = useState<string | undefined>(
    undefined
  )

  const openModal = (
    content: ReactNode,
    style?: React.CSSProperties,
    className?: string
  ) => {
    setModalContent(content)
    setIsModalOpen(true)
    setCustomStyle(style)
    setCustomClassName(className || 'max-w-lg')
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalContent(null)
    setCustomStyle(undefined)
    setCustomClassName(undefined)
  }

  const value: ModalContextProps = {
    isModalOpen,
    modalContent,
    openModal,
    closeModal,
    customStyle,
    customClassName
  }

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}
