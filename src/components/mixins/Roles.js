var pagination = {
    data() {
        return {
            LogginUser:Object,
            Logged:false,
            isNewDesign:false
        }
    },
    mounted() {
        if (localStorage.token) {
            this.LogginUser = JSON.parse(localStorage?.user);
            this.Logged =true;
            console.log(this.LogginUser)
        }
    },
    methods: {
        Logout(){
            this.Logged = false
            this.LogginUser = undefined
            localStorage.user = ''
            localStorage.token = ''
        },

        isAdmin(){
            if(this.LogginUser){
                if(this.LogginUser.role != null)
                    return this.LogginUser?.role?.name == "Admin"
            }
            return false;
        },
        isMentor(){
            if(this.LogginUser){
                if(this.LogginUser.role != null)
                    return this.LogginUser?.role?.name == "Mentor"
            }
            return false;
        }
    },

}

export default pagination;