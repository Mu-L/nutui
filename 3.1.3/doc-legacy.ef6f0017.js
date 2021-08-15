System.register(["./vendor-legacy.931694a1.js"],(function(t){"use strict";var d,r,o;return{setters:[function(t){d=t.e,r=t.o,o=t.G}],execute:function(){const a={class:"markdown-body"},e=[o('<h1>Toast 吐司</h1><p>轻提示。</p><h3>介绍</h3><p>用于轻提示。</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\nimport { Toast } from &#39;@nutui/nutui&#39;;\n\nconst app = createApp();\napp.use(Toast);\n</code></pre><h2>代码演示</h2><h3>基本用法</h3><p>文字提示</p><pre><code class="language-javascript">Toast.text(&#39;网络失败，请稍后再试~&#39;);\n</code></pre><p>成功提示</p><pre><code class="language-javascript">Toast.success(&#39;成功提示&#39;);\n</code></pre><p>失败提示</p><pre><code class="language-javascript">Toast.fail(&#39;失败提示&#39;);\n</code></pre><p>警告提示</p><pre><code class="language-javascript">Toast.warn(&#39;警告提示&#39;);\n</code></pre><p>加载提示</p><pre><code class="language-javascript">Toast.loading(&#39;加载中&#39;);\n</code></pre><p>##¥ 支持在JS模块中导入使用</p><pre><code class="language-javascript">import { Toast } from &quot;@nutui/nutui&quot;;\nToast.text(&#39;在js模块中使用&#39;);\n// 返回实例，可以手动调用实例中的hide方法关闭提示\nconst toast = Toast.loading(&#39;在js模块中使用&#39;);\ntoast.hide();\n</code></pre><h3>API</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>Toast.text</td><td>展示文字提示</td><td>options/message</td><td>toast 实例</td></tr><tr><td>Toast.success</td><td>展示成功提示</td><td>options/message</td><td>toast 实例</td></tr><tr><td>Toast.fail</td><td>展示失败提示</td><td>options/message</td><td>toast 实例</td></tr><tr><td>Toast.warn</td><td>展示警告提示</td><td>options/message</td><td>toast 实例</td></tr><tr><td>Toast.hide</td><td>关闭提示</td><td>force:boolean</td><td>void</td></tr><tr><td>Toast.loading</td><td>展示加载提示</td><td>options/message</td><td>toast 实例</td></tr></tbody></table><h2>Options</h2><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>msg</td><td>消息文本内容,支持传入HTML</td><td>String/VNode</td><td>“”</td></tr><tr><td>id</td><td>标识符，相同者共用一个实例<br>loading类型默认使用一个实例，其他类型默认不共用</td><td>String/Number</td><td>-</td></tr><tr><td>duration</td><td>展示时长（毫秒）<br>值为 0 时，toast 不会自动消失（loading类型默认为0）</td><td>Number</td><td>2000</td></tr><tr><td>center</td><td>是否展示在页面中部（为false时展示在底部）</td><td>Boolean</td><td>true</td></tr><tr><td>bottom</td><td>距页面底部的距离（像素），option.center为false时生效</td><td>Number</td><td>30</td></tr><tr><td>text-align-center</td><td>多行文案是否居中</td><td>Boolean</td><td>true</td></tr><tr><td>bg-color</td><td>背景颜色（透明度）</td><td>String</td><td>“rgba(0, 0, 0, 0.8)”</td></tr><tr><td>custom-class</td><td>自定义类名</td><td>String</td><td>“”</td></tr><tr><td>icon</td><td>自定义图标，<strong>支持图片链接或base64格式</strong></td><td>String</td><td>“”</td></tr><tr><td>size</td><td>文案尺寸，<strong>small</strong>/<strong>base</strong>/<strong>large</strong>三选一</td><td>String</td><td>“base”</td></tr><tr><td>cover</td><td>是否显示遮罩层，loading类型默认显示</td><td>Boolean</td><td>loading类型true/其他类型false</td></tr><tr><td>cover-color</td><td>遮罩层颜色，默认透明</td><td>String</td><td>“rgba(0,0,0,0)”</td></tr><tr><td>loading-rotate</td><td>loading图标是否旋转，仅对loading类型生效</td><td>Boolean</td><td>true</td></tr><tr><td>on-close</td><td>关闭时触发的事件</td><td>function</td><td>null</td></tr><tr><td>close-on-click-overlay</td><td>是否在点击遮罩层后关闭提示</td><td>Boolean</td><td>false</td></tr><tr><td>toast-style</td><td>提示框style</td><td>object</td><td>{}</td></tr><tr><td>toast-class</td><td>提示框class</td><td>String</td><td>“”</td></tr></tbody></table>',24)];t("default",{setup:t=>(t,o)=>(r(),d("div",a,e))})}}}));
