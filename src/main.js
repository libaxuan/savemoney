import {createApp} from 'vue'
import App from './App.vue'

import gdp from "gio-webjs-sdk-cdp";
import gioCompress from "gio-webjs-sdk-cdp/plugins/gioCompress.js";
import gioEventAutoTracking from "gio-webjs-sdk-cdp/plugins/gioEventAutoTracking.js";
import gioHybridAdapter from "gio-webjs-sdk-cdp/plugins/gioHybridAdapter.js";
import gioHybridCircle from "gio-webjs-sdk-cdp/plugins/gioHybridCircle.js";
import gioWebCircle from "gio-webjs-sdk-cdp/plugins/gioWebCircle.js";
// import { createApp } from 'vue';

// 获取 env 中的 SITE_HOST 变量值
const siteHost = import.meta.env.VITE_SITE_HOST;
gdp('registerPlugins', [
    gioCompress,
    gioEventAutoTracking,
    gioHybridAdapter,
    gioHybridCircle,
    gioWebCircle,
    // gioPerformance
]);
createApp(App).mount('#app')
// 支持本地调试
window._gr_ignore_local_rule = true
gdp('init', '5', 'a475c218b5f29f58', {
    // 调试时候打开 上线关闭,打开后可在本地看console日志
    debug: false,
    enableIdMapping: true,
    compress: true,
    hashtag: true,
    host: siteHost,
    scheme: 'https://',
    dataCollect: true,
    version: '0.0.1'
});
console.log(`
                                                               
                                                               
 ___   __ _ __   __ ___   _ __ ___    ___   _ __    ___  _   _ 
/ __| / _\` |\\ \\ / // _ \\ | '_ \` _ \\  / _ \\ | '_ \\  / _ \\| | | |
\\__ \\| (_| | \\ V /|  __/ | | | | | || (_) || | | ||  __/| |_| |
|___/ \\__,_|  \\_/  \\___| |_| |_| |_| \\___/ |_| |_| \\___| \\__, |
                                                          __/ |
                                                         |___/                                                                                                                              
`);
let content = `\n\n版本: 0.0.1 \n主页: https://autoaigpt.cn`;
console.log(content);

