module.exports = {
  appDirectory: 'app',
  browserBuildDirectory: 'public/build',
  publicPath: '/build/',
  serverBuildDirectory: 'build',
  devServerPort: 8002,
  mdx: async () => {
    const [syntaxHighlighter] = await Promise.all([
      import('@kentcdodds/md-temp').then(
        ({ remarkCodeBlocksShiki }) => remarkCodeBlocksShiki
      )
    ]);
    return {
      remarkPlugins: [syntaxHighlighter]
    };
  }
};
