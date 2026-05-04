# config system modem

Configure MODEM.

## Syntax

```
config system modem
    Description: Configure MODEM.
    set action [dial|stop|...]
    set altmode [enable|disable]
    set authtype1 {option1}, {option2}, ...
    set authtype2 {option1}, {option2}, ...
    set authtype3 {option1}, {option2}, ...
    set auto-dial [enable|disable]
    set connect-timeout {integer}
    set dial-cmd1 {string}
    set dial-cmd2 {string}
    set dial-cmd3 {string}
    set dial-on-demand [enable|disable]
    set distance {integer}
    set dont-send-CR1 [enable|disable]
    set dont-send-CR2 [enable|disable]
    set dont-send-CR3 [enable|disable]
    set extra-init1 {string}
    set extra-init2 {string}
    set extra-init3 {string}
    set holddown-timer {integer}
    set idle-timer {integer}
    set interface {string}
    set lockdown-lac {string}
    set mode [standalone|redundant]
    set network-init {string}
    set passwd1 {password}
    set passwd2 {password}
    set passwd3 {password}
    set peer-modem1 [generic|actiontec|...]
    set peer-modem2 [generic|actiontec|...]
    set peer-modem3 [generic|actiontec|...]
    set phone1 {string}
    set phone2 {string}
    set phone3 {string}
    set pin-init {string}
    set ppp-echo-request1 [enable|disable]
    set ppp-echo-request2 [enable|disable]
    set ppp-echo-request3 [enable|disable]
    set priority {integer}
    set redial [none|1|...]
    set reset {integer}
    set status [enable|disable]
    set traffic-check [enable|disable]
    set username1 {string}
    set username2 {string}
    set username3 {string}
    set wireless-port {integer}
end
```

## Parameters

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| ![Note](https://fortinetweb.s3.amazonaws.com/docs.fortinet.com/v2/resources/9193cdf6-ef51-11ed-8e6d-fa163e15d75b/images/aa904d36284e6def234b2cfec19747a8_Icon-Light-Bulb.png "Note") | This command is available for    |
|                                                                                                                                                                                      | model(s): FortiGate 1000D,       |
|                                                                                                                                                                                      | FortiGate 100F, FortiGate 1100E, |
|                                                                                                                                                                                      | FortiGate 1101E, FortiGate       |
|                                                                                                                                                                                      | 140E-POE, FortiGate 140E,        |
|                                                                                                                                                                                      | FortiGate 1800F, FortiGate       |
|                                                                                                                                                                                      | 1801F, FortiGate 2000E,          |
|                                                                                                                                                                                      | FortiGate 200E, FortiGate 200F,  |
|                                                                                                                                                                                      | FortiGate 201E, FortiGate 201F,  |
|                                                                                                                                                                                      | FortiGate 2200E, FortiGate       |
|                                                                                                                                                                                      | 2201E, FortiGate 2500E,          |
|                                                                                                                                                                                      | FortiGate 2600F, FortiGate       |
|                                                                                                                                                                                      | 2601F, FortiGate 3000D,          |
|                                                                                                                                                                                      | FortiGate 300E, FortiGate 301E,  |
|                                                                                                                                                                                      | FortiGate 3100D, FortiGate       |
|                                                                                                                                                                                      | 3200D, FortiGate 3300E,          |
|                                                                                                                                                                                      | FortiGate 3301E, FortiGate       |
|                                                                                                                                                                                      | 3400E, FortiGate 3401E,          |
|                                                                                                                                                                                      | FortiGate 3500F, FortiGate       |
|                                                                                                                                                                                      | 3501F, FortiGate 3600E,          |
|                                                                                                                                                                                      | FortiGate 3601E, FortiGate       |
|                                                                                                                                                                                      | 3700D, FortiGate 3960E,          |
|                                                                                                                                                                                      | FortiGate 3980E, FortiGate 400E  |
|                                                                                                                                                                                      | Bypass, FortiGate 400E,          |
|                                                                                                                                                                                      | FortiGate 400F, FortiGate 401E,  |
|                                                                                                                                                                                      | FortiGate 401F, FortiGate 40F    |
|                                                                                                                                                                                      | 3G4G, FortiGate 40F, FortiGate   |
|                                                                                                                                                                                      | 4200F, FortiGate 4201F,          |
|                                                                                                                                                                                      | FortiGate 4400F, FortiGate       |
|                                                                                                                                                                                      | 4401F, FortiGate 5001E1,         |
|                                                                                                                                                                                      | FortiGate 5001E, FortiGate 500E, |
|                                                                                                                                                                                      | FortiGate 501E, FortiGate 600E,  |
|                                                                                                                                                                                      | FortiGate 600F, FortiGate 601E,  |
|                                                                                                                                                                                      | FortiGate 601F, FortiGate 60E    |
|                                                                                                                                                                                      | DSLJ, FortiGate 60E DSL,         |
|                                                                                                                                                                                      | FortiGate 60E-POE, FortiGate     |
|                                                                                                                                                                                      | 60E, FortiGate 60F, FortiGate    |
|                                                                                                                                                                                      | 61E, FortiGate 61F, FortiGate    |
|                                                                                                                                                                                      | 70F, FortiGate 71F, FortiGate    |
|                                                                                                                                                                                      | 800D, FortiGate 80E, FortiGate   |
|                                                                                                                                                                                      | 80F Bypass, FortiGate 80F-POE,   |
|                                                                                                                                                                                      | FortiGate 80F, FortiGate         |
|                                                                                                                                                                                      | 81E-POE, FortiGate 81E,          |
|                                                                                                                                                                                      | FortiGate 81F-POE, FortiGate     |
|                                                                                                                                                                                      | 81F, FortiGate 900D, FortiGate   |
|                                                                                                                                                                                      | 90E, FortiGate 91E,              |
|                                                                                                                                                                                      | FortiGateRugged 60F 3G4G,        |
|                                                                                                                                                                                      | FortiGateRugged 60F, FortiWiFi   |
|                                                                                                                                                                                      | 40F 3G4G, FortiWiFi 40F,         |
|                                                                                                                                                                                      | FortiWiFi 60E DSLJ, FortiWiFi    |
|                                                                                                                                                                                      | 60E DSL, FortiWiFi 60E,          |
|                                                                                                                                                                                      | FortiWiFi 60F, FortiWiFi 61E,    |
|                                                                                                                                                                                      | FortiWiFi 61F, FortiWiFi 80F 2R, |
|                                                                                                                                                                                      | FortiWiFi 81F 2R 3G4G-POE,       |
|                                                                                                                                                                                      | FortiWiFi 81F 2R-POE, FortiWiFi  |
|                                                                                                                                                                                      | 81F 2R.                          |
|                                                                                                                                                                                      |                                  |
|                                                                                                                                                                                      | It is not available for:         |
|                                                                                                                                                                                      | FortiGate VM64.                  |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+

