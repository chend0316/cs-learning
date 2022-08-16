
教程 https://yuchen112358.github.io/2016/04/25/auto-tool/

1. autoscan 自动生成 configure.scan
2. 重命名为 configure.in
3. 编辑 configure.in 文件
- 按照实际情况修改将这行代码：`AC_INIT([FULL-PACKAGE-NAME], [VERSION], [BUG-REPORT-ADDRESS])`
- 添加 `AM_INIT_AUTOMAKE`
4. aclocal
5. autoconf
6. autoheader