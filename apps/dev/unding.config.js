import { definePlugin } from "@unding/studio";

const media = definePlugin('Media Library', {
    routes: [
        {
            handler() {
                return 'hello';
            },
            path: '/hello'
        }
    ],
});

const wat = definePlugin('Wat wat', {
    routes: [
        {
            handler() {
                return 'wat wat wat';
            },
            path: '/wat'
        }
    ],
});

export default {
    plugins: [
        media(),
        wat()
    ]
};
