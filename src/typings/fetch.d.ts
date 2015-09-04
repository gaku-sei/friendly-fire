interface Response<T> {
  json(): Promise<T>;
}

interface Window {
  fetch<T>(String): Promise<Response<T>>;
}
