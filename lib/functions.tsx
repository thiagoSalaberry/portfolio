export const scrollToSection = (section:string) => {
    const sectionEl = document.getElementById(section);
    if (!sectionEl) return;
    sectionEl.scrollIntoView({ behavior: 'smooth' });
}