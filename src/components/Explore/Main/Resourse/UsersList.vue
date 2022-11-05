<template>
    <div>
        <main-block :Name="'Участники'" >
            <div>
                    <div class="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-12">
                        <div class="mt-4 w-100" v-for="el in this.Users" :key="el.Id">
                            <users-card :User="el" @Deleted="Deleted()">
                            </users-card>
                        </div>
                    </div>
                </div>
        </main-block>
    </div>
</template>

<script>
import MainBlock from './mainblock.vue';
import UsersCard from '../../User/Resourse/UsersCard.vue';
    export default {
        components:{
            MainBlock,UsersCard
        },
        props:{
            Users:[]
        }
        
    }
</script>

<style lang="scss" scoped>

</style>