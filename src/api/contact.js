import request from '@/utils/request'

class ContactAPI  {

    listContact(){
        return request({
            url : '/contacts',
            method:'get',
          
        })
    }
     deleteContact(data){
       return request({
         url:`/contacts/${data.id}`,
         method:'delete',
       })
     }
     handleUpdate(data){
       return request({
         url:`/contacts/${data.id}`,
         method:'put',
         data
       })
     }
    
  }
  const Contact = new ContactAPI("contact");
  export { Contact as default };
  