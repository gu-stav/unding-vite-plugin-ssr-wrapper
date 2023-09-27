export function definePlugin(init) {
    const plugin = init();

    return () => () => ({
        namespace: 'some-namespace',
        ...plugin,
    });
}
