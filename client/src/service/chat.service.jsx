import Repository from "./repository";

class ChatService {
  async getResponse(msg) {
    const endpoint = `/chatbot?msg=${msg}`;
    const response = await Repository.get(endpoint);
    return response;
  }
}

export default new ChatService();
