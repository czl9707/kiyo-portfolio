function handleNavigation(uri: string, external: boolean = false): () => void {
    return () => {
        window.open(uri, external ? "_blank" : "_self");
    }
}

export { handleNavigation }