import React, { useState } from "react";
import "./ProjectForm.css";

function ProjectForm({ addProject }) {
    const [isGroup, setIsGroup] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("top");
    const [colorTheme, setColorTheme] = useState("#ffffff");
    const [leaderEmail, setLeaderEmail] = useState("");
    const [members, setMembers] = useState([{ name: "", email: "" }]);

    // Handlers for form inputs
    const handleMemberChange = (index, field, value) => {
        const updatedMembers = members.map((member, i) =>
            i === index ? { ...member, [field]: value } : member
        );
        setMembers(updatedMembers);
    };

    const addMember = () => {
        setMembers([...members, { name: "", email: "" }]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (projectName.trim() === "") {
            alert("Please enter a project name.");
            return;
        }

        const newProject = {
            projectName,
            description,
            priority,
            colorTheme,
            leaderEmail: isGroup ? leaderEmail : null,
            members: isGroup ? members : null,
        };

        addProject(newProject);

        // Reset form fields
        setProjectName("");
        setDescription("");
        setPriority("top");
        setColorTheme("#ffffff");
        setLeaderEmail("");
        setMembers([{ name: "", email: "" }]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{isGroup ? "Group Project" : "Individual Project"}</h2>
            <br />
            <label>
                <input
                    type="radio"
                    value="individual"
                    checked={!isGroup}
                    onChange={() => setIsGroup(false)}
                />
                Individual
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    value="group"
                    checked={isGroup}
                    onChange={() => setIsGroup(true)}
                />
                Group
            </label>
            <br />

            <div className="input-container">
                <input
                    className="pro-name"
                    type="text"
                    placeholder="Project Name"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                />
            </div>
            <br />

            <div className="input-container">
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <div className="input-container">
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="top">Top Priority</option>
                    <option value="middle">Middle Priority</option>
                    <option value="low">Less Priority</option>
                </select>
            </div>

            {/* <div className="input-container">
                <input
                    type="color"
                    value={colorTheme}
                    onChange={(e) => setColorTheme(e.target.value)}
                />
            </div> */}

            {isGroup && (
                <>
                    <div className="input-container">
                        <input
                            type="email"
                            placeholder="Team Leader Email"
                            value={leaderEmail}
                            onChange={(e) => setLeaderEmail(e.target.value)}
                        />
                    </div>
                    <h3>Team Members</h3>
                    {members.map((member, index) => (
                        <div key={index} className="input-container">
                            <input
                                type="text"
                                placeholder="Member Name"
                                value={member.name}
                                onChange={(e) =>
                                    handleMemberChange(index, "name", e.target.value)
                                }
                            />
                            <input
                                type="email"
                                placeholder="Member Email"
                                value={member.email}
                                onChange={(e) =>
                                    handleMemberChange(index, "email", e.target.value)
                                }
                            />
                        </div>
                    ))}
                    <button type="button" onClick={addMember}>
                        Add Member
                    </button>
                </>
            )}

            <button type="submit">Add Project</button>
        </form>
    );
}

export default ProjectForm;

