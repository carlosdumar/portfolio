import { useEffect, useState } from "react"

type IntersectionObserverOptions = {
    delay?: number;
    root: Element | Document | null;
    rootMargin: string;
    scrollMargin?: string;
    threshold: number | number[];
    trackVisibility?: boolean;
}
const useActiveSection = (options: IntersectionObserverOptions, sectionIds: string[]) => {
    
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const observers: IntersectionObserver[] = []
        
        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) setActiveSection(id)
            }, options)

            observer.observe(el);
            observers.push(observer)
        })
        
        return () => observers.forEach((o) => o.disconnect())
    }, [sectionIds, options])

    return activeSection
}

export default useActiveSection