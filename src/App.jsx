// App.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // You'll need to install framer-motion
import { FiSun, FiMoon, FiPlus, FiCheck, FiTrash } from "react-icons/fi"; // Install react-icons

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: newTask,
        completed: false,
        createdAt: new Date().toISOString(),
      },
    ]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100"
      }`}>
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Task Dashboard</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg`}>
            {darkMode ? (
              <FiSun className="w-6 h-6" />
            ) : (
              <FiMoon className="w-6 h-6" />
            )}
          </button>
        </motion.div>

        {/* Task Input */}
        <motion.form
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onSubmit={addTask}
          className="mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a new task..."
              className={`flex-1 p-3 rounded-lg shadow-sm ${
                darkMode ? "bg-gray-800 text-white" : "bg-white"
              }`}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors">
              <FiPlus className="w-6 h-6" />
            </button>
          </div>
        </motion.form>

        {/* Filter Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex gap-2 mb-6">
          {["all", "active", "completed"].map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`px-4 py-2 rounded-lg capitalize transition-all ${
                filter === filterType
                  ? "bg-blue-500 text-white"
                  : darkMode
                  ? "bg-gray-800 text-gray-300"
                  : "bg-white text-gray-600"
              }`}>
              {filterType}
            </button>
          ))}
        </motion.div>

        {/* Task List */}
        <motion.div layout className="space-y-3">
          {filteredTasks.map((task) => (
            <motion.div
              layout
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              key={task.id}
              className={`p-4 rounded-lg shadow-md flex items-center justify-between ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    task.completed
                      ? "bg-green-500 border-green-500"
                      : "border-gray-400"
                  }`}>
                  {task.completed && <FiCheck className="text-white" />}
                </button>
                <span
                  className={`${
                    task.completed ? "line-through text-gray-500" : ""
                  }`}>
                  {task.text}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500">
                  {new Date(task.createdAt).toLocaleDateString()}
                </span>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 hover:text-red-600 transition-colors">
                  <FiTrash />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`mt-8 p-4 rounded-lg ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold">{tasks.length}</p>
              <p className="text-gray-500">Total Tasks</p>
            </div>
            <div>
              <p className="text-2xl font-bold">
                {tasks.filter((t) => !t.completed).length}
              </p>
              <p className="text-gray-500">Active</p>
            </div>
            <div>
              <p className="text-2xl font-bold">
                {tasks.filter((t) => t.completed).length}
              </p>
              <p className="text-gray-500">Completed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
