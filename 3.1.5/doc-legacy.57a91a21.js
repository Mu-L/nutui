System.register(["./vendor-legacy.7d1181c8.js"],(function(s){"use strict";var a,t,n;return{setters:[function(s){a=s.e,t=s.o,n=s.G}],execute:function(){const l={class:"markdown-body"},p=[n('<h1>NoticeBar 通告栏</h1><h3>介绍</h3><p>用于循环播放展示一组消息通知。</p><h3>安装</h3><pre><code class="language-javascript">\n<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-comment">// vue</span>\n<span class="hljs-keyword">import</span> { NoticeBar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n<span class="hljs-comment">// taro</span>\n<span class="hljs-keyword">import</span> { NoticeBar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(NoticeBar);\n\n</code></pre><h3>代码示例</h3><h3>基本用法</h3><pre><code class="language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">nut-noticebar</span>\n      <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-noticebar</span>&gt;</span>\n</code></pre><h3>禁用滚动</h3><p>文字内容多于一行时，可通过scrollable参数控制是否开启滚动</p><pre><code class="language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">nut-noticebar</span>\n      <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！&quot;</span>\n      <span class="hljs-attr">:scrollable</span>=<span class="hljs-string">&quot;false&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-noticebar</span>&gt;</span>\n</code></pre><h3>通告栏模式–关闭模式</h3><pre><code class="language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">nut-noticebar</span>\n      <span class="hljs-attr">:closeMode</span>=<span class="hljs-string">&quot;true&quot;</span>\n      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;hello&quot;</span>\n    &gt;</span>华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！\n    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-noticebar</span>&gt;</span>\n</code></pre><h3>通告栏模式–链接模式</h3><pre><code class="language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">nut-noticebar</span>\n      <span class="hljs-attr">left-icon</span>=<span class="hljs-string">&quot;https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png&quot;</span>\n      <span class="hljs-attr">:scrollable</span>=<span class="hljs-string">&quot;false&quot;</span>\n    &gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://www.jd.com&quot;</span>&gt;</span>京东商城<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-noticebar</span>&gt;</span>\n</code></pre><h3>纵向滚动</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-noticebar</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&#39;vertical&#39;</span> <span class="hljs-attr">:list</span>=<span class="hljs-string">&quot;horseLamp1&quot;</span> <span class="hljs-attr">:speed</span>=<span class="hljs-string">&#39;10&#39;</span> <span class="hljs-attr">:standTime</span>=<span class="hljs-string">&#39;1000&#39;</span>  @<span class="hljs-attr">click</span>=<span class="hljs-string">&#39;go&#39;</span> <span class="hljs-attr">:closeMode</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-noticebar</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">horseLamp1</span>: [<span class="hljs-string">&#39;惊喜红包免费领&#39;</span>, <span class="hljs-string">&#39;爆款准点秒&#39;</span>, <span class="hljs-string">&#39;买超值优惠&#39;</span>, <span class="hljs-string">&#39;赢百万京豆&#39;</span>],\n    };\n},\n\n<span class="hljs-attr">methods</span>:{\n    <span class="hljs-function"><span class="hljs-title">go</span>(<span class="hljs-params">item</span>)</span>{\n        <span class="hljs-built_in">console</span>.log(item)\n    }\n}\n</code></pre><h3>复杂滚动动画</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-noticebar</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&#39;vertical&#39;</span> <span class="hljs-attr">:list</span>=<span class="hljs-string">&quot;horseLamp2&quot;</span> <span class="hljs-attr">:speed</span>=<span class="hljs-string">&#39;10&#39;</span> <span class="hljs-attr">:standTime</span>=<span class="hljs-string">&#39;2000&#39;</span> <span class="hljs-attr">:complexAm</span>=<span class="hljs-string">&#39;true&#39;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-noticebar</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">horseLamp2</span>: [<span class="hljs-string">&#39;惊喜红包免费领&#39;</span>, <span class="hljs-string">&#39;爆款准点秒&#39;</span>, <span class="hljs-string">&#39;买超值优惠&#39;</span>, <span class="hljs-string">&#39;赢百万京豆&#39;</span>],\n    };\n}\n</code></pre><h3>自定义滚动内容</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-noticebar</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&#39;vertical&#39;</span> <span class="hljs-attr">:height</span>=<span class="hljs-string">&#39;50&#39;</span> <span class="hljs-attr">:speed</span>=<span class="hljs-string">&#39;10&#39;</span> <span class="hljs-attr">:standTime</span>=<span class="hljs-string">&#39;1000&#39;</span> <span class="hljs-attr">:list</span>=<span class="hljs-string">&quot;[]&quot;</span>  @<span class="hljs-attr">close</span>=<span class="hljs-string">&#39;go&#39;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-item&quot;</span> <span class="hljs-attr">:data-index</span>=<span class="hljs-string">&#39;index&#39;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item,index) in horseLamp3&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;index&quot;</span>&gt;</span>{{item}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-noticebar</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">horseLamp3</span>: [<span class="hljs-string">&#39;惊喜红包免费领&#39;</span>, <span class="hljs-string">&#39;爆款准点秒&#39;</span>, <span class="hljs-string">&#39;买超值优惠&#39;</span>, <span class="hljs-string">&#39;赢百万京豆&#39;</span>],\n    };\n}\n</code></pre><h3>纵向自定义右侧图标</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-noticebar</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&#39;vertical&#39;</span> <span class="hljs-attr">:list</span>=<span class="hljs-string">&quot;horseLamp1&quot;</span> <span class="hljs-attr">:speed</span>=<span class="hljs-string">&#39;10&#39;</span> <span class="hljs-attr">:standTime</span>=<span class="hljs-string">&#39;1000&#39;</span> &gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:rightIcon</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nut-icon</span> \n      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;trolley&quot;</span> \n      <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#f0250f&quot;</span>\n    &gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-icon</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-noticebar</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">horseLamp1</span>: [<span class="hljs-string">&#39;惊喜红包免费领&#39;</span>, <span class="hljs-string">&#39;爆款准点秒&#39;</span>, <span class="hljs-string">&#39;买超值优惠&#39;</span>, <span class="hljs-string">&#39;赢百万京豆&#39;</span>],\n    };\n}\n</code></pre><h3>Prop</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>direction</td><td>滚动的方向，可选 across、vertical</td><td>String</td><td>across</td></tr><tr><td>text</td><td>提示的信息</td><td>String</td><td>空</td></tr><tr><td>closeMode</td><td>是否启用关闭模式</td><td>Boolean</td><td>false</td></tr><tr><td>leftIcon</td><td>close为没有左边icon,其他为自定义的图片链接，没有为默认图片</td><td>String</td><td>空</td></tr><tr><td>color</td><td>导航栏的文字颜色</td><td>String</td><td>空</td></tr><tr><td>background</td><td>导航栏的背景颜色</td><td>String</td><td>空</td></tr><tr><td>delay</td><td>延时多少秒</td><td>String/Number</td><td>1</td></tr><tr><td>scrollable</td><td>是否可以滚动</td><td>Boolean</td><td>true</td></tr><tr><td>speed</td><td>滚动速率 (px/s)</td><td>Number</td><td>50</td></tr></tbody></table><h3>Prop（direction=vertical）</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>list</td><td>纵向滚动数据列表</td><td>Array</td><td>[]</td></tr><tr><td>speed</td><td>滚动的速度</td><td>Number</td><td>50</td></tr><tr><td>standTime</td><td>停留时间(毫秒)</td><td>Number</td><td>1000</td></tr><tr><td>complexAm</td><td>稍复杂的动画，耗能会高</td><td>Boolean</td><td>false</td></tr><tr><td>height</td><td>每一个滚动列的高度(px)，注意：在使用 slot 插槽定义滚动单元时，按照实际高度修改此值</td><td>Number</td><td>40</td></tr><tr><td>closeMode</td><td>是否启用右侧关闭图标，可以通过slot[name=rightIcon]自定义图标</td><td>Boolean</td><td>false</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>字段</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>外层点击事件回调</td><td>event: Event</td></tr><tr><td>close</td><td>关闭通知栏时触发</td><td>event: Event</td></tr></tbody></table>',33)];s("default",{setup:(s,{expose:n})=>(n({frontmatter:{}}),(s,n)=>(t(),a("div",l,p)))})}}}));
