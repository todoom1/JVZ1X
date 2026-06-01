(function() {
    var secretApps = [
{img: './png/xjh.jpg', name: '馨聚汇', xurl: 'aHR0cHM6Ly95Ymt2YnoudGNrcXh4LmNvbS9hcHAvcmVnaXN0ZXIucGhwP3NpdGVfaWQ9MTA2NiZ0b3BJZD0yNzA4NSZzZWxmUGxhbklkPTE1MDk='},
{img: './png/lhgj.jpg', name: '领航国际', xurl: 'aHR0cHM6Ly9yc2VzcmEuaGZqY2wuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDY0JnB0PTM3NTI2QkZBLTNDOEEtRjNDNC1ERDU3LUE3MjI2NzNCNzcxQw=='},
{img: './png/hygj.jpg', name: '汇赢国际', xurl: 'aHR0cHM6Ly9uY2djYS50cHJzbWkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDYyJnRvcElkPTEzNTg4JnNlbGZQbGFuSWQ9MzMx'},
{img: './png/cfgj.jpg', name: '超凡国际', xurl: 'aHR0cHM6Ly9wa2FqaW0uaGZqY2wuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDMyJnRvcElkPTg5NzYzMA=='},
{img: './png/ng.png', name: 'NG娱乐', xurl: 'aHR0cHM6Ly8xNDkuMzAuMTYzLjIzNTozMjAxMS8jL2xpbms/YWxsd2luPVp1bUdwRXolMkZmN1ROcWZGdkVsYUkwQSUzRCUzRA=='},
{img: './png/ffyl.jpg', name: '非凡国际', xurl: 'aHR0cHM6Ly9sbmNxYy5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDUwJnRvcElkPTI0NjE3NjM0NjgxNDE4MzUmc2VsZlBsYW5JZD00MTE4MjE='},
{img: './png/ztgj.jpg', name: '征途国际', xurl: 'aHR0cHM6Ly9wa2FqaW0uaGZqY2wuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDMxJnRvcElkPTM0MDMz'},
{img: './png/dfgj.jpg', name: '巅峰国际', xurl: 'aHR0cHM6Ly9nZnZneC5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDMwJnRvcElkPTQ0MjM4Nw=='},
{img: './svg/28q.svg', name: '28圈', xurl: 'aHR0cHM6Ly80NS4xMTQuMTA1LjEyMzo3Nzg4LyMvbGluaz9hbGx3aW49ODMwNjE2NA=='},
{img: './svg/wd.svg', name: '问鼎娱乐', xurl: 'aHR0cHM6Ly9vbmtyY3kuaGVmYXNoaXAuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDIwJnRvcElkPTI5MjYxMTM='},
{img: './png/sjgj.png', name: '赏金国际', xurl: 'aHR0cHM6Ly94anZ1ZWIuaGVmYXNoaXAuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDEwJnRvcElkPTMxMTMyMzU='},
{img: './png/c7.png', name: 'C7', xurl: 'aHR0cHM6Ly8xMDMuMzkuMTguMjExOjc3ODgvIy9saW5rP2FsbHdpbj03UWpVRVhYa3NXd2E2ZGE2SlFFJTJCc2clM0QlM0Q='},
{img: './png/top1.png', name: 'TOP1体育', xurl: 'aHR0cHM6Ly9sbmNxYy5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDUxJnRvcElkPTIzMDE3NjQzMTU2MjUxODU='},
{img: './svg/ngty.svg', name: 'NG体育', xurl: 'aHR0cHM6Ly9udmptY2UuaGZqY2wuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDE5JnRvcElkPTExOTA0MTg4'},
{img: './png/xsd.jpg', name: '新时代', xurl: 'aHR0cHM6Ly9kZXJlYXIuZm5icHN3LmNvbS9hcHAvcmVnaXN0ZXIucGhwP3NpdGVfaWQ9MTA1OSZ0b3BJZD01Nzg2MyZzZWxmUGxhbklkPTY2NzYz'},
{img: './png/yw28.jpg', name: '亿万28', xurl: 'aHR0cHM6Ly94anZ1ZWIuaGVmYXNoaXAuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDE3JnRvcElkPTYzOTMzNTE='},
{img: './png/stgj.jpg', name: '胜天国际', xurl: 'aHR0cHM6Ly90ZmFqbi5oY2p3ai5jb20vYXBwL3JlZ2lzdGVyLnBocD9zaXRlX2lkPTEwNTgmdG9wSWQ9MjY0NzEmc2VsZlBsYW5JZD0xNTU2'},
{img: './png/jlgj.jpg', name: '君临国际', xurl: 'aHR0cHM6Ly90ZmFqbi5oY2p3ai5jb20vYXBwL3JlZ2lzdGVyLnBocD9zaXRlX2lkPTIwODEmdG9wSWQ9MjM5NzAmc2VsZlBsYW5JZD03MjI='}
    ];

    var container = document.getElementById('xapes');
    if (!container) return;

    secretApps.forEach(function(app) {
        // 1. 创建元素
        var li = document.createElement('li');
        li.className = 'app-item'; // 只保留类名用于样式

        li.innerHTML = `
            <div class="app-icon"><img src="${app.img}"></div>
            <div class="app-name">${app.name}</div>
        `;

        li.onclick = function() {
            try {
                // 解码并跳转
                var targetUrl = atob(app.xurl.trim());
                window.open(targetUrl, '_blank');
            } catch (e) {
                console.error("解码失败:", e);
            }
        };

        // 4. 塞进容器
        container.appendChild(li);
    });
})();
window["document"]['getElementById']("3")['innerHTML'] = ("FIFA World Cup 2026™<br>-查看赛事赛程-");
window["document"]['getElementById']("2")['innerHTML'] = ("🔥十年信誉平台<br>⚽世界杯官方投注平台");
window["document"]['getElementById']("1")['innerHTML'] = "ZZ123.MY";

function showPopupOnce(popupId = 'sw_loaded') {
  const key = `popup_${popupId}_shown`;
  
  if (localStorage.getItem(key)) {
    return; 
  }
  alert('欢迎访问ZZ123！');
  localStorage.setItem(key, Date.now().toString());
}
window.addEventListener('load', function() {
  showPopupOnce();
});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function(registration) {
      console.log('SW registered');
    });
}
