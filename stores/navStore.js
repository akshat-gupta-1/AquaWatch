import { create } from 'zustand';

const useNavStore = create((set) => ({
  origin: null,
  destination: null,
  travelTimeInformation: null,
  setOrigin: (place) => {
    set(() => ({
      origin: place,
    }));
  },
  setDestination: (place) => {
    set(() => ({
      destination: place,
    }));
  },
  setTravelInformation: (information) => {
    set(() => ({
      travelTimeInformation: information,
    }));
  },
}));

export default useNavStore;
