// trustbank/frontend/src/utils/cn.ts
export function cn(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}
