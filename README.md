# xcelsior

Xcelsior helps creating user interfaces containers and 

## Demonstration

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/03kfVM46Eec/0.jpg)](https://www.youtube.com/watch?v=03kfVM46Eec)
## How to use?

- Import CSS and JS files (if you want make sidebars mobile safe)
        
        <head>
            <link rel="stylesheet" href="../build/css/index.css">
        </head>
        <body>
            <!-- UI Elements -->
            <script src="../build/js/bundle/xcelsior.js"></script>
            <!-- another scripts -->
        </body>

- All element definitions must be at 

        <div class="xcelsior-root">

        </div>

- Grid views

         <div class="main-sidebar grid-view mobile-view-safe">
            <div class="wrap">
                <div class="inner">
                    <div class="sidebar" style="width: 300px;" section-name="right">
                        <h1>Right</h1>
                    </div>

                    <div class="content">
                        <h1> content </h1>
                    </div>

                    <div class="sidebar" style="width: 300px;" section-name="left">
                        <h1>Left</h1>
                    </div>
                </div>
            </div>
        </div>

**Detailed information will be documented. But you can check the [test/ui.html](test/ui.html) file for detailed usage**

## Contact

- Hüseyin Can Gündüz

  - github: @huseyincangunduz

  - instagram: @hussainlobo

  - twitter: @hcangunduz

  - email: hcangunduz@gmail.com

- Repo issues tab