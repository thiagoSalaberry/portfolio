import { poppins } from "@/lib/fonts";
import styles from "./styles.module.css";
import { useState } from "react";
import { Project } from "@/components/project";
import translation from "@/lib/translation.json"

export function ProjectsSection({opened, language}: {opened:boolean, language: "es" | "en"}) {
    const [selected, setSelected] = useState<number | null>(1);
    const handleSelect = (index:number):void => {
        setSelected(prev => prev == index ? null : index);
    }
    return (
        <div className={`${styles.projects_container} ${opened && styles.opened}`}>
            <p className={`${styles.desc} ${poppins.className} ${opened && styles.opened}`}>{translation[language].projects_section.contained_desc}</p>
            <div className={`${styles.projects_list} ${opened && styles.opened}`}>
                <Project
                    title="E-COMMERCE"
                    description={translation[language].projects_section[1].desc}
                    techs={["React.js", "Next.js", "TypeScript", "Firebase"]}
                    index={0}
                    language={language}
                    opened={opened}
                    selected={selected == 0}
                    notSelected={selected != null && selected != 0}
                    githubLink="https://github.com/thiagoSalaberry/frontend"
                    link="https://frontend-seven-blond.vercel.app/"
                    onSelect={()=>handleSelect(0)}
                />
                <Project
                    title="URL SHORTENER"
                    description={translation[language].projects_section[2].desc}
                    techs={["React.js", "Next.js", "TypeScript", "PostgreSQL"]}
                    index={1}
                    language={language}
                    opened={opened}
                    selected={selected == 1}
                    notSelected={selected != null && selected != 1}
                    githubLink="https://github.com/thiagoSalaberry/url-shortener"
                    link="https://teoxys-url.vercel.app/"
                    onSelect={()=>handleSelect(1)}
                />
                <Project
                    title="TEOXYS TATTOO"
                    description={translation[language].projects_section[3].desc}
                    techs={["React.js", "Next.js", "TypeScript", "Styled-Components"]}
                    index={2}
                    language={language}
                    opened={opened}
                    selected={selected == 2}
                    notSelected={selected != null && selected != 2}
                    githubLink="https://github.com/thiagoSalaberry/landing-page"
                    link="https://landing-page-zeta-mauve.vercel.app/"
                    onSelect={()=>handleSelect(2)}
                />
                <Project
                    title={translation[language].projects_section[4].title}
                    description={translation[language].projects_section[4].desc}
                    techs={["React.js", "Next.js", "TypeScript", "Firebase"]}
                    index={3}
                    language={language}
                    opened={opened}
                    selected={selected == 3}
                    notSelected={selected != null && selected != 3}
                    githubLink="https://github.com/thiagoSalaberry/ppt-online"
                    link="https://ppt-online-react.vercel.app/"
                    onSelect={()=>handleSelect(3)}
                />
            </div>
        </div>
    )
};