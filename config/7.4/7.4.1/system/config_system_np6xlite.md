# config system np6xlite

Configure NP6XLITE attributes.

## Syntax

```
config system np6xlite
    Description: Configure NP6XLITE attributes.
    edit <name>
        set fastpath [disable|enable]
        config fp-anomaly
            Description: NP6XLITE IPv4 anomaly protection. The trap-to-host forwards anomaly sessions to the CPU.
            set tcp-syn-fin [allow|drop|...]
            set tcp-fin-noack [allow|drop|...]
            set tcp-fin-only [allow|drop|...]
            set tcp-no-flag [allow|drop|...]
            set tcp-syn-data [allow|drop|...]
            set tcp-winnuke [allow|drop|...]
            set tcp-land [allow|drop|...]
            set udp-land [allow|drop|...]
            set icmp-land [allow|drop|...]
            set icmp-frag [allow|drop|...]
            set ipv4-land [allow|drop|...]
            set ipv4-proto-err [allow|drop|...]
            set ipv4-unknopt [allow|drop|...]
            set ipv4-optrr [allow|drop|...]
            set ipv4-optssrr [allow|drop|...]
            set ipv4-optlsrr [allow|drop|...]
            set ipv4-optstream [allow|drop|...]
            set ipv4-optsecurity [allow|drop|...]
            set ipv4-opttimestamp [allow|drop|...]
            set ipv4-csum-err [drop|trap-to-host]
            set tcp-csum-err [drop|trap-to-host]
            set udp-csum-err [drop|trap-to-host]
            set icmp-csum-err [drop|trap-to-host]
            set ipv6-land [allow|drop|...]
            set ipv6-proto-err [allow|drop|...]
            set ipv6-unknopt [allow|drop|...]
            set ipv6-saddr-err [allow|drop|...]
            set ipv6-daddr-err [allow|drop|...]
            set ipv6-optralert [allow|drop|...]
            set ipv6-optjumbo [allow|drop|...]
            set ipv6-opttunnel [allow|drop|...]
            set ipv6-opthomeaddr [allow|drop|...]
            set ipv6-optnsap [allow|drop|...]
            set ipv6-optendpid [allow|drop|...]
            set ipv6-optinvld [allow|drop|...]
        end
        set garbage-session-collector [disable|enable]
        config hpe
            Description: HPE configuration.
            set tcpsyn-max {integer}
            set tcp-max {integer}
            set udp-max {integer}
            set icmp-max {integer}
            set sctp-max {integer}
            set esp-max {integer}
            set ip-frag-max {integer}
            set ip-others-max {integer}
            set arp-max {integer}
            set l2-others-max {integer}
            set enable-shaper [disable|enable]
        end
        set ipsec-inner-fragment [disable|enable]
        set ipsec-sts-timeout [1|2|...]
        set ipsec-throughput-msg-frequency [disable|32kb|...]
        set per-session-accounting [disable|traffic-log-only|...]
        set session-collector-interval {integer}
        set session-timeout-fixed [disable|enable]
        set session-timeout-interval {integer}
        set session-timeout-random-range {integer}
    next
end
```

## Parameters

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| ![Note](https://fortinetweb.s3.amazonaws.com/docs.fortinet.com/v2/resources/f2fdc419-484a-11ee-8e6d-fa163e15d75b/images/fd8569c03b167b49cc47d5280232fc7b_Icon-Light-Bulb.png "Note") | This command is available for    |
|                                                                                                                                                                                      | model(s): FortiGate 100F,        |
|                                                                                                                                                                                      | FortiGate 101F, FortiGate 200F,  |
|                                                                                                                                                                                      | FortiGate 201F, FortiGate 40F    |
|                                                                                                                                                                                      | 3G4G, FortiGate 40F, FortiGate   |
|                                                                                                                                                                                      | 60F, FortiGate 61F, FortiGate    |
|                                                                                                                                                                                      | 70F, FortiGate 71F, FortiGate    |
|                                                                                                                                                                                      | 80F Bypass, FortiGate 80F-POE,   |
|                                                                                                                                                                                      | FortiGate 80F, FortiGate         |
|                                                                                                                                                                                      | 81F-POE, FortiGate 81F,          |
|                                                                                                                                                                                      | FortiGateRugged 60F 3G4G,        |
|                                                                                                                                                                                      | FortiGateRugged 60F,             |
|                                                                                                                                                                                      | FortiGateRugged 70F 3G4G,        |
|                                                                                                                                                                                      | FortiGateRugged 70F, FortiWiFi   |
|                                                                                                                                                                                      | 40F 3G4G, FortiWiFi 40F,         |
|                                                                                                                                                                                      | FortiWiFi 60F, FortiWiFi 61F,    |
|                                                                                                                                                                                      | FortiWiFi 80F 2R, FortiWiFi 81F  |
|                                                                                                                                                                                      | 2R 3G4G-POE, FortiWiFi 81F       |
|                                                                                                                                                                                      | 2R-POE, FortiWiFi 81F 2R.        |
|                                                                                                                                                                                      |                                  |
|                                                                                                                                                                                      | It is not available for:         |
|                                                                                                                                                                                      | FortiGate 1000D, FortiGate       |
|                                                                                                                                                                                      | 1100E, FortiGate 1101E,          |
|                                                                                                                                                                                      | FortiGate 140E-POE, FortiGate    |
|                                                                                                                                                                                      | 140E, FortiGate 1800F, FortiGate |
|                                                                                                                                                                                      | 1801F, FortiGate 2000E,          |
|                                                                                                                                                                                      | FortiGate 200E, FortiGate 201E,  |
|                                                                                                                                                                                      | FortiGate 2200E, FortiGate       |
|                                                                                                                                                                                      | 2201E, FortiGate 2500E,          |
|                                                                                                                                                                                      | FortiGate 2600F, FortiGate       |
|                                                                                                                                                                                      | 3000D, FortiGate 300E, FortiGate |
|                                                                                                                                                                                      | 301E, FortiGate 3100D, FortiGate |
|                                                                                                                                                                                      | 3200D, FortiGate 3300E,          |
|                                                                                                                                                                                      | FortiGate 3301E, FortiGate       |
|                                                                                                                                                                                      | 3400E, FortiGate 3401E,          |
|                                                                                                                                                                                      | FortiGate 3600E, FortiGate       |
|                                                                                                                                                                                      | 3601E, FortiGate 3700D,          |
|                                                                                                                                                                                      | FortiGate 3960E, FortiGate       |
|                                                                                                                                                                                      | 3980E, FortiGate 400E Bypass,    |
|                                                                                                                                                                                      | FortiGate 400E, FortiGate 400F,  |
|                                                                                                                                                                                      | FortiGate 401E, FortiGate 401F,  |
|                                                                                                                                                                                      | FortiGate 4200F, FortiGate       |
|                                                                                                                                                                                      | 4201F, FortiGate 5001E1,         |
|                                                                                                                                                                                      | FortiGate 5001E, FortiGate 500E, |
|                                                                                                                                                                                      | FortiGate 501E, FortiGate 600E,  |
|                                                                                                                                                                                      | FortiGate 600F, FortiGate 601E,  |
|                                                                                                                                                                                      | FortiGate 601F, FortiGate 60E    |
|                                                                                                                                                                                      | DSLJ, FortiGate 60E DSL,         |
|                                                                                                                                                                                      | FortiGate 60E-POE, FortiGate     |
|                                                                                                                                                                                      | 60E, FortiGate 61E, FortiGate    |
|                                                                                                                                                                                      | 800D, FortiGate 80E-POE,         |
|                                                                                                                                                                                      | FortiGate 80E, FortiGate         |
|                                                                                                                                                                                      | 81E-POE, FortiGate 81E,          |
|                                                                                                                                                                                      | FortiGate 900D, FortiGate 90E,   |
|                                                                                                                                                                                      | FortiGate 91E, FortiWiFi 60E     |
|                                                                                                                                                                                      | DSLJ, FortiWiFi 60E DSL,         |
|                                                                                                                                                                                      | FortiWiFi 60E, FortiWiFi 61E.    |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+

