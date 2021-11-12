export interface XMSSHI {
  /**
   * 判断文件或目录是否存在
   */
  exists: (path: string) => Promise<boolean>;
  /**
   * 判断路径是文件还是目录
   */
  isFile: (path: string) => Promise<boolean>;
  /**
   * 创建文件
   */
  createFile: (path: string) => void;
  /**
   * 删除文件
   */
  deleteFile: (path: string) => void;
  /**
   * 读取文件内容
   */
  readFile: (path: string) => string;
  /**
   * 写入文件内容
   */
  writeFile: (path: string, content: string) => void;
  /**
   * 追加文件内容
   */
  appendFile: (path: string, content: string) => void;
  /**
   * 创建目录
   */
  createDir: (path: string) => void;
  /**
   * 删除目录
   */
  deleteDir: (path: string) => void;
  /**
   * 读取目录下内容
   */
  readDir: (path: string) => string;
  /**
   * 读取多个文件或目录信息
   */
  readInfo: (paths: string | string[]) => any;
  /**
   * 写入文件或目录信息
   */
  writeInfo: (path: string, k: string, v: string) => void;
  /**
   * 设置文件或目录权限
   */
  chmod: (path: string, v: number) => void;
  /**
   * 设置文件或目录拥有者
   */
  chown: (path: string, v1: string, v2: string, v3: string) => void;
}
