import { create } from '@karasports/sdk/state'

interface OpenModalPayload {
  content: string
  title: string
  buttons: React.ReactNode[]
}

interface ModalProviderState {
  opened: boolean
  title: string
  content: string
  buttons: React.ReactNode[]
  onOpen: (payload: OpenModalPayload) => void
  onClose: () => void
}

export const useModalStore = create<ModalProviderState>()((set) => ({
  opened: false,
  title: '',
  buttons: [],
  content: '',
  onOpen: (payload: OpenModalPayload) => set({ opened: true, ...payload }),
  onClose: () => set({ opened: false })
}))
