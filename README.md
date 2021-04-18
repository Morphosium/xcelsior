# xcelsior (alpha)

Xcelsior helps creating user interfaces containers and it makes developing views with sidebar easier.

## Demonstration

[![Demonstration](https://img.youtube.com/vi/03kfVM46Eec/0.jpg)](https://www.youtube.com/watch?v=03kfVM46Eec)
## How to use?

- Install xcelsior by downloading files or using package manager:
        
        npm i @morphosium/xcelsior
    
    or

        yarn add @morphosium/xcelsior

- Import CSS and JS files (if you want make sidebars mobile safe)
        
        <head>
            <link rel="stylesheet" href="../build/css/index.css">
        </head>
        <body>
            <!-- UI Elements -->
            <script src="../build/js/bundle/xcelsior.js"></script>
            <!-- another scripts -->
        </body>

    - If you consider use at a module, import necessary modules by:

            import { MobileSidebarUtil } from "@morphosium/xcelsior";

    - And import styles by (if you using webpack or something)

            @import "~@morphosium/xcelsior/index.css";

- All element definitions must be at 

        <xcelsior-root>

        </xcelsior-root>

- Grids

    ```
    <xcelsior-root>
         <xcelsior-grid-view class="main-sidebar mobile-view-safe">
            <div class="sidebar" style="width: 300px;" section-name="right">
                <h1>Right</h1>
            </div>
            <div class="content">
                <h1>content</h1>  
            </div>
            <div class="sidebar" style="width: 300px;" section-name="left">
                <h1>Left</h1>
            </div>
        </xcelsior-grid-view>
    </xcelsior-root>
    ```

- Mobile safe grid view, scrollable elements and utils
    - Take a look at [advanced example](./examples/mobil-safe-view-advanced.html)


If you encounter a issue, please don't be shy to contact or open issue ticket 

## Contact

- Hüseyin Can Gündüz

  - github: @huseyincangunduz

  - instagram: @hussainlobo

  - twitter: @hcangunduz

  - email: hcangunduz@gmail.com

- Repo issues tab