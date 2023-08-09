import { useState } from 'nuxt/app';
export const useCollapsed = () => {
  const isCollapsed = useState<boolean>('isCollapsed', () => false);
  const updateCollapsedValue = (value: boolean) => {
    console.log(value);
    isCollapsed.value = value;
  };
  return { isCollapsed, updateCollapsedValue };
};
