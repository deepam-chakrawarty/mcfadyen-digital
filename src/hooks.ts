import { useEffect, useState } from "react";

export const useMediaQuery = (query: any) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, [matches, query]);

    return matches;
};

export const useClickOutside = (
    ref: any,
    func: () => void,
    renderFunction: boolean
) => {
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            //@ts-ignore
            if (
                ref.current &&
                !ref.current.contains(event.target) &&
                renderFunction
            ) {
                setTimeout(() => {
                    func()
                }, 0)
            }
        }
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [func, ref, renderFunction])
}