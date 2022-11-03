import Lightgallery from 'lightgallery/vue';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

var lgG ={
    components:{Lightgallery},
    data(){
        return{
            plugins: [lgThumbnail, lgZoom],

        }
      },
}
export default lgG;