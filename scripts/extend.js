// 按模块开发
if (!process.argv[2]) {
    console.log('缺少模块参数');
    process.exit(1);
}
process.env.APP_PATH = 'apps/' + process.argv[2];
process.env.APP = process.argv[2];
