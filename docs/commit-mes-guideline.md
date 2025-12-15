# Commit Message Guidelines

Fellow Angular guidelines when writing commit messages:

## Angular 规范的核心要素

### Angular规范的核心要素包括以下几个部分：

*   **类型（type）**：表示commit的类别，如feat、fix、docs等。
*   **范围（scope）**：可选字段，用于标识受更改影响的特性或文件模块。
*   **主题（subject）**：描述此次更改的简短概述，通常以祈使句形式表达。
*   **正文（body）**：详细描述commit的目的与变更细节。
*   **脚注（footer）**：列出重要的BREAKING CHANGE或者关闭issue的引用。

### 范化的提交格式

一个典型的Angular规范化的提交信息应该按照以下格式书写：

```
<type>(<scope>): <subject>

<BLANK LINE>

<body>

<footer>
```

其中，`<type>` 和 `<subject>` 是必填项，而 `<scope>`、`<body>` 和 `<footer>` 则是可选项。

#### 示例：

```
feat(users): add user list page

Add a new page to the app that lists all users.

Closes `#123`
```

在这个例子中，“feat”表示这是一个新特性，“users”是可选的范围，指出了这个功能影响的是用户模块，“add user list page”是对这次更改的简要描述。

### 类型详解

*   **feat**：引入新功能给用户（对应于特性分支）
*   **fix**：修复一个bug
*   **docs**：文档变化（markdown、yml等）
*   **style**：不影响代码意义的修改（空格、分号等）
*   **refactor**：重构生产代码
*   **perf**：改进性能
*   **test**：增加缺失的测试
*   **chore**：构建过程或辅助工具的变动
*   **revert**：回滚到上一次commit

##### 脚注中的BREAKING CHANGES

如果提交包含了破坏性的变更，即不兼容的API变更，则需要在脚注中明确指出：

```
BREAKING CHANGE: <describe old behavior and how to adjust>
```
