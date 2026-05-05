# config system stp

Configure Spanning Tree Protocol (STP).

## Syntax

```
config system stp
    Description: Configure Spanning Tree Protocol (STP).
    set forward-delay {integer}
    set hello-time {integer}
    set max-age {integer}
    set max-hops {integer}
    set switch-priority [0|4096|...]
end
```

## Parameters

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| ![Note](https://fortinetweb.s3.amazonaws.com/docs.fortinet.com/v2/resources/f2fdc419-484a-11ee-8e6d-fa163e15d75b/images/fd8569c03b167b49cc47d5280232fc7b_Icon-Light-Bulb.png "Note") | This command is available for    |
|                                                                                                                                                                                      | model(s): FortiGate 100F,        |
|                                                                                                                                                                                      | FortiGate 101F, FortiGate 1100E, |
|                                                                                                                                                                                      | FortiGate 1101E, FortiGate       |
|                                                                                                                                                                                      | 140E-POE, FortiGate 140E,        |
|                                                                                                                                                                                      | FortiGate 1800F, FortiGate       |
|                                                                                                                                                                                      | 1801F, FortiGate 200F, FortiGate |
|                                                                                                                                                                                      | 201F, FortiGate 2600F, FortiGate |
|                                                                                                                                                                                      | 300E, FortiGate 301E, FortiGate  |
|                                                                                                                                                                                      | 400E Bypass, FortiGate 400E,     |
|                                                                                                                                                                                      | FortiGate 400F, FortiGate 401E,  |
|                                                                                                                                                                                      | FortiGate 401F, FortiGate 40F    |
|                                                                                                                                                                                      | 3G4G, FortiGate 40F, FortiGate   |
|                                                                                                                                                                                      | 4200F, FortiGate 4201F,          |
|                                                                                                                                                                                      | FortiGate 600F, FortiGate 601F,  |
|                                                                                                                                                                                      | FortiGate 60E DSLJ, FortiGate    |
|                                                                                                                                                                                      | 60E DSL, FortiGate 60E-POE,      |
|                                                                                                                                                                                      | FortiGate 60E, FortiGate 60F,    |
|                                                                                                                                                                                      | FortiGate 61E, FortiGate 61F,    |
|                                                                                                                                                                                      | FortiGate 70F, FortiGate 71F,    |
|                                                                                                                                                                                      | FortiGate 80E-POE, FortiGate     |
|                                                                                                                                                                                      | 80E, FortiGate 80F Bypass,       |
|                                                                                                                                                                                      | FortiGate 80F-POE, FortiGate     |
|                                                                                                                                                                                      | 80F, FortiGate 81E-POE,          |
|                                                                                                                                                                                      | FortiGate 81E, FortiGate         |
|                                                                                                                                                                                      | 81F-POE, FortiGate 81F,          |
|                                                                                                                                                                                      | FortiGate 90E, FortiGate 91E,    |
|                                                                                                                                                                                      | FortiGateRugged 60F 3G4G,        |
|                                                                                                                                                                                      | FortiGateRugged 60F,             |
|                                                                                                                                                                                      | FortiGateRugged 70F 3G4G,        |
|                                                                                                                                                                                      | FortiGateRugged 70F, FortiWiFi   |
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
|                                                                                                                                                                                      | FortiGate 1000D, FortiGate       |
|                                                                                                                                                                                      | 2000E, FortiGate 200E, FortiGate |
|                                                                                                                                                                                      | 201E, FortiGate 2200E, FortiGate |
|                                                                                                                                                                                      | 2201E, FortiGate 2500E,          |
|                                                                                                                                                                                      | FortiGate 3000D, FortiGate       |
|                                                                                                                                                                                      | 3100D, FortiGate 3200D,          |
|                                                                                                                                                                                      | FortiGate 3300E, FortiGate       |
|                                                                                                                                                                                      | 3301E, FortiGate 3400E,          |
|                                                                                                                                                                                      | FortiGate 3401E, FortiGate       |
|                                                                                                                                                                                      | 3600E, FortiGate 3601E,          |
|                                                                                                                                                                                      | FortiGate 3700D, FortiGate       |
|                                                                                                                                                                                      | 3960E, FortiGate 3980E,          |
|                                                                                                                                                                                      | FortiGate 5001E1, FortiGate      |
|                                                                                                                                                                                      | 5001E, FortiGate 500E, FortiGate |
|                                                                                                                                                                                      | 501E, FortiGate 600E, FortiGate  |
|                                                                                                                                                                                      | 601E, FortiGate 800D, FortiGate  |
|                                                                                                                                                                                      | 900D.                            |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+

