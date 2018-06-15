import extend_application_0 from '/Users/shenyunjie/CodeBox/voejs/demo/app/extend/application.js';
import extend_context_0 from '/Users/shenyunjie/CodeBox/voejs/demo/app/extend/context.js';
import extend_request_0 from '/Users/shenyunjie/CodeBox/voejs/demo/app/extend/request.js';
import extend_response_0 from '/Users/shenyunjie/CodeBox/voejs/demo/app/extend/response.js';
import router_0 from '/Users/shenyunjie/CodeBox/voejs/demo/app/router.js';
import config_config_0 from '/Users/shenyunjie/CodeBox/voejs/demo/config/config.development.js';
import config_plugin_config_0 from '/Users/shenyunjie/CodeBox/voejs/demo/config/plugin.development.js';
import webview_testDist from '/Users/shenyunjie/CodeBox/voejs/demo/app/webview/test_dist.vue';
import controller_index from '/Users/shenyunjie/CodeBox/voejs/demo/app/controller/index.js';
import service_testAbc from '/Users/shenyunjie/CodeBox/voejs/demo/app/service/test_abc.js';
import webstore_adafds from '/Users/shenyunjie/CodeBox/voejs/demo/app/webstore/adafds.js';
export const map = {
  "extend_application_0": extend_application_0,
  "extend_context_0": extend_context_0,
  "extend_request_0": extend_request_0,
  "extend_response_0": extend_response_0,
  "router_0": router_0,
  "config_config_0": config_config_0,
  "config_plugin_config_0": config_plugin_config_0,
  "webview_testDist": webview_testDist,
  "controller_index": controller_index,
  "service_testAbc": service_testAbc,
  "webstore_adafds": webstore_adafds
};
export const vars = {
  "webview": {
    "testDist": "webview_testDist"
  },
  "components": {},
  "controller": {
    "index": "controller_index"
  },
  "middleware": {},
  "service": {
    "testAbc": "service_testAbc"
  },
  "webstore": [
    "webstore_adafds"
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
  "error": [],
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