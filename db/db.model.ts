import Dexie from 'dexie';

export interface Project {
    id?: number;
    title: string;
    subtitle: string;
    description: string;
    imageURL: string;
    date: Date;
    count?: number;
};

export const db = new Dexie('projects');

db.version(1).stores({
    projects: '++id, title, subtitle, description, imageURL, date, count',
});