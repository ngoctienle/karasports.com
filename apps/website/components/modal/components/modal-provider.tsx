import { Modal } from '@karasports/ui'
import { useModalStore } from '../store'

interface ModalProviderProps {
  children: React.ReactNode
}

export function ModalProvider({ children }: ModalProviderProps): JSX.Element {
  const { opened, content, title, onClose } = useModalStore((state) => ({
    opened: state.opened,
    title: state.title,
    content: state.content,
    buttons: state.buttons,
    onClose: state.onClose
  }))

  return (
    <>
      {children}
      {opened ? (
        <Modal.Root centered onClose={onClose} opened={opened}>
          <Modal.Overlay />
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body dangerouslySetInnerHTML={{ __html: content }} />
          {/* Todo Footer Button */}
        </Modal.Root>
      ) : null}
    </>
  )
}
