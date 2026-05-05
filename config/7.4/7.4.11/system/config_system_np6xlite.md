# config system np6xlite

Configure NP6XLITE attributes.

## Syntax

```
config system np6xlite
    Description: Configure NP6XLITE attributes.
    edit <name>
        set congestion-handling-mode [flow-control|head-of-line]
        set fastpath [disable|enable]
        config fp-anomaly
            Description: NP6XLITE IPv4 anomaly protection. The trap-to-host forwards anomaly sessions to the CPU.
            set icmp-csum-err [drop|trap-to-host]
            set icmp-frag [allow|drop|...]
            set icmp-land [allow|drop|...]
            set ipv4-csum-err [drop|trap-to-host]
            set ipv4-land [allow|drop|...]
            set ipv4-optlsrr [allow|drop|...]
            set ipv4-optrr [allow|drop|...]
            set ipv4-optsecurity [allow|drop|...]
            set ipv4-optssrr [allow|drop|...]
            set ipv4-optstream [allow|drop|...]
            set ipv4-opttimestamp [allow|drop|...]
            set ipv4-proto-err [allow|drop|...]
            set ipv4-unknopt [allow|drop|...]
            set ipv6-daddr-err [allow|drop|...]
            set ipv6-land [allow|drop|...]
            set ipv6-optendpid [allow|drop|...]
            set ipv6-opthomeaddr [allow|drop|...]
            set ipv6-optinvld [allow|drop|...]
            set ipv6-optjumbo [allow|drop|...]
            set ipv6-optnsap [allow|drop|...]
            set ipv6-optralert [allow|drop|...]
            set ipv6-opttunnel [allow|drop|...]
            set ipv6-proto-err [allow|drop|...]
            set ipv6-saddr-err [allow|drop|...]
            set ipv6-unknopt [allow|drop|...]
            set tcp-csum-err [drop|trap-to-host]
            set tcp-fin-noack [allow|drop|...]
            set tcp-fin-only [allow|drop|...]
            set tcp-land [allow|drop|...]
            set tcp-no-flag [allow|drop|...]
            set tcp-syn-data [allow|drop|...]
            set tcp-syn-fin [allow|drop|...]
            set tcp-winnuke [allow|drop|...]
            set udp-csum-err [drop|trap-to-host]
            set udp-land [allow|drop|...]
        end
        set garbage-session-collector [disable|enable]
        config hpe
            Description: HPE configuration.
            set arp-max {integer}
            set enable-shaper [disable|enable]
            set esp-max {integer}
            set icmp-max {integer}
            set ip-frag-max {integer}
            set ip-others-max {integer}
            set l2-others-max {integer}
            set pri-type-max {integer}
            set sctp-max {integer}
            set tcp-others-max {integer}
            set tcpfin-rst-max {integer}
            set tcpsyn-ack-max {integer}
            set tcpsyn-max {integer}
            set udp-max {integer}
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
| ![Note](https://fortinetweb.s3.amazonaws.com/docs.fortinet.com/v2/resources/32d37b40-faf1-11f0-8b43-d2943efe5b2f/images/3c3349b31f9b47d5c13e2951bc4230a2_Icon-Light-Bulb.png "Note") | This command is available for    |
|                                                                                                                                                                                      | model(s): FortiGate 100F,        |
|                                                                                                                                                                                      | FortiGate 101F Gen2, FortiGate   |
|                                                                                                                                                                                      | 200F, FortiGate 201F, FortiGate  |
|                                                                                                                                                                                      | 30G, FortiGate 31G, FortiGate    |
|                                                                                                                                                                                      | 40F 3G4G, FortiGate 40F,         |
|                                                                                                                                                                                      | FortiGate 60F, FortiGate 61F,    |
|                                                                                                                                                                                      | FortiGate 70F, FortiGate 71F,    |
|                                                                                                                                                                                      | FortiGate 80F Bypass, FortiGate  |
|                                                                                                                                                                                      | 80F DSL, FortiGate 80F Gen2,     |
|                                                                                                                                                                                      | FortiGate 80F-POE, FortiGate 81F |
|                                                                                                                                                                                      | Gen2, FortiGate 81F-POE,         |
|                                                                                                                                                                                      | FortiGateRugged 60F 3G4G,        |
|                                                                                                                                                                                      | FortiGateRugged 60F Gen2,        |
|                                                                                                                                                                                      | FortiGateRugged 70F 3G4G,        |
|                                                                                                                                                                                      | FortiGateRugged 70F, FortiWiFi   |
|                                                                                                                                                                                      | 30G, FortiWiFi 31G, FortiWiFi    |
|                                                                                                                                                                                      | 40F 3G4G, FortiWiFi 40F,         |
|                                                                                                                                                                                      | FortiWiFi 60F, FortiWiFi 61F,    |
|                                                                                                                                                                                      | FortiWiFi 80F 2R 3G4G DSL,       |
|                                                                                                                                                                                      | FortiWiFi 80F 2R, FortiWiFi 81F  |
|                                                                                                                                                                                      | 2R 3G4G DSL, FortiWiFi 81F 2R    |
|                                                                                                                                                                                      | 3G4G-POE, FortiWiFi 81F 2R-POE,  |
|                                                                                                                                                                                      | FortiWiFi 81F 2R.                |
|                                                                                                                                                                                      |                                  |
|                                                                                                                                                                                      | It is not available for:         |
|                                                                                                                                                                                      | FortiGate 1000D, FortiGate       |
|                                                                                                                                                                                      | 1000F, FortiGate 1001F,          |
|                                                                                                                                                                                      | FortiGate 1100E, FortiGate       |
|                                                                                                                                                                                      | 1101E, FortiGate 120G, FortiGate |
|                                                                                                                                                                                      | 121G, FortiGate 140E-POE,        |
|                                                                                                                                                                                      | FortiGate 140E, FortiGate 1800F, |
|                                                                                                                                                                                      | FortiGate 1801F, FortiGate       |
|                                                                                                                                                                                      | 2000E, FortiGate 200E, FortiGate |
|                                                                                                                                                                                      | 200G, FortiGate 201E, FortiGate  |
|                                                                                                                                                                                      | 201G, FortiGate 2200E, FortiGate |
|                                                                                                                                                                                      | 2201E, FortiGate 2500E,          |
|                                                                                                                                                                                      | FortiGate 2600F, FortiGate       |
|                                                                                                                                                                                      | 2601F, FortiGate 3000D,          |
|                                                                                                                                                                                      | FortiGate 3000F, FortiGate       |
|                                                                                                                                                                                      | 3001F, FortiGate 300E, FortiGate |
|                                                                                                                                                                                      | 301E, FortiGate 3100D, FortiGate |
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
|                                                                                                                                                                                      | FortiGate 4200F, FortiGate 4201F |
|                                                                                                                                                                                      | Gen2, FortiGate 4400F, FortiGate |
|                                                                                                                                                                                      | 4401F Gen2, FortiGate 4800F,     |
|                                                                                                                                                                                      | FortiGate 4801F, FortiGate       |
|                                                                                                                                                                                      | 5001E1, FortiGate 5001E,         |
|                                                                                                                                                                                      | FortiGate 500E, FortiGate 501E,  |
|                                                                                                                                                                                      | FortiGate 50G 5G, FortiGate 50G  |
|                                                                                                                                                                                      | DSL, FortiGate 50G SFP-POE,      |
|                                                                                                                                                                                      | FortiGate 50G SFP, FortiGate     |
|                                                                                                                                                                                      | 50G, FortiGate 51G 5G, FortiGate |
|                                                                                                                                                                                      | 51G SFP-POE, FortiGate 51G,      |
|                                                                                                                                                                                      | FortiGate 600E, FortiGate 600F,  |
|                                                                                                                                                                                      | FortiGate 601E, FortiGate 601F,  |
|                                                                                                                                                                                      | FortiGate 60E DSLJ, FortiGate    |
|                                                                                                                                                                                      | 60E DSL, FortiGate 60E-POE,      |
|                                                                                                                                                                                      | FortiGate 60E, FortiGate 61E,    |
|                                                                                                                                                                                      | FortiGate 70G-POE, FortiGate     |
|                                                                                                                                                                                      | 70G, FortiGate 71G-POE,          |
|                                                                                                                                                                                      | FortiGate 71G, FortiGate 800D,   |
|                                                                                                                                                                                      | FortiGate 80E-POE, FortiGate     |
|                                                                                                                                                                                      | 80E, FortiGate 81E-POE,          |
|                                                                                                                                                                                      | FortiGate 81E, FortiGate 900D,   |
|                                                                                                                                                                                      | FortiGate 900G, FortiGate 901G,  |
|                                                                                                                                                                                      | FortiGate 90E, FortiGate 90G     |
|                                                                                                                                                                                      | Gen2, FortiGate 90G, FortiGate   |
|                                                                                                                                                                                      | 91E, FortiGate 91G Gen2,         |
|                                                                                                                                                                                      | FortiGate 91G, FortiGate-VM64    |
|                                                                                                                                                                                      | Aliyun, FortiGate-VM64 AWS,      |
|                                                                                                                                                                                      | FortiGate-VM64 Azure,            |
|                                                                                                                                                                                      | FortiGate-VM64 GCP,              |
|                                                                                                                                                                                      | FortiGate-VM64 OPC,              |
|                                                                                                                                                                                      | FortiGate-VM64, FortiGateRugged  |
|                                                                                                                                                                                      | 50G 5G, FortiGateRugged 70G 5G   |
|                                                                                                                                                                                      | Dual, FortiGateRugged 70G,       |
|                                                                                                                                                                                      | FortiWiFi 50G 5G, FortiWiFi 50G  |
|                                                                                                                                                                                      | DSL, FortiWiFi 50G SFP,          |
|                                                                                                                                                                                      | FortiWiFi 50G, FortiWiFi 51G,    |
|                                                                                                                                                                                      | FortiWiFi 60E DSLJ, FortiWiFi    |
|                                                                                                                                                                                      | 60E DSL, FortiWiFi 60E,          |
|                                                                                                                                                                                      | FortiWiFi 61E, FortiWiFi 70G,    |
|                                                                                                                                                                                      | FortiWiFi 71G.                   |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+

