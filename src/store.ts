import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface FilterStoreType {
  selectedTribe: string;
  selectedTeam: string;
  actions: {
    setSelectedTribe: (tribeId: string) => void;
    setSelectedTeam: (teamId: string) => void;
  };
}

const useFilterStore = create<FilterStoreType>()(
  devtools(
    (set) => ({
      selectedTribe: "1",
      selectedTeam: "",
      actions: {
        setSelectedTribe: (tribeId) => set(() => ({ selectedTribe: tribeId, selectedTeam: "" })),
        setSelectedTeam: (teamId) => set(() => ({ selectedTeam: teamId })),
      },
    }),
    {
      name: "filter-storage",
    }
  )
);

export const useSelectedTribe = () => useFilterStore((store) => store.selectedTribe);
export const useSelectedTeam = () => useFilterStore((store) => store.selectedTeam);
export const useFilterActions = () => useFilterStore((state) => state.actions);
