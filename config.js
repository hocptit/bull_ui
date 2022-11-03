const QUEUES = process.env?.QUEUES;
module.exports = {
  port: 3011,
  readOnly: process.env?.READONLY ? process.env?.READONLY : 'false',
  redis: {
    uri: process.env?.REDIS_URI ? process.env?.REDIS_URI :`redis://localhost:6379/`
  },
  username:  process.env?.USERNAME ? process.env?.USERNAME : 'admin',
  password:  process.env?.PASSWORD ? process.env?.PASSWORD : 'example',
  queues: [
      ...QUEUES.split(',')
  ],
};
