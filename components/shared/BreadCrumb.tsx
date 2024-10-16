"use client";

import React from "react";

import { usePathname } from "next/navigation";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "../ui/breadcrumb";

export const BreadCrumb = () => {
    const pathname = usePathname();

    const generateBreadcrumbs = (path: string) => {
        const segments = path.split('/').filter(Boolean);
        const crumbs: { href: string; label: string }[] = [];

        let currentPath = '';
        crumbs.push({ href: '/', label: 'Home' });

        for (const segment of segments) {
            currentPath += `/${segment}`;
            crumbs.push({ href: currentPath, label: segment.charAt(0).toUpperCase() + segment.slice(1) });
        }
        return crumbs;
    };

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {pathname && (
                    generateBreadcrumbs(pathname).map((crumb, index) => (
                        <React.Fragment key={index}>
                            <BreadcrumbItem>
                                <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
                            </BreadcrumbItem>
                            {index < generateBreadcrumbs(pathname).length - 1 && <BreadcrumbSeparator />}
                        </React.Fragment>
                    ))
                )}
            </BreadcrumbList>
        </Breadcrumb>
    );
};