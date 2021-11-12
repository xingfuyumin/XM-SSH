import { XMSSHI } from "./type";
import { Client, ConnectConfig, SFTPWrapper } from "ssh2";
import { Stats } from "ssh2-streams";

class XMSSH implements XMSSHI {
  private client: Client | null = null;
  private sftp: SFTPWrapper | null = null;
  private config: ConnectConfig | null = null;

  constructor(config: ConnectConfig) {
    this.config = config;
  }
  exists = (path: string) =>
    new Promise((resolve, reject) => {
      if (!this.sftp) {
        reject(new Error("连接失败或已过期"));
      }
      this.sftp?.stat(path, (err: any, stats: Stats) => {
        if (err) {
          resolve(false);
        }
        resolve(true);
      });
    }) as Promise<boolean>;
  isFile = async (path: string) => {
    return true;
  };
  createFile = (path: string) => {};
  deleteFile = (path: string) => {};
  readFile = (path: string) => {
    return "";
  };
  writeFile = (path: string, content: string) => {};
  appendFile = (path: string, content: string) => {};
  createDir = (path: string) => {};
  deleteDir = (path: string) => {};
  readDir = (path: string) => {
    return "";
  };
  readInfo = (paths: string | string[]) => {};
  writeInfo = (path: string, k: string, v: string) => {};
  chmod = (path: string, v: number) => {};
  chown = (path: string, v1: string, v2: string, v3: string) => {};
  close = () => new Promise((resolve) => {
    this.client?.destroy();
    resolve(0);
  });
  connect = () =>
    new Promise((resolve, reject) => {
      if (!this.config) {
        reject(new Error("缺少必要链接配置"));
      }
      const conn = new Client();
      conn.on("ready", () => {
        conn.sftp((err: Error | undefined, sftp: SFTPWrapper) => {
          if (err) {
            reject(err);
          }
          this.sftp = sftp;
          resolve(0);
        });
        this.client = conn;
      });
      conn.on("error", (err) => {
        this.client = null;
        this.sftp = null;
        reject(err);
      });
      conn.connect(this.config || {});
    });
}

export default XMSSH;
