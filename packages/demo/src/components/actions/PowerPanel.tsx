import { DefaultButton, Icon, MessageBar, MessageBarType, Stack, TooltipHost } from "@fluentui/react";
import { observer } from "mobx-react-lite";
import { GLOBAL_STATE } from "../../state/global";
import { Icons } from "../../utils";

const PowerPanel = observer(function PowerPanel() {
    return (
        <Stack tokens={{ childrenGap: 20 }}>
            <div>
                <DefaultButton text="Reboot" disabled={!GLOBAL_STATE.adb} onClick={() => GLOBAL_STATE.adb!.power.reboot()} />
            </div>

            <div>
                <DefaultButton text="Power Off" disabled={!GLOBAL_STATE.adb} onClick={() => GLOBAL_STATE.adb!.power.powerOff()} />
            </div>

            <div>
                <DefaultButton text="Press Power Button" disabled={!GLOBAL_STATE.adb} onClick={() => GLOBAL_STATE.adb!.power.powerButton()} />
            </div>

            <div>
                <MessageBar messageBarType={MessageBarType.severeWarning} delayedRender={false}>
                    Danger Zone Below
                </MessageBar>
            </div>

            <div>
                <DefaultButton text="Reboot to Bootloader" disabled={!GLOBAL_STATE.adb} onClick={() => GLOBAL_STATE.adb!.power.bootloader()} />
            </div>

            <div>
                <DefaultButton text="Reboot to Fastboot" disabled={!GLOBAL_STATE.adb} onClick={() => GLOBAL_STATE.adb!.power.fastboot()} />
            </div>

            <div>
                <DefaultButton text="Reboot to Recovery" disabled={!GLOBAL_STATE.adb} onClick={() => GLOBAL_STATE.adb!.power.recovery()} />
            </div>

            <div>
                <DefaultButton text="Reboot to Sideload" disabled={!GLOBAL_STATE.adb} onClick={() => GLOBAL_STATE.adb!.power.sideload()} />
            </div>

            <div>
                <DefaultButton text="Reboot to Qualcomm EDL Mode" disabled={!GLOBAL_STATE.adb} onClick={() => GLOBAL_STATE.adb!.power.qualcommEdlMode()} />
                <TooltipHost content={<span>Only works on some Qualcomm devices.</span>}>
                    <Icon style={{ verticalAlign: "middle", marginLeft: 4, fontSize: 18 }} iconName={Icons.Info} />
                </TooltipHost>
            </div>

            <div>
                <DefaultButton text="Reboot to Samsung Odin Download Mode" disabled={!GLOBAL_STATE.adb} onClick={() => GLOBAL_STATE.adb!.power.samsungOdin()} />
                <TooltipHost content={<span>Only works on Samsung devices.</span>}>
                    <Icon style={{ verticalAlign: "middle", marginLeft: 4, fontSize: 18 }} iconName={Icons.Info} />
                </TooltipHost>
            </div>
        </Stack>
    );
});

export default PowerPanel;
