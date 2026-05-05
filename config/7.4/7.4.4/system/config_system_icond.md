# config system icond

Configure Industrial Connectivity.

## Syntax

```
config system icond
    Description: Configure Industrial Connectivity.
    set iec101-keepalive [disable|enable]
    set iec101-laddr-local {integer}
    set iec101-laddr-remote {integer}
    set iec101-laddr-size {integer}
    set iec101-mode [balanced|unbalanced]
    set iec101-t0 {integer}
    set iec101-trp {integer}
    set iec101-use-ack-char [disable|enable]
    set iec104-k {integer}
    set iec104-t1 {integer}
    set iec104-t2 {integer}
    set iec104-t3 {integer}
    set iec104-w {integer}
    set modbus-serial-addr {integer}
    set modbus-serial-mode [RTU|ASCII]
    set modbus-serial-timeout-resp {integer}
    set modbus-tcp-unit-id {integer}
    set port {integer}
    set status [disable|enable]
    set tty-baudrate [200|300|...]
    set tty-databits {integer}
    set tty-device {string}
    set tty-flowcontrol [none|xon-xoff|...]
    set tty-parity [none|odd|...]
    set tty-stopbits {integer}
    set type [iec101-104|modbus-serial-tcp|...]
end
```

## Parameters

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| ![Note](https://fortinetweb.s3.amazonaws.com/docs.fortinet.com/v2/resources/a86fc432-0bd9-11ef-8c42-fa163e15d75b/images/c8d0f0ab9c512db953bc8b7bbd12b5df_Icon-Light-Bulb.png "Note") | This command is available for    |
|                                                                                                                                                                                      | model(s): FortiGateRugged 60F    |
|                                                                                                                                                                                      | 3G4G, FortiGateRugged 60F,       |
|                                                                                                                                                                                      | FortiGateRugged 70F 3G4G,        |
|                                                                                                                                                                                      | FortiGateRugged 70F.             |
|                                                                                                                                                                                      |                                  |
|                                                                                                                                                                                      | It is not available for:         |
|                                                                                                                                                                                      | FortiGate 1000D, FortiGate       |
|                                                                                                                                                                                      | 1000F, FortiGate 1001F,          |
|                                                                                                                                                                                      | FortiGate 100F, FortiGate 101F,  |
|                                                                                                                                                                                      | FortiGate 1100E, FortiGate       |
|                                                                                                                                                                                      | 1101E, FortiGate 140E-POE,       |
|                                                                                                                                                                                      | FortiGate 140E, FortiGate 1800F, |
|                                                                                                                                                                                      | FortiGate 1801F, FortiGate       |
|                                                                                                                                                                                      | 2000E, FortiGate 200E, FortiGate |
|                                                                                                                                                                                      | 200F, FortiGate 201E, FortiGate  |
|                                                                                                                                                                                      | 201F, FortiGate 2200E, FortiGate |
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
|                                                                                                                                                                                      | 80F-POE, FortiGate 80F,          |
|                                                                                                                                                                                      | FortiGate 81E-POE, FortiGate     |
|                                                                                                                                                                                      | 81E, FortiGate 81F-POE,          |
|                                                                                                                                                                                      | FortiGate 81F, FortiGate 900D,   |
|                                                                                                                                                                                      | FortiGate 90E, FortiGate 91E,    |
|                                                                                                                                                                                      | FortiGate VM64, FortiWiFi 40F    |
|                                                                                                                                                                                      | 3G4G, FortiWiFi 40F, FortiWiFi   |
|                                                                                                                                                                                      | 60E DSLJ, FortiWiFi 60E DSL,     |
|                                                                                                                                                                                      | FortiWiFi 60E, FortiWiFi 60F,    |
|                                                                                                                                                                                      | FortiWiFi 61E, FortiWiFi 61F,    |
|                                                                                                                                                                                      | FortiWiFi 80F 2R, FortiWiFi 81F  |
|                                                                                                                                                                                      | 2R 3G4G-POE, FortiWiFi 81F       |
|                                                                                                                                                                                      | 2R-POE, FortiWiFi 81F 2R.        |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+

