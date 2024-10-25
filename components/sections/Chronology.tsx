import { Timeline } from "../ui/timeline";
import { useTranslations } from "next-intl";

export const Chronology = () => {
    const t = useTranslations("Timeline.Cards");
    const textStyle = "text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8";
    
    const data = [
        {
            title: t("First.Title"),
            content: (
                <div>
                    <p className={textStyle}>
                        {t("First.Description")}
                    </p>
                </div>
            ),
        },
        {
            title: t("Second.Title"),
            content: (
                <div>
                    <p className={textStyle}>
                        {t("Second.Description")}
                    </p>
                </div>
            ),
        },
        {
            title: t("Third.Title"),
            content: (
                <div>
                    <p className={textStyle}>
                        {t("Third.Description")}
                    </p>
                </div>
            ),
        },
        {
            title: t("Fourth.Title"),
            content: (
                <div>
                    <p className={textStyle}>
                        {t("Fourth.Description")}
                    </p>
                </div>
            ),
        },
        {
            title: t("Fifth.Title"),
            content: (
                <div>
                    <p className={textStyle}>
                        {t("Fifth.Description")}
                    </p>
                </div>
            ),
        },
    ];
    return (
        <section className="w-full" id="timeline">
            <Timeline data={data} />
        </section>
    );
}