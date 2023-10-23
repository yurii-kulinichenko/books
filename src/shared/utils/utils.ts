import {
  configure,
  makeObservable,
  IObservableFactory,
  IComputedFactory,
  IActionFactory,
} from 'mobx';

export { observable as appObservable, computed as appComputed, toJS as appToJs } from 'mobx';
export { observer as appObserver } from 'mobx-react';

export const setUp = () => {
  configure({
    enforceActions: 'never',
    useProxies: 'never',
  });
};

export const appMakeObservable = <T extends object>(
  target: T,
  annotations: { [key: string]: IObservableFactory | IComputedFactory | IActionFactory }
) => makeObservable<any>(target, annotations);
