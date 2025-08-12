import { DefaultButton, Icon, MessageBar, MessageBarType, Stack, TooltipHost } from "@fluentui/react";
import { observer } from "mobx-react-lite";
import { GLOBAL_STATE } from "../../state/global";
import { Icons } from "../../utils";

const PowerPanel = observer(function PowerPanel() {
    return (
        <Stack tokens={{ childrenGap: 8 }}>
            <Stack horizontal wrap tokens={{ childrenGap: 8 }}>
                <DefaultButton text="Reboot" disabled={!GLOBAL_STATE.adb} onClick={() => GLOBAL_STATE.adb!.power.reboot()} />
                <DefaultButton text="Power Off" disabled={!GLOBAL_STATE.adb} onClick={() => GLOBAL_STATE.adb!.power.powerOff()} />
                <DefaultButton text="Press Power Button" disabled={!GLOBAL_STATE.adb} onClick={() => GLOBAL_STATE.adb!.power.powerButton()} />
            </Stack>

            <MessageBar messageBarType={MessageBarType.severeWarning} delayedRender={false}>
                Danger Zone Below
            </MessageBar>

            <Stack horizontal wrap tokens={{ childrenGap: 8 }}>
                <DefaultButton text="Bootloader" disabled={!GLOBAL_STATE.adb} onClick={() => GLOBAL_STATE.adb!.power.bootloader()} />
                <DefaultButton text="Fastboot" disabled={!GLOBAL_STATE.adb} onClick={() => GLOBAL_STATE.adb!.power.fastboot()} />
                <DefaultButton text="Recovery" disabled={!GLOBAL_STATE.adb} onClick={() => GLOBAL_STATE.adb!.power.recovery()} />
                <DefaultButton text="Sideload" disabled={!GLOBAL_STATE.adb} onClick={() => GLOBAL_STATE.adb!.power.sideload()} />
            </Stack>

            <Stack horizontal wrap tokens={{ childrenGap: 8 }}>
                <DefaultButton text="Qualcomm EDL" disabled={!GLOBAL_STATE.adb} onClick={() => GLOBAL_STATE.adb!.power.qualcommEdlMode()} />
                <TooltipHost content={<span>Only works on some Qualcomm devices.</span>}>
                    <Icon style={{ verticalAlign: "middle", marginLeft: 4, fontSize: 18 }} iconName={Icons.Info} />
                </TooltipHost>
                <DefaultButton text="Samsung Odin" disabled={!GLOBAL_STATE.adb} onClick={() => GLOBAL_STATE.adb!.power.samsungOdin()} />
                <TooltipHost content={<span>Only works on Samsung devices.</span>}>
                    <Icon style={{ verticalAlign: "middle", marginLeft: 4, fontSize: 18 }} iconName={Icons.Info} />
                </TooltipHost>
            </Stack>
        </Stack>
    );
});

export default PowerPanel;
