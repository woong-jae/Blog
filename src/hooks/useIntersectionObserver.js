import { useState, useEffect, useCallback } from "react";

const defaultOptions = {
    root: null,
    rootMargin: '1px',
    threshold: '0.1',
}

export default function useIntersectionObserver(onIntersect, option = defaultOptions) {
    const [ref, setRef] = useState(null);
    // intersecting이 있을 때 target 엔트리와 observer를 넘겨주자.
    const checkIntersect = useCallback(([entry], observer) => {
        if (entry.isIntersecting) onIntersect(entry, observer);
    }, [onIntersect]);
	// ref나 option이 바뀔 경우 observer를 새로 등록한다.
    useEffect(() => {
        let observer;
        if (ref) {
            observer = new IntersectionObserver(checkIntersect, option);
            observer.observe(ref);
        }
        return () => observer && observer.disconnect();
    }, [ref, option, checkIntersect]);
	// setRef를 넘겨주어서 ref를 변경시킬 수 있도록 한다.
    return [ref, setRef];
};