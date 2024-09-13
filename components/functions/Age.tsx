"use client"

import { useEffect, useState } from "react";

export const Age = () => {
    const calculateAge = (birthYear: number) => {
        const currentYear = new Date().getFullYear();
        let calculatedAge = currentYear - birthYear;

        const currentDate = new Date();
        if (currentDate.getMonth() === 6 && currentDate.getDate() < 22) {
            calculatedAge -= 1;


            return calculatedAge;
        };
    };

    const [age, setAge] = useState(calculateAge(2006) || 18);

    useEffect(() => {
        const updateAge = () => {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();

            if (currentDate.getMonth() === 6 && currentDate.getDate() === 22) {
                setAge(age + 1);
            }
        };

        updateAge();
        const intervalId = setInterval(updateAge, 60000);

        return () => clearInterval(intervalId);
    }, [age]);

    return age;
};