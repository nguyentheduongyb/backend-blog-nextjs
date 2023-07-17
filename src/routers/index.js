const userRouter = require('~/routers/userRouter');
const siteRouter = require('~/routers/siteRouter');
const categoryRouter = require('~/routers/categoryRouter');
const blogRouter = require('~/routers/blogRouter');

function routers(app) {
    app.use('/users', userRouter);
    app.use('/api/blog', blogRouter);
    app.use('/api/category', categoryRouter);
    app.use('/', siteRouter);
}
module.exports = routers;
