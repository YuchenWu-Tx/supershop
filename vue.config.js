const path = require('path')
module.exports = {
    configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'components': '@/components',
				'network': '@/network',
				'views': '@/views',
				'node_modules':path.join(__dirname,'./node_modules')
			}
		},
	},

    lintOnSave: false
}