ElemNotify
===

Javascript notification plugin for Elem.JS.

Demo at http://lennartc.github.io/ElemNotify/

Requirements
---

* Elem.JS (https://github.com/myster0n/elem.js)
* Font Awesome (http://fortawesome.github.io/Font-Awesome/)

Usage
---

* Load CSS and JS libraries

    ```html
    ...
    <link rel="stylesheet" href="font-awesome.min.css">
    <link rel="stylesheet" href="elem.notify.css"/>
    ...
    <script src="elem.js"></script>
    <script src="elem.notify.js"></script>
    ...
    ```

* Notify...

    ```javascript
    ElemNotify.info("an information message","its title");
    ElemNotify.error("an error message","its title");
    ElemNotify.success("a success message","its title");
    ```
