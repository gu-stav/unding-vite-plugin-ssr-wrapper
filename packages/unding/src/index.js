export function definePlugin(name, attributes) {
    return () => ({
        name,
        ...attributes
    });
}
