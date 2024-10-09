import { z } from "zod";

export interface Project {
    $id?: string;
    title: string;
    subtitle: string;
    description: string;
    imageURL: string;
    githubURL: string;
    liveURL: string;
    date: string;
};
