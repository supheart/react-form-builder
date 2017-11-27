import Router from 'koa-router';
import SystemRouter from './system';



export function runRouter(app) {
    const router = new Router();
    
    router.get('/', (ctx, next) => {
        console.log('start page /');
        ctx.body = 'Hello world, page /, Milo';
    });
    
    router.get('/index', async (ctx, next) => {
        console.log('start page index');
        await ctx.render('index', {name: 'Hello milo!'});
    });
    
    router.get('*', (ctx, next) => {
        console.log('start page *');
        ctx.body = 'Hello world, page *, Milo';
    });

    const systemRouter = new SystemRouter();
    app.use(systemRouter.routes());
    app.use(router.routes());
};