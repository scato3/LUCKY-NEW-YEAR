import MakeTteokguk from '@/components/pages/make-tteokguk/make-tteokguk';

interface Props {
  params: {
    uuid: string;
  };
}

export default function FriendTteokgukMakePage({ params }: Props) {
  return <MakeTteokguk uuid={params.uuid} />;
}
