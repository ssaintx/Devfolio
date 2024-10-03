import { ID } from 'node-appwrite';
import { Project } from './appwrite.model';
import { parseStringify } from '../lib/utils';
import { databases, DATABASE_ID, COLLECTION_ID } from './appwrite.config';

// Function to create a new project
export const createProject = async (project: Project) => {
    try {
        project.date = new Date();

        const response = await databases.createDocument(
            DATABASE_ID!,
            COLLECTION_ID!,
            ID.unique(),
            project
        );

        return parseStringify(response);
    } catch (error: any) {
        console.error('Error creating project:', error);
        throw new Error(`Error creating project: ${error.message}`);
    }
};

export const getAllProjects = async () => {
    try {
        const response = await databases.listDocuments(
            DATABASE_ID!,
            COLLECTION_ID!
        );
        return response.documents.map((doc) => parseStringify(doc));
    } catch (error: any) {
        console.error('Error fetching projects:', error);
        throw new Error(`Error fetching projects: ${error.message}`);
    }
};

// Function to update an existing project
export const updateProject = async (id: string, updatedProject: Partial<Project>) => {
    try {
        const response = await databases.updateDocument(
            DATABASE_ID!,
            COLLECTION_ID!,
            id,
            updatedProject
        );

        return parseStringify(response);
    } catch (error: any) {
        console.error('Error updating project:', error);
        throw new Error(`Error updating project: ${error.message}`);
    }
};

// Function to delete a project
export const deleteProject = async (id: string) => {
    try {
        await databases.deleteDocument(DATABASE_ID!, COLLECTION_ID!, id);
    } catch (error: any) {
        console.error('Error deleting project:', error);
        throw new Error(`Error deleting project: ${error.message}`);
    }
};
