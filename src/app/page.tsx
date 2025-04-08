import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen w-full">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Link href="/create">
          <Button variant="default" className="bg-slate-600">
            Create Quiz
          </Button>
        </Link>
      </div>
    </div>
  );
}
