export const Timeline = () => {
    return (
        <div className="h-screen flex">
            <div className="w-1/2 bg-zinc-50 dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 selection:bg-zinc-950 selection:text-zinc-50 dark:selection:bg-zinc-50 dark:selection:text-zinc-950 flex items-center justify-center">
                <h1 className="text-4xl">Black Section</h1>
            </div>

            <div className="w-1/2 bg-zinc-950 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-950 selection:bg-zinc-50 selection:text-zinc-950 dark:selection:bg-zinc-950 dark:selection:text-zinc-50 flex items-center justify-center">
                <h1 className="text-4xl">White Section</h1>
            </div>
        </div>
    );
};