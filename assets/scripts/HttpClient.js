class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  
  async get(path, queryParams) {
    const url = new URL(path, this.baseUrl);
    if (queryParams) {
      Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]));
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
    }
    return response.json();
  }
  
  async post(path, data) {
    const url = new URL(path, this.baseUrl);
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
    }
    return response.json();
  }
}
export { HttpClient };