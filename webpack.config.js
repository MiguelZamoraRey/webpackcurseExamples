//modulo de node para poder crear el bundle en una carpeta diferente
const path = require('path');

//plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//como podemos ver con __dirname y path decimos que busque dentro de la ruta de nuestro proyecto
//ademas podemos incluso crear una carpeta de distribucion para nuestros bundle
module.exports = {
	entry:{
		home: path.resolve(__dirname, './src/js/index.js')//,
		//shop: path.resolve(__dirname, 'shop.js')//,
	},
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			//aqui van los loaders
			{
				//tipo de archivo
				test:/\.css$/,//todos los archivos con extension css
				//que modulo se va a encargar de esto
				//use: ['style-loader','css-loader'],
				use: ExtractTextPlugin.extract({
					use: "css-loader"
				}),
			},
			{
				//tipo de archivo
				test:/\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ["es2015"]
					}
				},
			},
			{
				test:/\.(jpg|png|gif|woff|eot|ttf|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000,//hasta que peso va a transformar
					}
				}
			},
			{
				test:/\.(mp4|webm)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000,//hasta que peso va a transformar
						name:'video/[name].[hash].[ext]' 
						//lo que pese mas a donde va, ademas le añadiremos un hash
					}
				}
			},
			{
				test:/\.json$/,
				use: 'json-loader'
			},
		]
	},
	plugins: [
		//aqui van los plugins, se deben importar como un modulo de node
		//en concreto este plugin nis sirve para extraer archivos y 
		//	guardarlos en otro lugar, concretamente ahora queremos extraer 
		//  los estilos, por lo que deberemos linkar ahora el style al html
		new ExtractTextPlugin("css/styles.css")
	]
}