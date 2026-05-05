# config switch-controller dsl policy

DSL policy.

## Syntax

```
config switch-controller dsl policy
    Description: DSL policy.
    edit <name>
        set append_padding [disable|enable]
        set cpe-aele [disable|enable]
        set cpe-aele-mode [ELE_M0|ELE_DS|...]
        set cs {option1}, {option2}, ...
        set ds-bitswap [disable|enable]
        set pause-frame [disable|enable]
        set profile [auto-30a|auto-17a|...]
        set type {option}
        set us-bitswap [disable|enable]
    next
end
```

## Parameters

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| ![Note](https://fortinetweb.s3.amazonaws.com/docs.fortinet.com/v2/resources/b8624cb4-35a5-11f0-a9d0-d2b0d2e22f7d/images/aaf1f4870fd7bd8f0011c4bf3f61a24d_Icon-Light-Bulb.png "Note") | This command is available for    |
|                                                                                                                                                                                      | model(s): FortiGate 40F 3G4G,    |
|                                                                                                                                                                                      | FortiGate 60F, FortiGate 80F     |
|                                                                                                                                                                                      | Bypass, FortiGate 80F-POE,       |
|                                                                                                                                                                                      | FortiGate 80F, FortiGate         |
|                                                                                                                                                                                      | 81F-POE, FortiGate 81F,          |
|                                                                                                                                                                                      | FortiGateRugged 60F 3G4G,        |
|                                                                                                                                                                                      | FortiGateRugged 60F,             |
|                                                                                                                                                                                      | FortiGateRugged 70F 3G4G,        |
|                                                                                                                                                                                      | FortiGateRugged 70F, FortiWiFi   |
|                                                                                                                                                                                      | 81F 2R 3G4G-POE, FortiWiFi 81F   |
|                                                                                                                                                                                      | 2R-POE.                          |
|                                                                                                                                                                                      |                                  |
|                                                                                                                                                                                      | It is not available for:         |
|                                                                                                                                                                                      | FortiGate 1000D, FortiGate       |
|                                                                                                                                                                                      | 1000F, FortiGate 1001F,          |
|                                                                                                                                                                                      | FortiGate 100F, FortiGate 101F,  |
|                                                                                                                                                                                      | FortiGate 1100E, FortiGate       |
|                                                                                                                                                                                      | 1101E, FortiGate 120G, FortiGate |
|                                                                                                                                                                                      | 121G, FortiGate 1800F, FortiGate |
|                                                                                                                                                                                      | 1801F, FortiGate 2000E,          |
|                                                                                                                                                                                      | FortiGate 200E, FortiGate 200F,  |
|                                                                                                                                                                                      | FortiGate 200G, FortiGate 201E,  |
|                                                                                                                                                                                      | FortiGate 201F, FortiGate 201G,  |
|                                                                                                                                                                                      | FortiGate 2200E, FortiGate       |
|                                                                                                                                                                                      | 2201E, FortiGate 2500E,          |
|                                                                                                                                                                                      | FortiGate 2600F, FortiGate       |
|                                                                                                                                                                                      | 2601F, FortiGate 3000D,          |
|                                                                                                                                                                                      | FortiGate 3000F, FortiGate       |
|                                                                                                                                                                                      | 3001F, FortiGate 300E, FortiGate |
|                                                                                                                                                                                      | 301E, FortiGate 3100D, FortiGate |
|                                                                                                                                                                                      | 3200D, FortiGate 3200F,          |
|                                                                                                                                                                                      | FortiGate 3201F, FortiGate       |
|                                                                                                                                                                                      | 3300E, FortiGate 3301E,          |
|                                                                                                                                                                                      | FortiGate 3400E, FortiGate       |
|                                                                                                                                                                                      | 3401E, FortiGate 3500F,          |
|                                                                                                                                                                                      | FortiGate 3501F, FortiGate       |
|                                                                                                                                                                                      | 3600E, FortiGate 3601E,          |
|                                                                                                                                                                                      | FortiGate 3700D, FortiGate       |
|                                                                                                                                                                                      | 3700F, FortiGate 3701F,          |
|                                                                                                                                                                                      | FortiGate 3960E, FortiGate       |
|                                                                                                                                                                                      | 3980E, FortiGate 400E Bypass,    |
|                                                                                                                                                                                      | FortiGate 400E, FortiGate 400F,  |
|                                                                                                                                                                                      | FortiGate 401E, FortiGate 401F,  |
|                                                                                                                                                                                      | FortiGate 40F, FortiGate 4200F,  |
|                                                                                                                                                                                      | FortiGate 4201F, FortiGate       |
|                                                                                                                                                                                      | 4400F, FortiGate 4401F,          |
|                                                                                                                                                                                      | FortiGate 4800F, FortiGate       |
|                                                                                                                                                                                      | 4801F, FortiGate 5001E1,         |
|                                                                                                                                                                                      | FortiGate 5001E, FortiGate 500E, |
|                                                                                                                                                                                      | FortiGate 501E, FortiGate 50G    |
|                                                                                                                                                                                      | 5G, FortiGate 50G DSL, FortiGate |
|                                                                                                                                                                                      | 50G SFP-POE, FortiGate 50G SFP,  |
|                                                                                                                                                                                      | FortiGate 50G, FortiGate 51G,    |
|                                                                                                                                                                                      | FortiGate 600E, FortiGate 600F,  |
|                                                                                                                                                                                      | FortiGate 601E, FortiGate 601F,  |
|                                                                                                                                                                                      | FortiGate 60E DSL, FortiGate     |
|                                                                                                                                                                                      | 60E-POE, FortiGate 60E,          |
|                                                                                                                                                                                      | FortiGate 61E, FortiGate 61F,    |
|                                                                                                                                                                                      | FortiGate 70F, FortiGate 71F,    |
|                                                                                                                                                                                      | FortiGate 800D, FortiGate        |
|                                                                                                                                                                                      | 80E-POE, FortiGate 80E,          |
|                                                                                                                                                                                      | FortiGate 80F DSL, FortiGate     |
|                                                                                                                                                                                      | 81E-POE, FortiGate 81E,          |
|                                                                                                                                                                                      | FortiGate 900D, FortiGate 900G,  |
|                                                                                                                                                                                      | FortiGate 901G, FortiGate 90E,   |
|                                                                                                                                                                                      | FortiGate 90G, FortiGate 91E,    |
|                                                                                                                                                                                      | FortiGate 91G, FortiGate-VM64    |
|                                                                                                                                                                                      | Aliyun, FortiGate-VM64 AWS,      |
|                                                                                                                                                                                      | FortiGate-VM64 Azure,            |
|                                                                                                                                                                                      | FortiGate-VM64 GCP,              |
|                                                                                                                                                                                      | FortiGate-VM64 OPC,              |
|                                                                                                                                                                                      | FortiGate-VM64, FortiWiFi 40F    |
|                                                                                                                                                                                      | 3G4G, FortiWiFi 40F, FortiWiFi   |
|                                                                                                                                                                                      | 50G DSL, FortiWiFi 50G SFP,      |
|                                                                                                                                                                                      | FortiWiFi 50G, FortiWiFi 60E     |
|                                                                                                                                                                                      | DSLJ, FortiWiFi 60E, FortiWiFi   |
|                                                                                                                                                                                      | 60F, FortiWiFi 61E, FortiWiFi    |
|                                                                                                                                                                                      | 61F, FortiWiFi 80F 2R 3G4G DSL,  |
|                                                                                                                                                                                      | FortiWiFi 80F 2R, FortiWiFi 81F  |
|                                                                                                                                                                                      | 2R 3G4G DSL, FortiWiFi 81F 2R.   |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+

