<template>
    <!-- <details class="group ">
        <summary class="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4">
            <h2 class="font-medium text-gray-900">
                Как FAQ влияет на SEO?

            </h2>

            <svg class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </summary>

        <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
            earum similique!
        </p>
    </details> -->



    <div class="relative mb-8">

        <details class="group ml-12 pt-1.4 max-w-120 relative -top-1.5 w-auto">
            <summary>
                <span
                    class="w-6.5 h-6.5 rounded-circle text-base z-1 absolute -left-8 inline-flex -translate-x-1/2 items-center justify-center bg-white text-center font-semibold">
                    <img class="w-6 h-6" src="@/assets/img/ForPage/down-arrow.png" />
                </span>
                <h6 class="mb-0 font-semibold leading-normal text-sm text-slate-700">{{ Publication.name }}</h6>
                <p class="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">21 DEC 11 PM</p>
                <div class="mt-2 flex gap-2">
                    <div v-for="el in 1" :key="el">
                    </div>
                    <div :data-tip='"Скачать"' class="tooltip hover:cursor-pointer">
                        <img class="border-2 border-blue-200 hover:shadow-md  rounded-lg  w-14 p-2"
                            src="@/assets/img/ForPage/doc-file.png" />
                    </div>
                    <div :data-tip='"Скачать"' class="tooltip hover:cursor-pointer">
                        <img class="border-2 border-blue-200 hover:shadow-md  rounded-lg  w-14 p-2"
                            src="@/assets/img/ForPage/new-document.png" />
                    </div>
                    <div :data-tip='"Скачать"' class="tooltip hover:cursor-pointer">
                        <img class="border-2 border-blue-200 hover:shadow-md  rounded-lg  w-14 p-2"
                            src="@/assets/img/ForPage/pdf-file.png" />
                    </div>
                </div>
            </summary>
            <p class="mt-2 mb-2 leading-normal text-sm text-slate-500">{{ Publication.description }}</p>

            <TeamCircular :Users="UsersTEMP" />

        </details>
    </div>

</template>

<script>
import TeamCircular from './TeamCircular.vue';
// import CircleUser from './CircleUser.vue'
// import BtnEditDelete from './BtnEditDelete.vue'
export default {

    data() {
        return {
            isShow: false,
            UsersTEMP: [
                { firstName: 'Арман', lastName: 'Царукян', middleName: 'Царукянович', id: 1 },
                { firstName: 'Арман', lastName: 'Царукян', middleName: 'Царукянович', id: 2 },
                { firstName: 'Арман', lastName: 'Царукян', middleName: 'Царукянович', id: 2 },
                { firstName: 'Арман', lastName: 'Царукян', middleName: 'Царукянович', id: 2 },
            ]
        }
    },
    components: {
        TeamCircular
        // CircleUser,BtnEditDelete
    },
    props: {
        Publication: Object
    },
    methods: {
        Deleted() {
            this.$emit('Deleted')
        }
    }
}
</script>

<style scoped>
summary::marker {
    content: "";
}
</style>