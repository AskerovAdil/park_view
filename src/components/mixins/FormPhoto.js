
var FormPhoto ={
    data() {
        return {
            Files:[],
            UploadedFile:[],
        }
    },
    methods: {
        FileInputChange(){
            this.Files = event.target.files;
            console.log(this.Files)
        },


        DeleteFile(){
            this.Files = []
            console.log(this.Files)
        },
        upload(){
            document.getElementById("upload-file").click();
            this.Files = document.getElementById("upload-file").files;
        },

        getSrc(item){
            return URL.createObjectURL(item)
        },

        AlertClose(){
            this.isSuccess =0;
            this.Project = Object()
        },
    },
}
export default FormPhoto;