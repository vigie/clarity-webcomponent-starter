import { Router, NavigationExtras } from '@angular/router';

export function patchRouter(router: Router) {

  // Patch navigateByUrl to always skipLocationChange
  router.navigateByUrl = new Proxy(
    router.navigateByUrl,
    {
      apply: (target, thisArg, argumentsList) => {
        if (!argumentsList) {
          argumentsList = [];
        }
  
        let extras: NavigationExtras = argumentsList[1];
        if (!extras) {
          extras = {};
        };
        extras.skipLocationChange = true;
  
        argumentsList[1] = extras;
    
        return target.apply(thisArg, argumentsList);          
      }
    }
  );  
}