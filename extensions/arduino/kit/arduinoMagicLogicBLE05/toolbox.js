/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_CADA_BLE05_CATEGORY}" id="BLE05_BAISIS_CATEGORY" colour="#4C97FF" secondaryColour="#4C97FF">
    <block type="BLE05_setPinMode" id="BLE05_setPinMode"></block>
    <block type="BLE05_setPinOutput" id="BLE05_setPinOutput"></block>
    <block type="BLE05_setPwmOutput" id="BLE05_setPwmOutput">
        <value name="VALUE">
            <shadow type="pwm_set">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
    <block type="BLE05_setServoOutput" id="BLE05_setServoOutput">
        <value name="VALUE">
            <shadow type="math_angle">
                <field name="NUM">90</field>
            </shadow>
        </value>
    </block>
    <block type="BLE05_setLEDState" id="BLE05_setLEDState"></block>
    <block type="BLE05_readDigitalPin" id="BLE05_readDigitalPin"></block>
    <block type="BLE05_readButtonState" id="BLE05_readButtonState"></block>
    <block type="BLE05_readAnalogPort" id="BLE05_readAnalogPort"></block>
</category>
`;
}

exports = addToolbox;