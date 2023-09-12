<script>
    import { Label } from '../Label';
</script>

<div>
    <input type="checkbox" {...$$props} />

    <Label>
        <slot />
    </Label>
</div>
