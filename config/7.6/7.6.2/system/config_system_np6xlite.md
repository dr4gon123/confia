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
        set session-timeout-interval {integer}
    next
end
```

## Parameters

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| ![Note](https://fortinetweb.s3.amazonaws.com/docs.fortinet.com/v2/resources/71a02fb7-dd01-11ef-8766-ca4255feedd9/images/0ad3516ed6d39af4725a73625876517e_Icon-Light-Bulb.png "Note") | This command is available for    |
|                                                                                                                                                                                      | model(s): FortiGate 100F,        |
|                                                                                                                                                                                      | FortiGate 101F, FortiGate 200F,  |
|                                                                                                                                                                                      | FortiGate 201F, FortiGate 40F    |
|                                                                                                                                                                                      | 3G4G, FortiGate 40F, FortiGate   |
|                                                                                                                                                                                      | 60F, FortiGate 61F, FortiGate    |
|                                                                                                                                                                                      | 70F, FortiGate 71F, FortiGate    |
|                                                                                                                                                                                      | 80F Bypass, FortiGate 80F DSL,   |
|                                                                                                                                                                                      | FortiGate 80F-POE, FortiGate     |
|                                                                                                                                                                                      | 80F, FortiGate 81F-POE,          |
|                                                                                                                                                                                      | FortiGate 81F, FortiGateRugged   |
|                                                                                                                                                                                      | 60F 3G4G, FortiGateRugged 60F,   |
|                                                                                                                                                                                      | FortiGateRugged 70F 3G4G,        |
|                                                                                                                                                                                      | FortiGateRugged 70F, FortiWiFi   |
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
|                                                                                                                                                                                      | 121G, FortiGate 1800F, FortiGate |
|                                                                                                                                                                                      | 1801F, FortiGate 2000E,          |
|                                                                                                                                                                                      | FortiGate 200E, FortiGate 201E,  |
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
|                                                                                                                                                                                      | FortiGate 4200F, FortiGate       |
|                                                                                                                                                                                      | 4201F, FortiGate 4400F,          |
|                                                                                                                                                                                      | FortiGate 4401F, FortiGate       |
|                                                                                                                                                                                      | 5001E1, FortiGate 5001E,         |
|                                                                                                                                                                                      | FortiGate 500E, FortiGate 501E,  |
|                                                                                                                                                                                      | FortiGate 600E, FortiGate 600F,  |
|                                                                                                                                                                                      | FortiGate 601E, FortiGate 601F,  |
|                                                                                                                                                                                      | FortiGate 800D, FortiGate 900D,  |
|                                                                                                                                                                                      | FortiGate 900G, FortiGate 901G,  |
|                                                                                                                                                                                      | FortiGate 90G, FortiGate 91G,    |
|                                                                                                                                                                                      | FortiGate-VM64 Aliyun,           |
|                                                                                                                                                                                      | FortiGate-VM64 AWS,              |
|                                                                                                                                                                                      | FortiGate-VM64 Azure,            |
|                                                                                                                                                                                      | FortiGate-VM64 GCP,              |
|                                                                                                                                                                                      | FortiGate-VM64 OPC,              |
|                                                                                                                                                                                      | FortiGate-VM64.                  |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+

