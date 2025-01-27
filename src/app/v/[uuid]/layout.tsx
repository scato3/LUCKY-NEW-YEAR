import { redirect } from 'next/navigation';
import { getExist } from '@/api/query/recipe';

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ uuid: string }>;
}

export default async function Layout({ children, params }: LayoutProps) {
  const { uuid } = await params;

  try {
    const data = await getExist({ ownerUUID: uuid });
    if (data.exists === false) {
      redirect('/');
    }
  } catch (error) {
    console.error('Exist check error:', error);
    redirect('/');
  }

  return <>{children}</>;
}
