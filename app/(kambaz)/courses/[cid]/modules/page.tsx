"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Module from "./Module";
import Lesson from "./Lesson";
import ModulesControls from "./ModulesControls";
import { useModulesStore } from "../../../store/modulesStore";
import * as client from "./client";

export default function Modules() {
  const { cid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const allModules = useModulesStore((state) => state.modules);
  const setModules = useModulesStore((state) => state.setModules);
  const addModule = useModulesStore((state) => state.addModule);
  const deleteModule = useModulesStore((state) => state.deleteModule);
  const updateModule = useModulesStore((state) => state.updateModule);
  const editModule = useModulesStore((state) => state.editModule);
  const [moduleName, setModuleName] = useState("");
  const [error, setError] = useState("");
  const modules = allModules.filter((module) => module.course === courseId);

  useEffect(() => {
    if (!courseId) return;
    client
      .findModulesForCourse(courseId)
      .then(setModules)
      .catch(() => setError("Could not load modules from the server"));
  }, [courseId, setModules]);

  const onAddModule = async () => {
    try {
      const created = await client.createModuleForCourse(courseId, {
        name: moduleName,
      });
      addModule(created);
      setModuleName("");
      setError("");
    } catch {
      setError("Could not add the module");
    }
  };
  const onDeleteModule = async (moduleId: string) => {
    try {
      await client.deleteModule(moduleId);
      deleteModule(moduleId);
      setError("");
    } catch {
      setError("Could not delete the module");
    }
  };
  // Typing only changes the cached copy; the server is updated on Enter.
  const onSaveModule = async (module: (typeof modules)[number]) => {
    try {
      const saved = await client.updateModule({ ...module, editing: false });
      updateModule(saved);
      setError("");
    } catch {
      setError("Could not save the module");
    }
  };
  return (
    <div>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={() => {
          if (moduleName.trim() === "") return;
          onAddModule();
        }}
      />
      {error && (
        <div id="wd-modules-error" className="mb-2 rounded bg-red-100 p-2 text-red-800">
          {error}
        </div>
      )}
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module
            key={module._id}
            moduleId={module._id}
            deleteModule={onDeleteModule}
            editModule={editModule}
            title={
              module.editing ? (
                <input
                  className="w-1/2 rounded border border-neutral-300 px-2 py-1 text-base"
                  defaultValue={module.name}
                  onChange={(e) =>
                    updateModule({ ...module, name: e.target.value })
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      onSaveModule(module);
                    }
                  }}
                />
              ) : (
                module.name
              )
            }
          >
            {module.lessons?.map((lesson) => (
              <Lesson key={lesson._id} title={lesson.name} />
            ))}
          </Module>
        ))}
      </ul>
    </div>
  );
}
