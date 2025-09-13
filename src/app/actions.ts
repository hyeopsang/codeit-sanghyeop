'use server';

import {fetchWrapper} from '@/api/fetchWrapper';
import {revalidateTag} from 'next/cache';

export async function fetchTodos(formData: FormData) {
  try {
    await fetchWrapper.post('items', {name: formData.get('todo')});
    revalidateTag('todos');
  } catch (error) {
    console.error('추가 실패:', error);
    throw new Error('추가 중 오류가 발생했습니다.');
  }
}

export async function deleteTodos(todoId: number) {
  try {
    await fetchWrapper.delete(`items/${todoId}`);
    revalidateTag('todos');
  } catch (error) {
    console.error('삭제 실패:', error);
    throw new Error('삭제 중 오류가 발생했습니다.');
  }
}

export async function getTodos() {
  try {
    const response = await fetchWrapper.get('items');
    return response;
  } catch (error) {
    console.error('불러오기 실패:', error);
    throw new Error('조회 중 오류가 발생했습니다.');
  }
}

export async function getDetail(todoId: number) {
  try {
    const response = await fetchWrapper.get(`items/${todoId}`);
    return response;
  } catch (error) {
    console.error('상세 조회 실패', error);
    throw new Error('상세 조회 중 오류가 발생했습니다.');
  }
}
export async function putTodos(todoId: string, formData: FormData) {
  try {
    await fetchWrapper.put(`items/${todoId}`, {
      name: formData.get('todo'),
      memo: formData.get('memo'),
      imageUrl: formData.get('image'),
      isCompleted: formData.get('completed') !== 'true',
    });
    revalidateTag('todos');
  } catch (error) {
    console.error('수정 실패', error);
  }
}
