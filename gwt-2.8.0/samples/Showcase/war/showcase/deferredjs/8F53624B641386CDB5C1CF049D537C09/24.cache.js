$wnd.showcase.runAsyncCallback24("function pqb(a){this.a=a}\nfunction rqb(a){this.a=a}\nfunction tqb(a){this.a=a}\nfunction yqb(a,b){this.a=a;this.b=b}\nfunction Vo(a,b){a.remove(b)}\nfunction aUb(a){return HIb(),a.hb}\nfunction eUb(a,b){ZTb(a,b);Vo((HIb(),a.hb),b)}\nfunction yIb(){var a;if(!vIb||BIb()){a=new Bfc;AIb(a);vIb=a}return vIb}\nfunction BIb(){var a=$doc.cookie;if(a!=wIb){wIb=a;return true}else{return false}}\nfunction CIb(a){xIb&&(a=encodeURIComponent(a));$doc.cookie=a+'=;expires=Fri, 02-Jan-1970 00:00:00 GMT'}\nfunction mqb(a){var b,c,d,e;if(aUb(a.c).options.length<1){jWb(a.a,'');jWb(a.b,'');return}e=aUb(a.c).selectedIndex;b=bUb(a.c,e);c=(d=yIb(),HO(b==null?Jac(Tfc(d.d,null)):hgc(d.e,b)));jWb(a.a,b);jWb(a.b,c)}\nfunction lqb(a,b){var c,d,e,f,g,h;eh(a.c).options.length=0;h=0;e=new Ybc(yIb());for(d=(g=e.a.Vh().fc(),new bcc(g));d.a.Og();){c=(f=DO(d.a.Pg(),36),HO(f._h()));YTb(a.c,c);n8b(c,b)&&(h=eh(a.c).options.length-1)}tm((mm(),lm),new yqb(a,h))}\nfunction AIb(b){var c=$doc.cookie;if(c&&c!=''){var d=c.split('; ');for(var e=d.length-1;e>=0;--e){var f,g;var h=d[e].indexOf('=');if(h==-1){f=d[e];g=''}else{f=d[e].substring(0,h);g=d[e].substring(h+1)}if(xIb){try{f=decodeURIComponent(f)}catch(a){}try{g=decodeURIComponent(g)}catch(a){}}b.Xh(f,g)}}}\nfunction kqb(a){var b,c,d;c=new fSb(3,3);a.c=new gUb;b=new OLb('Supprimer');Dh((HIb(),b.hb),Zoc,true);zRb(c,0,0,'<b><b>Cookies existants:<\\/b><\\/b>');CRb(c,0,1,a.c);CRb(c,0,2,b);a.a=new sWb;zRb(c,1,0,'<b><b>Nom:<\\/b><\\/b>');CRb(c,1,1,a.a);a.b=new sWb;d=new OLb('Sauvegarder Cookie');Dh(d.hb,Zoc,true);zRb(c,2,0,'<b><b>Valeur:<\\/b><\\/b>');CRb(c,2,1,a.b);CRb(c,2,2,d);Kh(d,new pqb(a),(Mt(),Mt(),Lt));Kh(a.c,new rqb(a),(Ft(),Ft(),Et));Kh(b,new tqb(a),(null,Lt));lqb(a,null);return c}\nq8(465,1,Jlc,pqb);_.Sc=function qqb(a){var b,c,d;c=fWb(this.a.a);d=fWb(this.a.b);b=new tN(O7(U7((new rN).q.getTime()),eqc));if(c.length<1){$wnd.alert('Vous devez indiquer un nom de cookie');return}DIb(c,d,b);lqb(this.a,c)};var IZ=v7b(Xlc,'CwCookies/1',465);q8(466,1,Klc,rqb);_.Rc=function sqb(a){mqb(this.a)};var JZ=v7b(Xlc,'CwCookies/2',466);q8(467,1,Jlc,tqb);_.Sc=function uqb(a){var b,c;c=eh(this.a.c).selectedIndex;if(c>-1&&c<eh(this.a.c).options.length){b=bUb(this.a.c,c);CIb(b);eUb(this.a.c,c);mqb(this.a)}};var KZ=v7b(Xlc,'CwCookies/3',467);q8(468,1,Slc);_.Bc=function xqb(){Gab(this.b,kqb(this.a))};q8(469,1,{},yqb);_.Dc=function zqb(){this.b<eh(this.a.c).options.length&&fUb(this.a.c,this.b);mqb(this.a)};_.b=0;var MZ=v7b(Xlc,'CwCookies/5',469);var vIb=null,wIb;Nic(Al)(24);\n//# sourceURL=showcase-24.js\n")
