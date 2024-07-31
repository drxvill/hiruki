<script lang="ts" setup>
const route = useRoute();
navigateTo("/info/" + route.params.id);
</script>