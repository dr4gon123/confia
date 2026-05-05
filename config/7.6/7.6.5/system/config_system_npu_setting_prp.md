# config system npu-setting prp

Configure NPU PRP attributes.

## Syntax

```
config system npu-setting prp
    Description: Configure NPU PRP attributes.
    set prp-port-in <interface-name1>, <interface-name2>, ...
    set prp-port-out <interface-name1>, <interface-name2>, ...
end
```

## Parameters

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| ![Note](https://fortinetweb.s3.amazonaws.com/docs.fortinet.com/v2/resources/7a17cdfc-d525-11f0-8b43-d2943efe5b2f/images/15d225d530850f7411878add6e6bec4c_Icon-Light-Bulb.png "Note") | This command is available for    |
|                                                                                                                                                                                      | model(s): FortiGate 100F,        |
|                                                                                                                                                                                      | FortiGate 101F, FortiGate 60F,   |
|                                                                                                                                                                                      | FortiGate 61F, FortiGate 70F,    |
|                                                                                                                                                                                      | FortiGate 71F, FortiGateRugged   |
|                                                                                                                                                                                      | 60F 3G4G, FortiGateRugged 60F,   |
|                                                                                                                                                                                      | FortiGateRugged 70F 3G4G,        |
|                                                                                                                                                                                      | FortiGateRugged 70F, FortiWiFi   |
|                                                                                                                                                                                      | 60F, FortiWiFi 61F.              |
|                                                                                                                                                                                      |                                  |
|                                                                                                                                                                                      | It is not available for:         |
|                                                                                                                                                                                      | FortiGate 1000D, FortiGate       |
|                                                                                                                                                                                      | 1000F, FortiGate 1001F,          |
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
|                                                                                                                                                                                      | FortiGate 40F 3G4G, FortiGate    |
|                                                                                                                                                                                      | 40F, FortiGate 4200F, FortiGate  |
|                                                                                                                                                                                      | 4201F, FortiGate 4400F,          |
|                                                                                                                                                                                      | FortiGate 4401F, FortiGate       |
|                                                                                                                                                                                      | 5001E1, FortiGate 5001E,         |
|                                                                                                                                                                                      | FortiGate 500E, FortiGate 501E,  |
|                                                                                                                                                                                      | FortiGate 50G 5G, FortiGate 50G  |
|                                                                                                                                                                                      | DSL, FortiGate 50G SFP-POE,      |
|                                                                                                                                                                                      | FortiGate 50G SFP, FortiGate     |
|                                                                                                                                                                                      | 50G, FortiGate 51G 5G, FortiGate |
|                                                                                                                                                                                      | 51G SFP-POE, FortiGate 51G,      |
|                                                                                                                                                                                      | FortiGate 600E, FortiGate 600F,  |
|                                                                                                                                                                                      | FortiGate 601E, FortiGate 601F,  |
|                                                                                                                                                                                      | FortiGate 70G-POE, FortiGate     |
|                                                                                                                                                                                      | 70G, FortiGate 71G-POE,          |
|                                                                                                                                                                                      | FortiGate 71G, FortiGate 800D,   |
|                                                                                                                                                                                      | FortiGate 80F Bypass, FortiGate  |
|                                                                                                                                                                                      | 80F DSL, FortiGate 80F-POE,      |
|                                                                                                                                                                                      | FortiGate 80F, FortiGate         |
|                                                                                                                                                                                      | 81F-POE, FortiGate 81F,          |
|                                                                                                                                                                                      | FortiGate 900D, FortiGate 900G,  |
|                                                                                                                                                                                      | FortiGate 901G, FortiGate 90G,   |
|                                                                                                                                                                                      | FortiGate 91G, FortiGate-VM64    |
|                                                                                                                                                                                      | Aliyun, FortiGate-VM64 AWS,      |
|                                                                                                                                                                                      | FortiGate-VM64 Azure,            |
|                                                                                                                                                                                      | FortiGate-VM64 GCP,              |
|                                                                                                                                                                                      | FortiGate-VM64 OPC,              |
|                                                                                                                                                                                      | FortiGate-VM64, FortiGateRugged  |
|                                                                                                                                                                                      | 50G 5G, FortiGateRugged 70G 5G   |
|                                                                                                                                                                                      | Dual, FortiWiFi 40F 3G4G,        |
|                                                                                                                                                                                      | FortiWiFi 40F, FortiWiFi 50G 5G, |
|                                                                                                                                                                                      | FortiWiFi 50G DSL, FortiWiFi 50G |
|                                                                                                                                                                                      | SFP, FortiWiFi 50G, FortiWiFi    |
|                                                                                                                                                                                      | 51G, FortiWiFi 70G, FortiWiFi    |
|                                                                                                                                                                                      | 80F 2R 3G4G DSL, FortiWiFi 80F   |
|                                                                                                                                                                                      | 2R, FortiWiFi 81F 2R 3G4G DSL,   |
|                                                                                                                                                                                      | FortiWiFi 81F 2R 3G4G-POE,       |
|                                                                                                                                                                                      | FortiWiFi 81F 2R-POE, FortiWiFi  |
|                                                                                                                                                                                      | 81F 2R.                          |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+

