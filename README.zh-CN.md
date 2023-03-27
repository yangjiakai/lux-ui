<br><br>

<p align='center' >
  <img  src='/src/assets/logo3.svg' alt='Vuetify3' width='300'/>
</p>
<br><br>

<h6 align='center'>
<a href="https://shirabako.com/">在线 Demo</a>
</h6>

<br>

<p align='center'>
<a href="https://github.com/yangjiakai/jk-vuetify3-lux-admin/blob/main/README.md">English</a> | <b>简体中文</b>| <a href="https://github.com/yangjiakai/jk-vuetify3-lux-admin/blob/main/README.jp.md">日本語</a>
</p>

## 序文

Vue2 时代开始,Vuetify 就一直是我最喜欢的一款 Vue 的 UI 框架。随着 Vue3.0 在 2020 年底发布,到 Vue3.2 大版本在 2022 年初逐渐稳定。两年之后,Vuetify 适配于 Vue3.x 的 Vuetify3 终于在 2022 年 11 月正式上线。Vue 作者尤雨溪也在表达了对 Vuetify3 的肯定。现阶段 Vuetify3 的文档依然大部分属于沿用 Vuetify2 的未更新状态,并且多语言版本依然遥遥无期。这种状态下初次接触 Vuetify 的开发者,以及从想要尽早拥抱 Vuetify3 的开发者,想必着手时会有许多困惑。一方面是自己对储备的前端知识和 Vuetify 框架的总结回顾。另一方面也希望可以可以通过自己的摸索给其他开发者带来帮助,所以在 2022 年 11 月 Vuetify3 正式一上线后便开始着手这个项目。预想主要偏向前端 UI 设计,自适应,组件开发,与常用插件的整合以及简单的逻辑。是否要开发相应的 api 和业务逻辑依然待定(有余力再说)。

## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/core)
- ⚡️ [Vite](https://github.com/vitejs/vite)
- ⚡️ UI Framework [Vuetify 3](https://next.vuetifyjs.com/en/)
- ⚡️ TypeScript
- 📦 组件自动导入
- 🍍 通过 [Pinia](https://pinia.vuejs.org/)进行状态管理
- ⚡️ 使用新的 `<script setup>` 语法
- ⚡️ 使用任意的图标集 [Iconify](https://icon-sets.iconify.design/)
- ⚡️ 零配置部署在 Netlify
- ⚡️ Echarts, ApexChart
- ⚡️ Openai, Unsplash Api
- ⚡️ i18n 多语言支持
- ⚡️ virtual-scroller , vuedraggable , perfect-scrollbar
- ⚡️ 富文本编辑器
- ☁️ 响应式多平台自适应

## 预览

<img  src='/src/assets/previews/DashBoard.png'  alt='DashBoard' />
<img  src='/src/assets/previews/TaskBoard.png'  alt='ChatGPT' />
<img  src='/src/assets/previews/Todo.png'  alt='ChatGPT' />
<img  src='/src/assets/previews/ChatGPT.png'  alt='ChatGPT' />
<img  src='/src/assets/previews/Card.png'  alt='Card' />
<img  src='/src/assets/previews/Color.png'  alt='Color' />
<img  src='/src/assets/previews/Gradient.png'  alt='Gradient' />
<img  src='/src/assets/previews/Login.png'  alt='ChatGPT' />
<img  src='/src/assets/previews/Unsplash.png'  alt='ChatGPT' />
<img  src='/src/assets/previews/Unsplash2.png'  alt='ChatGPT' />

<br>
## Pre-packed

### UI 框架

- [Vuetify3](https://next.vuetifyjs.com/en/) - Vuetify 是一个不要求设计能力的 Vue 界面组件框架，自带了许多自行设计实现的 Vue 组件。

### Icons

- [Iconify](https://iconify.design) - 使用任意的图标集 [🔍Icônes](https://icones.netlify.app/)
- [Pure CSS Icons via UnoCSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

## 目标功能

- [x] 明暗主题切换 -- 完成
- [x] 主题色切换 -- 完成
- [x] 中日英三语言切换-- 完成

## 目标页面

### 认证相关

- [x] 登录 -- 完成
- [x] 注册 -- 完成
- [x] 验证邮件 -- 完成
- [ ] 密码重置 -- 施工中

### 公共页面

- [x] 404 -- 完成
- [ ] 500 -- 施工中
- [ ] 系统维护 -- 施工中
- [ ] 常见问题 -- 施工中

### UI 相关

- [x] 瀑布流布局 -- 完成
- [x] 大数据虚拟列表 -- 完成
- [ ] 骨架屏 -- 施工中

### 功能页面

- [x] 任务版(拖拽功能) -- 完成
- [x] 任务列表() -- 施工中

### 站点仿写

- [ ] ......

### 插件

- [Vue Router4](https://router.vuejs.org/)
- [VueUse](https://github.com/antfu/vueuse) - 非常有用的组合式 API 合集
- [VuedDaggable](https://github.com/SortableJS/Vue.Draggable) - 允许进行与数组模型同步的拖拽放置操作
- [Vue-Masonry-Wall](https://github.com/DerYeger/yeger/tree/main/packages/vue-masonry-wall) - 是一种 Vue3 响应式,支持 SSR,且零依的的瀑布流布局方案
- [Vue-Virtual-Scroller](https://github.com/Akryum/vue-virtual-scroller) - 大数据快速虚拟滚动插件

## 现在可以试试!

```
git clone https://github.com/yangjiakai/jk-vuetify3-lux-admin.git

cd jk-vuetify3-lux-admin

npm install

npm run dev
```
