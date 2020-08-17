var express = require('express')
var router = express.Router()
serData = {
  pop:[{
    iid:'001',
    image:'http://localhost:500/serverimg/timg.jpg',
    price:'99',
    cfav:'128'
    },
    {
      iid:'002',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'23',
      cfav:'128'
    },
    {
      iid:'003',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'33',
      cfav:'128'
    },
    {
      iid:'004',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'66',
      cfav:'123'
    },
    {
      iid:'005',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'93',
      cfav:'143'
    },
    {
      iid:'006',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'99',
      cfav:'428'
    },{
      iid:'007',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'93',
      cfav:'628'
    },{
      iid:'008',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'88',
      cfav:'228'
    },{
      iid:'009',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'22',
      cfav:'56'
  }],
  fasion:[{
    iid:'001',
    image:'http://localhost:500/serverimg/timg.jpg',
    price:'99',
    cfav:'128'
    },
    {
      iid:'002',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'23',
      cfav:'128'
    },
    {
      iid:'003',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'33',
      cfav:'128'
    },
    {
      iid:'004',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'66',
      cfav:'123'
    },
    {
      iid:'005',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'93',
      cfav:'143'
    },
    {
      iid:'006',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'99',
      cfav:'428'
    },{
      iid:'007',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'93',
      cfav:'628'
    },{
      iid:'008',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'88',
      cfav:'228'
    },{
      iid:'009',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'22',
      cfav:'56'
  }],
  hot:[{
    iid:'001',
    image:'http://localhost:500/serverimg/timg.jpg',
    price:'99',
    cfav:'128'
    },
    {
      iid:'002',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'23',
      cfav:'128'
    },
    {
      iid:'003',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'33',
      cfav:'128'
    },
    {
      iid:'004',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'66',
      cfav:'123'
    },
    {
      iid:'005',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'93',
      cfav:'143'
    },
    {
      iid:'006',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'99',
      cfav:'428'
    },{
      iid:'007',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'93',
      cfav:'628'
    },{
      iid:'008',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'88',
      cfav:'228'
    },{
      iid:'009',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'22',
      cfav:'56'
  }]
}






router
.get('/home/multidata',function(req,res){
  res.send('http://localhost:500/serverimg/timg.jpg')
    // 可以使用原生的res.write和res.end（不推荐）
})
.get('/home/data',function(req,res){
  console.log(req.query)
  var newData=[]
  serDataLen = serData[req.query.currentType].length
  Maxpage = Math.ceil(serDataLen/4)
  if(req.query.page<=Maxpage){
    if(serDataLen%4!==0 &&req.query.page == Maxpage){
      for(let i=0;i<serDataLen%4;i++){
        newData.push(serData[req.query.currentType][(Maxpage-1)*4+i])
      }
    }else{
      for(let i=0;i<4;i++){
        newData.push(serData[req.query.currentType][(req.query.page-1)*4+i])
      }
    }
  }
  res.send(newData)
})
// 通过链式方法依次编写各路由对应的规则
// 作用：提高代码的可阅读性
var app = express()
app.use('/serverimg/',express.static('./serverimg/'))
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(router)
app.listen('500',function(){
  console.log('student system is open...')
})