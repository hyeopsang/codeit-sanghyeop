'use server';

import {fetchWrapper} from '@/api/fetchWrapper';
import {revalidateTag} from 'next/cache';
import type {TodoDetail} from '@/types/Todo';
import {redirect} from 'next/navigation';

// 할 일 추가
export async function fetchTodos(formData: FormData) {
  try {
    await fetchWrapper.post('items', {name: formData.get('todo')});
    revalidateTag('todos'); // ISR 태그 재검증
  } catch (error) {
    console.error('추가 실패:', error);
    throw new Error('추가 중 오류가 발생했습니다.');
  }
}

// 할 일 삭제
export async function deleteTodos(todoId: number) {
  try {
    const result = await fetchWrapper.delete(`items/${todoId}`);
    return result;
  } catch (error) {
    console.error('삭제 실패:', error);
    throw new Error('삭제 중 오류가 발생했습니다.');
  }
}

// 전체 할 일 조회
export async function getTodos() {
  try {
    const response = await fetchWrapper.get('items');
    return response;
  } catch (error) {
    console.error('불러오기 실패:', error);
    throw new Error('조회 중 오류가 발생했습니다.');
  }
}

// 할 일 상세 조회
export async function getDetail(todoId: number) {
  try {
    const response = await fetchWrapper.get(`items/${todoId}`);
    return response;
  } catch (error) {
    console.error('상세 조회 실패', error);
    throw new Error('상세 조회 중 오류가 발생했습니다.');
  }
}

// FormData에서 문자열 가져오기
// required 옵션에 따라 빈 문자열 허용 여부 결정
function getStringValue(
  formData: FormData,
  key: string,
  required: boolean = false
): string | null {
  const value = formData.get(key);
  if (!value || typeof value !== 'string') return null;
  const trimmed = value.trim();
  return trimmed || (required ? null : trimmed);
}

// 할 일 수정 (이름, 메모, 이미지, 완료 상태)
export async function updateTodos(formData: FormData): Promise<void> {
  const updateData: Partial<TodoDetail> = {};
  const todoId = formData.get('todoId');

  // 이름 업데이트
  const todoValue = getStringValue(formData, 'name', true);
  if (todoValue) updateData.name = todoValue;

  // 메모 업데이트
  const memoValue = getStringValue(formData, 'memo');
  if (memoValue !== null) updateData.memo = memoValue;

  // 이미지 업로드
  const imageFile = formData.get('image');
  if (imageFile instanceof File) {
    // 이미지 업로드 후 url 반환
    const {url} = await fetchWrapper.imagePost(imageFile);
    // 반환된 url을 업데이트 데이터로 설정
    updateData.imageUrl = url;
  }

  // 완료 여부 업데이트
  if (formData.has('isCompleted')) {
    const completedValue = formData.get('isCompleted');
    updateData.isCompleted = completedValue === 'true';
  }

  // 서버에 PATCH 요청
  await fetchWrapper.patch<TodoDetail>(`/items/${todoId}`, updateData);

  // 수정 후 홈으로 리디렉션
  redirect(`/`);
}

// 완료/미완료 체크 토글
export async function toggleCheck(todoId: number, status: boolean) {
  try {
    await fetchWrapper.patch(`items/${todoId}`, {isCompleted: !status});
    revalidateTag('todos'); // ISR 태그 재검증
  } catch (error) {
    console.error('체크 토글 실패', error);
  }
}
