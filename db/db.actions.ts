import { db, Project } from './db.model';

export const createProject = async (project: Project) => {
    project.date = new Date();
    project.count = 1;
    await db.table('projects').add(project);
};

export const getAllProjects = async () => {
    return await db.table('projects').toArray();
};

export const getProjectById = async (id: number) => {
    return await db.table('projects').get(id);
};

export const updateProject = async (id: number, updatedProject: Project) => {
    const { date, count, ...rest } = updatedProject;
    await db.table('projects').update(id, rest);
};

export const deleteProject = async (id: number) => {
    await db.table('projects').delete(id);
};