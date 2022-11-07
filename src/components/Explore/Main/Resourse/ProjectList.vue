<template>
    <div>
        <MainBlock :Name="'Проекты'">
            <div class="">
                <swiper class="swiper grid grid-cols-3" :modules="modules" :space-between="30" :slides-per-view="3"
                    :pagination="{ clickable: true }">
                    <swiper-slide  v-for="el in Projects" :key="el.id" class="slide">
                        <project-card :Project="el" />
                    </swiper-slide>
                </swiper>
            </div>
        </MainBlock>
    </div>
</template>

<script>
import MainBlock from './MainBlock.vue';
import ProjectCard from '../../Project/Resourse/ProjectCardNew.vue';
import SwiperMixin from '@/components/mixins/Swiper'

export default {
    mixins: [SwiperMixin],
    components: {
        MainBlock, ProjectCard
    },
    data() {
        return {
            Projects: [],

        }
    },

    async mounted() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        var a = await fetch("https://pp.ftf.tsu.ru/api/Projects", requestOptions)
            .then(response => this.Projects = response.json())
            .then(x => this.Projects = x)
            .catch(error => console.log('error', error));
        console.log(this.NewsList)
    },

}
</script>

<style lang="scss" scoped>

</style>