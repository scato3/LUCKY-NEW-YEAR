import MakeTteokguk from '@/components/pages/make-tteokguk/make-tteokguk';

type Props = {
  params: { uuid: string };
};

export default function Page(props: Props) {
  return <MakeTteokguk uuid={props.params.uuid} />;
}
