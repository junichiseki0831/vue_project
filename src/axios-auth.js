import axios from 'axios';

//カスタムインスタンス（axiosの機能を受け継いで変更したい箇所は変更できる）
const instance = axios.create({
  baseURL: "https://firestore.googleapis.com/v1/projects/vuejs-http-38403/databases/(default)/documents"
});

export default instance;