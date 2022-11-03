var mixin = {
  data(){
    return{
        isModalOpen:false,
    }
  },
    methods: {
      OpenModal(id,name){
          console.log('yes')
          this.forDelete.isModalOpen = true,
          this.forDelete.name = name,
          this.forDelete.SelectedItem = id
          console.log(this.forDelete)
      },


    }
}
export default mixin;