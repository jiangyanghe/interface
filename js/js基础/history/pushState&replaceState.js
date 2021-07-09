// 防止页面后退
history.pushState(null, null, document.URL);
// 监听页面state
window.addEventListener('popstate', function () { history.pushState(null, null, document.URL); }, false);
// 监听页面hash 改变
window.addEventListener('hashchange', onHashChange, false);

/**
 * pushState history 添加历史
 * replaceState history替换历史
 */