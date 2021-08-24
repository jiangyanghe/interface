function wrapEvent(e) {
  return {
    ...e,
    timestamp: Date.now(),
  };
}

function record() {

  wrappedEmit = (e, isCheckout) => {
    
  }

  // 记录全量DOM,
  takeFullSnapshot = () => {
    wrappedEmit(
      wrapEvent({
        type: EventType.Meta,
        data: {
          href: window.location.href,
          width: getWindowWidth(),
          height: getWindowHeight(),
        },
      }),
      isCheckout,
    );
  }
}