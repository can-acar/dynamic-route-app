#  Create-React-App Dynamic Router

This custom dynamic router is designed for Create-React-App projects, providing a routing solution similar to the Next.js framework without relying on `react-router-dom`. It enables dynamic imports, customizable routing configurations, and efficient route matching and navigation.

#  Features

-   Dynamic imports with `React.lazy` and `Suspense`
-   Customizable routing options with support for file extensions and directory paths
-   Route matching using the `path-to-regexp` library
-   Router context for easy access to routing information in child components
-   Browser history management with the `window.history` API

## Installation
1.  Copy the `Router.js` file and the `router-context.js` file into your Create-React-App project.
2.  Import and use the `Router` component in your `App.js` or another top-level component.
## Usage
To use the dynamic router, wrap your main application component with the `Router` component:

    import React from "react";
    import Router from "./path/to/Router";
    
    const options = {  
	  ext: ['jsx', 'js'],  
	  dirs: [{  
	  dir: './pages',  
	  baseRouter: '/index',  
	  }, {  
	  dir: './admin',  
	  baseRouter: '/index',  
	  }]  
	}
	
    function App() {
      return (
        <Router options={options}/>
      );
    }
    
    export default App;

## Creating Pages
Create your pages inside the `src/pages` directory (or another directory specified in the `options` prop). Use `.js` or `.jsx` extensions for your page components. To define dynamic routes, use the `[param]` syntax for required parameters and `[[...param]]` for optional parameters.

Example:

-   `src/pages/index.js` - Home page
-   `src/pages/about.js` - About page
-   `src/pages/blog/[postId].js` - Blog post page with required `postId` parameter

## Accessing Route Information and Navigation

Use the `useContext` hook to access the `RouterContext` and its properties in your page components:

    import React, { useContext } from "react";
    import RouterContext from "./path/to/router-context";
    
    function MyPageComponent() {
      const { location, query, navigate } = useContext(RouterContext);
    
      // Access route information and navigate to a different page
    }
    
    export default MyPageComponent;

## Customizing Router Options

You can customize the `Router` component by passing an optional `options` prop:

    <Router options={{
      ext: ['jsx', 'js'],
      dirs: [{
        dir: './pages',
        baseRouter: '/index',
      }]
    }}/>

## License

This project is licensed under the MIT License.
