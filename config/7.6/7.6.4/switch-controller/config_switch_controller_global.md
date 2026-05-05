# config switch-controller global

Configure FortiSwitch global settings.

## Syntax

```
config switch-controller global
    Description: Configure FortiSwitch global settings.
    set bounce-quarantined-link [disable|enable]
    config custom-command
        Description: List of custom commands to be pushed to all FortiSwitches in the VDOM.
        edit <command-entry>
            set command-name {string}
        next
    end
    set default-virtual-switch-vlan {string}
    set dhcp-option82-circuit-id {option1}, {option2}, ...
    set dhcp-option82-format [ascii|legacy]
    set dhcp-option82-remote-id {option1}, {option2}, ...
    set dhcp-server-access-list [enable|disable]
    set dhcp-snoop-client-db-exp {integer}
    set dhcp-snoop-client-req [drop-untrusted|forward-untrusted]
    set dhcp-snoop-db-per-port-learn-limit {integer}
    set disable-discovery <name1>, <name2>, ...
    set fips-enforce [disable|enable]
    set firewall-auth-user-hold-period {integer}
    set firmware-provision-on-authorization [enable|disable]
    set https-image-push [enable|disable]
    set log-mac-limit-violations [enable|disable]
    set mac-aging-interval {integer}
    set mac-event-logging [enable|disable]
    set mac-retention-period {integer}
    set mac-violation-timer {integer}
    set quarantine-mode [by-vlan|by-redirect]
    set sn-dns-resolution [enable|disable]
    set switch-on-deauth [no-op|factory-reset]
    set update-user-device {option1}, {option2}, ...
    set vlan-all-mode [all|defined]
    set vlan-identity [description|name]
    set vlan-optimization [prune|configured|...]
end
```

## Parameters

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| ![Note](https://fortinetweb.s3.amazonaws.com/docs.fortinet.com/v2/resources/0bec1c7c-7948-11f0-9bfd-6af4c3636dc7/images/7b895cb3e7958af7a3221734d69687d4_Icon-Light-Bulb.png "Note") | This command is available for    |
|                                                                                                                                                                                      | model(s): FortiGate 1000D,       |
|                                                                                                                                                                                      | FortiGate 1000F, FortiGate       |
|                                                                                                                                                                                      | 1001F, FortiGate 100F, FortiGate |
|                                                                                                                                                                                      | 101F, FortiGate 1100E, FortiGate |
|                                                                                                                                                                                      | 1101E, FortiGate 121G, FortiGate |
|                                                                                                                                                                                      | 1800F, FortiGate 1801F,          |
|                                                                                                                                                                                      | FortiGate 2000E, FortiGate 200E, |
|                                                                                                                                                                                      | FortiGate 200F, FortiGate 201E,  |
|                                                                                                                                                                                      | FortiGate 201F, FortiGate 2200E, |
|                                                                                                                                                                                      | FortiGate 2201E, FortiGate       |
|                                                                                                                                                                                      | 2500E, FortiGate 2600F,          |
|                                                                                                                                                                                      | FortiGate 2601F, FortiGate       |
|                                                                                                                                                                                      | 3000D, FortiGate 3000F,          |
|                                                                                                                                                                                      | FortiGate 3001F, FortiGate 300E, |
|                                                                                                                                                                                      | FortiGate 301E, FortiGate 3100D, |
|                                                                                                                                                                                      | FortiGate 3200D, FortiGate       |
|                                                                                                                                                                                      | 3200F, FortiGate 3201F,          |
|                                                                                                                                                                                      | FortiGate 3300E, FortiGate       |
|                                                                                                                                                                                      | 3301E, FortiGate 3400E,          |
|                                                                                                                                                                                      | FortiGate 3401E, FortiGate       |
|                                                                                                                                                                                      | 3500F, FortiGate 3501F,          |
|                                                                                                                                                                                      | FortiGate 3600E, FortiGate       |
|                                                                                                                                                                                      | 3601E, FortiGate 3700D,          |
|                                                                                                                                                                                      | FortiGate 3700F, FortiGate       |
|                                                                                                                                                                                      | 3701F, FortiGate 3960E,          |
|                                                                                                                                                                                      | FortiGate 3980E, FortiGate 400E  |
|                                                                                                                                                                                      | Bypass, FortiGate 400E,          |
|                                                                                                                                                                                      | FortiGate 400F, FortiGate 401E,  |
|                                                                                                                                                                                      | FortiGate 401F, FortiGate 40F    |
|                                                                                                                                                                                      | 3G4G, FortiGate 40F, FortiGate   |
|                                                                                                                                                                                      | 4200F, FortiGate 4201F,          |
|                                                                                                                                                                                      | FortiGate 4400F, FortiGate       |
|                                                                                                                                                                                      | 4401F, FortiGate 4800F,          |
|                                                                                                                                                                                      | FortiGate 4801F, FortiGate 500E, |
|                                                                                                                                                                                      | FortiGate 501E, FortiGate 50G    |
|                                                                                                                                                                                      | SFP-POE, FortiGate 600E,         |
|                                                                                                                                                                                      | FortiGate 600F, FortiGate 601E,  |
|                                                                                                                                                                                      | FortiGate 601F, FortiGate 60F,   |
|                                                                                                                                                                                      | FortiGate 61F, FortiGate 70F,    |
|                                                                                                                                                                                      | FortiGate 70G, FortiGate 71F,    |
|                                                                                                                                                                                      | FortiGate 800D, FortiGate 80F    |
|                                                                                                                                                                                      | Bypass, FortiGate 80F DSL,       |
|                                                                                                                                                                                      | FortiGate 80F-POE, FortiGate     |
|                                                                                                                                                                                      | 80F, FortiGate 81F-POE,          |
|                                                                                                                                                                                      | FortiGate 81F, FortiGate 900D,   |
|                                                                                                                                                                                      | FortiGate 901G, FortiGate 91G,   |
|                                                                                                                                                                                      | FortiGate-VM64 Aliyun,           |
|                                                                                                                                                                                      | FortiGate-VM64 AWS,              |
|                                                                                                                                                                                      | FortiGate-VM64 Azure,            |
|                                                                                                                                                                                      | FortiGate-VM64 GCP,              |
|                                                                                                                                                                                      | FortiGate-VM64 OPC,              |
|                                                                                                                                                                                      | FortiGate-VM64, FortiGateRugged  |
|                                                                                                                                                                                      | 60F 3G4G, FortiGateRugged 60F,   |
|                                                                                                                                                                                      | FortiGateRugged 70F 3G4G,        |
|                                                                                                                                                                                      | FortiGateRugged 70F, FortiWiFi   |
|                                                                                                                                                                                      | 40F 3G4G, FortiWiFi 40F,         |
|                                                                                                                                                                                      | FortiWiFi 51G, FortiWiFi 60F,    |
|                                                                                                                                                                                      | FortiWiFi 61F, FortiWiFi 71G,    |
|                                                                                                                                                                                      | FortiWiFi 80F 2R 3G4G DSL,       |
|                                                                                                                                                                                      | FortiWiFi 80F 2R, FortiWiFi 81F  |
|                                                                                                                                                                                      | 2R 3G4G DSL, FortiWiFi 81F 2R    |
|                                                                                                                                                                                      | 3G4G-POE, FortiWiFi 81F 2R-POE,  |
|                                                                                                                                                                                      | FortiWiFi 81F 2R.                |
|                                                                                                                                                                                      |                                  |
|                                                                                                                                                                                      | It is not available for:         |
|                                                                                                                                                                                      | FortiGate 5001E1, FortiGate      |
|                                                                                                                                                                                      | 5001E.                           |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+

