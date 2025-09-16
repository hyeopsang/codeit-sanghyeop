// todo detail 페이지
import Detail from '@/features/detail';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default function DetailPage({params}: Props) {
  return <Detail params={params} />;
}
