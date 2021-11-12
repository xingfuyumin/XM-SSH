const XMSSH = require("../dist/index").default;
(async () => {
  const ssh = new XMSSH({
    host: "111.231.27.167",
    port: 22,
    username: "dev",
    password: "zhouxiaoming@dev_001",
  });
  await ssh.connect();
  console.log(await ssh.exists("/xmzhou"));
  ssh.close();
})();
