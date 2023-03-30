import { CTAComponent } from '@/components/CTAComponent';
import { CTAComponent2 } from '@/components/CTAComponent2';
import { CTAComponent3 } from '@/components/CTAComponent3';

export default function CTAPage() {
  return (
    <div className='mx-auto flex w-11/12 flex-col gap-8'>
      <CTAComponent />
      <CTAComponent3 />
      <CTAComponent2 />
    </div>
  );
}
