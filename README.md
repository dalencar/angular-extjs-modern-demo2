# NgxExtJS Demo (Recomended) - BETA

Demonstration how to use the library [angular-extjs-modern](https://www.npmjs.com/package/@dalencar/angular-extjs-modern)

## How to start?


1 - Download [ExtJS 6+](https://www.sencha.com/products/evaluate/) and gets the following files:

    ext-6.x.x.zip 
    ext-addons-6.x.x.zip

> NOTE 1: The file ext-addons-6.x.x.zip will there is a only folder, named `packages`. Should be merged in the existing folder in next step.

> NOTE 2: Replace 6.x.x to the correctly version available
    
2 - Extract the previous content files in the directory named `~/ext-6.x.x`. Example how `~/ext-6.x.x` directory will be:  

```  
~/ext-6.x.x/build
~/ext-6.x.x/classic
~/ext-6.x.x/cmd
~/ext-6.x.x/examples
~/ext-6.x.x/packages
...
...
...
```

3 - Create a ExtJS application by the following command:

	sencha -sdk ~/ext-6.x.x generate app -starter=false -modern ExtApp ./ExtApp

4 - Change `app.json` to add the following packages in `requires` parameter:

```json
{
    ...
    "requires": [
        "calendar",
        "charts",
        "d3",
        "ux",
        "pivot",
        "pivot-d3",
        "font-awesome"
    ],
    ...
}
``` 

5 - Get the correctly `app.js` file in this [repository](https://github.com/dalencar/angular-extjs-creator/tree/master/misc) based on ExtJS's version and replace on the existent `./ExtApp/app.js`.

> NOTE: This step, you can change which components will be loaded in the `app.js` file. How less you use, smaller will be your file.

6 - Run the following command to create your ExtJS builded files:

    sencha app build testing

7 - Clone the project

    git clone https://github.com/dalencar/angular-extjs-modern-demo2.git

8 - Copy `~/ExtApp/build/ExtApp/*` to `./angular-extjs-modern-demo2/src/extjs/.` 
    
9 - Copy `~/ExtApp/bootstrap.js` to `./angular-extjs-modern-demo2/src/bootstrap.js`

Change the method `loadPlatformsParam` and add the following code before `return`.

```js
...
loadPlatformsParam: function () {
    ...
    
    Ext.platformTags = {};
    Ext.platformTags.classic = !(Ext.platformTags.modern = Ext.isModern = true);
    
    return platforms; 
}
... 
```

Comment the last content line of the method `fetch`.

```js
fetch: function (req) {
    var url = this.getLoadUrl(),
        async = !!req.async,
        complete = req.complete;

    // Boot.fetch(url, complete, this, async);
},
...
```
    
10 - In your .angular-cli.json, add the following `assets`, `styles` and `scripts`.

```
"assets": [
    "extjs/resources",
    ...
],
...
"styles": [
    "extjs/resources/ExpApp-all.css",
    ...
],
"scripts": [
    "bootstrap.js",
    "extjs/app.js",
    ...
],
```

11 - Start the projet

    ng serve 