<template>
    <div class="mx-auto pb-8 bg-white rounded-2xl shadow-lg w-full ">
        <div
            class="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
            <div class="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 pb-0">
                <h6>Timeline with dotted line</h6>
            </div>
            <div class="flex-auto p-4">
                <div
                    class="relative before:absolute before:left-4 before:top-0 before:h-full before:border-r-2 before:border-solid before:border-slate-100 before:content-[''] lg:before:-ml-px">
                    <div v-for="el in Publications" :key="el.id">
                        <PublicationCard :Publication="el" />
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PublicationCard from './PublicationCard.vue'

export default {
    data() {
        return {
            SearchProject: ""
        }
    },
    components: {
        PublicationCard
    },
    props: {
        Publications: []
    },
    methods: {

        Deleted() {
            this.$emit('Deleted')
        }
    }

}
</script>

<style lang="scss" scoped>

</style>