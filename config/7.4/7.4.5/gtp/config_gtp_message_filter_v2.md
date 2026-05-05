# config gtp message-filter-v2

Message filter for GTPv2 messages.

## Syntax

```
config gtp message-filter-v2
    Description: Message filter for GTPv2 messages.
    edit <name>
        set alert-mme-notif-ack [allow|deny]
        set bearer-resource-cmd-fail [allow|deny]
        set change-notification [allow|deny]
        set configuration-transfer-tunnel [allow|deny]
        set context-req-res-ack [allow|deny]
        set create-bearer [allow|deny]
        set create-forwarding-tunnel-req-resp [allow|deny]
        set create-indirect-forwarding-tunnel-req-resp [allow|deny]
        set create-session [allow|deny]
        set cs-paging [allow|deny]
        set delete-bearer-cmd-fail [allow|deny]
        set delete-bearer-req-resp [allow|deny]
        set delete-indirect-forwarding-tunnel-req-resp [allow|deny]
        set delete-pdn-connection-set [allow|deny]
        set delete-session [allow|deny]
        set detach-notif-ack [allow|deny]
        set dlink-data-notif-ack [allow|deny]
        set dlink-notif-failure [allow|deny]
        set echo [allow|deny]
        set forward-access-notif-ack [allow|deny]
        set forward-relocation-cmp-notif-ack [allow|deny]
        set forward-relocation-req-res [allow|deny]
        set identification-req-resp [allow|deny]
        set isr-status [allow|deny]
        set mbms-session-start-req-resp [allow|deny]
        set mbms-session-stop-req-resp [allow|deny]
        set mbms-session-update-req-resp [allow|deny]
        set modify-access-req-resp [allow|deny]
        set modify-bearer-cmd-fail [allow|deny]
        set modify-bearer-req-resp [allow|deny]
        set pgw-dlink-notif-ack [allow|deny]
        set pgw-restart-notif-ack [allow|deny]
        set ran-info-relay [allow|deny]
        set release-access-bearer-req-resp [allow|deny]
        set relocation-cancel-req-resp [allow|deny]
        set remote-ue-report-notif-ack [allow|deny]
        set reserved-for-earlier-version [allow|deny]
        set resume [allow|deny]
        set stop-paging-indication [allow|deny]
        set suspend [allow|deny]
        set trace-session [allow|deny]
        set ue-activity-notif-ack [allow|deny]
        set ue-registration-query-req-resp [allow|deny]
        set unknown-message [allow|deny]
        set unknown-message-white-list <id1>, <id2>, ...
        set update-bearer [allow|deny]
        set update-pdn-connection-set [allow|deny]
        set version-not-support [allow|deny]
    next
end
```

## Parameters

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| ![Note](https://fortinetweb.s3.amazonaws.com/docs.fortinet.com/v2/resources/81ddec8e-6f95-11ef-8355-fa163e15d75b/images/9911fa13f24384a6af4ace702c05aa7d_Icon-Light-Bulb.png "Note") | This command is available for    |
|                                                                                                                                                                                      | model(s): FortiGate 3000D,       |
|                                                                                                                                                                                      | FortiGate 3500F, FortiGate       |
|                                                                                                                                                                                      | 3700D, FortiGate 3980E,          |
|                                                                                                                                                                                      | FortiGate 4400F.                 |
|                                                                                                                                                                                      |                                  |
|                                                                                                                                                                                      | It is not available for:         |
|                                                                                                                                                                                      | FortiGate 1000D, FortiGate       |
|                                                                                                                                                                                      | 1000F, FortiGate 1001F,          |
|                                                                                                                                                                                      | FortiGate 100F, FortiGate 101F,  |
|                                                                                                                                                                                      | FortiGate 1100E, FortiGate       |
|                                                                                                                                                                                      | 1101E, FortiGate 120G, FortiGate |
|                                                                                                                                                                                      | 121G, FortiGate 140E-POE,        |
|                                                                                                                                                                                      | FortiGate 140E, FortiGate 1800F, |
|                                                                                                                                                                                      | FortiGate 1801F, FortiGate       |
|                                                                                                                                                                                      | 2000E, FortiGate 200E, FortiGate |
|                                                                                                                                                                                      | 200F, FortiGate 201E, FortiGate  |
|                                                                                                                                                                                      | 201F, FortiGate 2200E, FortiGate |
|                                                                                                                                                                                      | 2201E, FortiGate 2500E,          |
|                                                                                                                                                                                      | FortiGate 2600F, FortiGate       |
|                                                                                                                                                                                      | 2601F, FortiGate 3000F,          |
|                                                                                                                                                                                      | FortiGate 3001F, FortiGate 300E, |
|                                                                                                                                                                                      | FortiGate 301E, FortiGate 3100D, |
|                                                                                                                                                                                      | FortiGate 3200D, FortiGate       |
|                                                                                                                                                                                      | 3200F, FortiGate 3201F,          |
|                                                                                                                                                                                      | FortiGate 3300E, FortiGate       |
|                                                                                                                                                                                      | 3301E, FortiGate 3400E,          |
|                                                                                                                                                                                      | FortiGate 3401E, FortiGate       |
|                                                                                                                                                                                      | 3501F, FortiGate 3600E,          |
|                                                                                                                                                                                      | FortiGate 3601E, FortiGate       |
|                                                                                                                                                                                      | 3700F, FortiGate 3701F,          |
|                                                                                                                                                                                      | FortiGate 3960E, FortiGate 400E  |
|                                                                                                                                                                                      | Bypass, FortiGate 400E,          |
|                                                                                                                                                                                      | FortiGate 400F, FortiGate 401E,  |
|                                                                                                                                                                                      | FortiGate 401F, FortiGate 40F    |
|                                                                                                                                                                                      | 3G4G, FortiGate 40F, FortiGate   |
|                                                                                                                                                                                      | 4200F, FortiGate 4201F,          |
|                                                                                                                                                                                      | FortiGate 4401F, FortiGate       |
|                                                                                                                                                                                      | 5001E1, FortiGate 5001E,         |
|                                                                                                                                                                                      | FortiGate 500E, FortiGate 501E,  |
|                                                                                                                                                                                      | FortiGate 600E, FortiGate 600F,  |
|                                                                                                                                                                                      | FortiGate 601E, FortiGate 601F,  |
|                                                                                                                                                                                      | FortiGate 60E DSLJ, FortiGate    |
|                                                                                                                                                                                      | 60E DSL, FortiGate 60E-POE,      |
|                                                                                                                                                                                      | FortiGate 60E, FortiGate 60F,    |
|                                                                                                                                                                                      | FortiGate 61E, FortiGate 61F,    |
|                                                                                                                                                                                      | FortiGate 70F, FortiGate 71F,    |
|                                                                                                                                                                                      | FortiGate 800D, FortiGate        |
|                                                                                                                                                                                      | 80E-POE, FortiGate 80E,          |
|                                                                                                                                                                                      | FortiGate 80F Bypass, FortiGate  |
|                                                                                                                                                                                      | 80F DSL, FortiGate 80F-POE,      |
|                                                                                                                                                                                      | FortiGate 80F, FortiGate         |
|                                                                                                                                                                                      | 81E-POE, FortiGate 81E,          |
|                                                                                                                                                                                      | FortiGate 81F-POE, FortiGate     |
|                                                                                                                                                                                      | 81F, FortiGate 900D, FortiGate   |
|                                                                                                                                                                                      | 900G, FortiGate 901G, FortiGate  |
|                                                                                                                                                                                      | 90G, FortiGate 91E, FortiGate    |
|                                                                                                                                                                                      | 91G, FortiGate VM for AWS,       |
|                                                                                                                                                                                      | FortiGate VM for Azure,          |
|                                                                                                                                                                                      | FortiGate VM64, FortiGateRugged  |
|                                                                                                                                                                                      | 60F 3G4G, FortiGateRugged 60F,   |
|                                                                                                                                                                                      | FortiGateRugged 70F 3G4G,        |
|                                                                                                                                                                                      | FortiGateRugged 70F, FortiWiFi   |
|                                                                                                                                                                                      | 40F 3G4G, FortiWiFi 40F,         |
|                                                                                                                                                                                      | FortiWiFi 60E DSLJ, FortiWiFi    |
|                                                                                                                                                                                      | 60E DSL, FortiWiFi 60E,          |
|                                                                                                                                                                                      | FortiWiFi 60F, FortiWiFi 61E,    |
|                                                                                                                                                                                      | FortiWiFi 61F, FortiWiFi 80F 2R  |
|                                                                                                                                                                                      | 3G4G DSL, FortiWiFi 80F 2R,      |
|                                                                                                                                                                                      | FortiWiFi 81F 2R 3G4G DSL,       |
|                                                                                                                                                                                      | FortiWiFi 81F 2R 3G4G-POE,       |
|                                                                                                                                                                                      | FortiWiFi 81F 2R-POE, FortiWiFi  |
|                                                                                                                                                                                      | 81F 2R.                          |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+

