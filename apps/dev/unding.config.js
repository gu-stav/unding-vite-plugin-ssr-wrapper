import { definePlugin } from "@unding/studio";

const media = definePlugin((options) => ({
    name: 'Media Library',
    routes: [
        {
            handler() {
                return 'hello';
            },
            path: '/hello'
        }
    ],
}));

const wat = definePlugin((options) => ({
    name: 'Wat',
    routes: [
        {
            handler() {
                return 'wat wat wat';
            },
            path: '/wat'
        }
    ],
}));

export default {
    plugins: [
        media(),
        wat()
    ]
};
