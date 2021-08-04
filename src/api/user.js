import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/profile',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}
export function updateProfile(data){
	return request({
		url:'/profile',
		method:'put',
		data
	})
}

// export function addCategory(data){
//   return request({
//     url: '/categories',
//     method: 'post',
//     data
//   })
// }


