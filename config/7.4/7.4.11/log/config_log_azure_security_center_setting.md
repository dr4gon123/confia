# config log azure-security-center setting

Settings for Azure Security Center.

## Syntax

```
config log azure-security-center setting
    Description: Settings for Azure Security Center.
    set appliance-id {string}
    config custom-field-name
        Description: Custom field name for CEF format logging.
        edit <id>
            set custom {string}
            set name {string}
        next
    end
    set eventhub-name {string}
    set policy-name {string}
    set policy-saskey {string}
    set servicebus-namespace {string}
    set status [enable|disable]
end
```

## Parameters

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| ![Note](https://fortinetweb.s3.amazonaws.com/docs.fortinet.com/v2/resources/32d37b40-faf1-11f0-8b43-d2943efe5b2f/images/3c3349b31f9b47d5c13e2951bc4230a2_Icon-Light-Bulb.png "Note") | This command is available for    |
|                                                                                                                                                                                      | model(s): FortiGate-VM64 Azure.  |
|                                                                                                                                                                                      |                                  |
|                                                                                                                                                                                      | It is not available for:         |
|                                                                                                                                                                                      | FortiGate 1000D, FortiGate       |
|                                                                                                                                                                                      | 1000F, FortiGate 1001F,          |
|                                                                                                                                                                                      | FortiGate 100F, FortiGate 101F   |
|                                                                                                                                                                                      | Gen2, FortiGate 1100E, FortiGate |
|                                                                                                                                                                                      | 1101E, FortiGate 120G, FortiGate |
|                                                                                                                                                                                      | 121G, FortiGate 140E-POE,        |
|                                                                                                                                                                                      | FortiGate 140E, FortiGate 1800F, |
|                                                                                                                                                                                      | FortiGate 1801F, FortiGate       |
|                                                                                                                                                                                      | 2000E, FortiGate 200E, FortiGate |
|                                                                                                                                                                                      | 200F, FortiGate 200G, FortiGate  |
|                                                                                                                                                                                      | 201E, FortiGate 201F, FortiGate  |
|                                                                                                                                                                                      | 201G, FortiGate 2200E, FortiGate |
|                                                                                                                                                                                      | 2201E, FortiGate 2500E,          |
|                                                                                                                                                                                      | FortiGate 2600F, FortiGate       |
|                                                                                                                                                                                      | 2601F, FortiGate 3000D,          |
|                                                                                                                                                                                      | FortiGate 3000F, FortiGate       |
|                                                                                                                                                                                      | 3001F, FortiGate 300E, FortiGate |
|                                                                                                                                                                                      | 301E, FortiGate 30G, FortiGate   |
|                                                                                                                                                                                      | 3100D, FortiGate 31G, FortiGate  |
|                                                                                                                                                                                      | 3200D, FortiGate 3200F,          |
|                                                                                                                                                                                      | FortiGate 3201F Gen2, FortiGate  |
|                                                                                                                                                                                      | 3300E, FortiGate 3301E,          |
|                                                                                                                                                                                      | FortiGate 3400E, FortiGate       |
|                                                                                                                                                                                      | 3401E, FortiGate 3500F Gen2,     |
|                                                                                                                                                                                      | FortiGate 3501F Gen2, FortiGate  |
|                                                                                                                                                                                      | 3600E, FortiGate 3601E,          |
|                                                                                                                                                                                      | FortiGate 3700D, FortiGate       |
|                                                                                                                                                                                      | 3700F, FortiGate 3701F,          |
|                                                                                                                                                                                      | FortiGate 3960E, FortiGate       |
|                                                                                                                                                                                      | 3980E, FortiGate 400E Bypass,    |
|                                                                                                                                                                                      | FortiGate 400E, FortiGate 400F,  |
|                                                                                                                                                                                      | FortiGate 401E, FortiGate 401F,  |
|                                                                                                                                                                                      | FortiGate 40F 3G4G, FortiGate    |
|                                                                                                                                                                                      | 40F, FortiGate 4200F, FortiGate  |
|                                                                                                                                                                                      | 4201F Gen2, FortiGate 4400F,     |
|                                                                                                                                                                                      | FortiGate 4401F Gen2, FortiGate  |
|                                                                                                                                                                                      | 4800F, FortiGate 4801F,          |
|                                                                                                                                                                                      | FortiGate 5001E1, FortiGate      |
|                                                                                                                                                                                      | 5001E, FortiGate 500E, FortiGate |
|                                                                                                                                                                                      | 501E, FortiGate 50G 5G,          |
|                                                                                                                                                                                      | FortiGate 50G DSL, FortiGate 50G |
|                                                                                                                                                                                      | SFP-POE, FortiGate 50G SFP,      |
|                                                                                                                                                                                      | FortiGate 50G, FortiGate 51G 5G, |
|                                                                                                                                                                                      | FortiGate 51G SFP-POE, FortiGate |
|                                                                                                                                                                                      | 51G, FortiGate 600E, FortiGate   |
|                                                                                                                                                                                      | 600F, FortiGate 601E, FortiGate  |
|                                                                                                                                                                                      | 601F, FortiGate 60E DSLJ,        |
|                                                                                                                                                                                      | FortiGate 60E DSL, FortiGate     |
|                                                                                                                                                                                      | 60E-POE, FortiGate 60E,          |
|                                                                                                                                                                                      | FortiGate 60F, FortiGate 61E,    |
|                                                                                                                                                                                      | FortiGate 61F, FortiGate 70F,    |
|                                                                                                                                                                                      | FortiGate 70G-POE, FortiGate     |
|                                                                                                                                                                                      | 70G, FortiGate 71F, FortiGate    |
|                                                                                                                                                                                      | 71G-POE, FortiGate 71G,          |
|                                                                                                                                                                                      | FortiGate 800D, FortiGate        |
|                                                                                                                                                                                      | 80E-POE, FortiGate 80E,          |
|                                                                                                                                                                                      | FortiGate 80F Bypass, FortiGate  |
|                                                                                                                                                                                      | 80F DSL, FortiGate 80F Gen2,     |
|                                                                                                                                                                                      | FortiGate 80F-POE, FortiGate     |
|                                                                                                                                                                                      | 81E-POE, FortiGate 81E,          |
|                                                                                                                                                                                      | FortiGate 81F Gen2, FortiGate    |
|                                                                                                                                                                                      | 81F-POE, FortiGate 900D,         |
|                                                                                                                                                                                      | FortiGate 900G, FortiGate 901G,  |
|                                                                                                                                                                                      | FortiGate 90E, FortiGate 90G     |
|                                                                                                                                                                                      | Gen2, FortiGate 90G, FortiGate   |
|                                                                                                                                                                                      | 91E, FortiGate 91G Gen2,         |
|                                                                                                                                                                                      | FortiGate 91G, FortiGate-VM64    |
|                                                                                                                                                                                      | Aliyun, FortiGate-VM64 AWS,      |
|                                                                                                                                                                                      | FortiGate-VM64 GCP,              |
|                                                                                                                                                                                      | FortiGate-VM64 OPC,              |
|                                                                                                                                                                                      | FortiGate-VM64, FortiGateRugged  |
|                                                                                                                                                                                      | 50G 5G, FortiGateRugged 60F      |
|                                                                                                                                                                                      | 3G4G, FortiGateRugged 60F Gen2,  |
|                                                                                                                                                                                      | FortiGateRugged 70F 3G4G,        |
|                                                                                                                                                                                      | FortiGateRugged 70F,             |
|                                                                                                                                                                                      | FortiGateRugged 70G 5G Dual,     |
|                                                                                                                                                                                      | FortiGateRugged 70G, FortiWiFi   |
|                                                                                                                                                                                      | 30G, FortiWiFi 31G, FortiWiFi    |
|                                                                                                                                                                                      | 40F 3G4G, FortiWiFi 40F,         |
|                                                                                                                                                                                      | FortiWiFi 50G 5G, FortiWiFi 50G  |
|                                                                                                                                                                                      | DSL, FortiWiFi 50G SFP,          |
|                                                                                                                                                                                      | FortiWiFi 50G, FortiWiFi 51G,    |
|                                                                                                                                                                                      | FortiWiFi 60E DSLJ, FortiWiFi    |
|                                                                                                                                                                                      | 60E DSL, FortiWiFi 60E,          |
|                                                                                                                                                                                      | FortiWiFi 60F, FortiWiFi 61E,    |
|                                                                                                                                                                                      | FortiWiFi 61F, FortiWiFi 70G,    |
|                                                                                                                                                                                      | FortiWiFi 71G, FortiWiFi 80F 2R  |
|                                                                                                                                                                                      | 3G4G DSL, FortiWiFi 80F 2R,      |
|                                                                                                                                                                                      | FortiWiFi 81F 2R 3G4G DSL,       |
|                                                                                                                                                                                      | FortiWiFi 81F 2R 3G4G-POE,       |
|                                                                                                                                                                                      | FortiWiFi 81F 2R-POE, FortiWiFi  |
|                                                                                                                                                                                      | 81F 2R.                          |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+

