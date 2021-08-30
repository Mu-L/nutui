import{e as s,o as a,G as n}from"./vendor.f7062dc0.js";const t={class:"markdown-body"},l=[n('<h1>Navbar 头部导航</h1><h3>介绍</h3><p>提供导航功能。</p><h3>安装</h3><pre><code class="language-javascript">\n<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-comment">// vue</span>\n<span class="hljs-keyword">import</span> { Navbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n<span class="hljs-comment">// taro</span>\n<span class="hljs-keyword">import</span> { Navbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(Navbar);\n\n</code></pre><h3>代码示例</h3><h3>基本用法</h3><pre><code class="language-html">  <span class="hljs-tag">&lt;<span class="hljs-name">nut-navbar</span>  @<span class="hljs-attr">on-click-back</span>=<span class="hljs-string">&quot;back&quot;</span> @<span class="hljs-attr">on-click-title</span>=<span class="hljs-string">&quot;title&quot;</span> @<span class="hljs-attr">on-click-send</span>=<span class="hljs-string">&quot;send&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;订单详情&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;share&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-navbar</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-navbar</span> @<span class="hljs-attr">on-click-back</span>=<span class="hljs-string">&quot;back&quot;</span> @<span class="hljs-attr">on-click-title</span>=<span class="hljs-string">&quot;title&quot;</span> @<span class="hljs-attr">on-click-clear</span>=<span class="hljs-string">&quot;clear&quot;</span>  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;浏览记录&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;清空&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-navbar</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-navbar</span> <span class="hljs-attr">:left-show</span>=<span class="hljs-string">&quot;false&quot;</span> @<span class="hljs-attr">on-click-title</span>=<span class="hljs-string">&quot;title&quot;</span> @<span class="hljs-attr">on-click-icon</span>=<span class="hljs-string">&quot;icon&quot;</span> @<span class="hljs-attr">on-click-clear</span>=<span class="hljs-string">&quot;edit&quot;</span>  @<span class="hljs-attr">on-click-send</span>=<span class="hljs-string">&quot;more&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;购物车&quot;</span> <span class="hljs-attr">titIcon</span>=<span class="hljs-string">&quot;locationg3&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;编辑&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;more&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-navbar</span>&gt;</span>\n\n</code></pre><h3>设置slot:tabs可以增加tab</h3><pre><code class="language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">nut-navbar</span> @<span class="hljs-attr">on-click-back</span>=<span class="hljs-string">&quot;back&quot;</span> @<span class="hljs-attr">on-click-title</span>=<span class="hljs-string">&quot;title&quot;</span> @<span class="hljs-attr">on-click-clear</span>=<span class="hljs-string">&quot;edit&quot;</span> @<span class="hljs-attr">on-click-send</span>=<span class="hljs-string">&quot;list&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;编辑&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;horizontal&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:tabs</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;商品&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>这里是页签全部内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;店铺&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>这里是页签待付款内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-navbar</span>&gt;</span>\n</code></pre><h3>多tab切换导航及增加右侧按钮</h3><pre><code class="language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">nut-navbar</span> @<span class="hljs-attr">on-click-back</span>=<span class="hljs-string">&quot;back&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;share&quot;</span> @<span class="hljs-attr">on-click-send</span>=<span class="hljs-string">&quot;send&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:tabs</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;商品&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>这里是页签全部内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;评价&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>这里是页签待付款内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;详情&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>这里是页签待付款内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;推荐&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>这里是页签待付款内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icons</span> &gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">nut-icon</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;more&quot;</span> @<span class="hljs-attr">on-click-slot-send</span>=<span class="hljs-string">&quot;morelist&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-icon</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-navbar</span>&gt;</span>\n</code></pre><h3>Prop</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题名称</td><td>String</td><td>-</td></tr><tr><td>desc</td><td>右侧描述</td><td>String</td><td>-</td></tr><tr><td>left-show</td><td>是否展示左侧箭头</td><td>Boolean</td><td>false</td></tr><tr><td>icon</td><td>左侧 <a href="#/icon">图标名称</a> 或图片链接</td><td>String</td><td>-</td></tr><tr><td>tit-icon</td><td>标题带icon</td><td>String</td><td>-</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>title</td><td>点击页面标题事件</td><td>event:Event</td></tr><tr><td>right</td><td>点击右侧按钮事件</td><td>event:Event</td></tr><tr><td>back</td><td>点击返回上一页事件</td><td>event:Event</td></tr></tbody></table>',16)],p={setup:(n,{expose:p})=>(p({frontmatter:{}}),(n,p)=>(a(),s("div",t,l)))};export{p as default};
