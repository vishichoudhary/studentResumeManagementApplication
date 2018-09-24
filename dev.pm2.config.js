const path = require('path');

module.exports = {
  apps : [{
    name        : "lhBackend",
    script      : "app.js",
    watch: ["server", "app.js", "node_modules"],
    log_date_format: 'YYYY-MM-DD HH:mm Z',
    combine_logs: true,
    env: {
      "NODE_ENV": "development",
      "NODE_PATH": path.join(__dirname, 'server')
    },
    "args": [ "--color"],
    node_args: ['--inspect']
  }]
};