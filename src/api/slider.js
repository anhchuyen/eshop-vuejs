import request from '@/utils/request'

class SliderAPI  {
    addSlider(data){
         return request({
           url: '/sliders',
           method: 'post',
           data
         })
       }
    
    listSlider(data){
        return request({
            url : '/sliders',
            method:'get',
            params:data
        })
    }
    deleteSlider(data){
      return request({
        url:`/sliders/${data.id}`,
        method:'delete',
      })
    }
    handleUpdate(data){
      return request({
        url:`/sliders/${data.id}`,
        method:'put',
        data
      })
    }
    
  }
  const Slider = new SliderAPI("slider");
  export { Slider as default };
  