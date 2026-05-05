# config system affinity-packet-redistribution

Configure packet redistribution.

## Syntax

```
config system affinity-packet-redistribution
    Description: Configure packet redistribution.
    edit <id>
        set affinity-cpumask {string}
        set interface {string}
        set round-robin [enable|disable]
        set rxqid {integer}
    next
end
```

## Parameters

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| ![Note](https://fortinetweb.s3.amazonaws.com/docs.fortinet.com/v2/resources/0bec1c7c-7948-11f0-9bfd-6af4c3636dc7/images/7b895cb3e7958af7a3221734d69687d4_Icon-Light-Bulb.png "Note") | This command is available for    |
|                                                                                                                                                                                      | model(s): FortiGate 100F,        |
|                                                                                                                                                                                      | FortiGate 101F, FortiGate 121G,  |
|                                                                                                                                                                                      | FortiGate 200F, FortiGate 201F,  |
|                                                                                                                                                                                      | FortiGate 3600E, FortiGate       |
|                                                                                                                                                                                      | 3601E, FortiGate 3700F,          |
|                                                                                                                                                                                      | FortiGate 3701F, FortiGate       |
|                                                                                                                                                                                      | 3960E, FortiGate 40F 3G4G,       |
|                                                                                                                                                                                      | FortiGate 40F, FortiGate 60F,    |
|                                                                                                                                                                                      | FortiGate 61F, FortiGate 70F,    |
|                                                                                                                                                                                      | FortiGate 71F, FortiGate 80F     |
|                                                                                                                                                                                      | DSL, FortiGate 80F-POE,          |
|                                                                                                                                                                                      | FortiGate 80F, FortiGate         |
|                                                                                                                                                                                      | 81F-POE, FortiGate 81F,          |
|                                                                                                                                                                                      | FortiGate 91G, FortiGate-VM64    |
|                                                                                                                                                                                      | Aliyun, FortiGate-VM64 AWS,      |
|                                                                                                                                                                                      | FortiGate-VM64 Azure,            |
|                                                                                                                                                                                      | FortiGate-VM64 GCP,              |
|                                                                                                                                                                                      | FortiGate-VM64 OPC,              |
|                                                                                                                                                                                      | FortiGate-VM64, FortiGateRugged  |
|                                                                                                                                                                                      | 60F 3G4G, FortiGateRugged 60F,   |
|                                                                                                                                                                                      | FortiWiFi 40F 3G4G, FortiWiFi    |
|                                                                                                                                                                                      | 40F, FortiWiFi 60F, FortiWiFi    |
|                                                                                                                                                                                      | 61F, FortiWiFi 80F 2R 3G4G DSL,  |
|                                                                                                                                                                                      | FortiWiFi 80F 2R, FortiWiFi 81F  |
|                                                                                                                                                                                      | 2R 3G4G DSL, FortiWiFi 81F 2R    |
|                                                                                                                                                                                      | 3G4G-POE, FortiWiFi 81F 2R-POE,  |
|                                                                                                                                                                                      | FortiWiFi 81F 2R.                |
|                                                                                                                                                                                      |                                  |
|                                                                                                                                                                                      | It is not available for:         |
|                                                                                                                                                                                      | FortiGate 1000D, FortiGate       |
|                                                                                                                                                                                      | 1000F, FortiGate 1001F,          |
|                                                                                                                                                                                      | FortiGate 1100E, FortiGate       |
|                                                                                                                                                                                      | 1101E, FortiGate 1800F,          |
|                                                                                                                                                                                      | FortiGate 1801F, FortiGate       |
|                                                                                                                                                                                      | 2000E, FortiGate 200E, FortiGate |
|                                                                                                                                                                                      | 201E, FortiGate 2200E, FortiGate |
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
|                                                                                                                                                                                      | 3700D, FortiGate 3980E,          |
|                                                                                                                                                                                      | FortiGate 400E Bypass, FortiGate |
|                                                                                                                                                                                      | 400E, FortiGate 400F, FortiGate  |
|                                                                                                                                                                                      | 401E, FortiGate 401F, FortiGate  |
|                                                                                                                                                                                      | 4200F, FortiGate 4201F,          |
|                                                                                                                                                                                      | FortiGate 4400F, FortiGate       |
|                                                                                                                                                                                      | 4401F, FortiGate 4800F,          |
|                                                                                                                                                                                      | FortiGate 4801F, FortiGate       |
|                                                                                                                                                                                      | 5001E1, FortiGate 5001E,         |
|                                                                                                                                                                                      | FortiGate 500E, FortiGate 501E,  |
|                                                                                                                                                                                      | FortiGate 50G SFP-POE, FortiGate |
|                                                                                                                                                                                      | 600E, FortiGate 600F, FortiGate  |
|                                                                                                                                                                                      | 601E, FortiGate 601F, FortiGate  |
|                                                                                                                                                                                      | 70G, FortiGate 800D, FortiGate   |
|                                                                                                                                                                                      | 80F Bypass, FortiGate 900D,      |
|                                                                                                                                                                                      | FortiGate 901G, FortiGateRugged  |
|                                                                                                                                                                                      | 70F 3G4G, FortiGateRugged 70F,   |
|                                                                                                                                                                                      | FortiWiFi 51G, FortiWiFi 71G.    |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+

