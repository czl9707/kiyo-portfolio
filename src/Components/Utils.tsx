import { useNavigate } from "react-router-dom";

function handleNavigation(uri?: string, external: boolean = false, pwdProtected: boolean = false): (() => void) | undefined {
    if (external) return () => {
        window.open(uri, "_blank");
    };
    if (!uri) return () => { };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    if (pwdProtected) {
        return () => {
            const pwd = window.prompt("You will need password in order to visit this page.");
            if (pwd === "k-design")
                navigate(uri, { preventScrollReset: true });
            else {
                window.alert("You got me wrong :)")
            }
        }
    }

    return () => navigate(uri, { preventScrollReset: true });
}

export { handleNavigation }