import axios from 'axios';

//カスタムインスタンス（axiosの機能を受け継いで変更したい箇所は変更できる）
const instance = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1"
});

export default instance;