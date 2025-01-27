import MainContainer from '@/components/pages/main/main-container';

type Props = {
  params: { uuid: string };
};

export default function Page(props: Props) {
  return <MainContainer type="friend" uuid={props.params.uuid} />;
}
