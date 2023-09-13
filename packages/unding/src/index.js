export function definePlugin(init) {
    return () => () => init();
}
