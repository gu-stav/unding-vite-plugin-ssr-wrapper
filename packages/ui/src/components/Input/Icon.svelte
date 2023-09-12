<script>
    import { Icon } from '../Icon';
</script>

<div class={`input-icon input-icon--slot-${$$props.slot}`}>
    <Icon {...$$props} />
</div>

<style>
    .input-icon--slot-start {
        padding-left: 1rem;
    }

    .input-icon--slot-end {
        padding-right: 1rem;
    }
</style>
