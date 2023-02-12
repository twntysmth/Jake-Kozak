<script setup>

    const props = defineProps({ blok: Object });

</script>

<template>

    <div class="intro">
        <div class="grid-wrap" v-editable="blok">
        
            <div class="intro__video w12 mw24">
                <figure>
                    <video :src="blok.video.filename" :alt="blok.video.alt" autoplay muted loop></video>
                </figure>
            </div>

            <h1 v-if="blok.headline" class="intro__headline w12 mw24">
                {{ blok.headline }}
            </h1>

        </div>
    </div>

</template>