// 할 일 타입
export type Todo = {
  id: number;
  name: string;
  isCompleted: boolean;
};
// 할 일 detail 타입
export type TodoDetail = {
  id?: number;
  tenantId?: string;
  memo?: string;
  name?: string;
  imageUrl?: string;
  isCompleted?: boolean;
};
