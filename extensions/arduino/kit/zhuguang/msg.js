/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        ZHG_EDUCATION_CATEGORY:'Candle Light Car',
        QH_SENSOR_LABEL:'---SENSOR---',
        qdp_esp32_chaoshengboSerial:'QH Utrasonic ranging %1 Port %2',
        qdp_esp32_grayscale:'Double photoreflection Port %1 Left %2 Right %3',
        qdp_esp32_lightSensor:'Light sensor Port %1',
        qdp_esp32_sound:'Sound sensor Port %1',
        rgb_esp32_led:'RGB LED Port %1 total %2  NO %3 R %4 G %5 B %6',
        rgb_esp32_led2:'RGB LED Port %1 total %2  NO %3 Colour %4',
        QH_SERVO_LABEL:'---SERVO---',
        qdp_esp32_servomotor360:'Servo 360° Port %1 Direction %2 Speed(0~10) %3',
        QH_CW:'CW',
        QH_CCW:'CCW',
        QH_CAR_LABEL: '---CAR---',
        qdp_esp32_carInitial: 'Car initialization left tire %1 right tire %2',
        qdp_esp32_carMove: 'Car run %1 speed(0~10) %2',
        qdp_esp32_carAround: 'Car run speed(0~10) left tire %1 right tire %2',
        Car_Forward: 'Forward',
        Car_Backward: 'Backward',
        Car_TurnLeft: 'Turn Left',
        Car_TurnRight: 'Turn Right',
        Car_TurnAround: 'Turn Around',
        QH_IR_LABEL:'---IR---',
        qdp_esp32_ir_re2:'Remote control input RC5 Port %1 Keybord %2 Mode %3',
        QH_IrPress:'Press',
        QH_IrPressOn:'Press on',
        qdp_ESP32_ir_recv_raw:'IR receive decode Port %1',
        qdp_esp32_ir_send_nec:'IR send %1 Port %2 value %3',
        QDP_esp32_ir_send_raw:'Infrared emission Port %1  %2 Array %3 Array length %4 frequency %5',
        
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        ZHG_EDUCATION_CATEGORY:'烛光小车',
        QH_SENSOR_LABEL:'---传感器---',
        qdp_esp32_chaoshengboSerial:'QH 超声波测距 %1 端口 %2',
        qdp_esp32_grayscale:'双光电反射 端口 %1 左路 %2 右路 %3',
        qdp_esp32_lightSensor:'光线传感器 端口 %1',
        qdp_esp32_sound:'声音传感器 端口 %1',
        rgb_esp32_led:'RGB LED 端口 %1 总数 %2  灯号 %3 R %4 G %5 B %6',
        rgb_esp32_led2:'RGB LED 端口 %1 总数 %2  灯号 %3 颜色 %4',
        QH_SERVO_LABEL:'---舵机---',
        qdp_esp32_servomotor360:'舵机360° 端口 %1 方向 %2 速度(0~10) %3',
        QH_CW:'正转',
        QH_CCW:'反转',
        QH_CAR_LABEL: '---小车---',
        qdp_esp32_carInitial: '小车 初始化 左轮 %1 右轮 %2',
        qdp_esp32_carMove: '小车 执行 %1 速度(0~10) %2',
        qdp_esp32_carAround: '小车 执行 速度(0~10) 左轮 %1 右轮 %2',
        Car_Forward: '前进',
        Car_Backward: '后退',
        Car_TurnLeft: '左转',
        Car_TurnRight: '右转',
        Car_TurnAround: '转圈',
        QH_IR_LABEL:'---红外---',
        qdp_esp32_ir_re2:'红外遥控 RC5 端口 %1 按键 %2 模式 %3',
        QH_IrPress:'按下',
        QH_IrPressOn:'按住',
        qdp_ESP32_ir_recv_raw:'红外接收解码 端口 %1',
        qdp_esp32_ir_send_nec:'红外发射 %1 端口 %2 数值 %3',
        QDP_esp32_ir_send_raw:'红外发射 端口  %1  %2 数组 %3 数组长度 %4 频率 %5',
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        ZHG_EDUCATION_CATEGORY:'燭光小車',
        QH_SENSOR_LABEL:'---感測器---',
        qdp_esp32_chaoshengboSerial:'QH 超聲波測距 %1 端口 %2',
        qdp_esp32_grayscale:'雙光電反射 端口 %1 左路 %2 右路 %3',
        qdp_esp32_lightSensor:'光線感測器 端口 %1',
        qdp_esp32_sound:'聲音感測器 端口 %1',
        rgb_esp32_led:'RGB LED 端口 %1 總數 %2  燈號 %3 R %4 G %5 B %6',
        rgb_esp32_led2:'RGB LED 端口 %1 總數 %2  燈號 %3 顏色 %4',
        QH_SERVO_LABEL:'---舵機---',
        qdp_esp32_servomotor360:'舵機360° 端口 %1 方向 %2 速度(0~10) %3',
        QH_CW:'正轉',
        QH_CCW:'反轉',
        QH_CAR_LABEL: '---小車---',
        qdp_esp32_carInitial: '小車 初始化 左輪 %1 右輪 %2',
        qdp_esp32_carMove: '小車 執行 %1 速度(0~10) %2',
        qdp_esp32_carAround: '小車 執行 速度(0~10) 左輪 %1 右輪 %2',
        Car_Forward: '前進',
        Car_Backward: '後退',
        Car_TurnLeft: '左轉',
        Car_TurnRight: '右轉',
        Car_TurnAround: '轉圈',
        QH_IR_LABEL:'---紅外---',
        qdp_esp32_ir_re2:'紅外遙控 RC5 端口 %1 按鍵 %2 模式 %3',
        QH_IrPress:'按下',
        QH_IrPressOn:'按住',
        qdp_ESP32_ir_recv_raw:'紅外接收解碼 端口 %1',
        qdp_esp32_ir_send_nec:'紅外發射 %1 端口 %2 數值 %3',
        QDP_esp32_ir_send_raw:'紅外發射 端口  %1  %2 數組 %3 數組長度 %4 頻率 %5',
    });
    return Blockly;
}

exports = addMsg;
