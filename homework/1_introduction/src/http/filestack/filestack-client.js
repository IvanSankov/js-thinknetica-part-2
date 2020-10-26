import axios from "axios";

const TOKEN = "AEIkdJtzkQmCU72rGZBhmz";

export default class FilestackClient {
  constructor() {
    this._client = axios.create({
      baseURL: "https://www.filestackapi.com/api/",
      timeout: 10000,
    });
  }

  uploadFile(file) {
    return this._client
      .post('store/S3', file, {
        params: {
          key: TOKEN
        }
      })
      .then(response => response.data);
  }
}