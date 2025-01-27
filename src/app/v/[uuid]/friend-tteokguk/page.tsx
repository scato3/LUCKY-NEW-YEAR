import MainContainer from '@/components/pages/main/main-container';

interface Props {
  params: {
    uuid: string;
  };
}

export default function MyTteokgukMake({ params }: Props) {
  return <MainContainer type="friend-make" uuid={params.uuid} />;
}
