import { useState } from "react";

export default function TodoApp() {
  const [taskList, setTaskList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [task, setTask] = useState({});

  const taskHandler = () => {
    let newTask = { ...task };
    if (!isEdit) {
      newTask = { ...task, id: Math.random() * 1000 };
      setTaskList((prev) => [...prev, newTask]);
    } else {
      setTaskList((prev) => prev.map((t) => (t.id === task.id ? task : t)));
    }
    setTask({});
    setIsOpen(false);
    setIsEdit(false);
  };

  const editTaskHandler = (t) => {
    setTask({ id: t.id, taskName: t.taskName, taskDesc: t.taskDesc });
    setIsEdit(true);
    setIsOpen(true);
  };

  const deleteTaskHandler = (t) => {
    setTaskList((prev) => prev.filter((x) => x.id !== t.id));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center">📝 Todo List</h1>

        {/* Add Task Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-indigo-500 hover:bg-indigo-400 text-white font-medium px-5 py-2 rounded-lg shadow"
          >
            Add Task
          </button>
        </div>

        {/* Modal Form */}
        {isOpen && (
          <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-center">
              {isEdit ? "Edit Task" : "New Task"}
            </h2>

            <input
              type="text"
              placeholder="Task title"
              value={task.taskName || ""}
              onChange={(e) =>
                setTask((prev) => ({ ...prev, taskName: e.target.value }))
              }
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
              rows={3}
              placeholder="Task description"
              value={task.taskDesc || ""}
              onChange={(e) =>
                setTask((prev) => ({ ...prev, taskDesc: e.target.value }))
              }
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsEdit(false);
                  setTask({});
                }}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-lg transition"
              >
                Cancel
              </button>
              <button
                onClick={taskHandler}
                disabled={!(task.taskName && task.taskDesc)}
                className={`px-5 py-2 rounded-lg font-medium transition ${
                  task.taskName && task.taskDesc
                    ? "bg-indigo-500 hover:bg-indigo-400"
                    : "bg-gray-700 cursor-not-allowed"
                }`}
              >
                {isEdit ? "Update" : "Add"}
              </button>
            </div>
          </div>
        )}

        {/* Task List */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg shadow divide-y divide-gray-700 overflow-hidden">
          {taskList.length === 0 ? (
            <p className="p-4 text-center text-gray-400">
              No tasks yet. Add one above!
            </p>
          ) : (
            taskList.map((t) => (
              <div
                key={t.id}
                className="px-4 py-3 hover:bg-gray-700 transition flex justify-between items-start"
              >
                <div>
                  <h3 className="text-lg font-medium">{t.taskName}</h3>
                  <p className="text-sm text-gray-400 mt-1">{t.taskDesc}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => editTaskHandler(t)}
                    className="px-3 py-1 bg-indigo-500 hover:bg-indigo-400 rounded-lg text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTaskHandler(t)}
                    className="px-3 py-1 bg-red-600 hover:bg-red-500 rounded-lg text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
