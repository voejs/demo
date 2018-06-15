export default app => {
  app.router.get('/', app.controller.index.hello);
}