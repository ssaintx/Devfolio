import { ID } from 'node-appwrite';
import { Project } from './appwrite.model';
import { parseStringify } from '../lib/utils';
import { databases, APPWRITE_DB_KEY, APPWRITE_COLLECTION_KEY } from './appwrite.config';

// Function to create a new project
export const createProject = async (project: Project) => {
    try {
        project.date = new Date();

        const response = await databases.createDocument(
            APPWRITE_DB_KEY!,
            APPWRITE_COLLECTION_KEY!,
            ID.unique(),
            project
        );

        return parseStringify(response);
    } catch (error: any) {
        throw new Error(`Error creating project: ${error.message}`);
    }
};

// Function to get all projects
export const getAllProjects = async () => {
    try {
        const response = await databases.listDocuments(
            APPWRITE_DB_KEY!,
            APPWRITE_COLLECTION_KEY!
        );

        return response.documents.map((doc) => parseStringify(doc));
    } catch (error: any) {
        throw new Error(`Error fetching projects: ${error.message}`);
    }
};

// Function to update an existing project
export const updateProject = async (id: string, updatedProject: Partial<Project>) => {
    try {
        const response = await databases.updateDocument(
            APPWRITE_DB_KEY!,
            APPWRITE_COLLECTION_KEY!,
            id,
            updatedProject
        );

        return parseStringify(response);
    } catch (error: any) {
        throw new Error(`Error updating project: ${error.message}`);
    }
};

// Function to delete a project
export const deleteProject = async (id: string) => {
    try {
        await databases.deleteDocument(APPWRITE_DB_KEY!, APPWRITE_COLLECTION_KEY!, id);
    } catch (error: any) {
        throw new Error(`Error deleting project: ${error.message}`);
    }
};
