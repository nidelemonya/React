import React, { Component, useEffect, useState, useCallback } from 'react';
// import Log from './log';
// import System from './system';
// import Network from './network';
// import Storage from './storage';
// import Element from './element';
import { Modal, Button, Tabs } from 'antd-mobile';
import logStore from './store/log';
import { observer } from 'mobx-react';
import { EnumKeys, methodEnumInterface} from './types/log';
// State, LogInfos, 

const tabs = [
  { title: 'Log' },
  { title: 'System' },
  { title: 'Network' },
  { title: 'Element' },
  { title: 'Storage' }
];


interface consoleMap {

}

// 存一下原来的 console
const originConsoleMap: methodEnumInterface = {
  log: () => {},
  info: () => {},
  warn: () => {},
  debug: () => {},
  error: () => {}
};

function MyConsole() {
  const [paneShow, setPaneShow] = React.useState<boolean>(false)
  const togglePane = useCallback(() => {
    setPaneShow(!paneShow);
  }, [])

  const mockConsole = useCallback(function () {
    if (!window.console) {
      return;
    }
    // 指明 methodList 的每一项 来自 EnumKeys
    const methodList: EnumKeys[] = ['log', 'info', 'warn', 'debug', 'error']; // 总的方法列表
    // 保存一份原始的 console
    methodList.forEach(method => {
      // 类型 断言 我比 TS 更了解 这个地方的类型
      originConsoleMap[method] = (window.console as any)[method];
    });
    // 替换原来的 console
    methodList.forEach(method => {
      (window.console as any)[method] = (...args: any[]) => {
        // processLog({
        //   logType: method,
        //   infos: args
        // });
        if (!args.length) {
          return; 
        }
    
        // copy logs as a new array

        // [].slice.call(args || []) or args.slice(0)

        let infos = args.slice(0), logType = method;
        logStore.addLog({ logType, infos });
        originConsoleMap[logType].apply(window.console, infos);
      };
    });
  }, [])
  useEffect(() => {
    mockConsole();
    console.log(123);
    console.log(456);
    setTimeout(() => {
      console.log(789);
    }, 3000);
    setTimeout(() => {
      console.log(200);
    }, 6000);
  }, [mockConsole])
  return (
    <div>
      <Button
        onClick={togglePane}
        type="primary"
        style={{
          width: '150px',
          position: 'fixed',
          bottom: '20px',
          right: '20px'
        }}
      >
        myConsole
      </Button>
      <Modal
        popup
        visible={paneShow}
        onClose={togglePane}
        animationType="slide-up"
      >
        <div style={{ height: '80vh' }}>
          <Tabs tabs={tabs} animated={false} tabBarBackgroundColor="#efefef">
            {/* <Log
              logList={logStore.computeLogList}
              togglePane={togglePane}
            /> */}
            <div>{logStore.logList.length}</div>
            <div>System</div>
            <div>Network</div>
            <div>Element</div>
            <div>Storage</div>
            {/* <System />
            <Network />
            <Element togglePane={this.togglePane} />
            <Storage />
            <System /> */}
          </Tabs>
        </div>
      </Modal>
    </div>
  );
}

export default observer(MyConsole)
