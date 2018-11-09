import * as React from 'react';
import {ReactWrapper} from 'enzyme';

type IndividualContextCreator<
  MountOptions = undefined
> = MountOptions extends undefined
  ? (() => any)
  : ((options: MountOptions) => any);

interface ContextCreator<MountOptions> {
  [key: string]: IndividualContextCreator<MountOptions>;
}

type ContextExposer<C extends ContextCreator<any>> = {
  readonly [K in keyof C]: ReturnType<C[K]>
};

type Wrapper<P, Context extends ContextCreator<any>> = AppContextReactWrapper<
  P,
  never
> &
  ContextExposer<Context>;

interface Options<
  Async extends boolean,
  MountOptions,
  Context extends ContextCreator<MountOptions>
> {
  context: Context;
  render<P>(
    element: React.ReactElement<P>,
    context: ContextExposer<Context>,
  ): React.ReactElement<P>;
  connect?<P>(wrapper: ReactWrapper<P>, context: Context): void;
  afterMount?<P>(
    wrapper: Wrapper<P, Context>,
    options: MountOptions,
  ): Async extends true ? Promise<Wrapper<P, Context>> : Wrapper<P, Context>;
}

export class AppContextReactWrapper<P, S> extends ReactWrapper<P, S> {}

type ReturnResult<
  Async extends boolean,
  P,
  Context extends ContextCreator<any>
> = Async extends true ? Promise<Wrapper<P, Context>> : Wrapper<P, Context>;

type MountFunction<
  Async extends boolean,
  MountOptions,
  Context extends ContextCreator<MountOptions>
> = MountOptions extends undefined
  ? (<P>(element: React.ReactElement<P>) => ReturnResult<Async, P, Context>)
  : (<P>(
      element: React.ReactElement<P>,
      options?: MountOptions,
    ) => ReturnResult<Async, P, Context>);

function noop() {}

export function createAppContextMount<
  MountOptions,
  Context extends ContextCreator<MountOptions> = ContextCreator<MountOptions>
>(
  options: Options<false, MountOptions, Context>,
): MountFunction<false, MountOptions, Context>;
export function createAppContextMount<
  MountOptions,
  Context extends ContextCreator<MountOptions> = ContextCreator<MountOptions>
>(
  options: Options<true, MountOptions, Context>,
): MountFunction<true, MountOptions, Context>;
export function createAppContextMount<
  MountOptions,
  Context extends ContextCreator<MountOptions> = ContextCreator<MountOptions>
>({
  render,
  context: contextCreators,
  connect = noop,
  afterMount,
}: Options<boolean, MountOptions, Context>): MountFunction<
  boolean,
  MountOptions,
  Context
> {
  function mount<P>(
    element: React.ReactElement<P>,
    options?: MountOptions,
  ): Wrapper<P, Context> {
    const context: ContextExposer<Context> = Array.from(
      Object.entries(contextCreators),
    ).reduce<any>(
      (values, [key, getter]) => ({
        ...values,
        [key]: (getter as Function)(options || {}),
      }),
      {},
    );

    const wrapper = new AppContextReactWrapper(render(element, context));

    connect(
      wrapper,
      context,
    );

    for (const [key, value] of Object.entries(context)) {
      Object.defineProperty(wrapper, key, {
        writable: false,
        value,
      });
    }

    return afterMount ? (afterMount as Function)(wrapper, options) : wrapper;
  }

  return mount as any;
}

const mount = createAppContextMount({
  context: {foo: () => 'bar'},
  render: (element) => element,
  afterMount(wrapper) {
    wrapper.foo;
    return wrapper;
  },
});

const div = mount(<div />);
div.foo;
