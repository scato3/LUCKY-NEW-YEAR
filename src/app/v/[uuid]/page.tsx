import MainContainer from '@/components/pages/main/main-container';

export default async function Page({ params }: { params: { uuid: string } }) {
  return <MainContainer type="friend" uuid={params.uuid} />;
}
