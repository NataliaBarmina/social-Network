import axios from "axios";

const instance = axios.create({
    withCredentials: true,  // объект настройки запроса, т.е мы отправляем авторизационную cookie 
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': "32dd19a0-b402-4036-8d06-08b87898507d"
    },
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(id = 1) {
        return instance.post(`follow/${id}`, {},)
    },
    unFollow(id = 1) {
        return instance.delete(`follow/${id}`)
    },
    getProfile(userId = 2) {
        console.warn('Obsolete method. Please profileApi object.') // устаревший метод 
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get('profile/' + userId)
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)

    },
    updateStatus(status) {
        return instance.put('profile/status', { status: status })
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);

        return instance.put('profile/photo', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    saveProfile(profile) {
        return instance.put('profile', profile)
    }
}

export const authUserAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post('auth/login', { email, password, rememberMe, captcha })
    },
    logout() {
        return instance.delete('auth/login')
    }
}

export const securityAPI = {
    getCaptchaURL() {
        return instance.get('security/get-captcha-url')
    }
}
