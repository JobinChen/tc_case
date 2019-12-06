import * as Koa from 'koa'
import * as bodify from 'koa-body';
import * as serve from 'koa-static';
import * as timing from 'koa-xtime';
// import { addListener } from 'cluster';
import InitData  from './index.dto';
const app = new Koa();
app.use(timing());
app.use(serve(`${__dirname}/public`));
// function InitData(target, name, descriptor) {
//   console.log(target, name, descriptor.value)

//   let oldValue = descriptor.value;

//   descriptor.value = function () {
//       console.log(`before calling ${name} with`, arguments);
//       return oldValue.apply(this, arguments);
//   };

//   // return descriptor;
// }
class Ab {
  @InitData
  addListener(a,b){
return a + b
  }
}
const a = new Ab()

a.addListener(1,2)
app.use(
bodify({
multipart: true,
// 使用非严格模式，解析 delete 请求的请求体
strict: false,
}),
);
app.use((ctx: Koa.Context) => {
ctx.body = 'hello'
})
app.listen(3000, () => {
  console.log('服务器启动成功');
  });