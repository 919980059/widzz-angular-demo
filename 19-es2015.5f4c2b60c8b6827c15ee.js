(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{EAfA:function(t,e,a){"use strict";a.r(e),a.d(e,"MarketingStrategyModule",(function(){return b}));var s=a("XNiG"),n=a("fXoL"),r=a("dNgK"),i=a("sYmb"),o=a("+IAj"),l=a("tyNb"),h=a("4yoF"),c=a("rWWZ"),g=a("YMqD"),u=a("dCJ7");let p=(()=>{class t{constructor(t,e,a,n,r,i,o){this.snackBar=t,this.translate=e,this.strategyService=a,this.router=n,this.loading=r,this.notify=i,this.utils=o,this._unsubscribeAll=new s.a,this.rows=[],this.columns=[],this.page={page:0,size:10,count:0,sort:"lastModifiedDate,desc"}}ngOnInit(){this.getColumns(),this.initSearch()}getColumns(){this.columns=[{name:"id",translate:"strategy.strategyNo",value:""},{name:"name",translate:"strategy.name",type:"input",value:""},{name:"strategyDesc",translate:"strategy.strategyDesc",value:""},{name:"beginDate",translate:"strategy.startTime",value:"",type:"date"},{name:"endDate",translate:"strategy.endTime",value:"",type:"date"},{name:"enabled",translate:"strategy.status",transform:[{true:"normal"},{false:"frozen"}],type:"select",options:[{translate:"normal",value:!0},{translate:"frozen",value:!1}],value:""},{name:"createBy",translate:"strategy.creator",value:""},{name:"createDate",translate:"strategy.createTime",value:""}]}initSearch(){this.loading.show(),setTimeout(()=>{this.strategyService.getStrategyList().then(t=>{this.rows=this.utils.getSearch(t,this.page.page,this.page.size),0===this.rows.length?(this.page.count=0,this.snackBar.open(this.translate.instant("tableList.listEmpty"),"\u2716")):this.page.count=t.length,this.notify.onResponse.emit(),this.loading.hide()})},300)}onSearch(){this.loading.show();const t=[];this.columns.forEach(e=>{""!==e.value&&t.push(e)}),setTimeout(()=>{this.strategyService.getStrategyList().then(e=>{this.rows=this.utils.getSearch(e,this.page.page,this.page.size,t),0===this.rows.length?(this.page.count=0,this.snackBar.open(this.translate.instant("tableList.listEmpty"),"\u2716")):this.page.count=t.length>0&&this.rows.length<=e.length?this.rows.length:e.length,this.notify.onResponse.emit(),this.loading.hide()})},300)}onPage(t){this.page.page=t.page,this.onSearch()}onSort(t){this.page.sort=t,this.onSearch()}getDetail(t){this.router.navigate(["apps/strategy/edit/"+t.id])}create(){this.router.navigate(["apps/strategyCreate"]).then()}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}}return t.\u0275fac=function(e){return new(e||t)(n.Sb(r.b),n.Sb(i.d),n.Sb(o.a),n.Sb(l.h),n.Sb(h.g),n.Sb(c.a),n.Sb(g.a))},t.\u0275cmp=n.Mb({type:t,selectors:[["app-marketing-strategy"]],decls:2,vars:7,consts:[[3,"title","rows","columns","page","createButton","search","navigateDetail","tablePaging","tableSort","searchClear","create"]],template:function(t,e){1&t&&(n.Yb(0,"app-table-list",0),n.gc("search",(function(){return e.onSearch()}))("navigateDetail",(function(t){return e.getDetail(t)}))("tablePaging",(function(t){return e.onPage(t)}))("tableSort",(function(t){return e.onSort(t)}))("searchClear",(function(){return e.onSearch()}))("create",(function(){return e.create()})),n.lc(1,"translate"),n.Xb()),2&t&&n.sc("title",n.mc(1,5,"nav.marketingStrategy.list"))("rows",e.rows)("columns",e.columns)("page",e.page)("createButton",!0)},directives:[u.a],pipes:[i.c],styles:[""]}),t})();var m=a("8STC"),y=a("iFSc");let b=(()=>{class t{}return t.\u0275mod=n.Qb({type:t}),t.\u0275inj=n.Pb({factory:function(e){return new(e||t)},imports:[[m.a,y.a,l.l.forChild([{path:"",component:p}])]]}),t})()}}]);