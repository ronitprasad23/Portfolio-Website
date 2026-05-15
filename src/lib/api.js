const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const getHeaders = () => {
  const token = localStorage.getItem('adminToken');
  return {
    'Content-Type': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {})
  };
};

export const api = {
  // Auth
  login: async (email, password) => {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Login failed');
    return data;
  },

  // Projects
  getProjects: async () => {
    const response = await fetch(`${API_URL}/projects`);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Failed to fetch projects');
    return data;
  },

  getProject: async (id) => {
    const response = await fetch(`${API_URL}/projects/${id}`);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Failed to fetch project');
    return data;
  },

  createProject: async (projectData) => {
    const response = await fetch(`${API_URL}/projects`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(projectData)
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Failed to create project');
    return data;
  },

  updateProject: async (id, projectData) => {
    const response = await fetch(`${API_URL}/projects/${id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(projectData)
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Failed to update project');
    return data;
  },

  deleteProject: async (id) => {
    const response = await fetch(`${API_URL}/projects/${id}`, {
      method: 'DELETE',
      headers: getHeaders()
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Failed to delete project');
    return data;
  },

  logout: () => {
    localStorage.removeItem('adminToken');
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('adminToken');
  }
};
