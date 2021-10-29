import { IMAGE_SEARCH_BOX_UPDATED , UPDATE_IMAGE_LIST,TOGGLER_IMAGELIST_LOADER,FILTER_IMAGE_LIST } from "./ActionTypes";
import axios from 'axios'
export const imageSearchBoxValueChanged=(image_list,search)=>{
     return dispatch =>{
         var filtered_imageList=image_list.filter(function(image_data){
             return image_data.author.includes(search,0)
         })
         console.log("Filetered image",filtered_imageList)
         dispatch({
             type:IMAGE_SEARCH_BOX_UPDATED,
             payload:search,
         })
         dispatch({
             type:FILTER_IMAGE_LIST,
             payload:filtered_imageList
         })
     }
}

export const imageListLoader=load=>{
    return{
        type:TOGGLER_IMAGELIST_LOADER,
        payload:load
    }
}

export const getImageListFromApi=()=>{
    return(dispatch)=>{
        axios
        .get('https://picsum.photos/v2/list')
        .then(response => {
          dispatch({
              type:UPDATE_IMAGE_LIST,
              payload:response.data
          })

          dispatch({
            type:TOGGLER_IMAGELIST_LOADER,
            payload:false
          })
          
          dispatch({
              type:FILTER_IMAGE_LIST,
              payload:response.data
          })
         
        })
        .catch(error =>{dispatch({
            type:TOGGLER_IMAGELIST_LOADER,
            payload:true
        })
    console.log(error)})
      
    }
}
   