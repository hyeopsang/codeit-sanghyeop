import ActiveTitle from './active-title';
import AddImage from './add-image';
import DeActiveTitle from './deactive-title';
import DeleteButton from './delete-button';
import Memo from './memo';
import ModifyButton from './modify-button';

export default function Detail() {
  return (
    <article className="pt-19 md:pt-21 md:px-6 px-4 bg-white max-w-300 w-full mx-auto h-dvh">
      <div className="xl:w-[996px] w-full mx-auto flex flex-col gap-6 items-center">
        <DeActiveTitle title="성하 보고싶어" />
        <ActiveTitle title="성하 보고싶어" />
        <div className="w-full flex flex-wrap justify-between gap-6">
          <AddImage />
          <Memo memo="" />
        </div>
        <div className="w-full flex items-center justify-center xl:justify-end gap-4">
          <ModifyButton isCompleted={true} />
          <DeleteButton />
        </div>
      </div>
    </article>
  );
}
