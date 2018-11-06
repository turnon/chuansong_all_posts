// ==UserScript==
// @name         chuansong-all-posts
// @namespace    https://github.com/turnon/chuansong_all_posts
// @version      0.0.1
// @description  auto load posts on chuansong.me
// @author       block24block@gmail.com
// @match        http://chuansong.me/account/*
// @grant        none
// @require      https://greasyfork.org/scripts/372188-ateles/code/ateles.js?version=631434
// ==/UserScript==
eval(await fetch('https://raw.githubusercontent.com/turnon/ateles/master/ateles.js').then(d => d.text()))
Ateles(['page_loader'], function (page_loader) {
    page_loader({
        next_page: function (doc) {
            let np = $(doc).find('.main_col a').filter((_, a) => {
                return a.innerText === '下一页'
            })[0]
            return np && np.href
        },
        append_page: function (data) {
            let $posts = $(data).find('.main_col')
            $('.main_col').last().after($posts)
        },
        interval: function () {
            return 2000;
        }
    })
})