System.register(["./vendor-legacy.5bafa3ec.js"],(function(s){"use strict";var n,a,t;return{setters:[function(s){n=s.e,a=s.o,t=s.G}],execute:function(){const l={class:"markdown-body"},p=[t('<h1>Dialog 对话框</h1><h3>介绍</h3><p>模态对话框，在浮层中显示，引导用户进行相关操作，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { Dialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(Dialog);\n</code></pre><h2>使用方式</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;基础弹框&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;baseClick&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-dialog</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;基础弹框&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是基础弹框。&quot;</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible1&quot;</span> @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span> @<span class="hljs-attr">ok</span>=<span class="hljs-string">&quot;onOk&quot;</span> /&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;无标题弹框&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;noTitleClick&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-dialog</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是无标题弹框。&quot;</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible2&quot;</span> @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span> @<span class="hljs-attr">ok</span>=<span class="hljs-string">&quot;onOk&quot;</span> /&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;提示弹框&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;tipsClick&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-dialog</span> <span class="hljs-attr">no-cancel-btn</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;温馨提示&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是提示弹框。&quot;</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible3&quot;</span> @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span> @<span class="hljs-attr">ok</span>=<span class="hljs-string">&quot;onOk&quot;</span> /&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;异步关闭&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;componentClick&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-dialog</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;异步关闭&quot;</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;closeContent&quot;</span> <span class="hljs-attr">:visible</span>=<span class="hljs-string">&quot;visible4&quot;</span> @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span> @<span class="hljs-attr">ok</span>=<span class="hljs-string">&quot;onOkAsync&quot;</span> /&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> visible1 = ref(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> visible2 = ref(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> visible3 = ref(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> visible4 = ref(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> closeContent = ref(<span class="hljs-string">&#39;&#39;</span>);\n    <span class="hljs-keyword">const</span> sleep = <span class="hljs-function">() =&gt;</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> <span class="hljs-built_in">setTimeout</span>(resolve, <span class="hljs-number">1000</span>));\n    <span class="hljs-keyword">const</span> countDown = <span class="hljs-function">(<span class="hljs-params">second: number</span>) =&gt;</span> <span class="hljs-string">`倒计时 <span class="hljs-subst">${second}</span> 秒`</span>;\n\n    <span class="hljs-keyword">const</span> onCancel = <span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;event cancel&#39;</span>);\n    };\n    <span class="hljs-keyword">const</span> onOk = <span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;event ok&#39;</span>);\n    };\n    <span class="hljs-keyword">const</span> onOkAsync = <span class="hljs-function">() =&gt;</span> {\n      sleep()\n        .then(<span class="hljs-function">() =&gt;</span> {\n          closeContent.value = countDown(<span class="hljs-number">2</span>);\n          <span class="hljs-keyword">return</span> sleep();\n        })\n        .then(<span class="hljs-function">() =&gt;</span> {\n          closeContent.value = countDown(<span class="hljs-number">1</span>);\n          <span class="hljs-keyword">return</span> sleep();\n        })\n        .then(<span class="hljs-function">() =&gt;</span> {\n          closeContent.value = countDown(<span class="hljs-number">0</span>);\n        })\n        .then(<span class="hljs-function">() =&gt;</span> {\n          visible4.value = <span class="hljs-literal">false</span>;\n        });\n    };\n\n    <span class="hljs-keyword">const</span> baseClick = (): <span class="hljs-function"><span class="hljs-params">void</span> =&gt;</span> {\n      visible1.value = <span class="hljs-literal">true</span>;\n    };\n    <span class="hljs-keyword">const</span> noTitleClick = <span class="hljs-function">() =&gt;</span> {\n      visible2.value = <span class="hljs-literal">true</span>;\n    };\n    <span class="hljs-keyword">const</span> tipsClick = <span class="hljs-function">() =&gt;</span> {\n      visible3.value = <span class="hljs-literal">true</span>;\n    };\n\n    <span class="hljs-keyword">const</span> componentClick = <span class="hljs-function">() =&gt;</span> {\n      closeContent.value = <span class="hljs-string">`点击确定时3s后关闭`</span>;\n      visible4.value = <span class="hljs-literal">true</span>;\n    };\n\n    <span class="hljs-keyword">return</span> {\n      visible1,\n      visible2,\n      visible3,\n      visible4,\n      onCancel,\n      onOk,\n      closeContent,\n      onOkAsync,\n      baseClick,\n      noTitleClick,\n      componentClick,\n      tipsClick\n    };\n  }\n};\n</code></pre><h2>Props</h2><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>String</td><td>-</td></tr><tr><td>content</td><td>内容，支持HTML</td><td>String</td><td>-</td></tr><tr><td>teleport</td><td>指定挂载节点</td><td>String</td><td>“body”</td></tr><tr><td>close-on-click-overlay</td><td>点击蒙层是否关闭对话框</td><td>Boolean</td><td>false</td></tr><tr><td>no-footer</td><td>是否隐藏底部按钮栏</td><td>Boolean</td><td>false</td></tr><tr><td>no-ok-btn</td><td>是否隐藏确定按钮</td><td>Boolean</td><td>false</td></tr><tr><td>no-cancel-btn</td><td>是否隐藏取消按钮</td><td>Boolean</td><td>false</td></tr><tr><td>cancel-text</td><td>取消按钮文案</td><td>String</td><td>”取消“</td></tr><tr><td>ok-text</td><td>确定按钮文案</td><td>String</td><td>”确 定“</td></tr><tr><td>ok-btn-disabled</td><td>禁用确定按钮</td><td>Boolean</td><td>false</td></tr><tr><td>cancel-auto-close</td><td>取消按钮是否默认关闭弹窗</td><td>Boolean</td><td>true</td></tr><tr><td>text-align</td><td>文字对齐方向，可选值同css的text-align</td><td>String</td><td>“center”</td></tr><tr><td>close-on-popstate</td><td>是否在页面回退时自动关闭</td><td>Boolean</td><td>false</td></tr><tr><td>lock-scroll</td><td>背景是否锁定</td><td>Boolean</td><td>false</td></tr></tbody></table><h2>Events</h2><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>ok</td><td>确定按钮回调</td><td>Function</td><td>-</td></tr><tr><td>cancel</td><td>取消按钮回调</td><td>Function</td><td>-</td></tr><tr><td>closed</td><td>关闭回调，任何情况关闭弹窗都会触发</td><td>Function</td><td>-</td></tr></tbody></table><h2>Slots</h2><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>header</td><td>自定义标题区域</td></tr><tr><td>default</td><td>自定义内容</td></tr><tr><td>footer</td><td>自定义底部按钮区域</td></tr></tbody></table>',14)];s("default",{setup:(s,{expose:t})=>(t({frontmatter:{}}),(s,t)=>(a(),n("div",l,p)))})}}}));
