// --save 安装并添加条目到 package.json 文件的 dependencies。
// --save-dev 安装并添加条目到 package.json 文件的 devDependencies。

// npm update
// npm 会检查所有软件包是否有满足版本限制的更新版本。
// npm update <package-name>
// 指定单个软件包进行更新
// 当运行 npm update 时，package-lock.json 文件中的依赖的版本会被更新



// npm root -g 命令会告知 安装包 在计算机上的确切位置。
// 在 macOS 或 Linux 上，此位置可能是 /usr/local/lib/node_modules。 在 Windows 上，可能是 C:\Users\YOU\AppData\Roaming\npm\node_modules。
// 但是，如果使用 nvm 管理 Node.js 版本，则该位置会有所不同。


// package-lock.json 会固化当前安装的每个软件包的版本，当运行 npm install时，npm 会使用这些确切的版本。


// 本地安装的软件包的版本
// npm list

// 全局安装的软件包的版本
// npm list -g

// 指定某个包， 可以获取明确版本信息
// npm list ws



// 当使用 npm install <packagename> 安装软件包时，该软件包最新的可用版本会被下载并放入 node_modules 文件夹中，
// 并且还会将相应的条目添加到当前文件夹中存在的 package.json 和 package-lock.json 文件中。

// 使用 @ 语法来安装 npm 软件包的旧版本
// npm install <package>@<version>

// 查看软件包在 npm 仓库上最新的可用版本
// npm view [package_name] version

// 查看软件包在 npm 仓库上所有以前的版本
// npm view [package_name] versions


// 可以使用 @ 语法来安装 npm 软件包的旧版本
// npm install <package>@<version>


// 若要发觉软件包的新版本
// npm outdated。



// ^: 最左边非0数字的右侧的任意版本更新 
// ^0.13.0，运行 npm update，可更新到 0.13.1、0.13.2 等，不能到 0.14.0 或更高版本。 
// ^1.13.0，运行 npm update 时，可以更新到 1.13.1、1.14.0 等，但不能更新到 2.0.0 或更高版本。

// ~: 如果写入的是 〜0.13.0，则当运行 npm update 时，会更新到补丁版本：即 0.13.1 可以，但 0.14.0 不可以。

// >: 接受高于指定版本的任何版本。

// >=: 接受等于或高于指定版本的任何版本。

// <=: 接受等于或低于指定版本的任何版本。

// <: 接受低于指定版本的任何版本。

// =: 接受确切的版本

// -: 接受一定范围的版本。例如：2.1.0 - 2.6.2。

// ||: 组合集合。例如 < 2.1 || > 2.6。

// 可以合并其中的一些符号，例如 1.0.0 || >=1.1.0 <1.2.0，即使用 1.0.0 或从 1.1.0 开始但低于 1.2.0 的版本。

// 还有其他的规则：
// 无符号: 仅接受指定的特定版本（例如 1.2.1）。
// latest: 使用可用的最新版本


// 卸载软件包
// npm uninstall <package-name>
// npm uninstall -S <package-name>  // 如果使用 -S 或 --save 标志，则此操作还会移除 package.json 文件中的引用。
// npm uninstall -D <package-name> // 会移除 package.json 文件中的引用和安装的本地依赖包。

// 卸载全局软件包
// npm uninstall -g <package-name>




// 通常，所有的软件包都应本地安装。
// 这样可以确保计算机中可以有数十个应用程序，并且如果需要，每个应用程序都可以运行不同的版本。
// 更新全局软件包会使所有的项目都使用新的版本，这可能会导致维护方面的噩梦，因为某些软件包可能会破坏与其他依赖项的兼容性等。
// 所有的项目都有自己的软件包本地版本，即使这看起来有点浪费资源，但与可能产生的负面影响相比也很小。
// 当程序包提供了可从 shell（CLI）运行的可执行命令、且可在项目间复用时，则该程序包应被全局安装。
// 也可以在本地安装可执行命令并使用 npx 运行，但是某些软件包最好在全局安装。



// npm install --production
// 避免安装开发依赖项