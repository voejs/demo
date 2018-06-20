export default app => {
  app.router.get('/', 'index.hello');
  app.router.get('/404', 'index.notFound');
  app.router.get('/500', 'index.error');
}