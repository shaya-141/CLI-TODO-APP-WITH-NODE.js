# 📝 Node.js Task 

A simple **Command Line Interface (CLI) Task Manager** built with **Node.js** and **File System (fs)** module. This application allows you to **add, list, remove, and mark tasks as done** using command-line commands.

## 🚀 Features
- ✅ **Add a new task**  
- 📌 **List all tasks** with status  
- 🗑️ **Remove a task** by ID  
- ⏳ **Mark a task as completed**  

## 🛠️ Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/shaya-141/node-task-manager.git
   cd node-task-manager
   
2. **Install dependencies:**
   ```bash
   npm install
   
3. **Run the CLI:**
   ```bash
   node index.js <command> <value>

## 🔧 Commands

| Command  | Description             | Example                              |
|----------|-------------------------|--------------------------------------|
| `add`    | Add a new task          | `node index.js add "Buy groceries"`  |
| `list`   | Show all tasks          | `node index.js list`                 |
| `done`   | Mark task as completed  | `node index.js done 1`               |
| `remove` | Delete a task           | `node index.js remove 1`             |
| `help`   | Show all command        | `node index.js help`                 |

## 📂 File Structure

```bash
📦 node-task-manager
 ┣ 📜 index.js       # Main CLI logic
 ┣ 📜 package.json   # Project dependencies
 ┣ 📜 task.json      # Task storage file
 ┗ 📜 README.md      # Project documentation


