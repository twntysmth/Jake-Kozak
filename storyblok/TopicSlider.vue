<script setup>

// Import Swiper Vue.js components
	import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
	import "swiper/css";
	import "swiper/css/navigation";

// import required modules
	import { Navigation } from "swiper";

	const props = defineProps({ blok: Object });
	const modules = [Navigation];

    const text = computed(() => renderRichText(props.blok.richtext));

</script>

<template>

	<div class="topic-slider">
		<div class="grid-wrap" v-editable="blok">

            <div class="topic-slider__description w10 w-start-2 mw18 mw-start-4 lw9 lw-start-2">
                <h2 v-if="blok.headline && blok.headline.length > 0" class="topic-slider__description__headline"> {{ blok.headline }} </h2>
                <div v-if="text && text.length > 0" class="topic-slider__description__text" v-html="text"></div>
            </div>

			<div class="w10 w-start-2 mw20 mw-start-3 lw13 lw-start-11">
				<ClientOnly>
					<swiper
							:class="'topic-slider__swiper ' + 'swiper'"
							:slides-per-view="1"
							:space-between="0"
							:modules="modules"
							:navigation="true"
                            :loop="true"
                            :speed="1000"
                            :autoplay="{
                                delay: 1000,
                                disableOnInteraction: true
                            }"
							:breakpoints="{
                                '768': {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                    centerInsufficientSlides: blok.slides.length <= 2
                                },
						}"
					>
						<swiper-slide v-for="(slide, index) of blok.slides" :key="index">
							<div class="topic-slider__swiper__element">
								<figure>
									<picture>
                                        <img :src="slide.image.filename" :alt="slide.image.alt">
                                    </picture>
								</figure>
								<h3> {{ slide.title }} </h3>
								<NuxtLink v-if="slide.link && slide.linktext && slide.linktext.length > 0" :link="slide.link" class="button"> {{ slide.linktext }} </NuxtLink>
							</div>
						</swiper-slide>

					</swiper>
				</ClientOnly>
			</div>
		</div>
	</div>

</template>
