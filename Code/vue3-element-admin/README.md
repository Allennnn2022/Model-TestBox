<div align="center">
    <img src="https://img.shields.io/badge/Vue-3.4.29-brightgreen.svg"/>
    <img src="https://img.shields.io/badge/Vite-5.3.1-green.svg"/>
    <img src="https://img.shields.io/badge/Element Plus-2.7.5-blue.svg"/>
    <img src="https://img.shields.io/badge/license-MIT-green.svg"/>
    <div align="center"> 中文 | <a href="./README.en-US.md">English</div>
</div>

![](https://foruda.gitee.com/images/1708618984641188532/a7cca095_716974.png "rainbow.png")

<div align="center">
  <a target="_blank" href="http://vue3.youlai.tech">👀 在线预览</a> |  <a target="_blank" href="https://juejin.cn/post/7228990409909108793">📖 阅读文档</a>  
</div>

## 环境准备

| 环境                 | 名称版本                                                     | 
| -------------------- | :----------------------------------------------------------- | 
| **开发工具**         | VSCode    | 
| **运行环境**         | Node ≥18 (其中 20.6.0 版本不可用)  | 
|                     | npm 10.7.0    |
|                     | vue @3.4.35 |
|                     |  vue-router @4.4.2 |
|                     | vite @5.3.5 |


## 项目启动

```bash
# 克隆代码
git clone https://github.com/Allennnn2022/Model-TestBox.git
# 切换目录
cd vue3-element-admin

# 安装 pnpm
npm install pnpm -g

# 安装依赖
pnpm install

# 启动运行
pnpm run dev
```



## 项目部署

```bash
├─api
├─assets
│  ├─icons
│  └─images
├─components
│  ├─AppLink
│  ├─Breadcrumb
│  ├─CopyButton
│  ├─CURD
│  ├─Dictionary
│  ├─GithubCorner
│  ├─Hamburger
│  ├─IconSelect
│  ├─LangSelect
│  ├─Pagination
│  ├─SizeSelect
│  ├─SvgIcon
│  ├─TableSelect
│  ├─Upload
│  └─WangEditor
├─directive
│  └─permission
├─enums
├─lang
│  └─package
├─layout
│  └─components
│      ├─AppMain
│      ├─NavBar
│      │  └─components
│      ├─Settings
│      │  └─components
│      ├─Sidebar
│      │  └─components
│      └─TagsView
├─plugins
├─router
├─store
│  └─modules
├─styles
├─types
├─utils
└─views
    ├─dashboard
    │  └─components
    ├─DatasetManage
    ├─demo
    │  ├─api
    │  ├─curd
    │  │  └─config
    │  ├─multi-level
    │  │  └─children
    │  │      └─children
    │  └─table-select
    │      └─config
    ├─error-page
    ├─login
    ├─redirect
    ├─ResultDisplay
    │  └─components
    ├─system
    │  ├─dept
    │  ├─dict
    │  ├─log
    │  ├─menu
    │  ├─role
    │  ├─TestManage
    │  └─user
    │      └─components
    └─TestManage
```

## 本地Mock

项目同时支持在线和本地 Mock 接口，默认使用线上接口，如需替换为本地 Mock 接口，修改文件 `.env.development` 的 `VITE_MOCK_DEV_SERVER` 为  `true` **即可**。

## 注意事项

- **自动导入插件自动生成默认关闭**

  模板项目的组件类型声明已自动生成。如果添加和使用新的组件，请按照图示方法开启自动生成。在自动生成完成后，记得将其设置为 `false`，避免重复执行引发冲突。

  ![](https://foruda.gitee.com/images/1687755823137387608/412ea803_716974.png)

- **项目启动浏览器访问空白**

  请升级浏览器尝试，低版本浏览器内核可能不支持某些新的 JavaScript 语法，比如可选链操作符 `?.`。

- **项目同步仓库更新升级**

  项目同步仓库更新升级之后，建议 `pnpm install` 安装更新依赖之后启动 。

- **项目组件、函数和引用爆红**

	重启 VSCode 尝试

## 项目文档

- [基于 Vue3 + Vite + TypeScript + Element-Plus 从0到1搭建后台管理系统](https://blog.csdn.net/u013737132/article/details/130191394)

- [ESLint+Prettier+Stylelint+EditorConfig 约束和统一前端代码规范](https://blog.csdn.net/u013737132/article/details/130190788)
- [Husky + Lint-staged + Commitlint + Commitizen + cz-git 配置 Git 提交规范](https://blog.csdn.net/u013737132/article/details/130191363)






