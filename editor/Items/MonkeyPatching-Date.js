import { canLaunch } from '@lib/launchSystem.js';






// به این بخش به هیچ وجه دست نزنید
let d = Date.now()
if(canLaunch(d)){

  console.log("YES");
}else{
console.log("NO");

}