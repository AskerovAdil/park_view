var pagination = {
    data(){
        return{
            OpenPage: 0,
        }
    },
    mounted() {
    },
    methods: {
        SelectPage(page){
            this.OpenPage = page;
        },
    },

}

export default pagination;