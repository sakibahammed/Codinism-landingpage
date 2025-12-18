import { create } from "zustand";

// Enums
export enum TimeFrame {
  Immediately = "Immediately",
  WithinOneTwoWeeks = "WithinOneTwoWeeks",
  WithinTwoFourWeeks = "WithinTwoFourWeeks",
  NotSureYet = "NotSureYet",
}

export enum TeamSize {
  OneDeveloper = "OneDeveloper",
  TwoThreeDevelopers = "TwoThreeDevelopers",
  FullTeamFourPlusDevelopers = "FullTeam:FourPlusDevelopers",
  NotSureYet = "NotSureYet",
}

// Store
interface ProjectStore {
  techStacks: string[];
  timeFrame: TimeFrame;
  teamSize: TeamSize;

  setTechStacks: (techs: string[]) => void;
  setTimeFrame: (t: TimeFrame) => void;
  setTeamSize: (t: TeamSize) => void;
  toggleTechStack: (t: string) => void;
}

export const useTeamSpecs = create<ProjectStore>((set) => ({
  techStacks: [],
  timeFrame: "" as TimeFrame.NotSureYet,
  teamSize: "" as TeamSize.NotSureYet,

  setTechStacks: (techs) => set({ techStacks: techs }),
  setTimeFrame: (t) => set({ timeFrame: t }),
  setTeamSize: (t) => set({ teamSize: t }),
  toggleTechStack: (tech) =>
    set((state) => {
      const exists = state.techStacks.includes(tech);

      return {
        techStacks: exists
          ? state.techStacks.filter((t) => t !== tech)
          : [...state.techStacks, tech],
      };
    }),
}));
