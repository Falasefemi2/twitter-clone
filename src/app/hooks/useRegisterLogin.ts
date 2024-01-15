import {create} from 'zustand'
import { RegisterModalStore } from '../types/types'

const useRegisterModal = create<RegisterModalStore>((set)  => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));

export default useRegisterModal;