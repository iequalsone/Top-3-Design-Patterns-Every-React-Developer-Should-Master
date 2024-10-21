class ApiClient {
  private static instance: ApiClient;
  private constructor(private baseURL: string) {}

  static getInstance(baseURL: string): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient(baseURL);
    }

    return ApiClient.instance;
  }

  fetchData(endpoint: string) {
    return fetch(`${this.baseURL}${endpoint}`).then((response) =>
      response.json()
    );
  }
}

// Usage
const apiClient = ApiClient.getInstance("https://api.example.com");
apiClient.fetchData("/data").then((data) => console.log(data));
