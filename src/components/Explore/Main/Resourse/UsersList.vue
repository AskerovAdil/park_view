<template>
    <main-block :Name="'Участники'">
                <swiper class="swiper grid grid-cols-3" :modules="modules" :space-between="30" :slides-per-view="3"
                    :pagination="{ clickable: true }">
                    <swiper-slide  v-for="el in Users" :key="el.id" class="slide">
                        <users-card class="pt-20" :User="el" @Deleted="Deleted()">
                        </users-card>
                    </swiper-slide>
                </swiper>
    </main-block>
</template>

<script>
import MainBlock from './MainBlock.vue';
import UsersCard from '../../User/Resourse/UsersCard.vue';
import SwiperMixin from '@/components/mixins/Swiper'

export default {
    mixins: [SwiperMixin],
    components: {
        MainBlock, UsersCard
    },
    data() {
        return {
            Users: []
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
        var a = await fetch("https://pp.ftf.tsu.ru/api/Users", requestOptions)
            .then(response => this.Users = response.json())
            .then(x => this.Users = x)
            .catch(error => console.log('error', error));

        console.log(this.Users)




    },

}
</script>

<style lang="scss" scoped>

</style>