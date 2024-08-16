import { useNavigate } from "react-router-dom";

function handleNavigation(uri?: string, external: boolean = false): (() => void) | undefined {
    if (external) return () => window.open(uri, "_blank");
    if (!uri) return undefined;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    return () => {
        navigate(uri, {});
        window.scrollTo(0, 0)
    }
}

export { handleNavigation }