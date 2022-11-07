<template>
    <main-block :Name="'Участники'">
        <div>
            <div class="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-12">
                <swiper class="swiper grid grid-cols-3 mt-4 w-100 ">
                    <swiper-slide v-for="el in Users" :key="el.id">
                        <users-card :User="el" @Deleted="Deleted()">
                        </users-card>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
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