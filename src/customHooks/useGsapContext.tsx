import { MutableRefObject, useMemo } from "react";
import gsap from "gsap";


function useGsapContext(scope?: MutableRefObject<HTMLElement | null>) {
    const ctx = useMemo(() => gsap.context(() => { }, [scope]), [scope]);
    return ctx;
}

export default useGsapContext;