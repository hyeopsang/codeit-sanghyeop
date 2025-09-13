export const fetchWrapper = {
  get,
  post,
  put,
  delete: _delete,
  imagePost,
};
const BASE_URL = 'https://assignment-todolist-api.vercel.app/api/sanghyeop';

async function get(url: string) {
  const requestOptions = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    next: {tags: ['todos']},
  };

  return fetch(`${BASE_URL}/${url}`, requestOptions).then(handleResponse);
}

async function post<T>(url: string, body: T) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body),
  };
  return fetch(`${BASE_URL}/${url}`, requestOptions).then(handleResponse);
}

function put<T>(url: string, body: T) {
  const requestOptions = {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body),
  };
  return fetch(`${BASE_URL}/${url}`, requestOptions).then(handleResponse);
}

function _delete(url: string) {
  const requestOptions = {
    method: 'DELETE',
  };
  return fetch(`${BASE_URL}/${url}`, requestOptions).then(handleResponse);
}

async function imagePost(url: string, file: File) {
  const formData = new FormData();
  formData.append('image', file);

  const requestOptions = {
    method: 'POST',
    body: formData,
  };

  return fetch(`${BASE_URL}/${url}/images/upload`, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response: Response) {
  return response.text().then((text) => {
    try {
      const data = text ? JSON.parse(text) : {};
      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      return data;
    } catch (e) {
      return Promise.reject('JSON parse error');
    }
  });
}
