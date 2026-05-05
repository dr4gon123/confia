# config monitoring np6-ipsec-engine

Configure NP6 IPsec engine status monitoring.

## Syntax

```
config monitoring np6-ipsec-engine
    Description: Configure NP6 IPsec engine status monitoring.
    set interval {integer}
    set status [enable|disable]
    set threshold {user}
end
```

## Parameters

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| ![Note](https://fortinetweb.s3.amazonaws.com/docs.fortinet.com/v2/resources/cb8d6b09-b8b3-11ef-9411-ae1fcf29f169/images/f34e972408e37c744b982ab57730df2f_Icon-Light-Bulb.png "Note") | This command is available for    |
|                                                                                                                                                                                      | model(s): FortiGate 1000D,       |
|                                                                                                                                                                                      | FortiGate 1100E, FortiGate       |
|                                                                                                                                                                                      | 1101E, FortiGate 2000E,          |
|                                                                                                                                                                                      | FortiGate 2200E, FortiGate       |
|                                                                                                                                                                                      | 2201E, FortiGate 2500E,          |
|                                                                                                                                                                                      | FortiGate 3000D, FortiGate 300E, |
|                                                                                                                                                                                      | FortiGate 301E, FortiGate 3100D, |
|                                                                                                                                                                                      | FortiGate 3200D, FortiGate       |
|                                                                                                                                                                                      | 3300E, FortiGate 3301E,          |
|                                                                                                                                                                                      | FortiGate 3400E, FortiGate       |
|                                                                                                                                                                                      | 3401E, FortiGate 3600E,          |
|                                                                                                                                                                                      | FortiGate 3601E, FortiGate       |
|                                                                                                                                                                                      | 3700D, FortiGate 3960E,          |
|                                                                                                                                                                                      | FortiGate 3980E, FortiGate 400E  |
|                                                                                                                                                                                      | Bypass, FortiGate 400E,          |
|                                                                                                                                                                                      | FortiGate 401E, FortiGate        |
|                                                                                                                                                                                      | 5001E1, FortiGate 5001E,         |
|                                                                                                                                                                                      | FortiGate 500E, FortiGate 501E,  |
|                                                                                                                                                                                      | FortiGate 600E, FortiGate 601E,  |
|                                                                                                                                                                                      | FortiGate 800D, FortiGate 900D.  |
|                                                                                                                                                                                      |                                  |
|                                                                                                                                                                                      | It is not available for:         |
|                                                                                                                                                                                      | FortiGate 1000F, FortiGate       |
|                                                                                                                                                                                      | 1001F, FortiGate 100F, FortiGate |
|                                                                                                                                                                                      | 101F, FortiGate 120G, FortiGate  |
|                                                                                                                                                                                      | 121G, FortiGate 140E-POE,        |
|                                                                                                                                                                                      | FortiGate 140E, FortiGate 1800F, |
|                                                                                                                                                                                      | FortiGate 1801F, FortiGate 200E, |
|                                                                                                                                                                                      | FortiGate 200F, FortiGate 201E,  |
|                                                                                                                                                                                      | FortiGate 201F, FortiGate 2600F, |
|                                                                                                                                                                                      | FortiGate 2601F, FortiGate       |
|                                                                                                                                                                                      | 3000F, FortiGate 3001F,          |
|                                                                                                                                                                                      | FortiGate 3200F, FortiGate       |
|                                                                                                                                                                                      | 3201F, FortiGate 3500F,          |
|                                                                                                                                                                                      | FortiGate 3501F, FortiGate       |
|                                                                                                                                                                                      | 3700F, FortiGate 3701F,          |
|                                                                                                                                                                                      | FortiGate 400F, FortiGate 401F,  |
|                                                                                                                                                                                      | FortiGate 4200F, FortiGate       |
|                                                                                                                                                                                      | 4201F, FortiGate 4400F,          |
|                                                                                                                                                                                      | FortiGate 4401F, FortiGate 600F, |
|                                                                                                                                                                                      | FortiGate 601F, FortiGate 60E    |
|                                                                                                                                                                                      | DSLJ, FortiGate 60E DSL,         |
|                                                                                                                                                                                      | FortiGate 60E-POE, FortiGate     |
|                                                                                                                                                                                      | 60E, FortiGate 61E, FortiGate    |
|                                                                                                                                                                                      | 80E-POE, FortiGate 80E,          |
|                                                                                                                                                                                      | FortiGate 80F DSL, FortiGate     |
|                                                                                                                                                                                      | 81E-POE, FortiGate 81E,          |
|                                                                                                                                                                                      | FortiGate 900G, FortiGate 901G,  |
|                                                                                                                                                                                      | FortiGate 90E, FortiGate 90G,    |
|                                                                                                                                                                                      | FortiGate 91E, FortiGate 91G,    |
|                                                                                                                                                                                      | FortiGate-VM for Aliyun,         |
|                                                                                                                                                                                      | FortiGate-VM for AWS,            |
|                                                                                                                                                                                      | FortiGate-VM for Azure,          |
|                                                                                                                                                                                      | FortiGate-VM for GCP,            |
|                                                                                                                                                                                      | FortiGate-VM for OPC,            |
|                                                                                                                                                                                      | FortiGate-VM64, FortiGateRugged  |
|                                                                                                                                                                                      | 70F, FortiWiFi 60E DSLJ,         |
|                                                                                                                                                                                      | FortiWiFi 60E DSL, FortiWiFi     |
|                                                                                                                                                                                      | 60E, FortiWiFi 61E, FortiWiFi    |
|                                                                                                                                                                                      | 80F 2R 3G4G DSL, FortiWiFi 81F   |
|                                                                                                                                                                                      | 2R 3G4G DSL.                     |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+

