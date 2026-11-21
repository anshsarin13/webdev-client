"use client";
import { create } from "zustand";

export type CourseModule = {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons?: { _id: string; name: string; description: string; module: string }[];
  editing?: boolean;
};

export const useModulesStore = create<{
  modules: CourseModule[];
  setModules: (modules: CourseModule[]) => void;
  addModule: (module: CourseModule) => void;
  deleteModule: (moduleId: string) => void;
  updateModule: (module: CourseModule) => void;
  editModule: (moduleId: string) => void;
}>((set) => ({
  modules: [],
  setModules: (modules) => set({ modules }),
  addModule: (module) =>
    set((state) => ({ modules: [...state.modules, module] })),
  deleteModule: (moduleId) =>
    set((state) => ({
      modules: state.modules.filter((m) => m._id !== moduleId),
    })),
  updateModule: (module) =>
    set((state) => ({
      modules: state.modules.map((m) => (m._id === module._id ? module : m)),
    })),
  editModule: (moduleId) =>
    set((state) => ({
      modules: state.modules.map((m) =>
        m._id === moduleId ? { ...m, editing: true } : m,
      ),
    })),
}));
