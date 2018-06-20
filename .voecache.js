import extend_application_0 from '/Users/shenyunjie/CodeBox/voejs/demo/app/extend/application.js';
import extend_context_0 from '/Users/shenyunjie/CodeBox/voejs/demo/app/extend/context.js';
import extend_request_0 from '/Users/shenyunjie/CodeBox/voejs/demo/app/extend/request.js';
import extend_response_0 from '/Users/shenyunjie/CodeBox/voejs/demo/app/extend/response.js';
import router_0 from '/Users/shenyunjie/CodeBox/voejs/demo/app/router.js';
import error_0 from '/Users/shenyunjie/CodeBox/voejs/demo/app/error.js';
import config_config_0 from '/Users/shenyunjie/CodeBox/voejs/demo/config/config.development.js';
import config_plugin_config_0 from '/Users/shenyunjie/CodeBox/voejs/demo/config/plugin.development.js';
import components_flex from '/Users/shenyunjie/CodeBox/voejs/demo/app/components/flex.vue';
import components_nav from '/Users/shenyunjie/CodeBox/voejs/demo/app/components/nav.vue';
import components_headerUser from '/Users/shenyunjie/CodeBox/voejs/demo/app/components/header-user.vue';
import components_pageContent from '/Users/shenyunjie/CodeBox/voejs/demo/app/components/page-content.vue';
import webview_testDist from '/Users/shenyunjie/CodeBox/voejs/demo/app/webview/test_dist.vue';
import controller_index from '/Users/shenyunjie/CodeBox/voejs/demo/app/controller/index.js';
import service_testAbc from '/Users/shenyunjie/CodeBox/voejs/demo/app/service/test_abc.js';
import webstore_main from '/Users/shenyunjie/CodeBox/voejs/demo/app/webstore/main.js';
import webview_error from '/Users/shenyunjie/CodeBox/voejs/demo/app/webview/error.vue';
import webview_notFound from '/Users/shenyunjie/CodeBox/voejs/demo/app/webview/not-found.vue';
export const map = {
  "extend_application_0": extend_application_0,
  "extend_context_0": extend_context_0,
  "extend_request_0": extend_request_0,
  "extend_response_0": extend_response_0,
  "router_0": router_0,
  "error_0": error_0,
  "config_config_0": config_config_0,
  "config_plugin_config_0": config_plugin_config_0,
  "components_flex": components_flex,
  "components_nav": components_nav,
  "components_headerUser": components_headerUser,
  "components_pageContent": components_pageContent,
  "webview_testDist": webview_testDist,
  "controller_index": controller_index,
  "service_testAbc": service_testAbc,
  "webstore_main": webstore_main,
  "webview_error": webview_error,
  "webview_notFound": webview_notFound
};
export const vars = {
  "webview": {
    "testDist": "webview_testDist",
    "error": "webview_error",
    "notFound": "webview_notFound"
  },
  "components": [
    "components_flex",
    "components_nav",
    "components_headerUser",
    "components_pageContent"
  ],
  "controller": {
    "index": "controller_index"
  },
  "middleware": {},
  "service": {
    "testAbc": "service_testAbc"
  },
  "webstore": [
    "webstore_main"
  ],
  "extend": {
    "application": [
      "extend_application_0"
    ],
    "context": [
      "extend_context_0"
    ],
    "request": [
      "extend_request_0"
    ],
    "response": [
      "extend_response_0"
    ]
  },
  "router": [
    "router_0"
  ],
  "error": [
    "error_0"
  ],
  "config": {
    "config": [
      "config_config_0"
    ],
    "pluginConfig": [
      "config_plugin_config_0"
    ]
  },
  "plugin": {}
};
export default { map, vars };