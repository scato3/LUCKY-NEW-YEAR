import MainContainer from '@/components/pages/main/main-container';

interface Props {
  params: {
    uuid: string;
  };
}

export default function FriendTteokgukMake({ params }: Props) {
  return <MainContainer type="friend" uuid={params.uuid} />;
}
