# SnipeX
This is a game created using Phaser JS and JavaScript. It is a role playing game.
<h1 align="center">Welcome to SnipeX 👋</h1>
<br>

<p>
  <a href="https://rawcdn.githack.com/damiecode/Weather-App/feature/weatherApp/dist/index.html" target="_blank">
    <img alt="Website" src="weather.png" />
  </a>
</p>

<br>

# Game Development steps
## Add dependencies
 - In your terminal run ```npm init -y``` to generate the package.json file.
 - Run ```npm install --dev webpack webpack-cli webpack-dev-server``` to add webpack dependencies.
 - Run ```npm install copy-webpack-plugin``` 
 - Make sure to create a gitignore file and add the node_modules to avoid so many files when pushing.
 - Next  ```npm install -D babel-loader babel-core @babel/preset-env``` for transpiling the code.
 - Lastly ```npm install phaser``` to get phaser in our project.
<br>

## Configuring webpack with babel
- Create a webpack.config.js file and add the following configuration
  ``` const path = require("path");
      const CopyWebpackPlugin = require("copy-webpack-plugin");
      const webpack = require("webpack");

      module.exports = {
        entry: {
          app: "./src/index.js",
          "production-dependencies": ["phaser"]
        },

        output: {
          path: path.resolve(__dirname, "build"),
          filename: "[name].js"
        },
        optimization: {
          splitChunks: {
            chunks: "all"
          }
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              include: path.resolve(__dirname, "src/"),
              use: {
                loader: "babel-loader",
                options: {
                  presets: ["env"]
                }
              }
            }
          ]
        },

        plugins: [
          new CopyWebpackPlugin([
            {
              from: path.resolve(__dirname, "index.html"),
              to: path.resolve(__dirname, "build")
            },
            {
              from: path.resolve(__dirname, "assets", "**", "*"),
              to: path.resolve(__dirname, "build")
            }
          ]),
          new webpack.DefinePlugin({
            "typeof CANVAS_RENDERER": JSON.stringify(true),
            "typeof WEBGL_RENDERER": JSON.stringify(true)
          })
        ],

        devServer: {
          contentBase: path.resolve(__dirname, "build")
        }
      };```
- Note: We are adding two javaScript files so we can budle the phaser separately from the main javaScript code. This is to avoid phaser from reloading all the time when we update our logics.
- Lastly in configuration, Create an html file and link the JS files to the html.
<br>

This project is part of a series of projects to be completed by students of [Microverse](https://www.microverse.org/ 'The Global School for Remote Software Developers!').

SnipeX is created using vanilla JS and Phaser Js, connects to Open-weather and Ipfind APIs, and dynamically renders weather data -in Metric and Imperial units- for clients city or other cities chosen with the search form.
 The search form uses a modified list from OpenWeather to suggest and validate the user's input.

The full project requirements can be found [here](https://www.theodinproject.com/courses/javascript/lessons/weather-app).

## Built With

- JavaScript (ES6)
- HMTL
- CSS
- npm
- webpack

### ✨ [Live Demo](https://rawcdn.githack.com/damiecode/Weather-App/feature/weatherApp/dist/index.html)

## Usage

> Clone the repository to your local machine

```sh
$ git clone https://github.com/damiecode/Weather-App.git
```

> cd into the directory, install dependencies, build and start

```sh
$ cd todo-list
$ npm install
$ npm run build
$ npm run start
```

> Open `http://127.0.0.1:8080` using your favourite broswer, if it doesn't open automatically.

## Authors

👤 **Damilola Ale**

- Github: [@damiecode](https://github.com/damiecode)
- Twitter: [@iamlildamski](https://twitter.com/iamlildamski)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/damiecode/Weather-App/issues).

1. Fork it (https://github.com/damiecode/Weather-App/fork)
2. Create your working branch (git checkout -b [choose-a-name])
3. Commit your changes (git commit -am 'what this commit will fix/add/improve')
4. Push to the branch (git push origin [chosen-name])
5. Create a new Pull Request

## Show your support

Give a ⭐️ if you like this project!

## Contact me

I am looking for my next opportunity. Reach out to me if you are looking to hire!
_codenlyn@gmail.com_