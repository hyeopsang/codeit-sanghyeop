import { fetchWrapper } from "./fetchWrapper";

export const toggleCheck = async (itemId: number, currentStatus: boolean) => {
  await fetchWrapper.put(`items/${itemId}`, { isCompleted: !currentStatus });
};
