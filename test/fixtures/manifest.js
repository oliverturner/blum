
module.exports = {
  servers: [{
    port: 8080,
    options: {
      labels: ['web']
    }
  }],
  plugins: {
    $filter: 'env',
    $base:   {
      bell: [{select: 'http'}],
      good: {opsInterval: 5000}
    },
    production: {
      good: {
        reporters: [
          {reporter: 'good-file', events: {log: '*'}, config: './logs/log.log'},
          {reporter: 'good-file', events: {ops: '*'}, config: './logs/ops.log'}
        ]
      }
    }
  }
};
