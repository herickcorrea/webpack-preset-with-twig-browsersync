const webpack                   = require('webpack');
const HtmlWebpackPlugin         = require('html-webpack-plugin');
const { CleanWebpackPlugin }    = require('clean-webpack-plugin');
const MiniCssExtractPlugin      = require('mini-css-extract-plugin');
const TerserJSPlugin            = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin   = require('optimize-css-assets-webpack-plugin');
const ImageminPlugin            = require("imagemin-webpack");


module.exports =
    {
        // mode: 'production',
        // optimization: {
        //     minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        // },

        mode: 'development',
        devtool: 'inline-source-map',

        entry: './src/scripts/app.js',

        output:
        {
            filename: 'bundle.js',
            path: __dirname + '/public',
            publicPath: ''
        },

        module:
        {
            rules:
                [
                    // Javascript
                    {
                        test: /\.js/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                            options: { presets: ["@babel/preset-env"] }
                        }
                    },
                    // Twig templates
                    {
                        test: /\.twig$/,
                        exclude: /node_modules/,
                        use: [
                            // 'raw-loader',
                            {
                                loader: 'html-srcsets-loader',
                                options: {
                                    attrs: ['img:src', ':srcset', ':data-video-desktop', ':data-cover-desktop', ':data-cover-mobile', ':data-media-812', ':data-media-609', ':data-path', ':data-img'],
                                    minimize: false,
                                    caseSensitive: true,
                                    removeAttributeQuotes: false,
                                    minifyJS: false,
                                    minifyCSS: false
                                },
                            },
                            {
                                loader: 'twig-html-loader',
                                options: {
                                    namespaces: {
                                        'theme': './src/twig',
                                    },
                                    filters: {
                                        t(str)
                                        {
                                            return str;
                                        }
                                    },
                                },
                            },
                        ],
                    },
                    // PHP file loader
                    // {
                    //     test: /\.php$/,
                    //     loader: [
                    //         'html-minify',
                    //         'php-loader'
                    //     ],
                    // },
                    // File loader
                    {
                        // test: /\.(png|svg|jpg|gif)$/,
                        test: /\.(png|jpg|gif)$/,
                        use: [
                            {
                                loader: 'file-loader',
                                options: {
                                    name: 'images/[name].[ext]?[contenthash]',
                                }
                            },
                        ]
                    },
                    // File loader
                    {
                        // test: /\.(png|svg|jpg|gif)$/,
                        test: /\.(eot|woff|woff2|ttf)$/,
                        use: [
                            {
                                loader: 'file-loader',
                                options: {
                                    name: 'fonts/[name].[ext]?[contenthash]',
                                }
                            },
                        ]
                    },
                    // File loader
                    {
                        // test: /\.(png|svg|jpg|gif)$/,
                        test: /\.(svg)$/,
                        use: [
                            {
                                loader: 'file-loader',
                                options: {
                                    name: 'svg/[name].[ext]?[contenthash]',
                                }
                            },
                        ]
                    },
                    // less
                    {
                        test: /\.less$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            // {
                            //     loader: 'style-loader',
                            // },
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true,
                                },
                            },
                            {
                                loader: 'less-loader',
                                options: {
                                    sourceMap: true,
                                },
                            },
                        ],
                    },
                    // CSS
                    {
                        test: /\.css$/,
                        use: [
                            {
                                loader: MiniCssExtractPlugin.loader,
                                options: {
                                    // you can specify a publicPath here
                                    // by default it uses publicPath in webpackOptions.output
                                    publicPath: __dirname + '/public',
                                    hmr: false,// process.env.NODE_ENV === 'development',
                                },
                            },
                            // 'style-loader', 
                            'css-loader']
                    },
                    // File loader
                    {
                        // test: /\.(png|svg|jpg|gif)$/,
                        test: /\.mp4$/,
                        use: [
                            {
                                loader: 'file-loader',
                                options: {
                                    name: 'videos/[name].[ext]?[contenthash]',
                                }
                            },
                        ]
                    },
                ]
        },

        plugins:
            [
                // Twig templates
                    
                    new HtmlWebpackPlugin({
                        filename: 'index.html',
                        template: './src/twig/pages/index.twig'
                    }),
                    new HtmlWebpackPlugin({
                        filename: 'quem-somos.html',
                        template: './src/twig/pages/quem-somos.twig'
                    }),
                    /*
                    new HtmlWebpackPlugin({
                        filename: 'nossos-premios.html',
                        template: './src/twig/pages/nossos-premios.twig'
                    }),
                    new HtmlWebpackPlugin({
                        filename: 'ancar-labs.html',
                        template: './src/twig/pages/ancar-labs.twig'
                    }),
                    new HtmlWebpackPlugin({
                        filename: 'nossos-shoppings.html',
                        template: './src/twig/pages/nossos-shoppings.twig'
                    }),
                     new HtmlWebpackPlugin({
                        filename: 'comercializacao.html',
                        template: './src/twig/pages/comercializacao.twig'
                    }),
                    new HtmlWebpackPlugin({
                        filename: 'novidades.html',
                        template: './src/twig/pages/novidades.twig'
                    }),
                    new HtmlWebpackPlugin({
                        filename: 'carreiras.html',
                        template: './src/twig/pages/carreiras.twig'
                    }),
                    new HtmlWebpackPlugin({
                        filename: 'responsabilidade-social.html',
                        template: './src/twig/pages/responsabilidade-social.twig'
                    }),
                    new HtmlWebpackPlugin({
                        filename: 'fale-conosco.html',
                        template: './src/twig/pages/fale-conosco.twig'
                    }),
                    */

                // Limpa diretorio output
                    
                    new CleanWebpackPlugin({ verbose: true }),

                // JQuery
                    
                    new webpack.ProvidePlugin({
                        $: 'jquery',
                        jQuery: 'jquery',
                        'window.jQuery': 'jquery',
                    }),

                // CSS Extract
                    
                    new MiniCssExtractPlugin({
                        // Options similar to the same options in webpackOptions.output
                        // all options are optional
                        filename: '[name].css',
                        chunkFilename: '[id].css',
                        ignoreOrder: false, // Enable to remove warnings about conflicting order
                    }),

                // Otimiza Imagens

                    new ImageminPlugin(
                    {
                        bail: false, // Ignore errors on corrupted images
                        cache: true,
                        imageminOptions:
                        {
                            // Before using imagemin plugins make sure you have added them in `package.json` (`devDependencies`) and installed them
                     
                            // Lossless optimization with custom option
                            // Feel free to experiment with options for better result for you
                            plugins: [
                              ["gifsicle", { interlaced: true }],
                              ["jpegtran", { progressive: true }],
                              ["optipng", { optimizationLevel: 5 }],
                              [
                                "svgo",
                                {
                                  plugins: [
                                    {
                                      removeViewBox: false
                                    }
                                  ]
                                }
                              ]
                            ]
                        }
                    }),
            ],

        devServer:
        {
            contentBase: './public'
        },

        stats: {
            // One of the two if I remember right
            entrypoints: false,
            children: false
        },
    };