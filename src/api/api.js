import axios from 'axios';

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

let base = '';

export const msgSend = params => {return axios.post(`${base}/msgSend`, params).then(res => res.data); };

export const getMainDataPage = params => { return axios.get(`${base}/data/listpage`, { params: params }); };

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };