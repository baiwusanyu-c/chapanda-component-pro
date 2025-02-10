import shell from 'shelljs';
import * as path from 'path'

export const run = async(command) => {
  return new Promise((resolve, reject) => {
   try {
     shell.exec(
         command,
         {
           cwd: path.resolve('../'),
           shell: true,
           encoding: 'GBK',
           async: true,
           silent: false
         },
         (code, _, err) => {
           if (code === 0) {
             resolve(true);
           } else if (err) {
             reject(err);
           }
         }
     );
   } catch (e) {
     reject(e.message);
   }
  })
}

export const runTask = (displayName, command) => {
  const fn = async() => {
    await run(command)
  }
  fn.displayName = displayName
  return fn
}
