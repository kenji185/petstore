$wnd.showcase.runAsyncCallback24("function Hcb(a){this.a=a}\nfunction Jcb(a){this.a=a}\nfunction Lcb(a){this.a=a}\nfunction Qcb(a,b){this.a=a;this.b=b}\nfunction So(a,b){a.remove(b)}\nfunction oGb(a){return Wub(),a.hb}\nfunction sGb(a,b){lGb(a,b);So((Wub(),a.hb),b)}\nfunction Nub(){var a;if(!Kub||Qub()){a=new N1b;Pub(a);Kub=a}return Kub}\nfunction Qub(){var a=$doc.cookie;if(a!=Lub){Lub=a;return true}else{return false}}\nfunction Rub(a){Mub&&(a=encodeURIComponent(a));$doc.cookie=a+'=;expires=Fri, 02-Jan-1970 00:00:00 GMT'}\nfunction Ecb(a){var b,c,d,e;if(oGb(a.c).options.length<1){xIb(a.a,'');xIb(a.b,'');return}e=oGb(a.c).selectedIndex;b=pGb(a.c,e);c=(d=Nub(),xB(b==null?VYb(d2b(d.d,null)):t2b(d.e,b)));xIb(a.a,b);xIb(a.b,c)}\nfunction Dcb(a,b){var c,d,e,f,g,h;eh(a.c).options.length=0;h=0;e=new i$b(Nub());for(d=(g=e.a.Eg().fc(),new n$b(g));d.a.xf();){c=(f=tB(d.a.yf(),36),xB(f.Kg()));kGb(a.c,c);zWb(c,b)&&(h=eh(a.c).options.length-1)}sm((lm(),km),new Qcb(a,h))}\nfunction Pub(b){var c=$doc.cookie;if(c&&c!=''){var d=c.split('; ');for(var e=d.length-1;e>=0;--e){var f,g;var h=d[e].indexOf('=');if(h==-1){f=d[e];g=''}else{f=d[e].substring(0,h);g=d[e].substring(h+1)}if(Mub){try{f=decodeURIComponent(f)}catch(a){}try{g=decodeURIComponent(g)}catch(a){}}b.Gg(f,g)}}}\nfunction Ccb(a){var b,c,d;c=new tEb(3,3);a.c=new uGb;b=new _xb('Delete');Dh((Wub(),b.hb),$ac,true);MDb(c,0,0,'<b><b>Existing Cookies:<\\/b><\\/b>');PDb(c,0,1,a.c);PDb(c,0,2,b);a.a=new GIb;MDb(c,1,0,'<b><b>Name:<\\/b><\\/b>');PDb(c,1,1,a.a);a.b=new GIb;d=new _xb('Set Cookie');Dh(d.hb,$ac,true);MDb(c,2,0,'<b><b>Value:<\\/b><\\/b>');PDb(c,2,1,a.b);PDb(c,2,2,d);Kh(d,new Hcb(a),(Gt(),Gt(),Ft));Kh(a.c,new Jcb(a),(zt(),zt(),yt));Kh(b,new Lcb(a),(null,Ft));Dcb(a,null);return c}\nIW(455,1,O7b,Hcb);_.Sc=function Icb(a){var b,c,d;c=tIb(this.a.a);d=tIb(this.a.b);b=new jA(eW(kW((new hA).q.getTime()),bcc));if(c.length<1){$wnd.alert('You must specify a cookie name');return}Sub(c,d,b);Dcb(this.a,c)};var ZL=HVb(b8b,'CwCookies/1',455);IW(456,1,P7b,Jcb);_.Rc=function Kcb(a){Ecb(this.a)};var $L=HVb(b8b,'CwCookies/2',456);IW(457,1,O7b,Lcb);_.Sc=function Mcb(a){var b,c;c=eh(this.a.c).selectedIndex;if(c>-1&&c<eh(this.a.c).options.length){b=pGb(this.a.c,c);Rub(b);sGb(this.a.c,c);Ecb(this.a)}};var _L=HVb(b8b,'CwCookies/3',457);IW(458,1,X7b);_.Bc=function Pcb(){YY(this.b,Ccb(this.a))};IW(459,1,{},Qcb);_.Dc=function Rcb(){this.b<eh(this.a.c).options.length&&tGb(this.a.c,this.b);Ecb(this.a)};_.b=0;var bM=HVb(b8b,'CwCookies/5',459);var Kub=null,Lub;Z4b(zl)(24);\n//# sourceURL=showcase-24.js\n")
