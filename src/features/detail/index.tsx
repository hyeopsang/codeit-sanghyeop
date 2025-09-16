// detail 페이지 공통 컴포넌트
import AddImage from './add-image';
import DeleteButton from './delete-button';
import Memo from './memo';
import ModifyButton from './modify-button';
import {getDetail, updateTodos} from '@/lib/actions';
import TodoName from './todo-name';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function Detail({params}: Props) {
  const resolvedParams = await params;
  const todoId = Number(resolvedParams.id);
  const todoDetail = await getDetail(todoId);
  console.log(todoDetail);

  return (
    <article className="pt-19 md:pt-21 md:px-6 px-4 bg-white max-w-300 w-full mx-auto h-dvh">
      <form
        action={updateTodos}
        className="xl:w-[996px] w-full mx-auto flex flex-col gap-6 items-center"
      >
        <input type="hidden" name="todoId" value={todoId} />
        <TodoName
          name={todoDetail.name}
          isCompleted={todoDetail.isCompleted}
          todoId={todoId}
        />
        <div className="w-full flex flex-wrap justify-between gap-6">
          <AddImage imageUrl={todoDetail.imageUrl} />
          <Memo memo={todoDetail.memo || ''} />
        </div>
        <div className="w-full flex items-center justify-center xl:justify-end gap-4">
          <ModifyButton isCompleted={todoDetail.isCompleted || ''} />
          <DeleteButton todoId={todoId} />
        </div>
      </form>
    </article>
  );
}
