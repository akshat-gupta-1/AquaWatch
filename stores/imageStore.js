import { create } from 'zustand';

const useImageStore = create((set) => ({
  image: '',
  setImage: (image) => set(() => ({ image: image })),
}));
export default useImageStore;
