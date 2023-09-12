<script>
    export let name;
    export let width = "1.5rem";
    export let height = "1.5rem";
</script>

<svg {width} {height} {...$$props}>
    <use xlink:href={`#icon-${name}`} />
</svg>
