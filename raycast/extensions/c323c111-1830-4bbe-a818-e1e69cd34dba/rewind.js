"use strict";var mn=Object.create;var B=Object.defineProperty;var hn=Object.getOwnPropertyDescriptor;var Sn=Object.getOwnPropertyNames;var yn=Object.getPrototypeOf,gn=Object.prototype.hasOwnProperty;var a=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),xn=(e,t)=>{for(var r in t)B(e,r,{get:t[r],enumerable:!0})},we=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Sn(t))!gn.call(e,o)&&o!==r&&B(e,o,{get:()=>t[o],enumerable:!(n=hn(t,o))||n.enumerable});return e};var ve=(e,t,r)=>(r=e!=null?mn(yn(e)):{},we(t||!e||!e.__esModule?B(r,"default",{value:e,enumerable:!0}):r,e)),bn=e=>we(B({},"__esModule",{value:!0}),e);var Ce=a((go,Te)=>{Te.exports=Pe;Pe.sync=vn;var Ee=require("fs");function wn(e,t){var r=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!r||(r=r.split(";"),r.indexOf("")!==-1))return!0;for(var n=0;n<r.length;n++){var o=r[n].toLowerCase();if(o&&e.substr(-o.length).toLowerCase()===o)return!0}return!1}function Ie(e,t,r){return!e.isSymbolicLink()&&!e.isFile()?!1:wn(t,r)}function Pe(e,t,r){Ee.stat(e,function(n,o){r(n,n?!1:Ie(o,e,t))})}function vn(e,t){return Ie(Ee.statSync(e),e,t)}});var qe=a((xo,Re)=>{Re.exports=Ae;Ae.sync=En;var Ge=require("fs");function Ae(e,t,r){Ge.stat(e,function(n,o){r(n,n?!1:Oe(o,t))})}function En(e,t){return Oe(Ge.statSync(e),t)}function Oe(e,t){return e.isFile()&&In(e,t)}function In(e,t){var r=e.mode,n=e.uid,o=e.gid,s=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),c=parseInt("100",8),u=parseInt("010",8),l=parseInt("001",8),f=c|u,h=r&l||r&u&&o===i||r&c&&n===s||r&f&&s===0;return h}});var ke=a((wo,Ne)=>{var bo=require("fs"),M;process.platform==="win32"||global.TESTING_WINDOWS?M=Ce():M=qe();Ne.exports=Z;Z.sync=Pn;function Z(e,t,r){if(typeof t=="function"&&(r=t,t={}),!r){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(n,o){Z(e,t||{},function(s,i){s?o(s):n(i)})})}M(e,t||{},function(n,o){n&&(n.code==="EACCES"||t&&t.ignoreErrors)&&(n=null,o=!1),r(n,o)})}function Pn(e,t){try{return M.sync(e,t||{})}catch(r){if(t&&t.ignoreErrors||r.code==="EACCES")return!1;throw r}}});var Fe=a((vo,je)=>{var E=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",_e=require("path"),Tn=E?";":":",$e=ke(),Le=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),Be=(e,t)=>{let r=t.colon||Tn,n=e.match(/\//)||E&&e.match(/\\/)?[""]:[...E?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(r)],o=E?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",s=E?o.split(r):[""];return E&&e.indexOf(".")!==-1&&s[0]!==""&&s.unshift(""),{pathEnv:n,pathExt:s,pathExtExe:o}},Me=(e,t,r)=>{typeof t=="function"&&(r=t,t={}),t||(t={});let{pathEnv:n,pathExt:o,pathExtExe:s}=Be(e,t),i=[],c=l=>new Promise((f,h)=>{if(l===n.length)return t.all&&i.length?f(i):h(Le(e));let m=n[l],S=/^".*"$/.test(m)?m.slice(1,-1):m,y=_e.join(S,e),g=!S&&/^\.[\\\/]/.test(e)?e.slice(0,2)+y:y;f(u(g,l,0))}),u=(l,f,h)=>new Promise((m,S)=>{if(h===o.length)return m(c(f+1));let y=o[h];$e(l+y,{pathExt:s},(g,v)=>{if(!g&&v)if(t.all)i.push(l+y);else return m(l+y);return m(u(l,f,h+1))})});return r?c(0).then(l=>r(null,l),r):c(0)},Cn=(e,t)=>{t=t||{};let{pathEnv:r,pathExt:n,pathExtExe:o}=Be(e,t),s=[];for(let i=0;i<r.length;i++){let c=r[i],u=/^".*"$/.test(c)?c.slice(1,-1):c,l=_e.join(u,e),f=!u&&/^\.[\\\/]/.test(e)?e.slice(0,2)+l:l;for(let h=0;h<n.length;h++){let m=f+n[h];try{if($e.sync(m,{pathExt:o}))if(t.all)s.push(m);else return m}catch{}}}if(t.all&&s.length)return s;if(t.nothrow)return null;throw Le(e)};je.exports=Me;Me.sync=Cn});var ee=a((Eo,J)=>{"use strict";var Ue=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(n=>n.toUpperCase()==="PATH")||"Path"};J.exports=Ue;J.exports.default=Ue});var Ke=a((Io,He)=>{"use strict";var De=require("path"),Gn=Fe(),An=ee();function Xe(e,t){let r=e.options.env||process.env,n=process.cwd(),o=e.options.cwd!=null,s=o&&process.chdir!==void 0&&!process.chdir.disabled;if(s)try{process.chdir(e.options.cwd)}catch{}let i;try{i=Gn.sync(e.command,{path:r[An({env:r})],pathExt:t?De.delimiter:void 0})}catch{}finally{s&&process.chdir(n)}return i&&(i=De.resolve(o?e.options.cwd:"",i)),i}function On(e){return Xe(e)||Xe(e,!0)}He.exports=On});var We=a((Po,ne)=>{"use strict";var te=/([()\][%!^"`<>&|;, *?])/g;function Rn(e){return e=e.replace(te,"^$1"),e}function qn(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(te,"^$1"),t&&(e=e.replace(te,"^$1")),e}ne.exports.command=Rn;ne.exports.argument=qn});var Ve=a((To,ze)=>{"use strict";ze.exports=/^#!(.*)/});var Qe=a((Co,Ye)=>{"use strict";var Nn=Ve();Ye.exports=(e="")=>{let t=e.match(Nn);if(!t)return null;let[r,n]=t[0].replace(/#! ?/,"").split(" "),o=r.split("/").pop();return o==="env"?n:n?`${o} ${n}`:o}});var Je=a((Go,Ze)=>{"use strict";var re=require("fs"),kn=Qe();function _n(e){let r=Buffer.alloc(150),n;try{n=re.openSync(e,"r"),re.readSync(n,r,0,150,0),re.closeSync(n)}catch{}return kn(r.toString())}Ze.exports=_n});var rt=a((Ao,nt)=>{"use strict";var $n=require("path"),et=Ke(),tt=We(),Ln=Je(),Bn=process.platform==="win32",Mn=/\.(?:com|exe)$/i,jn=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function Fn(e){e.file=et(e);let t=e.file&&Ln(e.file);return t?(e.args.unshift(e.file),e.command=t,et(e)):e.file}function Un(e){if(!Bn)return e;let t=Fn(e),r=!Mn.test(t);if(e.options.forceShell||r){let n=jn.test(t);e.command=$n.normalize(e.command),e.command=tt.command(e.command),e.args=e.args.map(s=>tt.argument(s,n));let o=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${o}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function Dn(e,t,r){t&&!Array.isArray(t)&&(r=t,t=null),t=t?t.slice(0):[],r=Object.assign({},r);let n={command:e,args:t,options:r,file:void 0,original:{command:e,args:t}};return r.shell?n:Un(n)}nt.exports=Dn});var it=a((Oo,st)=>{"use strict";var oe=process.platform==="win32";function se(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function Xn(e,t){if(!oe)return;let r=e.emit;e.emit=function(n,o){if(n==="exit"){let s=ot(o,t,"spawn");if(s)return r.call(e,"error",s)}return r.apply(e,arguments)}}function ot(e,t){return oe&&e===1&&!t.file?se(t.original,"spawn"):null}function Hn(e,t){return oe&&e===1&&!t.file?se(t.original,"spawnSync"):null}st.exports={hookChildProcess:Xn,verifyENOENT:ot,verifyENOENTSync:Hn,notFoundError:se}});var ut=a((Ro,I)=>{"use strict";var ct=require("child_process"),ie=rt(),ce=it();function at(e,t,r){let n=ie(e,t,r),o=ct.spawn(n.command,n.args,n.options);return ce.hookChildProcess(o,n),o}function Kn(e,t,r){let n=ie(e,t,r),o=ct.spawnSync(n.command,n.args,n.options);return o.error=o.error||ce.verifyENOENTSync(o.status,n),o}I.exports=at;I.exports.spawn=at;I.exports.sync=Kn;I.exports._parse=ie;I.exports._enoent=ce});var dt=a((qo,lt)=>{"use strict";lt.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),r=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===r&&(e=e.slice(0,e.length-1)),e}});var mt=a((No,q)=>{"use strict";var R=require("path"),ft=ee(),pt=e=>{e={cwd:process.cwd(),path:process.env[ft()],execPath:process.execPath,...e};let t,r=R.resolve(e.cwd),n=[];for(;t!==r;)n.push(R.join(r,"node_modules/.bin")),t=r,r=R.resolve(r,"..");let o=R.resolve(e.cwd,e.execPath,"..");return n.push(o),n.concat(e.path).join(R.delimiter)};q.exports=pt;q.exports.default=pt;q.exports.env=e=>{e={env:process.env,...e};let t={...e.env},r=ft({env:t});return e.path=t[r],t[r]=q.exports(e),t}});var St=a((ko,ae)=>{"use strict";var ht=(e,t)=>{for(let r of Reflect.ownKeys(t))Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));return e};ae.exports=ht;ae.exports.default=ht});var gt=a((_o,F)=>{"use strict";var Wn=St(),j=new WeakMap,yt=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let r,n=0,o=e.displayName||e.name||"<anonymous>",s=function(...i){if(j.set(s,++n),n===1)r=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${o}\` can only be called once`);return r};return Wn(s,e),j.set(s,n),s};F.exports=yt;F.exports.default=yt;F.exports.callCount=e=>{if(!j.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return j.get(e)}});var xt=a(U=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0});U.SIGNALS=void 0;var zn=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];U.SIGNALS=zn});var ue=a(P=>{"use strict";Object.defineProperty(P,"__esModule",{value:!0});P.SIGRTMAX=P.getRealtimeSignals=void 0;var Vn=function(){let e=wt-bt+1;return Array.from({length:e},Yn)};P.getRealtimeSignals=Vn;var Yn=function(e,t){return{name:`SIGRT${t+1}`,number:bt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},bt=34,wt=64;P.SIGRTMAX=wt});var vt=a(D=>{"use strict";Object.defineProperty(D,"__esModule",{value:!0});D.getSignals=void 0;var Qn=require("os"),Zn=xt(),Jn=ue(),er=function(){let e=(0,Jn.getRealtimeSignals)();return[...Zn.SIGNALS,...e].map(tr)};D.getSignals=er;var tr=function({name:e,number:t,description:r,action:n,forced:o=!1,standard:s}){let{signals:{[e]:i}}=Qn.constants,c=i!==void 0;return{name:e,number:c?i:t,description:r,supported:c,action:n,forced:o,standard:s}}});var It=a(T=>{"use strict";Object.defineProperty(T,"__esModule",{value:!0});T.signalsByNumber=T.signalsByName=void 0;var nr=require("os"),Et=vt(),rr=ue(),or=function(){return(0,Et.getSignals)().reduce(sr,{})},sr=function(e,{name:t,number:r,description:n,supported:o,action:s,forced:i,standard:c}){return{...e,[t]:{name:t,number:r,description:n,supported:o,action:s,forced:i,standard:c}}},ir=or();T.signalsByName=ir;var cr=function(){let e=(0,Et.getSignals)(),t=rr.SIGRTMAX+1,r=Array.from({length:t},(n,o)=>ar(o,e));return Object.assign({},...r)},ar=function(e,t){let r=ur(e,t);if(r===void 0)return{};let{name:n,description:o,supported:s,action:i,forced:c,standard:u}=r;return{[e]:{name:n,number:e,description:o,supported:s,action:i,forced:c,standard:u}}},ur=function(e,t){let r=t.find(({name:n})=>nr.constants.signals[n]===e);return r!==void 0?r:t.find(n=>n.number===e)},lr=cr();T.signalsByNumber=lr});var Tt=a((jo,Pt)=>{"use strict";var{signalsByName:dr}=It(),fr=({timedOut:e,timeout:t,errorCode:r,signal:n,signalDescription:o,exitCode:s,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":r!==void 0?`failed with ${r}`:n!==void 0?`was killed with ${n} (${o})`:s!==void 0?`failed with exit code ${s}`:"failed",pr=({stdout:e,stderr:t,all:r,error:n,signal:o,exitCode:s,command:i,escapedCommand:c,timedOut:u,isCanceled:l,killed:f,parsed:{options:{timeout:h}}})=>{s=s===null?void 0:s,o=o===null?void 0:o;let m=o===void 0?void 0:dr[o].description,S=n&&n.code,g=`Command ${fr({timedOut:u,timeout:h,errorCode:S,signal:o,signalDescription:m,exitCode:s,isCanceled:l})}: ${i}`,v=Object.prototype.toString.call(n)==="[object Error]",$=v?`${g}
${n.message}`:g,L=[$,t,e].filter(Boolean).join(`
`);return v?(n.originalMessage=n.message,n.message=L):n=new Error(L),n.shortMessage=$,n.command=i,n.escapedCommand=c,n.exitCode=s,n.signal=o,n.signalDescription=m,n.stdout=e,n.stderr=t,r!==void 0&&(n.all=r),"bufferedData"in n&&delete n.bufferedData,n.failed=!0,n.timedOut=Boolean(u),n.isCanceled=l,n.killed=f&&!u,n};Pt.exports=pr});var Gt=a((Fo,le)=>{"use strict";var X=["stdin","stdout","stderr"],mr=e=>X.some(t=>e[t]!==void 0),Ct=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return X.map(n=>e[n]);if(mr(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${X.map(n=>`\`${n}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let r=Math.max(t.length,X.length);return Array.from({length:r},(n,o)=>t[o])};le.exports=Ct;le.exports.node=e=>{let t=Ct(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var At=a((Uo,H)=>{H.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&H.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&H.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var kt=a((Do,A)=>{var d=global.process,b=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};b(d)?(Ot=require("assert"),C=At(),Rt=/^win/i.test(d.platform),N=require("events"),typeof N!="function"&&(N=N.EventEmitter),d.__signal_exit_emitter__?p=d.__signal_exit_emitter__:(p=d.__signal_exit_emitter__=new N,p.count=0,p.emitted={}),p.infinite||(p.setMaxListeners(1/0),p.infinite=!0),A.exports=function(e,t){if(!b(global.process))return function(){};Ot.equal(typeof e,"function","a callback must be provided for exit handler"),G===!1&&de();var r="exit";t&&t.alwaysLast&&(r="afterexit");var n=function(){p.removeListener(r,e),p.listeners("exit").length===0&&p.listeners("afterexit").length===0&&K()};return p.on(r,e),n},K=function(){!G||!b(global.process)||(G=!1,C.forEach(function(t){try{d.removeListener(t,W[t])}catch{}}),d.emit=z,d.reallyExit=fe,p.count-=1)},A.exports.unload=K,w=function(t,r,n){p.emitted[t]||(p.emitted[t]=!0,p.emit(t,r,n))},W={},C.forEach(function(e){W[e]=function(){if(!!b(global.process)){var r=d.listeners(e);r.length===p.count&&(K(),w("exit",null,e),w("afterexit",null,e),Rt&&e==="SIGHUP"&&(e="SIGINT"),d.kill(d.pid,e))}}}),A.exports.signals=function(){return C},G=!1,de=function(){G||!b(global.process)||(G=!0,p.count+=1,C=C.filter(function(t){try{return d.on(t,W[t]),!0}catch{return!1}}),d.emit=Nt,d.reallyExit=qt)},A.exports.load=de,fe=d.reallyExit,qt=function(t){!b(global.process)||(d.exitCode=t||0,w("exit",d.exitCode,null),w("afterexit",d.exitCode,null),fe.call(d,d.exitCode))},z=d.emit,Nt=function(t,r){if(t==="exit"&&b(global.process)){r!==void 0&&(d.exitCode=r);var n=z.apply(this,arguments);return w("exit",d.exitCode,null),w("afterexit",d.exitCode,null),n}else return z.apply(this,arguments)}):A.exports=function(){return function(){}};var Ot,C,Rt,N,p,K,w,W,G,de,fe,qt,z,Nt});var $t=a((Xo,_t)=>{"use strict";var hr=require("os"),Sr=kt(),yr=1e3*5,gr=(e,t="SIGTERM",r={})=>{let n=e(t);return xr(e,t,r,n),n},xr=(e,t,r,n)=>{if(!br(t,r,n))return;let o=vr(r),s=setTimeout(()=>{e("SIGKILL")},o);s.unref&&s.unref()},br=(e,{forceKillAfterTimeout:t},r)=>wr(e)&&t!==!1&&r,wr=e=>e===hr.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",vr=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return yr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Er=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Ir=(e,t,r)=>{e.kill(t),r(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Pr=(e,{timeout:t,killSignal:r="SIGTERM"},n)=>{if(t===0||t===void 0)return n;let o,s=new Promise((c,u)=>{o=setTimeout(()=>{Ir(e,r,u)},t)}),i=n.finally(()=>{clearTimeout(o)});return Promise.race([s,i])},Tr=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Cr=async(e,{cleanup:t,detached:r},n)=>{if(!t||r)return n;let o=Sr(()=>{e.kill()});return n.finally(()=>{o()})};_t.exports={spawnedKill:gr,spawnedCancel:Er,setupTimeout:Pr,validateTimeout:Tr,setExitHandler:Cr}});var Bt=a((Ho,Lt)=>{"use strict";var x=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";x.writable=e=>x(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";x.readable=e=>x(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";x.duplex=e=>x.writable(e)&&x.readable(e);x.transform=e=>x.duplex(e)&&typeof e._transform=="function";Lt.exports=x});var jt=a((Ko,Mt)=>{"use strict";var{PassThrough:Gr}=require("stream");Mt.exports=e=>{e={...e};let{array:t}=e,{encoding:r}=e,n=r==="buffer",o=!1;t?o=!(r||n):r=r||"utf8",n&&(r=null);let s=new Gr({objectMode:o});r&&s.setEncoding(r);let i=0,c=[];return s.on("data",u=>{c.push(u),o?i=c.length:i+=u.length}),s.getBufferedValue=()=>t?c:n?Buffer.concat(c,i):c.join(""),s.getBufferedLength=()=>i,s}});var Ft=a((Wo,k)=>{"use strict";var{constants:Ar}=require("buffer"),Or=require("stream"),{promisify:Rr}=require("util"),qr=jt(),Nr=Rr(Or.pipeline),V=class extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}};async function pe(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:r}=t,n=qr(t);return await new Promise((o,s)=>{let i=c=>{c&&n.getBufferedLength()<=Ar.MAX_LENGTH&&(c.bufferedData=n.getBufferedValue()),s(c)};(async()=>{try{await Nr(e,n),o()}catch(c){i(c)}})(),n.on("data",()=>{n.getBufferedLength()>r&&i(new V)})}),n.getBufferedValue()}k.exports=pe;k.exports.buffer=(e,t)=>pe(e,{...t,encoding:"buffer"});k.exports.array=(e,t)=>pe(e,{...t,array:!0});k.exports.MaxBufferError=V});var Dt=a((zo,Ut)=>{"use strict";var{PassThrough:kr}=require("stream");Ut.exports=function(){var e=[],t=new kr({objectMode:!0});return t.setMaxListeners(0),t.add=r,t.isEmpty=n,t.on("unpipe",o),Array.prototype.slice.call(arguments).forEach(r),t;function r(s){return Array.isArray(s)?(s.forEach(r),this):(e.push(s),s.once("end",o.bind(null,s)),s.once("error",t.emit.bind(t,"error")),s.pipe(t,{end:!1}),this)}function n(){return e.length==0}function o(s){e=e.filter(function(i){return i!==s}),!e.length&&t.readable&&t.end()}}});var Wt=a((Vo,Kt)=>{"use strict";var Ht=Bt(),Xt=Ft(),_r=Dt(),$r=(e,t)=>{t===void 0||e.stdin===void 0||(Ht(t)?t.pipe(e.stdin):e.stdin.end(t))},Lr=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let r=_r();return e.stdout&&r.add(e.stdout),e.stderr&&r.add(e.stderr),r},me=async(e,t)=>{if(!!e){e.destroy();try{return await t}catch(r){return r.bufferedData}}},he=(e,{encoding:t,buffer:r,maxBuffer:n})=>{if(!(!e||!r))return t?Xt(e,{encoding:t,maxBuffer:n}):Xt.buffer(e,{maxBuffer:n})},Br=async({stdout:e,stderr:t,all:r},{encoding:n,buffer:o,maxBuffer:s},i)=>{let c=he(e,{encoding:n,buffer:o,maxBuffer:s}),u=he(t,{encoding:n,buffer:o,maxBuffer:s}),l=he(r,{encoding:n,buffer:o,maxBuffer:s*2});try{return await Promise.all([i,c,u,l])}catch(f){return Promise.all([{error:f,signal:f.signal,timedOut:f.timedOut},me(e,c),me(t,u),me(r,l)])}},Mr=({input:e})=>{if(Ht(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};Kt.exports={handleInput:$r,makeAllStream:Lr,getSpawnedResult:Br,validateInputSync:Mr}});var Vt=a((Yo,zt)=>{"use strict";var jr=(async()=>{})().constructor.prototype,Fr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(jr,e)]),Ur=(e,t)=>{for(let[r,n]of Fr){let o=typeof t=="function"?(...s)=>Reflect.apply(n.value,t(),s):n.value.bind(t);Reflect.defineProperty(e,r,{...n,value:o})}return e},Dr=e=>new Promise((t,r)=>{e.on("exit",(n,o)=>{t({exitCode:n,signal:o})}),e.on("error",n=>{r(n)}),e.stdin&&e.stdin.on("error",n=>{r(n)})});zt.exports={mergePromise:Ur,getSpawnedPromise:Dr}});var Zt=a((Qo,Qt)=>{"use strict";var Yt=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Xr=/^[\w.-]+$/,Hr=/"/g,Kr=e=>typeof e!="string"||Xr.test(e)?e:`"${e.replace(Hr,'\\"')}"`,Wr=(e,t)=>Yt(e,t).join(" "),zr=(e,t)=>Yt(e,t).map(r=>Kr(r)).join(" "),Vr=/ +/g,Yr=e=>{let t=[];for(let r of e.trim().split(Vr)){let n=t[t.length-1];n&&n.endsWith("\\")?t[t.length-1]=`${n.slice(0,-1)} ${r}`:t.push(r)}return t};Qt.exports={joinCommand:Wr,getEscapedCommand:zr,parseCommand:Yr}});var sn=a((Zo,O)=>{"use strict";var Qr=require("path"),Se=require("child_process"),Zr=ut(),Jr=dt(),eo=mt(),to=gt(),Y=Tt(),en=Gt(),{spawnedKill:no,spawnedCancel:ro,setupTimeout:oo,validateTimeout:so,setExitHandler:io}=$t(),{handleInput:co,getSpawnedResult:ao,makeAllStream:uo,validateInputSync:lo}=Wt(),{mergePromise:Jt,getSpawnedPromise:fo}=Vt(),{joinCommand:tn,parseCommand:nn,getEscapedCommand:rn}=Zt(),po=1e3*1e3*100,mo=({env:e,extendEnv:t,preferLocal:r,localDir:n,execPath:o})=>{let s=t?{...process.env,...e}:e;return r?eo.env({env:s,cwd:n,execPath:o}):s},on=(e,t,r={})=>{let n=Zr._parse(e,t,r);return e=n.command,t=n.args,r=n.options,r={maxBuffer:po,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:r.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...r},r.env=mo(r),r.stdio=en(r),process.platform==="win32"&&Qr.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:r,parsed:n}},_=(e,t,r)=>typeof t!="string"&&!Buffer.isBuffer(t)?r===void 0?void 0:"":e.stripFinalNewline?Jr(t):t,Q=(e,t,r)=>{let n=on(e,t,r),o=tn(e,t),s=rn(e,t);so(n.options);let i;try{i=Se.spawn(n.file,n.args,n.options)}catch(S){let y=new Se.ChildProcess,g=Promise.reject(Y({error:S,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:n,timedOut:!1,isCanceled:!1,killed:!1}));return Jt(y,g)}let c=fo(i),u=oo(i,n.options,c),l=io(i,n.options,u),f={isCanceled:!1};i.kill=no.bind(null,i.kill.bind(i)),i.cancel=ro.bind(null,i,f);let m=to(async()=>{let[{error:S,exitCode:y,signal:g,timedOut:v},$,L,pn]=await ao(i,n.options,l),ye=_(n.options,$),ge=_(n.options,L),xe=_(n.options,pn);if(S||y!==0||g!==null){let be=Y({error:S,exitCode:y,signal:g,stdout:ye,stderr:ge,all:xe,command:o,escapedCommand:s,parsed:n,timedOut:v,isCanceled:f.isCanceled,killed:i.killed});if(!n.options.reject)return be;throw be}return{command:o,escapedCommand:s,exitCode:0,stdout:ye,stderr:ge,all:xe,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return co(i,n.options.input),i.all=uo(i,n.options),Jt(i,m)};O.exports=Q;O.exports.sync=(e,t,r)=>{let n=on(e,t,r),o=tn(e,t),s=rn(e,t);lo(n.options);let i;try{i=Se.spawnSync(n.file,n.args,n.options)}catch(l){throw Y({error:l,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:n,timedOut:!1,isCanceled:!1,killed:!1})}let c=_(n.options,i.stdout,i.error),u=_(n.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let l=Y({stdout:c,stderr:u,error:i.error,signal:i.signal,exitCode:i.status,command:o,escapedCommand:s,parsed:n,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!n.options.reject)return l;throw l}return{command:o,escapedCommand:s,exitCode:0,stdout:c,stderr:u,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};O.exports.command=(e,t)=>{let[r,...n]=nn(e);return Q(r,n,t)};O.exports.commandSync=(e,t)=>{let[r,...n]=nn(e);return Q.sync(r,n,t)};O.exports.node=(e,t,r={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(r=t,t=[]);let n=en.node(r),o=process.execArgv.filter(c=>!c.startsWith("--inspect")),{nodePath:s=process.execPath,nodeOptions:i=o}=r;return Q(s,[...i,e,...Array.isArray(t)?t:[]],{...r,stdin:void 0,stdout:void 0,stderr:void 0,stdio:n,shell:!1})}});var So={};xn(So,{default:()=>ho});module.exports=bn(So);var ln=require("@raycast/api");var cn=ve(require("node:process"),1),an=ve(sn(),1);async function un(e){if(cn.default.platform!=="darwin")throw new Error("macOS only");let{stdout:t}=await(0,an.default)("osascript",["-e",e]);return t}async function dn(e){await(0,ln.closeMainWindow)(),await un(e)}function fn(e){return`
    set old to (path to frontmost application as text)
    tell application "Podcasts"
      reopen
      activate
    end tell
    tell application "System Events" to tell process "Podcasts"
      ${e}
      delay 0.1
      set visible to false
    end tell
    activate application old
`}var ho=async()=>{let t=fn("key code 123 using {shift down, command down}");await dn(t)};0&&(module.exports={});