import BoilingTteokguk from '@/components/pages/boiling-tteokguk/boiling-tteokguk';

type Props = {
  params: { uuid: string };
};

export default function Page(props: Props) {
  return <BoilingTteokguk uuid={props.params.uuid} />;
}
