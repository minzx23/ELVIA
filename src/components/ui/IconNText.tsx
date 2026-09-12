import { LucideIcon } from 'lucide-react';

export function IconNText({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <div className='flex items-center gap-2'>
      <Icon size={14} className='shrink-0 text-gray-500' />
      <p className='text-[13px]'>{text}</p>
    </div>
  );
}
