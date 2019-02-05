# ClarityWebcomponentStarter

The purpose of this project is to serve as a starting point for [Angular](https://angular.io/) [Clarity](https://vmware.github.io/clarity/) applications wishing to export components as [Web Components](https://developers.google.com/web/fundamentals/web-components/) using the new [Angular Elements API](https://angular.io/guide/elements).

The goal of the exported components is that they should be able to be used along side any number of other web components (that may or may not have used this starter) in a web app of any flavor using any tech stack.

## Implementation

There are a few technical barriers in the way of acheiving the above goal that currently require work-arounds which will be explained in this section.

Firstly, Angular currently does not like to be loaded twice, so if you naively try to load two web components built using Angular Elements, you will run into this bug: https://github.com/angular/angular/issues/23732

Secondly, the Angular library itself is currently not very [tree shakable](https://webpack.js.org/guides/tree-shaking/), leading to very large exported bundle sizes. Once ready, the new Angular [Ivy](https://blog.angularindepth.com/inside-ivy-exploring-the-new-angular-compiler-ebf85141cee1) compiler and renderer will solve this problem.

For now, to work around both of these issues we use the [ngx-build-plus](https://github.com/manfredsteyer/ngx-build-plus#advanced-example-externals-and-angular-elements) build tool to _externalize_ the Angular library itself and also Angular's dependencies, making them the responsibility of the consuming app. Clearly, this results in web components that leak abstractions, which is not a good thing. Web components should be fully encapsulated and should not require users to have knowledge of their internals or manually manage dependencies on their behalf. However, this is a functionaing work around that can be used while we wait for Ivy, allowing us to get used to the web component pattern and work flows in the meantime.

In practice, what "externalizing the dependencies" actually means is listing them as npm [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) of this project. A user of your web component will then be warned at npm install time that they must also load the dependent libraries. More on that in the [usage section](#Usage) below.

Lastly, Clarity components are built with reference to a global style sheet, instead of using [Shadow DOM](https://developers.google.com/web/fundamentals/web-components/shadowdom). This means that the clarity style sheets are also _externalized_ and must be loaded as global style sheets by the consuming app. Again, see [usage](#Usage) below. This work around will need to remain in place until Clarity moves to using native encapsulation of styles.

## Development

This starter exports an arbitrary UI built from [Clarity](https://vmware.github.io/clarity/documentation) components as a `vmw-micro-frontend` web component. The source is heavily commented throughout, so check it out.

When you are ready to test the actual web-component without relying on the Angular CLI, `npm run build` it. A sample web app to test it is provided in the root directory as `index.html`. Use the web server of your choice to load that up and test your web component.

## Publishing

After you have run `npm run build` to build your component you will want to [publish it]((https://docs.npmjs.com/cli/publish)) to npm in order for it to be consumed by other web apps.

Use `npm publish` to publish your web component, _after first modifying all relevant fields in `package.json`_.

## Usage

If you wish to use the demo web component exported by this module exactly as is, you can install it via

`npm i @mcritch/clarity-webcomponent-starter`

otherwise, `npm install` your web component from wherever you published it to. 

At this time you will see warnings about the peer dependencies. The quickest way to resolve these is to directly copy the `peerDependencies` of this project to the `dependencies` section of your consuming app and then run `npm install` on that app again.

Next, you will need to actually load the dependencies. Depending on the tech stack of your consuming app, there are several ways this can be done. For example, you could import the depencies as modules in a javascript file that loads before any other. Alternatively, you could load them using script tags in your `index.html`. An example of a vanilla JS app doing this is given in the `index.html` file in the root directory. An example of a [Vue.js](https://vuejs.org/) app consuming web components built using this project can be found here: https://github.com/vigie/vue-web-components

After the dependencies are loaded, it is safe to load your web component and start using it in your app, interacting with it via the native web component API. As before, loading might be done via a javascript import, for example

`import '@mcritch/clarity-webcomponent-starter';`

or an index.html script tag, for example:

`<script src="./dist/clarity-webcomponent-starter/main.js"></script>`

 Again, see the final script tag in `index.html` or https://github.com/vigie/vue-web-components for an example.