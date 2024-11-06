# macbook air 13.3 休眠自动重启（死机）问题解决记录

问题描述：

​	收的二手的mac在确认检查无误后，正常使用发现有莫名奇妙睡眠重启的问题，表现为盒盖睡眠之后再马上打开会死机重启，手动睡眠之后马上按键会进行重启，盒盖睡眠之后若是连接上了其他设备比如蓝牙鼠标此时点按蓝牙鼠标会进行卡死重启。

问题日志，大多一样：

```bash
panic(cpu 3 caller 0xfffffe0030541a9c): DCP PANIC - ASSERT!AppleDCPDPTXPowerController.cpp:538 No device added after powering on the rails. HPD=0 - dcpav(27)
ASSERT!AppleDCPDPTXPowerController.cpp:538 No device added after powering on the rails. HPD=0
RTKit: RTKit-2419.101.1.release - Client: local-ipad14dcp.RELEASE
!UUID: fe6311b8-1432-3071-bdc3-8a18a91b68a4
Time: 0x0000000291465c54
```

## 解决方案

进行硬件检查，没有发现问题，重装不行，可能是mac设计缺陷

解决方案：

​	配置脚本禁止蓝牙唤醒或者睡眠关闭蓝牙：

### 1 使用**[[SleepWithoutBluetoothAndWifi](https://github.com/dreamncn/SleepWithoutBluetoothAndWifi)](https://github.com/dreamncn/SleepWithoutBluetoothAndWifi)**项目

能关闭lwifi但是休眠时蓝牙唤醒仍旧存在，导致盒盖情况下点击鼠标会进行死机重启，未起作用

### 2 使用自动关闭蓝牙项目**[[bluesnooze](https://github.com/odlp/bluesnooze)](https://github.com/odlp/bluesnooze)**

能够起作用，在点击睡眠之后确实睡眠了，并且蓝牙断开，点击鼠标无法唤醒，但是同时apple watch的自动解锁无法使用，必须重新登录才能开启蓝牙，此方案可以给没有apple watch自动解锁需求者使用

### 3 使用关闭休眠模式

```bash
sudo pmset -c hibernatemode 0
sudo pmset -b hibernatemode 3 
```

上述设置在不盒盖的时候点按能够唤醒mac，并且没有出错

## 可能的原因

根据网络上存在的维修记录和解决方案，其中有效的是去天才吧更换屏幕和角度传感器，可能是上述部分导致了某些设备离线？不能启动，但是在屏幕打开的时候可以正常唤醒。
