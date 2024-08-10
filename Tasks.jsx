
// import React, { useState } from "react";
// import "./Tasks.css";

// function Tasks() {
//     const [tasks, setTasks] = useState([]);
//     const [completedTasks, setCompletedTasks] = useState([]);
//     const [task, setTask] = useState("");
//     const [priority, setPriority] = useState("top");
//     const [deadline, setDeadline] = useState("");
//     const [inProgressTasks, setInProgressTasks] = useState([]);

//     const handleTaskChange = (e) => {
//         setTask(e.target.value);
//     };

//     const handlePriorityChange = (e) => {
//         setPriority(e.target.value);
//     };

//     const handleDeadlineChange = (e) => {
//         setDeadline(e.target.value);
//     };

//     const addTask = () => {
//         if (task.trim() === "" || deadline === "") {
//             alert("Please enter a task and select a valid deadline.");
//             return;
//         }

//         const selectedDate = new Date(deadline);
//         const currentDate = new Date();

//         if (selectedDate <= currentDate) {
//             alert("Please select a future date for the deadline.");
//             return;
//         }

//         const assignedDate = new Date().toISOString().split("T")[0];

//         const newTask = {
//             id: tasks.length + 1,
//             task,
//             priority,
//             deadline,
//             assignedDate,
//             done: false,
//             inProgress: false,
//         };

//         setTasks([...tasks, newTask]);

//         setTask("");
//         setPriority("top");
//         setDeadline("");
//     };

//     const markInProgress = (id) => {
//         const updatedTasks = tasks.map((t) =>
//             t.id === id ? { ...t, inProgress: true } : t
//         );
//         setTasks(updatedTasks);

//         const inProgressTask = tasks.find((t) => t.id === id);
//         if (inProgressTask) {
//             setInProgressTasks([...inProgressTasks, inProgressTask]);
//         }
//     };

//     const markDone = (id) => {
//         const updatedTasks = tasks.map((t) =>
//             t.id === id ? { ...t, done: true } : t
//         );
//         setTasks(updatedTasks);

//         const completedTask = tasks.find((t) => t.id === id);
//         if (completedTask) {
//             setCompletedTasks([...completedTasks, completedTask]);
//         }
//     };

//     const deleteTask = (id) => {
//         const updatedTasks = tasks.filter((t) => t.id !== id);
//         setTasks(updatedTasks);
//         const updatedCompletedTasks = completedTasks.filter((t) => t.id !== id);
//         setCompletedTasks(updatedCompletedTasks);
//         const updatedInProgressTasks = inProgressTasks.filter((t) => t.id !== id);
//         setInProgressTasks(updatedInProgressTasks);
//     };

//     const upcomingTasks = tasks.filter((t) => !t.done);

//     return (
//         <div className="Tasks">
//             <header>
//                 <h1>Task Scheduler</h1>
//             </header>
//             <main>
//                 <div className="task-form">
//                     <input
//                         type="text"
//                         id="task"
//                         placeholder="Enter task..."
//                         value={task}
//                         onChange={handleTaskChange}
//                     />
//                     <select
//                         id="priority"
//                         value={priority}
//                         onChange={handlePriorityChange}
//                     >
//                         <option value="top">Top Priority</option>
//                         <option value="middle">Middle Priority</option>
//                         <option value="low">Less Priority</option>
//                     </select>
//                     <input
//                         type="date"
//                         id="deadline"
//                         value={deadline}
//                         onChange={handleDeadlineChange}
//                     />
//                     <button id="add-task" onClick={addTask}>
//                         Add Task
//                     </button>
//                 </div>
//                 <h2 className="heading">Upcoming Tasks</h2>
//                 <div className="task-list" id="task-list">
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Task Name</th>
//                                 <th>Priority</th>
//                                 <th>Assigned Date</th>
//                                 <th>Deadline</th>
//                                 <th>In Progress</th>
//                                 <th>Mark Done</th>
//                                 <th>Delete</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {upcomingTasks.map((t) => (
//                                 <tr key={t.id}>
//                                     <td>{t.task}</td>
//                                     <td>{t.priority}</td>
//                                     <td>{t.assignedDate}</td>
//                                     <td>{t.deadline}</td>
//                                     <td>
//                                         {!t.done && (
//                                             <button
//                                                 className="in-progress"
//                                                 onClick={() => markInProgress(t.id)}
//                                             >
//                                                 In Progress
//                                             </button>
//                                         )}
//                                     </td>
//                                     <td>
//                                         {!t.done && (
//                                             <button
//                                                 className="mark-done"
//                                                 onClick={() => markDone(t.id)}
//                                             >
//                                                 Mark Done
//                                             </button>
//                                         )}
//                                     </td>
//                                     <td>
//                                         <button
//                                             className="delete-task"
//                                             onClick={() => deleteTask(t.id)}
//                                         >
//                                             Delete
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//                 <div className="completed-task-list">
//                     <h2 className="cheading">Completed Tasks</h2>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Task Name</th>
//                                 <th>Priority</th>
//                                 <th>Assigned Date</th>
//                                 <th>Deadline</th>
//                                 <th>Completed</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {completedTasks.map((ct) => (
//                                 <tr key={ct.id}>
//                                     <td>{ct.task}</td>
//                                     <td>{ct.priority}</td>
//                                     <td>{ct.assignedDate}</td>
//                                     <td>{ct.deadline}</td>
//                                     <td>
//                                         <button
//                                             className="completed-task"
//                                             // onClick={() => deleteTask(ct.id)}
//                                         >
//                                             Completed
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </main>
//         </div>
//     );
// }

// export default Tasks;

import React, { useState } from "react";
import ProjectForm from "./ProjectForm";
import "./Tasks.css";

function Tasks() {
    const [menu, setMenu] = useState("tasks");
    const [showCreateDropdown, setShowCreateDropdown] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [projects, setProjects] = useState([]);
    const [scrumMeetings, setScrumMeetings] = useState([]);
    const [task, setTask] = useState("");
    const [scrumMeeting, setScrumMeeting] = useState("");
    const [priority, setPriority] = useState("top");
    const [deadlineDate, setDeadlineDate] = useState("");
    const [deadlineTime, setDeadlineTime] = useState("");

    // Handlers for form inputs
    const handleTaskChange = (e) => setTask(e.target.value);
    const handleScrumMeetingChange = (e) => setScrumMeeting(e.target.value);
    const handlePriorityChange = (e) => setPriority(e.target.value);
    const handleDeadlineDateChange = (e) => setDeadlineDate(e.target.value);
    const handleDeadlineTimeChange = (e) => setDeadlineTime(e.target.value);

    // Add project function to handle adding projects from the ProjectForm component
    const addProject = (newProject) => {
        setProjects([...projects, { ...newProject, id: projects.length + 1, done: false }]);
    };

    // Generic add function to handle tasks and scrum meetings
    const addItem = (itemType) => {
        const itemName = itemType === "task" ? task : scrumMeeting;

        if (itemName.trim() === "" || deadlineDate === "" || deadlineTime === "") {
            alert(`Please enter a ${itemType} and select a valid deadline date and time.`);
            return;
        }

        const selectedDateTime = new Date(`${deadlineDate}T${deadlineTime}`);
        const currentDateTime = new Date();

        if (selectedDateTime <= currentDateTime) {
            alert("Please select a future date and time for the deadline.");
            return;
        }

        const assignedDate = new Date().toISOString().split("T")[0];
        const newItem = {
            id: itemType === "task" ? tasks.length + 1 : scrumMeetings.length + 1,
            name: itemName,
            priority,
            deadline: `${deadlineDate} ${deadlineTime}`,
            assignedDate,
            done: false,
            inProgress: false,
        };

        if (itemType === "task") {
            setTasks([...tasks, newItem]);
            setTask("");
        } else {
            setScrumMeetings([...scrumMeetings, newItem]);
            setScrumMeeting("");
        }

        setPriority("top");
        setDeadlineDate("");
        setDeadlineTime("");
    };

    // Generic mark as done, in progress, delete functions
    const updateItemStatus = (itemType, id, status) => {
        const updateList = (list, statusKey) =>
            list.map((item) => (item.id === id ? { ...item, ...statusKey } : item));

        if (itemType === "task") {
            setTasks(updateList(tasks, status));
        } else if (itemType === "project") {
            setProjects(updateList(projects, status));
        } else {
            setScrumMeetings(updateList(scrumMeetings, status));
        }
    };

    const deleteItem = (itemType, id) => {
        const filteredList = (list) => list.filter((item) => item.id !== id);

        if (itemType === "task") {
            setTasks(filteredList(tasks));
        } else if (itemType === "project") {
            setProjects(filteredList(projects));
        } else {
            setScrumMeetings(filteredList(scrumMeetings));
        }
    };

    // Rendering functions for forms
    const renderForm = () => {
        const inputPlaceholder = menu === "tasks" ? "Enter task..." : "Enter scrum meeting...";

        return menu === "projects" ? (
            <ProjectForm addProject={addProject} />
        ) : (
            <div className="form">
                <input
                    type="text"
                    placeholder={inputPlaceholder}
                    value={menu === "tasks" ? task : scrumMeeting}
                    onChange={menu === "tasks" ? handleTaskChange : handleScrumMeetingChange}
                />
                <select value={priority} onChange={handlePriorityChange}>
                    <option value="top">Top Priority</option>
                    <option value="middle">Middle Priority</option>
                    <option value="low">Less Priority</option>
                </select>
                <input type="date" value={deadlineDate} onChange={handleDeadlineDateChange} />
                <input type="time" value={deadlineTime} onChange={handleDeadlineTimeChange} />
                <button onClick={() => addItem(menu.slice(0, -1))}>
                    Add {menu.charAt(0).toUpperCase() + menu.slice(1, -1)}
                </button>
            </div>
        );
    };

    // Rendering functions for tables
    const renderTable = () => {
        const itemList = menu === "tasks" ? tasks : menu === "projects" ? projects : scrumMeetings;
        const itemType = menu.slice(0, -1);

        return (
            <div>
                <h2 className="heading">Upcoming {menu.charAt(0).toUpperCase() + menu.slice(1)}</h2>
                <div className="list">
                    <table>
                        <thead>
                            <tr>
                                <th>{menu.charAt(0).toUpperCase() + menu.slice(1, -1)} Name</th>
                                <th>Priority</th>
                                <th>Assigned Date</th>
                                <th>Deadline</th>
                                <th>In Progress</th>
                                <th>Mark Done</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemList.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.priority}</td>
                                    <td>{item.assignedDate}</td>
                                    <td>{item.deadline}</td>
                                    <td>
                                        {!item.done && (
                                            <button
                                                className="action-button in-progress"
                                                onClick={() => updateItemStatus(itemType, item.id, { inProgress: true })}
                                            >
                                                In Progress
                                            </button>
                                        )}
                                    </td>
                                    <td>
                                        {!item.done && (
                                            <button
                                                className="action-button mark-done"
                                                onClick={() => updateItemStatus(itemType, item.id, { done: true })}
                                            >
                                                Mark Done
                                            </button>
                                        )}
                                    </td>
                                    <td>
                                        <button className="action-button delete-task" onClick={() => deleteItem(itemType, item.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="list">
                    <h2 className="heading">Completed {menu.charAt(0).toUpperCase() + menu.slice(1)}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>{menu.charAt(0).toUpperCase() + menu.slice(1, -1)} Name</th>
                                <th>Priority</th>
                                <th>Assigned Date</th>
                                <th>Deadline</th>
                                <th>Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemList.filter((item) => item.done).map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.priority}</td>
                                    <td>{item.assignedDate}</td>
                                    <td>{item.deadline}</td>
                                    <td>
                                        <button className="action-button completed-task">Completed</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    return (
        <div className="App">
            <header>
                <h1>Task Scheduler</h1>
            </header>
            <nav>
                <button className="create-button" onClick={() => setMenu("tasks")}>
                    Tasks
                </button>
                <button className="create-button" onClick={() => setMenu("projects")}>
                    Project
                </button>
            </nav>
            <main>
                {renderForm()}
                {renderTable()}
            </main>
        </div>
    );
}

export default Tasks;
