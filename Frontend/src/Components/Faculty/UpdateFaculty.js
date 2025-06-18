import React, { useState, useEffect } from 'react';
import SideBar from '../SideBar';
import Header from '../Header';
import Footer from '../Footer';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../../assets/css/addRoom.css';

const UpdateFaculty = () => {
    const { facultyId } = useParams(); // Make sure the route is like /faculty/update/:facultyId

    const [facultyName, setFacultyName] = useState("");
    const [facultyEmail, setFacultyEmail] = useState("");
    const [facultyPassword, setFacultyPassword] = useState("");
    const [facultyPhone, setFacultyPhone] = useState("");
    const [facultyGender, setFacultyGender] = useState("");
    const [facultyDepartment, setFacultyDepartment] = useState("");
    const [facultyDesignation, setFacultyDesignation] = useState("");
    const [facultyRole, setFacultyRole] = useState("");

    useEffect(() => {
        const fetchFaculty = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`http://localhost:8080/faculty/get/${facultyId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
    
                const faculty = response.data.faculty;
                setFacultyName(faculty.name);
                setFacultyEmail(faculty.email);
                setFacultyPhone(faculty.phone);
                setFacultyGender(faculty.gender || ""); // fallback to "" if gender is not returned
                setFacultyDepartment(faculty.department);
                setFacultyDesignation(faculty.designation);
                setFacultyRole(faculty.role);
            } catch (error) {
                toast.error("Failed to fetch faculty details");
            }
        };
    
        fetchFaculty();
    }, [facultyId]);

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");

            const response = await axios.put(
                `http://localhost:8080/faculty/update/${facultyId}`,
                {
                    facultyName,
                    facultyEmail,
                    facultyPassword: facultyPassword || undefined, // only send if not empty
                    facultyPhone,
                    facultyGender,
                    facultyDepartment,
                    facultyDesignation,
                    facultyRole
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
            );

            if (response.data.statusCode === 200) {
                toast.success("Room updated successfully");
            } else {
                toast.error(response.data.message || "Update failed");
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || "Error updating Room");
        }
    };

    return (
        <>
            <SideBar />
            <Header />
            <ToastContainer />
            <div className="add-faculty-container">
                <h2 className="form-title">Update Rooms</h2>
                <form className="student-form-grid" onSubmit={handleUpdateSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            required
                            value={facultyName}
                            onChange={(e) => setFacultyName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            required
                            value={facultyEmail}
                            onChange={(e) => setFacultyEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone</label>
                        <input
                            type="tel"
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
                            <option value="">Room Sharing</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Department</label>
                        <input
                            type="text"
                            required
                            value={facultyDepartment}
                            onChange={(e) => setFacultyDepartment(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Designation</label>
                        <input
                            type="text"
                            required
                            value={facultyDesignation}
                            onChange={(e) => setFacultyDesignation(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Room No</label>
                        <select
                            required
                            value={facultyRole}
                            onChange={(e) => setFacultyRole(e.target.value)}
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
                        <button type="submit" className="submit-btn">Update</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default UpdateFaculty;
