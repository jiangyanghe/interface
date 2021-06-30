## React Hook：使用 useEffect, useLayoutEffect(同步)
* 如果熟悉 React 类声明周期方法，可以把 useEffect Hook 视作 componentDidMount、componentDidUpdate 和 componentWillUnmount 的组合体。


### useEffect 做了什么？
通过使用这个 Hook，通知 React 组件需要在渲染后执行什么操作。React 将记住传递的 function（把这个 function 成为 “effect”），并在执行 DOM 更新后调用这个 function。
```
  useEffect(() => {});
```

### 清理副作用
useEffect 中 return fun
```
  useEffect(() => {
    // TODO 操作
    return () => {
      // 清理副作用
    }
  });
```