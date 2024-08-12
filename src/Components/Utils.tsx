import { useNavigate } from "react-router-dom";

function handleNavigation(uri: string, external: boolean = false): () => void {
    if (external) return () => window.open(uri, "_blank");

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    return () => {
        navigate(uri);
    }
}

export { handleNavigation }