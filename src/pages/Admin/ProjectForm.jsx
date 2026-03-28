import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { FiSave, FiArrowLeft, FiX, FiUpload, FiImage } from 'react-icons/fi';

const ProjectForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditMode = !!id;

    const [formData, setFormData] = useState({
        title: '',
        category: 'Web Development',
        description: '',
        image: '',
        tech: '', // Will be comma separated string input, converted to array
        links: { demo: '', repo: '' }
    });
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(isEditMode);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        if (isEditMode) {
            const fetchProject = async () => {
                const { data, error } = await supabase
                    .from('projects')
                    .select('*')
                    .eq('id', id)
                    .single();

                if (data) {
                    setFormData({
                        ...data,
                        tech: data.tech ? data.tech.join(', ') : '' // Convert array to string for input
                    });
                } else if (error) {
                    console.error("Error fetching project:", error);
                    alert("Project not found!");
                    navigate('/admin/dashboard');
                }
                setFetching(false);
            };
            fetchProject();
        }
    }, [id, isEditMode, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData(prev => ({
                ...prev,
                [parent]: { ...prev[parent], [child]: value }
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploading(true);

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target.result;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                // Resize logic: Max width 800px to keep size down
                const MAX_WIDTH = 800;
                let width = img.width;
                let height = img.height;

                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }

                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);

                // Compress: JPEG quality 0.6
                const dataUrl = canvas.toDataURL('image/jpeg', 0.6);

                setFormData(prev => ({ ...prev, image: dataUrl }));
                setUploading(false);
            };
            img.onerror = () => {
                alert("Failed to load image for compression.");
                setUploading(false);
            };
        };

        reader.onerror = () => {
            alert("Failed to read file");
            setUploading(false);
        };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const projectData = {
            title: formData.title,
            category: formData.category,
            description: formData.description,
            image: formData.image,
            links: formData.links,
            tech: formData.tech.split(',').map(item => item.trim()).filter(item => item !== '')
        };

        try {
            let error;
            if (isEditMode) {
                const { error: updateError } = await supabase
                    .from('projects')
                    .update(projectData)
                    .eq('id', id);
                error = updateError;
            } else {
                const { error: insertError } = await supabase
                    .from('projects')
                    .insert([projectData]);
                error = insertError;
            }

            if (error) throw error;
            navigate('/admin/dashboard');
        } catch (error) {
            console.error("Error saving project: ", error);
            alert("Failed to save project: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    if (fetching) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-light-base dark:bg-dark-base">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-light-primary dark:border-dark-primary"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-light-base dark:bg-dark-base text-light-text dark:text-dark-text pb-20">
            <nav className="bg-light-card dark:bg-dark-card border-b border-light-border dark:border-dark-border px-6 py-4 sticky top-0 z-50">
                <div className="container mx-auto flex items-center gap-4">
                    <button onClick={() => navigate('/admin/dashboard')} className="p-2 hover:bg-light-base dark:hover:bg-dark-base rounded-full transition-colors">
                        <FiArrowLeft size={20} />
                    </button>
                    <h1 className="text-xl font-bold font-display">{isEditMode ? 'Edit Project' : 'Add New Project'}</h1>
                </div>
            </nav>

            <div className="container mx-auto px-4 py-8 max-w-3xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="bg-light-card dark:bg-dark-card p-6 rounded-xl border border-light-border dark:border-dark-border space-y-6">

                        {/* Title & Category */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2 opacity-80">Project Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 rounded-lg border border-light-border dark:border-dark-border bg-light-base dark:bg-dark-base focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 opacity-80">Category</label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-light-border dark:border-dark-border bg-light-base dark:bg-dark-base focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary outline-none"
                                >
                                    <option value="Web Development">Web Development</option>
                                    <option value="Data Science">Data Science</option>
                                    <option value="Data Analysis">Data Analysis</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium mb-2 opacity-80">Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full px-4 py-2 rounded-lg border border-light-border dark:border-dark-border bg-light-base dark:bg-dark-base focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary outline-none resize-none"
                            ></textarea>
                        </div>

                        {/* Image URL & Upload */}
                        <div>
                            <label className="block text-sm font-medium mb-2 opacity-80">Project Image</label>

                            <div className="flex flex-col gap-4">
                                <div className="flex gap-4 items-start">
                                    <div className="flex-1">
                                        <input
                                            type="url"
                                            name="image"
                                            value={formData.image}
                                            onChange={handleChange}
                                            placeholder="Paste image URL or upload below..."
                                            required
                                            className="w-full px-4 py-2 rounded-lg border border-light-border dark:border-dark-border bg-light-base dark:bg-dark-base focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary outline-none"
                                        />
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            disabled={uploading}
                                        />
                                        <button
                                            type="button"
                                            className={`px-4 py-2 rounded-lg border border-light-border dark:border-dark-border bg-light-base dark:bg-dark-base hover:bg-light-section dark:hover:bg-dark-section transition-colors flex items-center gap-2 ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            {uploading ? <div className="w-4 h-4 border-2 border-light-primary border-t-transparent rounded-full animate-spin"></div> : <FiUpload />}
                                            {uploading ? 'Uploading...' : 'Upload'}
                                        </button>
                                    </div>
                                </div>

                                {formData.image && (
                                    <div className="relative h-48 w-full rounded-lg overflow-hidden border border-light-border dark:border-dark-border bg-black/5">
                                        <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                                        <div className="absolute top-2 right-2">
                                            <button
                                                type="button"
                                                onClick={() => setFormData(prev => ({ ...prev, image: '' }))}
                                                className="p-1 bg-black/50 hover:bg-red-500 rounded-full text-white transition-colors"
                                            >
                                                <FiX size={16} />
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {!formData.image && (
                                    <div className="h-48 w-full rounded-lg border-2 border-dashed border-light-border dark:border-dark-border flex flex-col items-center justify-center text-light-text/40 dark:text-dark-text/40 gap-2">
                                        <FiImage size={32} />
                                        <span className="text-sm">No image selected</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div>
                            <label className="block text-sm font-medium mb-2 opacity-80">Tech Stack (comma separated)</label>
                            <input
                                type="text"
                                name="tech"
                                value={formData.tech}
                                onChange={handleChange}
                                placeholder="React, Node.js, Python, etc."
                                className="w-full px-4 py-2 rounded-lg border border-light-border dark:border-dark-border bg-light-base dark:bg-dark-base focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary outline-none"
                            />
                        </div>

                        {/* Links */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2 opacity-80">Demo Link</label>
                                <input
                                    type="url"
                                    name="links.demo"
                                    value={formData.links?.demo || ''}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-light-border dark:border-dark-border bg-light-base dark:bg-dark-base focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 opacity-80">Repository Link</label>
                                <input
                                    type="url"
                                    name="links.repo"
                                    value={formData.links?.repo || ''}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-light-border dark:border-dark-border bg-light-base dark:bg-dark-base focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary outline-none"
                                />
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={() => navigate('/admin/dashboard')}
                            className="px-6 py-2 rounded-lg border border-light-border dark:border-dark-border hover:bg-light-card dark:hover:bg-dark-card transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading || uploading}
                            className="px-6 py-2 bg-light-primary hover:bg-light-hover dark:bg-dark-primary dark:hover:bg-dark-hover text-white font-bold rounded-lg transition-colors flex items-center gap-2"
                        >
                            {loading ? 'Saving...' : <><FiSave /> Save Project</>}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProjectForm;
