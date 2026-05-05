# config gtp message-filter-v0v1

Message filter for GTPv0/v1 messages.

## Syntax

```
config gtp message-filter-v0v1
    Description: Message filter for GTPv0/v1 messages.
    edit <name>
        set create-mbms [allow|deny]
        set create-pdp [allow|deny]
        set data-record [allow|deny]
        set delete-aa-pdp [allow|deny]
        set delete-mbms [allow|deny]
        set delete-pdp [allow|deny]
        set echo [allow|deny]
        set end-marker [allow|deny]
        set error-indication [allow|deny]
        set failure-report [allow|deny]
        set fwd-relocation [allow|deny]
        set fwd-srns-context [allow|deny]
        set gtp-pdu [allow|deny]
        set identification [allow|deny]
        set mbms-de-registration [allow|deny]
        set mbms-notification [allow|deny]
        set mbms-registration [allow|deny]
        set mbms-session-start [allow|deny]
        set mbms-session-stop [allow|deny]
        set mbms-session-update [allow|deny]
        set ms-info-change-notif [allow|deny]
        set node-alive [allow|deny]
        set note-ms-present [allow|deny]
        set pdu-notification [allow|deny]
        set ran-info [allow|deny]
        set redirection [allow|deny]
        set relocation-cancel [allow|deny]
        set send-route [allow|deny]
        set sgsn-context [allow|deny]
        set support-extension [allow|deny]
        set ue-registration-query [allow|deny]
        set unknown-message [allow|deny]
        set unknown-message-white-list <id1>, <id2>, ...
        set update-mbms [allow|deny]
        set update-pdp [allow|deny]
        set v0-create-aa-pdp--v1-init-pdp-ctx [allow|deny]
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

