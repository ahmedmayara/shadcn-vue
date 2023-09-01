import { camelize, getCurrentInstance, toHandlerKey } from "vue";
import { twMerge } from "tailwind-merge";

export function cn(...args: any[]) {
  return twMerge(...args);
}

export type ParseEmits<T extends Record<string, any>> = {
  [K in keyof T]: (...args: T[K]) => void;
};

// Vue doesn't have emits forwarding, in order to bind the emits we have to convert events into `onXXX` handlers
// issue: https://github.com/vuejs/core/issues/5917
export function useEmitAsProps<Name extends string>(
  emit: (name: Name, ...args: any[]) => void,
) {
  const vm = getCurrentInstance();

  const events = vm?.type.emits as Name[];
  const result: Record<string, any> = {};
  if (!events?.length) {
    console.warn(
      `No emitted event found. Please check component: ${vm?.type.__name}`,
    );
  }

  events?.forEach((ev) => {
    result[toHandlerKey(camelize(ev))] = (...arg: any) => emit(ev, ...arg);
  });
  return result;
}
