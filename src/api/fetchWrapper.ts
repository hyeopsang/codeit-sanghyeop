// API 요청 래퍼
export const fetchWrapper = {
  get,
  post,
  put,
  patch,
  delete: _delete,
  imagePost,
};

const BASE_URL = 'https://assignment-todolist-api.vercel.app/api/sanghyeop';

// GET 요청
async function get(url: string) {
  const requestOptions = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    next: {tags: ['todos']},
  };
  return fetch(`${BASE_URL}/${url}`, requestOptions).then(handleResponse);
}

// POST 요청
async function post<T>(url: string, body: T) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body),
  };
  return fetch(`${BASE_URL}/${url}`, requestOptions).then(handleResponse);
}

// PUT 요청
function put<T>(url: string, body: T) {
  const requestOptions = {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body),
  };
  return fetch(`${BASE_URL}/${url}`, requestOptions).then(handleResponse);
}

// PATCH 요청
async function patch<T>(url: string, body: T) {
  const requestOptions = {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body),
  };
  return fetch(`${BASE_URL}/${url}`, requestOptions).then(handleResponse);
}

// DELETE 요청
function _delete(url: string) {
  const requestOptions = {method: 'DELETE'};
  return fetch(`${BASE_URL}/${url}`, requestOptions).then(handleResponse);
}

// 이미지 업로드
async function imagePost(file: File) {
  const formData = new FormData();
  formData.append('image', file);

  const response = await fetch(`${BASE_URL}/images/upload`, {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();
  return data;
}

// 응답 처리
function handleResponse(response: Response) {
  return response.text().then((text) => {
    if (!text) {
      if (!response.ok) return Promise.reject(response.statusText);
      return null;
    }

    try {
      const data = JSON.parse(text);
      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  });
}
