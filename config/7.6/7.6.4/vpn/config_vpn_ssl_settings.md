# config vpn ssl settings

Configure Agentless VPN.

## Syntax

```
config vpn ssl settings
    Description: Configure Agentless VPN.
    set algorithm [high|medium|...]
    set auth-session-check-source-ip [enable|disable]
    set auth-timeout {integer}
    config authentication-rule
        Description: Authentication rule for Agentless VPN.
        edit <id>
            set auth [any|local|...]
            set cipher [any|high|...]
            set client-cert [enable|disable]
            set groups <name1>, <name2>, ...
            set portal {string}
            set realm {string}
            set source-address <name1>, <name2>, ...
            set source-address-negate [enable|disable]
            set source-address6 <name1>, <name2>, ...
            set source-address6-negate [enable|disable]
            set source-interface <name1>, <name2>, ...
            set user-peer {string}
            set users <name1>, <name2>, ...
        next
    end
    set banned-cipher {option1}, {option2}, ...
    set browser-language-detection [enable|disable]
    set check-referer [enable|disable]
    set ciphersuite {option1}, {option2}, ...
    set client-sigalgs [no-rsa-pss|all]
    set default-portal {string}
    set deflate-compression-level {integer}
    set deflate-min-data-size {integer}
    set dns-suffix {var-string}
    set dtls-heartbeat-fail-count {integer}
    set dtls-heartbeat-idle-timeout {integer}
    set dtls-heartbeat-interval {integer}
    set dtls-hello-timeout {integer}
    set dual-stack-mode [enable|disable]
    set encode-2f-sequence [enable|disable]
    set encrypt-and-store-password [enable|disable]
    set force-two-factor-auth [enable|disable]
    set header-x-forwarded-for [pass|add|...]
    set hsts-include-subdomains [enable|disable]
    set http-compression [enable|disable]
    set http-only-cookie [enable|disable]
    set http-request-body-timeout {integer}
    set http-request-header-timeout {integer}
    set https-redirect [enable|disable]
    set idle-timeout {integer}
    set login-attempt-limit {integer}
    set login-block-time {integer}
    set login-timeout {integer}
    set port {integer}
    set port-precedence [enable|disable]
    set reqclientcert [enable|disable]
    set server-hostname {string}
    set servercert {string}
    set source-address <name1>, <name2>, ...
    set source-address-negate [enable|disable]
    set source-address6 <name1>, <name2>, ...
    set source-address6-negate [enable|disable]
    set source-interface <name1>, <name2>, ...
    set ssl-client-renegotiation [disable|enable]
    set ssl-insert-empty-fragment [enable|disable]
    set ssl-max-proto-ver [tls1-0|tls1-1|...]
    set ssl-min-proto-ver [tls1-0|tls1-1|...]
    set status [enable|disable]
    set transform-backward-slashes [enable|disable]
    set unsafe-legacy-renegotiation [enable|disable]
    set url-obscuration [enable|disable]
    set user-peer {string}
    set x-content-type-options [enable|disable]
end
```

## Parameters

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| ![Note](https://fortinetweb.s3.amazonaws.com/docs.fortinet.com/v2/resources/0bec1c7c-7948-11f0-9bfd-6af4c3636dc7/images/7b895cb3e7958af7a3221734d69687d4_Icon-Light-Bulb.png "Note") | This command is available for    |
|                                                                                                                                                                                      | model(s): FortiGate 1000D,       |
|                                                                                                                                                                                      | FortiGate 1000F, FortiGate       |
|                                                                                                                                                                                      | 1001F, FortiGate 100F, FortiGate |
|                                                                                                                                                                                      | 101F, FortiGate 1100E, FortiGate |
|                                                                                                                                                                                      | 1101E, FortiGate 121G, FortiGate |
|                                                                                                                                                                                      | 1800F, FortiGate 1801F,          |
|                                                                                                                                                                                      | FortiGate 2000E, FortiGate 200E, |
|                                                                                                                                                                                      | FortiGate 200F, FortiGate 201E,  |
|                                                                                                                                                                                      | FortiGate 201F, FortiGate 2200E, |
|                                                                                                                                                                                      | FortiGate 2201E, FortiGate       |
|                                                                                                                                                                                      | 2500E, FortiGate 2600F,          |
|                                                                                                                                                                                      | FortiGate 2601F, FortiGate       |
|                                                                                                                                                                                      | 3000D, FortiGate 3000F,          |
|                                                                                                                                                                                      | FortiGate 3001F, FortiGate 300E, |
|                                                                                                                                                                                      | FortiGate 301E, FortiGate 3100D, |
|                                                                                                                                                                                      | FortiGate 3200D, FortiGate       |
|                                                                                                                                                                                      | 3200F, FortiGate 3201F,          |
|                                                                                                                                                                                      | FortiGate 3300E, FortiGate       |
|                                                                                                                                                                                      | 3301E, FortiGate 3400E,          |
|                                                                                                                                                                                      | FortiGate 3401E, FortiGate       |
|                                                                                                                                                                                      | 3500F, FortiGate 3501F,          |
|                                                                                                                                                                                      | FortiGate 3600E, FortiGate       |
|                                                                                                                                                                                      | 3601E, FortiGate 3700D,          |
|                                                                                                                                                                                      | FortiGate 3700F, FortiGate       |
|                                                                                                                                                                                      | 3701F, FortiGate 3960E,          |
|                                                                                                                                                                                      | FortiGate 3980E, FortiGate 400E  |
|                                                                                                                                                                                      | Bypass, FortiGate 400E,          |
|                                                                                                                                                                                      | FortiGate 400F, FortiGate 401E,  |
|                                                                                                                                                                                      | FortiGate 401F, FortiGate 4200F, |
|                                                                                                                                                                                      | FortiGate 4201F, FortiGate       |
|                                                                                                                                                                                      | 4400F, FortiGate 4401F,          |
|                                                                                                                                                                                      | FortiGate 4800F, FortiGate       |
|                                                                                                                                                                                      | 4801F, FortiGate 5001E1,         |
|                                                                                                                                                                                      | FortiGate 5001E, FortiGate 500E, |
|                                                                                                                                                                                      | FortiGate 501E, FortiGate 600E,  |
|                                                                                                                                                                                      | FortiGate 600F, FortiGate 601E,  |
|                                                                                                                                                                                      | FortiGate 601F, FortiGate 70F,   |
|                                                                                                                                                                                      | FortiGate 71F, FortiGate 800D,   |
|                                                                                                                                                                                      | FortiGate 80F Bypass, FortiGate  |
|                                                                                                                                                                                      | 80F DSL, FortiGate 80F-POE,      |
|                                                                                                                                                                                      | FortiGate 80F, FortiGate         |
|                                                                                                                                                                                      | 81F-POE, FortiGate 81F,          |
|                                                                                                                                                                                      | FortiGate 900D, FortiGate 901G,  |
|                                                                                                                                                                                      | FortiGate-VM64 Aliyun,           |
|                                                                                                                                                                                      | FortiGate-VM64 AWS,              |
|                                                                                                                                                                                      | FortiGate-VM64 Azure,            |
|                                                                                                                                                                                      | FortiGate-VM64 GCP,              |
|                                                                                                                                                                                      | FortiGate-VM64 OPC,              |
|                                                                                                                                                                                      | FortiGate-VM64, FortiGateRugged  |
|                                                                                                                                                                                      | 70F 3G4G, FortiGateRugged 70F,   |
|                                                                                                                                                                                      | FortiWiFi 80F 2R 3G4G DSL,       |
|                                                                                                                                                                                      | FortiWiFi 80F 2R, FortiWiFi 81F  |
|                                                                                                                                                                                      | 2R 3G4G DSL, FortiWiFi 81F 2R    |
|                                                                                                                                                                                      | 3G4G-POE, FortiWiFi 81F 2R-POE,  |
|                                                                                                                                                                                      | FortiWiFi 81F 2R.                |
|                                                                                                                                                                                      |                                  |
|                                                                                                                                                                                      | It is not available for:         |
|                                                                                                                                                                                      | FortiGate 40F 3G4G, FortiGate    |
|                                                                                                                                                                                      | 40F, FortiGate 50G SFP-POE,      |
|                                                                                                                                                                                      | FortiGate 60F, FortiGate 61F,    |
|                                                                                                                                                                                      | FortiGate 70G, FortiGate 91G,    |
|                                                                                                                                                                                      | FortiGateRugged 60F 3G4G,        |
|                                                                                                                                                                                      | FortiGateRugged 60F, FortiWiFi   |
|                                                                                                                                                                                      | 40F 3G4G, FortiWiFi 40F,         |
|                                                                                                                                                                                      | FortiWiFi 51G, FortiWiFi 60F,    |
|                                                                                                                                                                                      | FortiWiFi 61F, FortiWiFi 71G.    |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+

