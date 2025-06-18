import React, { useState } from 'react';
import SideBar from '../SideBar';
import Header from '../Header';
import Footer from '../Footer';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import '../../assets/css/addRoom.css';


const AddFaculty = () => {
    const [facultyName, setFacultyName] = useState("");
    const [facultyEmail, setFacultyEmail] = useState("");
    const [facultyPassword, setFacultyPassword] = useState("1234567");
    const [facultyPhone, setFacultyPhone] = useState("");
    const [facultyGender, setFacultyGender] = useState("");
    const [facultyDepartment, setFacultyDepartment] = useState("");
    const [facultyDesignation, setFacultyDesignation] = useState("");
    const [role, setRole] = useState("");

    const handelFacultySubmit = async (e) => {
        e.preventDefault();
        console.log(facultyName, facultyEmail, facultyPassword, facultyPhone, facultyGender, facultyDepartment, facultyDesignation, role);

        try {
            const token = localStorage.getItem("token");

            if (!token) {
                toast.error("Unauthorized: No token found");
                return;
            }

            const response = await axios.post(
                "http://localhost:8080/faculty/register",
                {
                    facultyName: facultyName,
                    facultyEmail: facultyEmail,
                    facultyPassword: facultyPassword,
                    facultyPhone: facultyPhone,
                    facultyGender: facultyGender, // optional, if not used in backend, remove it
                    facultyDepartment: facultyDepartment,
                    facultyDesignation: facultyDesignation,
                    facultyRole: role // <-- 'role' should be renamed to 'facultyRole'
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
            );

            console.log(response.data);
            if (response.data.statusCode === 200) {
                toast.success(response.data.message || "Room registered successfully");
            }

        } catch (error) {
            console.error(error);
            const errMsg = error.response?.data?.message || "Something went wrong";
            toast.error(errMsg);
        }
    };

    return (
        <>
            <SideBar />
            <Header />
            <ToastContainer />
            <div className="add-faculty-container">
                <h2 className="form-title">Add Room</h2>
                <form className="student-form-grid" onSubmit={handelFacultySubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Enter full name"
                            required
                            value={facultyName}
                            onChange={(e) => setFacultyName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            required
                            value={facultyEmail}
                            onChange={(e) => setFacultyEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone</label>
                        <input
                            type="tel"
                            placeholder="Enter phone number"
                            required
                            value={facultyPhone}
                            onChange={(e) => setFacultyPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Room Sharing</label>
                        <select
                            required
                            value={facultyGender}
                            onChange={(e) => setFacultyGender(e.target.value)}
                        >
                            <option value="">Select Room</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Department</label>
                        <input
                            type="text"
                            placeholder="Enter department"
                            required
                            value={facultyDepartment}
                            onChange={(e) => setFacultyDepartment(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Designation</label>
                        <input
                            type="text"
                            placeholder="Enter program"
                            required
                            value={facultyDesignation}
                            onChange={(e) => setFacultyDesignation(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Room no</label>
                        <select
                            required
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="">Select Room</option>
                            <option value="ac301">AC301</option>
                            <option value="ac302">AC302</option>
                            <option value="ac303">AC303</option>
                            <option value="ac304">AC304</option>
                            <option value="ac305">AC305</option>
                            <option value="ac306">AC306</option>
                            <option value="ac307">AC307</option>
                            <option value="ac308">AC308</option>
                            <option value="ac309">AC309</option>
                            <option value="ac310">AC310</option>

                        </select>
                    </div>
                    <div className="form-group full-width">
                        <button type="submit" className="submit-btn">Submit</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default AddFaculty;
