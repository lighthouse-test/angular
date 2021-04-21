module.exports = {
  ci: {
    collect: {
      staticDistDir: "./dist/angular-static",
    },
    assert: {
      assertions: {
        "uses-long-cache-ttl": "off",
        "uses-http2": "off"
      }
    },
    upload: {
      target: "filesystem",
      outputDir: "./dist/angular-static/lighthouse"
    },
  },
};