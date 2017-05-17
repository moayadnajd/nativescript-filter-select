import * as application from 'application';

application.resources['flags'] =  function (value) {
        return 'http://flags.fmcdn.net/data/flags/h80/'+value.toLocaleLowerCase()+'.png';
    }
application.start({ moduleName: "main-page" });
