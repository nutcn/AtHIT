export default {
  async fetchArticleList() {
    const url = 'http://app.athit.co/v1/openconnected/recommend?page=2&uuid=4d59e0a4795f44cdb354abffc3e86631&user_id=';
    response = await fetch(url);
    return await response.json();
  },
}
