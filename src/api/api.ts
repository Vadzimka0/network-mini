import axios from 'axios';

const FIRST_PAGE = 1;
const MAX_PAGE_SIZE = 100;
export const SUCCESS_VALUE = 0;

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '3468efd3-2f7f-4b93-a6e1-e707ecfdc4e1',
  },
});

export const authAPI = {
  me() {
    return instance.get(`auth/me`).then(response => response.data);
  },
};

export const profileAPI = {
  getProfile(id: number) {
    return instance.get(`profile/${id}`).then(response => response.data);
  },
  getStatus(id: number) {
    return instance.get(`profile/status/${id}`).then(response => response.data);
  },
  updateStatus(status: string) {
    return instance.put('profile/status', { status }).then(response => response.data);
  },
};

export const usersAPI = {
  getUsers(currentPage: number = FIRST_PAGE, pageSize: number = MAX_PAGE_SIZE) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  unfollowUsers(id: number) {
    return instance.delete(`follow/${id}`).then(response => response.data);
  },
  followUsers(id: number) {
    return (
      instance
        .post(`follow/${id}`)
        // у post второй параметр { }
        .then(response => response.data)
    );
  },
  getProfile(id: number) {
    // console.warn('Obsolete method. Please use profileAPI object.');
    return profileAPI.getProfile(id);
  },
};
