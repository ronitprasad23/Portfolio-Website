import React, { useEffect, useState } from 'react';
import { api } from '../../lib/api';
import { Link, useNavigate } from 'react-router-dom';
import { FiPlus, FiEdit2, FiTrash2, FiLogOut } from 'react-icons/fi';

const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const data = await api.getProjects();
            setProjects(data || []);
        } catch (error) {
            console.error("Error fetching projects: ", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this project?")) {
            try {
                await api.deleteProject(id);
                fetchProjects(); // Refresh list
            } catch (error) {
                console.error("Error deleting project: ", error);
                alert("Failed to delete project: " + error.message);
            }
        }
    };

    const handleLogout = () => {
        api.logout();
        navigate('/admin/login');
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-light-base dark:bg-dark-base">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-light-primary dark:border-dark-primary"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-light-base dark:bg-dark-base text-light-text dark:text-dark-text">
            <nav className="bg-light-card dark:bg-dark-card border-b border-light-border dark:border-dark-border px-6 py-4 flex justify-between items-center sticky top-0 z-50">
                <h1 className="text-xl font-bold font-display">Admin Dashboard</h1>
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors"
                >
                    <FiLogOut /> Logout
                </button>
            </nav>

            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold">Projects ({projects.length})</h2>
                    <Link
                        to="/admin/new"
                        className="flex items-center gap-2 bg-light-primary hover:bg-light-hover dark:bg-dark-primary dark:hover:bg-dark-hover text-white px-4 py-2 rounded-lg transition-colors font-semibold"
                    >
                        <FiPlus /> Add New Project
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map(project => (
                        <div key={project.id} className="bg-light-card dark:bg-dark-card rounded-xl border border-light-border dark:border-dark-border overflow-hidden flex flex-col">
                            <div className="h-48 overflow-hidden relative group">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4 flex-1 flex flex-col">
                                <span className="text-xs font-bold text-light-primary dark:text-dark-primary mb-2 uppercase">{project.category}</span>
                                <h3 className="text-lg font-bold mb-2 text-light-heading dark:text-dark-heading">{project.title}</h3>
                                <p className="text-sm text-light-text/80 dark:text-dark-text/80 line-clamp-2 mb-4 flex-1">
                                    {project.description}
                                </p>
                                <div className="flex justify-end gap-3 pt-4 border-t border-light-border dark:border-dark-border mt-auto">
                                    <Link
                                        to={`/admin/edit/${project.id}`}
                                        className="p-2 text-light-text hover:text-light-primary dark:text-dark-text dark:hover:text-dark-primary transition-colors"
                                    >
                                        <FiEdit2 size={18} />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(project.id)}
                                        className="p-2 text-light-text hover:text-red-500 dark:text-dark-text dark:hover:text-red-500 transition-colors"
                                    >
                                        <FiTrash2 size={18} />
                                    </button>
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tech && project.tech.length > 0 && Array.isArray(project.tech) ? (
                                        project.tech.map((t, index) => (
                                            <span key={index} className="text-xs bg-light-section dark:bg-dark-section border border-light-border dark:border-dark-border text-light-text dark:text-dark-text px-2 py-1 rounded-md">
                                                {t}
                                            </span>
                                        ))
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {projects.length === 0 && (
                    <div className="text-center py-20 bg-light-card dark:bg-dark-card rounded-xl border border-light-border dark:border-dark-border border-dashed">
                        <p className="text-light-text/60 dark:text-dark-text/60">No projects found. Start by adding one!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
