import { useNavigate } from "react-router-dom";

function handleNavigation(uri?: string, external: boolean = false): (() => void) | undefined {
    if (external) return () => {
        window.open(uri, "_blank");
    };
    if (!uri) return undefined;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    return () => {
        navigate(uri, { preventScrollReset: true });
    }
}

export { handleNavigation }