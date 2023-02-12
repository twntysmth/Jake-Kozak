<script setup>

    const props = defineProps({ blok: Object });
    const content = computed(() => renderRichText(props.blok.richtext));

</script>

<template>

    <div class="quote">
        <div class="grid-wrap" v-editable="blok">
        
            <div class="quote__content w12 mw18 mw-start-4 lw14 lw-start-6" v-html="content"></div>

        </div>
    </div>

</template>