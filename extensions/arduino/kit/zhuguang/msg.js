/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        ZHG_EDUCATION_CATEGORY:'Candle Light Car',
        QH_SENSOR_LABEL:'---SENSOR---',
        qdp_esp32_buttonl:'Press the button Port %1',
        qdp_esp32_chaoshengboSerial:'QH Utrasonic ranging %1 Port %2',
        qdp_esp32_grayscale:'single gray patrol Port %1 %2 %3',
        gray_left: 'Left',
        gray_right: 'Right',
        QH_SERVO_LABEL:'---SERVO---',
        qdp_esp32_servomotor360:'Servo 360° Port %1 Direction %2 Speed(0~10) %3',
        QH_CW:'CW',
        QH_CCW:'CCW',
        QH_CAR_LABEL: '---CAR---',
        qdp_esp32_carInitial: 'Car initialization left tire %1 right tire %2',
        qdp_esp32_carMove: 'Car %1 run %2 speed(0~10) %3',
        tire_all: 'All Tires',
        tire_left: 'Left Tire',
        tire_right: 'Right Tire',
        Car_Forward: 'Forward',
        Car_Backward: 'Backward',
        Car_Stop: 'Stop',
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
        qdp_esp32_buttonl:'按下按键 端口 %1',
        qdp_esp32_chaoshengboSerial:'QH 超声波测距 %1 端口 %2',
        qdp_esp32_grayscale:'单灰度巡线 端口 %1 %2 %3',
        gray_left: '左路',
        gray_right: '右路',
        QH_SERVO_LABEL:'---舵机---',
        qdp_esp32_servomotor360:'舵机360° 端口 %1 方向 %2 速度(0~10) %3',
        QH_CW:'正转',
        QH_CCW:'反转',
        QH_CAR_LABEL: '---小车---',
        qdp_esp32_carInitial: '小车 初始化 左轮 %1 右轮 %2',
        qdp_esp32_carMove: '小车 %1 执行 %2 速度(0~10) %3',
        tire_all: '全部',
        tire_left: '左轮',
        tire_right: '右轮',
        Car_Forward: '前进',
        Car_Backward: '后退',
        Car_Stop: '停止',
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
        qdp_esp32_buttonl:'按下按鍵 端口 %1',
        qdp_esp32_chaoshengboSerial:'QH 超聲波測距 %1 端口 %2',
        qdp_esp32_grayscale:'單灰度巡線 端口 %1 %2 %3',
        gray_left: '左路',
        gray_right: '右路',
        QH_SERVO_LABEL:'---舵機---',
        qdp_esp32_servomotor360:'舵機360° 端口 %1 方向 %2 速度(0~10) %3',
        QH_CW:'正轉',
        QH_CCW:'反轉',
        QH_CAR_LABEL: '---小車---',
        qdp_esp32_carInitial: '小車 初始化 左輪 %1 右輪 %2',
        qdp_esp32_carMove: '小車 %1 執行 %2 速度(0~10) %3',
        tire_all: '全部',
        tire_left: '左輪',
        tire_right: '右輪',
        Car_Forward: '前進',
        Car_Backward: '後退',
        Car_Stop: '停止',
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
