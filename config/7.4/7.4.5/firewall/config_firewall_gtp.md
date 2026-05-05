# config firewall gtp

Configure GTP.

## Syntax

```
config firewall gtp
    Description: Configure GTP.
    edit <name>
        set addr-notify {ipv4-address-any}
        config apn
            Description: APN.
            edit <id>
                set action [allow|deny]
                set apnmember <name1>, <name2>, ...
                set selection-mode {option1}, {option2}, ...
            next
        end
        set apn-filter [enable|disable]
        set authorized-ggsns {string}
        set authorized-ggsns6 {string}
        set authorized-sgsns {string}
        set authorized-sgsns6 {string}
        set comment {var-string}
        set context-id {integer}
        set control-plane-message-rate-limit {integer}
        set default-apn-action [allow|deny]
        set default-imsi-action [allow|deny]
        set default-ip-action [allow|deny]
        set default-noip-action [allow|deny]
        set default-policy-action [allow|deny]
        set denied-log [enable|disable]
        set echo-request-interval {integer}
        set extension-log [enable|disable]
        set forwarded-log [enable|disable]
        set global-tunnel-limit {string}
        set gtp-in-gtp [allow|deny]
        set gtpu-denied-log [enable|disable]
        set gtpu-forwarded-log [enable|disable]
        set gtpu-log-freq {integer}
        set half-close-timeout {integer}
        set half-open-timeout {integer}
        set handover-group {string}
        set handover-group6 {string}
        set ie-allow-list-v0v1 {string}
        set ie-allow-list-v2 {string}
        config ie-remove-policy
            Description: IE remove policy.
            edit <id>
                set remove-ies {option1}, {option2}, ...
                set sgsn-addr {string}
                set sgsn-addr6 {string}
            next
        end
        set ie-remover [enable|disable]
        config ie-validation
            Description: IE validation.
            set apn-restriction [enable|disable]
            set charging-ID [enable|disable]
            set charging-gateway-addr [enable|disable]
            set end-user-addr [enable|disable]
            set gsn-addr [enable|disable]
            set imei [enable|disable]
            set imsi [enable|disable]
            set mm-context [enable|disable]
            set ms-tzone [enable|disable]
            set ms-validated [enable|disable]
            set msisdn [enable|disable]
            set nsapi [enable|disable]
            set pdp-context [enable|disable]
            set qos-profile [enable|disable]
            set rai [enable|disable]
            set rat-type [enable|disable]
            set reordering-required [enable|disable]
            set selection-mode [enable|disable]
            set uli [enable|disable]
        end
        config imsi
            Description: IMSI.
            edit <id>
                set action [allow|deny]
                set apnmember <name1>, <name2>, ...
                set mcc-mnc {string}
                set msisdn-prefix {string}
                set selection-mode {option1}, {option2}, ...
            next
        end
        set imsi-filter [enable|disable]
        set interface-notify {string}
        set invalid-reserved-field [allow|deny]
        set invalid-sgsns-to-log {string}
        set invalid-sgsns6-to-log {string}
        set ip-filter [enable|disable]
        config ip-policy
            Description: IP policy.
            edit <id>
                set action [allow|deny]
                set dstaddr {string}
                set dstaddr6 {string}
                set srcaddr {string}
                set srcaddr6 {string}
            next
        end
        set log-freq {integer}
        set log-gtpu-limit {integer}
        set log-imsi-prefix {string}
        set log-msisdn-prefix {string}
        set max-message-length {integer}
        set message-filter-v0v1 {string}
        set message-filter-v2 {string}
        config message-rate-limit
            Description: Message rate limiting.
            set create-aa-pdp-request {integer}
            set create-aa-pdp-response {integer}
            set create-mbms-request {integer}
            set create-mbms-response {integer}
            set create-pdp-request {integer}
            set create-pdp-response {integer}
            set delete-aa-pdp-request {integer}
            set delete-aa-pdp-response {integer}
            set delete-mbms-request {integer}
            set delete-mbms-response {integer}
            set delete-pdp-request {integer}
            set delete-pdp-response {integer}
            set echo-request {integer}
            set echo-response {integer}
            set error-indication {integer}
            set failure-report-request {integer}
            set failure-report-response {integer}
            set fwd-reloc-complete-ack {integer}
            set fwd-relocation-complete {integer}
            set fwd-relocation-request {integer}
            set fwd-relocation-response {integer}
            set fwd-srns-context {integer}
            set fwd-srns-context-ack {integer}
            set g-pdu {integer}
            set identification-request {integer}
            set identification-response {integer}
            set mbms-de-reg-request {integer}
            set mbms-de-reg-response {integer}
            set mbms-notify-rej-request {integer}
            set mbms-notify-rej-response {integer}
            set mbms-notify-request {integer}
            set mbms-notify-response {integer}
            set mbms-reg-request {integer}
            set mbms-reg-response {integer}
            set mbms-ses-start-request {integer}
            set mbms-ses-start-response {integer}
            set mbms-ses-stop-request {integer}
            set mbms-ses-stop-response {integer}
            set note-ms-request {integer}
            set note-ms-response {integer}
            set pdu-notify-rej-request {integer}
            set pdu-notify-rej-response {integer}
            set pdu-notify-request {integer}
            set pdu-notify-response {integer}
            set ran-info {integer}
            set relocation-cancel-request {integer}
            set relocation-cancel-response {integer}
            set send-route-request {integer}
            set send-route-response {integer}
            set sgsn-context-ack {integer}
            set sgsn-context-request {integer}
            set sgsn-context-response {integer}
            set support-ext-hdr-notify {integer}
            set update-mbms-request {integer}
            set update-mbms-response {integer}
            set update-pdp-request {integer}
            set update-pdp-response {integer}
            set version-not-support {integer}
        end
        config message-rate-limit-v0
            Description: Message rate limiting for GTP version 0.
            set create-pdp-request {integer}
            set delete-pdp-request {integer}
            set echo-request {integer}
        end
        config message-rate-limit-v1
            Description: Message rate limiting for GTP version 1.
            set create-pdp-request {integer}
            set delete-pdp-request {integer}
            set echo-request {integer}
        end
        config message-rate-limit-v2
            Description: Message rate limiting for GTP version 2.
            set create-session-request {integer}
            set delete-session-request {integer}
            set echo-request {integer}
        end
        set min-message-length {integer}
        set miss-must-ie [allow|deny]
        set monitor-mode [enable|disable|...]
        set noip-filter [enable|disable]
        config noip-policy
            Description: No IP policy.
            edit <id>
                set action [allow|deny]
                set end {integer}
                set start {integer}
                set type [etsi|ietf]
            next
        end
        set out-of-state-ie [allow|deny]
        set out-of-state-message [allow|deny]
        config per-apn-shaper
            Description: Per APN shaper.
            edit <id>
                set apn {string}
                set rate-limit {integer}
                set version {integer}
            next
        end
        config policy
            Description: Policy.
            edit <id>
                set action [allow|deny]
                set apn-sel-mode {option1}, {option2}, ...
                set apnmember <name1>, <name2>, ...
                set imei {string}
                set imsi-prefix {string}
                set max-apn-restriction [all|public-1|...]
                set messages {option1}, {option2}, ...
                set msisdn-prefix {string}
                set rai {string}
                set rat-type {option1}, {option2}, ...
                set uli {string}
            next
        end
        set policy-filter [enable|disable]
        config policy-v2
            Description: Apply allow or deny action to each GTPv2-c packet.
            edit <id>
                set action [allow|deny]
                set apn-sel-mode {option1}, {option2}, ...
                set apnmember <name1>, <name2>, ...
                set imsi-prefix {string}
                set max-apn-restriction [all|public-1|...]
                set mei {string}
                set messages {option1}, {option2}, ...
                set msisdn-prefix {string}
                set rat-type {option1}, {option2}, ...
                set uli {string}
            next
        end
        set port-notify {integer}
        set rat-timeout-profile {string}
        set rate-limit-mode [per-profile|per-stream|...]
        set rate-limited-log [enable|disable]
        set rate-sampling-interval {integer}
        set remove-if-echo-expires [enable|disable]
        set remove-if-recovery-differ [enable|disable]
        set reserved-ie [allow|deny]
        set send-delete-when-timeout [enable|disable]
        set send-delete-when-timeout-v2 [enable|disable]
        set spoof-src-addr [allow|deny]
        set state-invalid-log [enable|disable]
        set sub-second-interval [0.5|0.25|...]
        set sub-second-sampling [enable|disable]
        set traffic-count-log [enable|disable]
        set tunnel-limit {integer}
        set tunnel-limit-log [enable|disable]
        set tunnel-timeout {integer}
        set unknown-version-action [allow|deny]
        set user-plane-message-rate-limit {integer}
        set warning-threshold {integer}
    next
end
```

## Parameters

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| ![Note](https://fortinetweb.s3.amazonaws.com/docs.fortinet.com/v2/resources/81ddec8e-6f95-11ef-8355-fa163e15d75b/images/9911fa13f24384a6af4ace702c05aa7d_Icon-Light-Bulb.png "Note") | This command is available for    |
|                                                                                                                                                                                      | model(s): FortiGate 3000D,       |
|                                                                                                                                                                                      | FortiGate 3500F, FortiGate       |
|                                                                                                                                                                                      | 3700D, FortiGate 3980E,          |
|                                                                                                                                                                                      | FortiGate 4400F.                 |
|                                                                                                                                                                                      |                                  |
|                                                                                                                                                                                      | It is not available for:         |
|                                                                                                                                                                                      | FortiGate 1000D, FortiGate       |
|                                                                                                                                                                                      | 1000F, FortiGate 1001F,          |
|                                                                                                                                                                                      | FortiGate 100F, FortiGate 101F,  |
|                                                                                                                                                                                      | FortiGate 1100E, FortiGate       |
|                                                                                                                                                                                      | 1101E, FortiGate 120G, FortiGate |
|                                                                                                                                                                                      | 121G, FortiGate 140E-POE,        |
|                                                                                                                                                                                      | FortiGate 140E, FortiGate 1800F, |
|                                                                                                                                                                                      | FortiGate 1801F, FortiGate       |
|                                                                                                                                                                                      | 2000E, FortiGate 200E, FortiGate |
|                                                                                                                                                                                      | 200F, FortiGate 201E, FortiGate  |
|                                                                                                                                                                                      | 201F, FortiGate 2200E, FortiGate |
|                                                                                                                                                                                      | 2201E, FortiGate 2500E,          |
|                                                                                                                                                                                      | FortiGate 2600F, FortiGate       |
|                                                                                                                                                                                      | 2601F, FortiGate 3000F,          |
|                                                                                                                                                                                      | FortiGate 3001F, FortiGate 300E, |
|                                                                                                                                                                                      | FortiGate 301E, FortiGate 3100D, |
|                                                                                                                                                                                      | FortiGate 3200D, FortiGate       |
|                                                                                                                                                                                      | 3200F, FortiGate 3201F,          |
|                                                                                                                                                                                      | FortiGate 3300E, FortiGate       |
|                                                                                                                                                                                      | 3301E, FortiGate 3400E,          |
|                                                                                                                                                                                      | FortiGate 3401E, FortiGate       |
|                                                                                                                                                                                      | 3501F, FortiGate 3600E,          |
|                                                                                                                                                                                      | FortiGate 3601E, FortiGate       |
|                                                                                                                                                                                      | 3700F, FortiGate 3701F,          |
|                                                                                                                                                                                      | FortiGate 3960E, FortiGate 400E  |
|                                                                                                                                                                                      | Bypass, FortiGate 400E,          |
|                                                                                                                                                                                      | FortiGate 400F, FortiGate 401E,  |
|                                                                                                                                                                                      | FortiGate 401F, FortiGate 40F    |
|                                                                                                                                                                                      | 3G4G, FortiGate 40F, FortiGate   |
|                                                                                                                                                                                      | 4200F, FortiGate 4201F,          |
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
|                                                                                                                                                                                      | 80F DSL, FortiGate 80F-POE,      |
|                                                                                                                                                                                      | FortiGate 80F, FortiGate         |
|                                                                                                                                                                                      | 81E-POE, FortiGate 81E,          |
|                                                                                                                                                                                      | FortiGate 81F-POE, FortiGate     |
|                                                                                                                                                                                      | 81F, FortiGate 900D, FortiGate   |
|                                                                                                                                                                                      | 900G, FortiGate 901G, FortiGate  |
|                                                                                                                                                                                      | 90G, FortiGate 91E, FortiGate    |
|                                                                                                                                                                                      | 91G, FortiGate VM for AWS,       |
|                                                                                                                                                                                      | FortiGate VM for Azure,          |
|                                                                                                                                                                                      | FortiGate VM64, FortiGateRugged  |
|                                                                                                                                                                                      | 60F 3G4G, FortiGateRugged 60F,   |
|                                                                                                                                                                                      | FortiGateRugged 70F 3G4G,        |
|                                                                                                                                                                                      | FortiGateRugged 70F, FortiWiFi   |
|                                                                                                                                                                                      | 40F 3G4G, FortiWiFi 40F,         |
|                                                                                                                                                                                      | FortiWiFi 60E DSLJ, FortiWiFi    |
|                                                                                                                                                                                      | 60E DSL, FortiWiFi 60E,          |
|                                                                                                                                                                                      | FortiWiFi 60F, FortiWiFi 61E,    |
|                                                                                                                                                                                      | FortiWiFi 61F, FortiWiFi 80F 2R  |
|                                                                                                                                                                                      | 3G4G DSL, FortiWiFi 80F 2R,      |
|                                                                                                                                                                                      | FortiWiFi 81F 2R 3G4G DSL,       |
|                                                                                                                                                                                      | FortiWiFi 81F 2R 3G4G-POE,       |
|                                                                                                                                                                                      | FortiWiFi 81F 2R-POE, FortiWiFi  |
|                                                                                                                                                                                      | 81F 2R.                          |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+

