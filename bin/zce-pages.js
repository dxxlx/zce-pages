#!/usr/bin/env node
process.argv.push('--cwd')
process.argv.push(process.cwd())
process.argv.push('--gulpfile')
//require是载入这个模块，resolve是找到这个模块所对应的路径
//传递的字符串参数是通过相对路径的方式，
// process.argv.push(require.resolve('../lib/index'))
//传..就行,因为找上一次目录，找到zce-pages的根目录，他会自动去找package.json当中mian字段里面对应的文件
process.argv.push(require.resolve('..'))
require('gulp/bin/gulp')