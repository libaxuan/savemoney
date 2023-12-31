# SaveMoney Vue项目

SaveMoney是一个使用Vue.js构建的存钱项目，它可以帮助你计算存款的利息和价值。本文档将提供有关项目的详细信息以及如何安装、运行和贡献代码的说明。

## 功能

- 显示不同金额和存款年限的存款利息和价值
- 点击单元格时切换背景颜色，实现选中效果

## 技术栈

- Vue.js：用于构建用户界面的JavaScript框架
- HTML/CSS：用于创建和样式化页面
- Git：版本控制工具，用于管理项目的代码
- Vercel：用于部署静态网站的全球性托管平台

## 安装

1. 克隆存储库到本地计算机：
 ```
   git clone https://github.com/libaxuan/savemoney.git
```

2. 进入项目目录：

```
cd savemoney
```

3. 安装项目依赖项：

```
npm install
```

## 运行项目

在项目目录中运行以下命令来启动开发服务器：

```
yarn dev
```

然后，在浏览器中访问 `http://localhost:8080`，你将看到SaveMoney项目的运行实例。

打包：

```
yarn build
```

## 部署到Vercel

1. 在Vercel上创建一个新的账户（如果你还没有账户）。

2. 安装Vercel CLI（命令行界面工具）：

```
npm install -g vercel
```

3. 在项目根目录中运行以下命令进行登录：

```
vercel login
```

4. 在项目根目录中运行以下命令进行部署：

```
vercel
```

5. 推到生产：

```
vercel prod
```

   这将开始部署过程，并在部署完成后提供一个唯一的URL用于访问你的应用程序。

   > 注意：在部署过程中，Vercel将自动检测你的项目类型，并执行必要的构建步骤。

6. 访问提供的URL，你将能够在Vercel上查看和访问你的SaveMoney项目。

## 贡献

如果你想为SaveMoney项目做出贡献，可以按照以下步骤进行：

1. 在GitHub上Fork存储库到你自己的账户。

2. 克隆你的Fork到本地计算机。

3. 创建一个新的分支来进行你的更改：

```
git checkout -b feature/your-feature-name
```

   将 `your-feature-name` 替换为你的特性名称。

4. 在本地进行更改和改进。

5. 提交你的更改：

```
git commit -m "Add your commit message here"
```

   替换 `"Add your commit message here"` 为你的提交信息。

6. 将更改推送到你的Fork：

```
git push origin feature/your-feature-name
```

7. 在GitHub上创建一个新的Pull请求，将你的更改提交到原始存储库。

我们欢迎并鼓励任何形式的贡献，包括错误修复、功能改进和文档更新。

## 开源协议
MIT: <https://rem.mit-license.org>

