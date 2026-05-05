# config system global

Configure global attributes.

## Syntax

```
config system global
    Description: Configure global attributes.
    set admin-ble-button [enable|disable]
    set admin-concurrent [enable|disable]
    set admin-console-timeout {integer}
    set admin-forticloud-sso-default-profile {string}
    set admin-forticloud-sso-login [enable|disable]
    set admin-host {string}
    set admin-hsts-max-age {integer}
    set admin-https-pki-required [enable|disable]
    set admin-https-redirect [enable|disable]
    set admin-https-ssl-banned-ciphers {option1}, {option2}, ...
    set admin-https-ssl-ciphersuites {option1}, {option2}, ...
    set admin-https-ssl-versions {option1}, {option2}, ...
    set admin-lockout-duration {integer}
    set admin-lockout-threshold {integer}
    set admin-login-max {integer}
    set admin-port {integer}
    set admin-reset-button [enable|disable]
    set admin-restrict-local [enable|disable]
    set admin-scp [enable|disable]
    set admin-server-cert {string}
    set admin-sport {integer}
    set admin-ssh-grace-time {integer}
    set admin-ssh-password [enable|disable]
    set admin-ssh-port {integer}
    set admin-ssh-v1 [enable|disable]
    set admin-telnet [enable|disable]
    set admin-telnet-port {integer}
    set admintimeout {integer}
    set airplane-mode [enable|disable]
    set alias {string}
    set allow-traffic-redirect [enable|disable]
    set anti-replay [disable|loose|...]
    set arp-max-entry {integer}
    set auth-cert {string}
    set auth-http-port {integer}
    set auth-https-port {integer}
    set auth-ike-saml-port {integer}
    set auth-keepalive [enable|disable]
    set auth-session-limit [block-new|logout-inactive]
    set auto-auth-extension-device [enable|disable]
    set autorun-log-fsck [enable|disable]
    set av-affinity {string}
    set av-failopen [pass|off|...]
    set av-failopen-session [enable|disable]
    set batch-cmdb [enable|disable]
    set bfd-affinity {string}
    set block-session-timer {integer}
    set br-fdb-max-entry {integer}
    set cert-chain-max {integer}
    set cfg-revert-timeout {integer}
    set cfg-save [automatic|manual|...]
    set check-protocol-header [loose|strict]
    set check-reset-range [strict|disable]
    set cli-audit-log [enable|disable]
    set cloud-communication [enable|disable]
    set clt-cert-req [enable|disable]
    set cmdbsvr-affinity {string}
    set cpu-use-threshold {integer}
    set csr-ca-attribute [enable|disable]
    set daily-restart [enable|disable]
    set default-service-source-port {user}
    set device-idle-timeout {integer}
    set dh-params [1024|1536|...]
    set dnsproxy-worker-count {integer}
    set early-tcp-npu-session [enable|disable]
    set edit-vdom-prompt [enable|disable]
    set extender-controller-reserved-network {ipv4-classnet-host}
    set failtime {integer}
    set faz-disk-buffer-size {integer}
    set fds-statistics [enable|disable]
    set fds-statistics-period {integer}
    set fgd-alert-subscription {option1}, {option2}, ...
    set forticarrier-bypass [enable|disable]
    set forticontroller-proxy [enable|disable]
    set forticontroller-proxy-port {integer}
    set forticonverter-config-upload [once|disable]
    set forticonverter-integration [enable|disable]
    set fortiextender [disable|enable]
    set fortiextender-data-port {integer}
    set fortiextender-discovery-lockdown [disable|enable]
    set fortiextender-provision-on-authorization [enable|disable]
    set fortiextender-vlan-mode [enable|disable]
    set fortigslb-integration [disable|enable]
    set fortiservice-port {integer}
    set fortitoken-cloud [enable|disable]
    set fortitoken-cloud-push-status [enable|disable]
    set fortitoken-cloud-sync-interval {integer}
    set gui-allow-incompatible-fabric-fgt [enable|disable]
    set gui-app-detection-sdwan [enable|disable]
    set gui-auto-upgrade-setup-warning [enable|disable]
    set gui-cdn-domain-override {string}
    set gui-cdn-usage [enable|disable]
    set gui-certificates [enable|disable]
    set gui-custom-language [enable|disable]
    set gui-date-format [yyyy/MM/dd|dd/MM/yyyy|...]
    set gui-date-time-source [system|browser]
    set gui-device-latitude {string}
    set gui-device-longitude {string}
    set gui-display-hostname [enable|disable]
    set gui-firmware-upgrade-warning [enable|disable]
    set gui-forticare-registration-setup-warning [enable|disable]
    set gui-fortigate-cloud-sandbox [enable|disable]
    set gui-ipv6 [enable|disable]
    set gui-local-out [enable|disable]
    set gui-replacement-message-groups [enable|disable]
    set gui-rest-api-cache [enable|disable]
    set gui-theme [jade|neutrino|...]
    set gui-wireless-opensecurity [enable|disable]
    set gui-workflow-management [enable|disable]
    set ha-affinity {string}
    set honor-df [enable|disable]
    set hostname {string}
    set hyper-scale-vdom-num {integer}
    set igmp-state-limit {integer}
    set interface-subnet-usage [disable|enable]
    set internal-switch-speed {option1}, {option2}, ...
    set internet-service-database [mini|standard|...]
    set internet-service-download-list <id1>, <id2>, ...
    set interval {integer}
    set ip-fragment-mem-thresholds {integer}
    set ip-src-port-range {user}
    set ips-affinity {string}
    set ipsec-asic-offload [enable|disable]
    set ipsec-ha-seqjump-rate {integer}
    set ipsec-hmac-offload [enable|disable]
    set ipsec-round-robin [enable|disable]
    set ipv6-accept-dad {integer}
    set ipv6-allow-anycast-probe [enable|disable]
    set ipv6-allow-local-in-slient-drop [enable|disable]
    set ipv6-allow-multicast-probe [enable|disable]
    set ipv6-allow-traffic-redirect [enable|disable]
    set irq-time-accounting [auto|force]
    set language [english|french|...]
    set ldapconntimeout {integer}
    set legacy-poe-device-support [enable|disable]
    set lldp-reception [enable|disable]
    set lldp-transmission [enable|disable]
    set log-single-cpu-high [enable|disable]
    set log-ssl-connection [enable|disable]
    set log-uuid-address [enable|disable]
    set login-timestamp [enable|disable]
    set long-vdom-name [enable|disable]
    set management-ip {string}
    set management-port {integer}
    set management-port-use-admin-sport [enable|disable]
    set management-vdom {string}
    set max-route-cache-size {integer}
    set memory-use-threshold-extreme {integer}
    set memory-use-threshold-green {integer}
    set memory-use-threshold-red {integer}
    set miglog-affinity {string}
    set miglogd-children {integer}
    set multi-factor-authentication [optional|mandatory]
    set ndp-max-entry {integer}
    set per-user-bal [enable|disable]
    set pmtu-discovery [enable|disable]
    set policy-auth-concurrent {integer}
    set post-login-banner [disable|enable]
    set pre-login-banner [enable|disable]
    set private-data-encryption [disable|enable]
    set proxy-and-explicit-proxy [enable|disable]
    set proxy-auth-lifetime [enable|disable]
    set proxy-auth-lifetime-timeout {integer}
    set proxy-auth-timeout {integer}
    set proxy-cert-use-mgmt-vdom [enable|disable]
    set proxy-hardware-acceleration [disable|enable]
    set proxy-keep-alive-mode [session|traffic|...]
    set proxy-re-authentication-time {integer}
    set proxy-resource-mode [enable|disable]
    set proxy-worker-count {integer}
    set purdue-level [1|1.5|...]
    set quic-ack-thresold {integer}
    set quic-congestion-control-algo [cubic|bbr|...]
    set quic-max-datagram-size {integer}
    set quic-pmtud [enable|disable]
    set quic-tls-handshake-timeout {integer}
    set quic-udp-payload-size-shaping-per-cid [enable|disable]
    set radius-port {integer}
    set reboot-upon-config-restore [enable|disable]
    set refresh {integer}
    set remoteauthtimeout {integer}
    set reset-sessionless-tcp [enable|disable]
    set restart-time {user}
    set revision-backup-on-logout [enable|disable]
    set revision-image-auto-backup [enable|disable]
    set scanunit-count {integer}
    set security-rating-result-submission [enable|disable]
    set security-rating-run-on-schedule [enable|disable]
    set send-pmtu-icmp [enable|disable]
    set sflowd-max-children-num {integer}
    set show-backplane-intf [enable|disable]
    set snat-route-change [enable|disable]
    set special-file-23-support [disable|enable]
    set speedtest-server [enable|disable]
    set speedtestd-ctrl-port {integer}
    set speedtestd-server-port {integer}
    set split-port {string}
    config split-port-mode
        Description: Configure split port mode of ports.
        edit <interface>
            set split-mode [disable|4x10G|...]
        next
    end
    set ssd-trim-date {integer}
    set ssd-trim-freq [never|hourly|...]
    set ssd-trim-hour {integer}
    set ssd-trim-min {integer}
    set ssd-trim-weekday [sunday|monday|...]
    set ssh-enc-algo {option1}, {option2}, ...
    set ssh-hostkey {user}
    set ssh-hostkey-algo {option1}, {option2}, ...
    set ssh-hostkey-override [disable|enable]
    set ssh-hostkey-password {password}
    set ssh-kex-algo {option1}, {option2}, ...
    set ssh-mac-algo {option1}, {option2}, ...
    set ssl-min-proto-version [SSLv3|TLSv1|...]
    set ssl-static-key-ciphers [enable|disable]
    set sslvpn-max-worker-count {integer}
    set sslvpn-web-mode [enable|disable]
    set strict-dirty-session-check [enable|disable]
    set strong-crypto [enable|disable]
    set switch-controller [disable|enable]
    set switch-controller-reserved-network {ipv4-classnet-host}
    set sys-perf-log-interval {integer}
    set syslog-affinity {string}
    set tcp-halfclose-timer {integer}
    set tcp-halfopen-timer {integer}
    set tcp-option [enable|disable]
    set tcp-rst-timer {integer}
    set tcp-timewait-timer {integer}
    set tftp [enable|disable]
    set timezone {string}
    set traffic-priority [tos|dscp]
    set traffic-priority-level [low|medium|...]
    set two-factor-email-expiry {integer}
    set two-factor-fac-expiry {integer}
    set two-factor-ftk-expiry {integer}
    set two-factor-ftm-expiry {integer}
    set two-factor-sms-expiry {integer}
    set udp-idle-timer {integer}
    set url-filter-affinity {string}
    set url-filter-count {integer}
    set user-device-store-max-devices {integer}
    set user-device-store-max-unified-mem {integer}
    set user-device-store-max-users {integer}
    set vdom-mode [no-vdom|multi-vdom]
    set vip-arp-range [unlimited|restricted]
    set virtual-switch-vlan [enable|disable]
    set vpn-ems-sn-check [enable|disable]
    set wad-affinity {string}
    set wad-csvc-cs-count {integer}
    set wad-csvc-db-count {integer}
    set wad-memory-change-granularity {integer}
    set wad-restart-end-time {user}
    set wad-restart-mode [none|time|...]
    set wad-restart-start-time {user}
    set wad-source-affinity [disable|enable]
    set wad-worker-count {integer}
    set wifi-ca-certificate {string}
    set wifi-certificate {string}
    set wimax-4g-usb [enable|disable]
    set wireless-controller [enable|disable]
    set wireless-controller-port {integer}
    set wireless-mode [ac|client|...]
end
```

## Parameters

+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| Parameter                                | Description                       | Type                        | Size                        | Default                              |
+==========================================+===================================+=============================+=============================+======================================+
| admin-ble-button \*                      | press the BLE button can enable   | option                      | \-                          | enable                               |
|                                          | BLE function                      |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Press the BLE button can enable BLE function           |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Press the BLE button cannot enable BLE function        |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| admin-concurrent                         | Enable/disable concurrent         | option                      | \-                          | enable                               |
|                                          | administrator logins. Use         |                             |                             |                                      |
|                                          | policy-auth-concurrent for        |                             |                             |                                      |
|                                          | firewall authenticated users.     |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable admin concurrent login.                         |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable admin concurrent login.                        |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| admin-console-timeout                    | Console login timeout that        | integer                     | Minimum value: 15 Maximum   | 0                                    |
|                                          | overrides the admin timeout       |                             | value: 300                  |                                      |
|                                          | value.                            |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| admin-forticloud-sso-default-profile     | Override access profile.          | string                      | Maximum length: 35          |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| admin-forticloud-sso-login               | Enable/disable FortiCloud admin   | option                      | \-                          | disable                              |
|                                          | login via SSO.                    |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable FortiCloud admin login via SSO.                 |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable FortiCloud admin login via SSO.                |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| admin-host                               | Administrative host for HTTP and  | string                      | Maximum length: 255         |                                      |
|                                          | HTTPS. When set, will be used in  |                             |                             |                                      |
|                                          | lieu of the client\'s Host header |                             |                             |                                      |
|                                          | for any redirection.              |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| admin-hsts-max-age                       | HTTPS Strict-Transport-Security   | integer                     | Minimum value: 0 Maximum    | 15552000                             |
|                                          | header max-age in seconds. A      |                             | value: 2147483647           |                                      |
|                                          | value of 0 will reset any HSTS    |                             |                             |                                      |
|                                          | records in the browser.When       |                             |                             |                                      |
|                                          | admin-https-redirect is disabled  |                             |                             |                                      |
|                                          | the header max-age will be 0.     |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| admin-https-pki-required                 | Enable/disable admin login        | option                      | \-                          | disable                              |
|                                          | method. Enable to force           |                             |                             |                                      |
|                                          | administrators to provide a valid |                             |                             |                                      |
|                                          | certificate to log in if PKI is   |                             |                             |                                      |
|                                          | enabled. Disable to allow         |                             |                             |                                      |
|                                          | administrators to log in with a   |                             |                             |                                      |
|                                          | certificate or password.          |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Admin users must provide a valid certificate when PKI  |                                                             |
|                                          | |             | is enabled for HTTPS admin access.                     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Admin users can login by providing a valid certificate |                                                             |
|                                          | |             | or password.                                           |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| admin-https-redirect                     | Enable/disable redirection of     | option                      | \-                          | enable                               |
|                                          | HTTP administration access to     |                             |                             |                                      |
|                                          | HTTPS.                            |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable redirecting HTTP administration access to       |                                                             |
|                                          | |             | HTTPS.                                                 |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable redirecting HTTP administration access to      |                                                             |
|                                          | |             | HTTPS.                                                 |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| admin-https-ssl-banned-ciphers           | Select one or more cipher         | option                      | \-                          |                                      |
|                                          | technologies that cannot be used  |                             |                             |                                      |
|                                          | in GUI HTTPS negotiations. Only   |                             |                             |                                      |
|                                          | applies to TLS 1.2 and below.     |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *RSA*       | Ban the use of cipher suites using RSA key.            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *DHE*       | Ban the use of cipher suites using authenticated       |                                                             |
|                                          | |             | ephemeral DH key agreement.                            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *ECDHE*     | Ban the use of cipher suites using authenticated       |                                                             |
|                                          | |             | ephemeral ECDH key agreement.                          |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *DSS*       | Ban the use of cipher suites using DSS authentication. |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *ECDSA*     | Ban the use of cipher suites using ECDSA               |                                                             |
|                                          | |             | authentication.                                        |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *AES*       | Ban the use of cipher suites using either 128 or 256   |                                                             |
|                                          | |             | bit AES.                                               |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *AESGCM*    | Ban the use of cipher suites using AES in Galois       |                                                             |
|                                          | |             | Counter Mode (GCM).                                    |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *CAMELLIA*  | Ban the use of cipher suites using either 128 or 256   |                                                             |
|                                          | |             | bit CAMELLIA.                                          |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *3DES*      | Ban the use of cipher suites using triple DES.         |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *SHA1*      | Ban the use of cipher suites using HMAC-SHA1.          |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *SHA256*    | Ban the use of cipher suites using HMAC-SHA256.        |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *SHA384*    | Ban the use of cipher suites using HMAC-SHA384.        |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *STATIC*    | Ban the use of cipher suites using static keys.        |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *CHACHA20*  | Ban the use of cipher suites using ChaCha20.           |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *ARIA*      | Ban the use of cipher suites using ARIA.               |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *AESCCM*    | Ban the use of cipher suites using AESCCM.             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| admin-https-ssl-ciphersuites             | Select one or more TLS 1.3        | option                      | \-                          | TLS-AES-128-GCM-SHA256               |
|                                          | ciphersuites to enable. Does not  |                             |                             | TLS-AES-256-GCM-SHA384               |
|                                          | affect ciphers in TLS 1.2 and     |                             |                             | TLS-CHACHA20-POLY1305-SHA256         |
|                                          | below. At least one must be       |                             |                             |                                      |
|                                          | enabled. To disable all, remove   |                             |                             |                                      |
|                                          | TLS1.3 from                       |                             |                             |                                      |
|                                          | admin-https-ssl-versions.         |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +--------------------------------+--------------------------------------------------------+                                          |
|                                          | | Option                         | Description                                            |                                          |
|                                          | +================================+========================================================+                                          |
|                                          | | *TLS-AES-128-GCM-SHA256*       | Enable TLS-AES-128-GCM-SHA256 in TLS 1.3.              |                                          |
|                                          | +--------------------------------+--------------------------------------------------------+                                          |
|                                          | | *TLS-AES-256-GCM-SHA384*       | Enable TLS-AES-256-GCM-SHA384 in TLS 1.3.              |                                          |
|                                          | +--------------------------------+--------------------------------------------------------+                                          |
|                                          | | *TLS-CHACHA20-POLY1305-SHA256* | Enable TLS-CHACHA20-POLY1305-SHA256 in TLS 1.3.        |                                          |
|                                          | +--------------------------------+--------------------------------------------------------+                                          |
|                                          | | *TLS-AES-128-CCM-SHA256*       | Enable TLS-AES-128-CCM-SHA256 in TLS 1.3.              |                                          |
|                                          | +--------------------------------+--------------------------------------------------------+                                          |
|                                          | | *TLS-AES-128-CCM-8-SHA256*     | Enable TLS-AES-128-CCM-8-SHA256 in TLS 1.3.            |                                          |
|                                          | +--------------------------------+--------------------------------------------------------+                                          |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| admin-https-ssl-versions                 | Allowed TLS versions for web      | option                      | \-                          | tlsv1-2 tlsv1-3                      |
|                                          | administration.                   |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *tlsv1-1*   | TLS 1.1.                                               |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *tlsv1-2*   | TLS 1.2.                                               |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *tlsv1-3*   | TLS 1.3.                                               |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| admin-lockout-duration                   | Amount of time in seconds that an | integer                     | Minimum value: 1 Maximum    | 60                                   |
|                                          | administrator account is locked   |                             | value: 2147483647           |                                      |
|                                          | out after reaching the            |                             |                             |                                      |
|                                          | admin-lockout-threshold for       |                             |                             |                                      |
|                                          | repeated failed login attempts.   |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| admin-lockout-threshold                  | Number of failed login attempts   | integer                     | Minimum value: 1 Maximum    | 3                                    |
|                                          | before an administrator account   |                             | value: 10                   |                                      |
|                                          | is locked out for the             |                             |                             |                                      |
|                                          | admin-lockout-duration.           |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| admin-login-max                          | Maximum number of administrators  | integer                     | Minimum value: 1 Maximum    | 100                                  |
|                                          | who can be logged in at the same  |                             | value: 100                  |                                      |
|                                          | time.                             |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| admin-port                               | Administrative access port for    | integer                     | Minimum value: 1 Maximum    | 80                                   |
|                                          | HTTP..                            |                             | value: 65535                |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| admin-reset-button \*                    | Press the reset button can reset  | option                      | \-                          | enable                               |
|                                          | to factory default.               |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | press the reset button can reset to factory default    |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | press the reset button cannot reset to factory default |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| admin-restrict-local                     | Enable/disable local admin        | option                      | \-                          | disable                              |
|                                          | authentication restriction when   |                             |                             |                                      |
|                                          | remote authenticator is up and    |                             |                             |                                      |
|                                          | running.                          |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable local admin authentication restriction.         |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable local admin authentication restriction.        |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| admin-scp                                | Enable/disable SCP support for    | option                      | \-                          | disable                              |
|                                          | system configuration backup,      |                             |                             |                                      |
|                                          | restore, and firmware file        |                             |                             |                                      |
|                                          | upload.                           |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable SCP support for system configuration backup,    |                                                             |
|                                          | |             | restore, and firmware file upload.                     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable SCP support for system configuration backup,   |                                                             |
|                                          | |             | restore, and firmware file upload.                     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| admin-server-cert                        | Server certificate that the       | string                      | Maximum length: 35          | Fortinet_GUI_Server                  |
|                                          | FortiGate uses for HTTPS          |                             |                             |                                      |
|                                          | administrative connections.       |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| admin-sport                              | Administrative access port for    | integer                     | Minimum value: 1 Maximum    | 443                                  |
|                                          | HTTPS..                           |                             | value: 65535                |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| admin-ssh-grace-time                     | Maximum time in seconds permitted | integer                     | Minimum value: 10 Maximum   | 120                                  |
|                                          | between making an SSH connection  |                             | value: 3600                 |                                      |
|                                          | to the FortiGate unit and         |                             |                             |                                      |
|                                          | authenticating.                   |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| admin-ssh-password                       | Enable/disable password           | option                      | \-                          | enable                               |
|                                          | authentication for SSH admin      |                             |                             |                                      |
|                                          | access.                           |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable password authentication for SSH admin access.   |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable password authentication for SSH admin access.  |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| admin-ssh-port                           | Administrative access port for    | integer                     | Minimum value: 1 Maximum    | 22                                   |
|                                          | SSH..                             |                             | value: 65535                |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| admin-ssh-v1                             | Enable/disable SSH v1             | option                      | \-                          | disable                              |
|                                          | compatibility.                    |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable SSH v1 compatibility.                           |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable SSH v1 compatibility.                          |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| admin-telnet                             | Enable/disable TELNET service.    | option                      | \-                          | enable                               |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable TELNET service.                                 |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable TELNET service.                                |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| admin-telnet-port                        | Administrative access port for    | integer                     | Minimum value: 1 Maximum    | 23                                   |
|                                          | TELNET..                          |                             | value: 65535                |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| admintimeout                             | Number of minutes before an idle  | integer                     | Minimum value: 1 Maximum    | 5                                    |
|                                          | administrator session times out.  |                             | value: 480                  |                                      |
|                                          | A shorter idle timeout is more    |                             |                             |                                      |
|                                          | secure.                           |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| airplane-mode \*                         | Enable/disable airplane mode.     | option                      | \-                          | disable                              |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Shutdown RF signal of internal MODEM and Bluetooth     |                                                             |
|                                          | |             | module.                                                |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Enable RF signal of internal MODEM and Bluetooth       |                                                             |
|                                          | |             | module.                                                |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| alias                                    | Alias for your FortiGate unit.    | string                      | Maximum length: 35          |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| allow-traffic-redirect                   | Disable to prevent traffic with   | option                      | \-                          | enable                               |
|                                          | same local ingress and egress     |                             |                             |                                      |
|                                          | interface from being forwarded    |                             |                             |                                      |
|                                          | without policy check.             |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable allow traffic redirect.                         |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable allow traffic redirect.                        |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| anti-replay                              | Level of checking for packet      | option                      | \-                          | strict                               |
|                                          | replay and TCP sequence checking. |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *disable*   | Disable anti-replay check.                             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *loose*     | Loose anti-replay check.                               |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *strict*    | Strict anti-replay check.                              |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| arp-max-entry                            | Maximum number of dynamically     | integer                     | Minimum value: 131072       | 131072                               |
|                                          | learned MAC addresses that can be |                             | Maximum value: 2147483647   |                                      |
|                                          | added to the ARP table.           |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| auth-cert                                | Server certificate that the       | string                      | Maximum length: 35          | Fortinet_Factory                     |
|                                          | FortiGate uses for HTTPS firewall |                             |                             |                                      |
|                                          | authentication connections.       |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| auth-http-port                           | User authentication HTTP port..   | integer                     | Minimum value: 1 Maximum    | 1000                                 |
|                                          |                                   |                             | value: 65535                |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| auth-https-port                          | User authentication HTTPS port..  | integer                     | Minimum value: 1 Maximum    | 1003                                 |
|                                          |                                   |                             | value: 65535                |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| auth-ike-saml-port                       | User IKE SAML authentication      | integer                     | Minimum value: 0 Maximum    | 1001                                 |
|                                          | port.                             |                             | value: 65535                |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| auth-keepalive                           | Enable to prevent user            | option                      | \-                          | disable                              |
|                                          | authentication sessions from      |                             |                             |                                      |
|                                          | timing out when idle.             |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable use of keep alive to extend authentication.     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable use of keep alive to extend authentication.    |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| auth-session-limit                       | Action to take when the number of | option                      | \-                          | block-new                            |
|                                          | allowed user authenticated        |                             |                             |                                      |
|                                          | sessions is reached.              |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------------+--------------------------------------------------------+                                                       |
|                                          | | Option            | Description                                            |                                                       |
|                                          | +===================+========================================================+                                                       |
|                                          | | *block-new*       | Block new user authentication attempts.                |                                                       |
|                                          | +-------------------+--------------------------------------------------------+                                                       |
|                                          | | *logout-inactive* | Logout the most inactive user authenticated sessions.  |                                                       |
|                                          | +-------------------+--------------------------------------------------------+                                                       |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| auto-auth-extension-device               | Enable/disable automatic          | option                      | \-                          | enable                               |
|                                          | authorization of dedicated        |                             |                             |                                      |
|                                          | Fortinet extension devices.       |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable automatic authorization of dedicated Fortinet   |                                                             |
|                                          | |             | extension device globally.                             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable automatic authorization of dedicated Fortinet  |                                                             |
|                                          | |             | extension device globally.                             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| autorun-log-fsck                         | Enable/disable automatic log      | option                      | \-                          | disable                              |
|                                          | partition check after ungraceful  |                             |                             |                                      |
|                                          | shutdown.                         |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable automatic log partition check after ungraceful  |                                                             |
|                                          | |             | shutdown.                                              |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable automatic log partition check after ungraceful |                                                             |
|                                          | |             | shutdown.                                              |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| av-affinity \*                           | Affinity setting for AV scanning  | string                      | Maximum length: 79          | 0                                    |
|                                          | (hexadecimal value up to 256 bits |                             |                             |                                      |
|                                          | in the format of                  |                             |                             |                                      |
|                                          | xxxxxxxxxxxxxxxx).                |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| av-failopen                              | Set the action to take if the     | option                      | \-                          | pass                                 |
|                                          | FortiGate is running low on       |                             |                             |                                      |
|                                          | memory or the proxy connection    |                             |                             |                                      |
|                                          | limit has been reached.           |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *pass*      | Bypass the antivirus system when memory is low.        |                                                             |
|                                          | |             | Antivirus scanning resumes when the low memory         |                                                             |
|                                          | |             | condition is resolved.                                 |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *off*       | Stop accepting new AV sessions when entering conserve  |                                                             |
|                                          | |             | mode, but continue to process current active sessions. |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *one-shot*  | Bypass the antivirus system when memory is low.        |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| av-failopen-session                      | When enabled and a proxy for a    | option                      | \-                          | disable                              |
|                                          | protocol runs out of room in its  |                             |                             |                                      |
|                                          | session table, that protocol goes |                             |                             |                                      |
|                                          | into failopen mode and enacts the |                             |                             |                                      |
|                                          | action specified by av-failopen.  |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable AV fail open session option.                    |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable AV fail open session option.                   |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| batch-cmdb                               | Enable/disable batch mode,        | option                      | \-                          | enable                               |
|                                          | allowing you to enter a series of |                             |                             |                                      |
|                                          | CLI commands that will execute as |                             |                             |                                      |
|                                          | a group once they are loaded.     |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable batch mode to execute in CMDB server.           |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable batch mode to execute in CMDB server.          |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| bfd-affinity                             | Affinity setting for BFD daemon   | string                      | Maximum length: 79          | 1                                    |
|                                          | (hexadecimal value up to 256 bits |                             |                             |                                      |
|                                          | in the format of                  |                             |                             |                                      |
|                                          | xxxxxxxxxxxxxxxx).                |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| block-session-timer                      | Duration in seconds for blocked   | integer                     | Minimum value: 1 Maximum    | 30                                   |
|                                          | sessions.                         |                             | value: 300                  |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| br-fdb-max-entry                         | Maximum number of bridge          | integer                     | Minimum value: 8192 Maximum | 8192                                 |
|                                          | forwarding database (FDB)         |                             | value: 2147483647           |                                      |
|                                          | entries.                          |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| cert-chain-max                           | Maximum number of certificates    | integer                     | Minimum value: 1 Maximum    | 8                                    |
|                                          | that can be traversed in a        |                             | value: 2147483647           |                                      |
|                                          | certificate chain.                |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| cfg-revert-timeout                       | Time-out for reverting to the     | integer                     | Minimum value: 10 Maximum   | 600                                  |
|                                          | last saved configuration..        |                             | value: 4294967295           |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| cfg-save                                 | Configuration file save mode for  | option                      | \-                          | automatic                            |
|                                          | CLI changes.                      |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *automatic* | Automatically save config.                             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *manual*    | Manually save config.                                  |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *revert*    | Manually save config and revert the config when        |                                                             |
|                                          | |             | timeout.                                               |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| check-protocol-header                    | Level of checking performed on    | option                      | \-                          | loose                                |
|                                          | protocol headers. Strict checking |                             |                             |                                      |
|                                          | is more thorough but may affect   |                             |                             |                                      |
|                                          | performance. Loose checking is OK |                             |                             |                                      |
|                                          | in most cases.                    |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *loose*     | Check protocol header loosely.                         |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *strict*    | Check protocol header strictly.                        |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| check-reset-range                        | Configure ICMP error message      | option                      | \-                          | disable                              |
|                                          | verification. You can either      |                             |                             |                                      |
|                                          | apply strict RST range checking   |                             |                             |                                      |
|                                          | or disable it.                    |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *strict*    | Check RST range strictly.                              |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable RST range check.                               |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| cli-audit-log                            | Enable/disable CLI audit log.     | option                      | \-                          | disable                              |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable CLI audit log.                                  |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable CLI audit log.                                 |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| cloud-communication                      | Enable/disable all cloud          | option                      | \-                          | enable                               |
|                                          | communication.                    |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Allow cloud communication.                             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable all cloud-related settings.                    |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| clt-cert-req                             | Enable/disable requiring          | option                      | \-                          | disable                              |
|                                          | administrators to have a client   |                             |                             |                                      |
|                                          | certificate to log into the GUI   |                             |                             |                                      |
|                                          | using HTTPS.                      |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable require client certificate for GUI login.       |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable require client certificate for GUI login.      |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| cmdbsvr-affinity                         | Affinity setting for cmdbsvr      | string                      | Maximum length: 79          | 1                                    |
|                                          | (hexadecimal value up to 256 bits |                             |                             |                                      |
|                                          | in the format of                  |                             |                             |                                      |
|                                          | xxxxxxxxxxxxxxxx).                |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| cpu-use-threshold                        | Threshold at which CPU usage is   | integer                     | Minimum value: 50 Maximum   | 90                                   |
|                                          | reported.                         |                             | value: 99                   |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| csr-ca-attribute                         | Enable/disable the CA attribute   | option                      | \-                          | enable                               |
|                                          | in certificates. Some CA servers  |                             |                             |                                      |
|                                          | reject CSRs that have the CA      |                             |                             |                                      |
|                                          | attribute.                        |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable CA attribute in CSR.                            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable CA attribute in CSR.                           |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| daily-restart                            | Enable/disable daily restart of   | option                      | \-                          | disable                              |
|                                          | FortiGate unit. Use the           |                             |                             |                                      |
|                                          | restart-time option to set the    |                             |                             |                                      |
|                                          | time of day for the restart.      |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable daily reboot of the FortiGate.                  |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable daily reboot of the FortiGate.                 |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| default-service-source-port              | Default service source port       | user                        | Not Specified               |                                      |
|                                          | range.                            |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| device-idle-timeout                      | Time in seconds that a device     | integer                     | Minimum value: 30 Maximum   | 300                                  |
|                                          | must be idle to automatically log |                             | value: 31536000             |                                      |
|                                          | the device user out..             |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| dh-params                                | Number of bits to use in the      | option                      | \-                          | 2048                                 |
|                                          | Diffie-Hellman exchange for       |                             |                             |                                      |
|                                          | HTTPS/SSH protocols.              |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *1024*      | 1024 bits.                                             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *1536*      | 1536 bits.                                             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *2048*      | 2048 bits.                                             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *3072*      | 3072 bits.                                             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *4096*      | 4096 bits.                                             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *6144*      | 6144 bits.                                             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *8192*      | 8192 bits.                                             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| dnsproxy-worker-count                    | DNS proxy worker count. For a     | integer                     | Minimum value: 1 Maximum    | 1                                    |
|                                          | FortiGate with multiple logical   |                             | value: 8 \*\*               |                                      |
|                                          | CPUs, you can set the DNS process |                             |                             |                                      |
|                                          | number from 1 to the number of    |                             |                             |                                      |
|                                          | logical CPUs.                     |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| early-tcp-npu-session                    | Enable/disable early TCP NPU      | option                      | \-                          | disable                              |
|                                          | session.                          |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable early TCP NPU session in order to guarantee     |                                                             |
|                                          | |             | packet order of 3-way handshake.                       |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable early TCP NPU session in order to guarantee    |                                                             |
|                                          | |             | packet order of 3-way handshake.                       |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| edit-vdom-prompt \*                      | Enable/disable edit new VDOM      | option                      | \-                          | disable                              |
|                                          | prompt.                           |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable edit new VDOM prompt.                           |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable edit new VDOM prompt.                          |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| extender-controller-reserved-network     | Configure reserved network subnet | ipv4-classnet-host          | Not Specified               | 10.252.0.1 255.255.0.0               |
|                                          | for managed LAN extension         |                             |                             |                                      |
|                                          | FortiExtender units. This is      |                             |                             |                                      |
|                                          | available when the FortiExtender  |                             |                             |                                      |
|                                          | daemon is running.                |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| failtime                                 | Fail-time for server lost.        | integer                     | Minimum value: 0 Maximum    | 5                                    |
|                                          |                                   |                             | value: 4294967295           |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| faz-disk-buffer-size                     | Maximum disk buffer size to       | integer                     | Minimum value: 0 Maximum    | 0                                    |
|                                          | temporarily store logs destined   |                             | value: 214748364            |                                      |
|                                          | for FortiAnalyzer. To be used in  |                             |                             |                                      |
|                                          | the event that FortiAnalyzer is   |                             |                             |                                      |
|                                          | unavailable.                      |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| fds-statistics                           | Enable/disable sending IPS,       | option                      | \-                          | enable                               |
|                                          | Application Control, and          |                             |                             |                                      |
|                                          | AntiVirus data to FortiGuard.     |                             |                             |                                      |
|                                          | This data is used to improve      |                             |                             |                                      |
|                                          | FortiGuard services and is not    |                             |                             |                                      |
|                                          | shared with external parties and  |                             |                             |                                      |
|                                          | is protected by Fortinet\'s       |                             |                             |                                      |
|                                          | privacy policy.                   |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable FortiGuard statistics.                          |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable FortiGuard statistics.                         |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| fds-statistics-period                    | FortiGuard statistics collection  | integer                     | Minimum value: 1 Maximum    | 60                                   |
|                                          | period in minutes..               |                             | value: 1440                 |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| fgd-alert-subscription                   | Type of alert to retrieve from    | option                      | \-                          |                                      |
|                                          | FortiGuard.                       |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +--------------------+--------------------------------------------------------+                                                      |
|                                          | | Option             | Description                                            |                                                      |
|                                          | +====================+========================================================+                                                      |
|                                          | | *advisory*         | Retrieve FortiGuard advisories, report and news        |                                                      |
|                                          | |                    | alerts.                                                |                                                      |
|                                          | +--------------------+--------------------------------------------------------+                                                      |
|                                          | | *latest-threat*    | Retrieve latest FortiGuard threats alerts.             |                                                      |
|                                          | +--------------------+--------------------------------------------------------+                                                      |
|                                          | | *latest-virus*     | Retrieve latest FortiGuard virus alerts.               |                                                      |
|                                          | +--------------------+--------------------------------------------------------+                                                      |
|                                          | | *latest-attack*    | Retrieve latest FortiGuard attack alerts.              |                                                      |
|                                          | +--------------------+--------------------------------------------------------+                                                      |
|                                          | | *new-antivirus-db* | Retrieve FortiGuard AV database release alerts.        |                                                      |
|                                          | +--------------------+--------------------------------------------------------+                                                      |
|                                          | | *new-attack-db*    | Retrieve FortiGuard IPS database release alerts.       |                                                      |
|                                          | +--------------------+--------------------------------------------------------+                                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| forticarrier-bypass \*                   | Enable/disable                    | option                      | \-                          | disable                              |
|                                          | forticarrier-bypass.              |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable FortiCarrier bypass.                            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable FortiCarrier bypass.                           |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| forticontroller-proxy \*                 | Enable/disable FortiController    | option                      | \-                          | enable                               |
|                                          | proxy.                            |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable setting.                                        |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable setting.                                       |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| forticontroller-proxy-port \*            | FortiController proxy port.       | integer                     | Minimum value: 1024 Maximum | 11133                                |
|                                          |                                   |                             | value: 49150                |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| forticonverter-config-upload             | Enable/disable config upload to   | option                      | \-                          | disable                              |
|                                          | FortiConverter.                   |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *once*      | Enable one-time config upload to FortiConverter.       |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable config upload to FortiConverter.               |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| forticonverter-integration               | Enable/disable FortiConverter     | option                      | \-                          | disable                              |
|                                          | integration service.              |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable FortiConverter integration service.             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable FortiConverter integration service.            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| fortiextender                            | Enable/disable FortiExtender.     | option                      | \-                          | disable \*\*                         |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *disable*   | Disable FortiExtender controller.                      |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *enable*    | Enable FortiExtender controller.                       |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| fortiextender-data-port                  | FortiExtender data port.          | integer                     | Minimum value: 1024 Maximum | 25246                                |
|                                          |                                   |                             | value: 49150                |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| fortiextender-discovery-lockdown         | Enable/disable FortiExtender      | option                      | \-                          | disable                              |
|                                          | CAPWAP lockdown.                  |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *disable*   | Unlock down new FortiExtender device discovery.        |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *enable*    | Lock down new FortiExtender device discovery.          |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| fortiextender-provision-on-authorization | Enable/disable automatic          | option                      | \-                          | disable                              |
|                                          | provisioning of latest            |                             |                             |                                      |
|                                          | FortiExtender firmware on         |                             |                             |                                      |
|                                          | authorization.                    |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable FortiExtender firmware provision on             |                                                             |
|                                          | |             | authorization.                                         |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable FortiExtender firmware provision on            |                                                             |
|                                          | |             | authorization.                                         |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| fortiextender-vlan-mode                  | Enable/disable FortiExtender VLAN | option                      | \-                          | disable                              |
|                                          | mode.                             |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable FortiExtender VLAN mode.                        |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable FortiExtender VLAN mode.                       |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| fortigslb-integration                    | Enable/disable integration with   | option                      | \-                          | disable                              |
|                                          | the FortiGSLB cloud service.      |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *disable*   | Disable VIP and ZTNA server integration with the       |                                                             |
|                                          | |             | FortiGSLB cloud service.                               |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *enable*    | Enable VIP and ZTNA server integration with the        |                                                             |
|                                          | |             | FortiGSLB cloud service.                               |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| fortiservice-port                        | FortiService port. Used by        | integer                     | Minimum value: 1 Maximum    | 8013                                 |
|                                          | FortiClient endpoint compliance.  |                             | value: 65535                |                                      |
|                                          | Older versions of FortiClient     |                             |                             |                                      |
|                                          | used a different port.            |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| fortitoken-cloud                         | Enable/disable FortiToken Cloud   | option                      | \-                          | enable                               |
|                                          | service.                          |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable FortiToken Cloud service.                       |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable FortiToken Cloud service.                      |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| fortitoken-cloud-push-status             | Enable/disable FTM push service   | option                      | \-                          | enable                               |
|                                          | of FortiToken Cloud.              |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable FTM push service of FortiToken Cloud.           |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable FTM push service of FortiToken Cloud.          |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| fortitoken-cloud-sync-interval           | Interval in which to clean up     | integer                     | Minimum value: 0 Maximum    | 24                                   |
|                                          | remote users in FortiToken Cloud. |                             | value: 336                  |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| gui-allow-incompatible-fabric-fgt        | Enable/disable Allow FGT with     | option                      | \-                          | disable                              |
|                                          | incompatible firmware to be       |                             |                             |                                      |
|                                          | treated as compatible in security |                             |                             |                                      |
|                                          | fabric on the GUI. May cause      |                             |                             |                                      |
|                                          | unexpected error.                 |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Display the feature in GUI.                            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Do not display the feature in GUI.                     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| gui-app-detection-sdwan                  | Enable/disable Allow              | option                      | \-                          | disable                              |
|                                          | app-detection based SD-WAN.       |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Display the feature in GUI.                            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Do not display the feature in GUI.                     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| gui-auto-upgrade-setup-warning           | Enable/disable the automatic      | option                      | \-                          | enable                               |
|                                          | patch upgrade setup prompt on the |                             |                             |                                      |
|                                          | GUI.                              |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Display the feature in GUI.                            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Do not display the feature in GUI.                     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| gui-cdn-domain-override                  | Domain of CDN server.             | string                      | Maximum length: 255         |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| gui-cdn-usage                            | Enable/disable Load GUI static    | option                      | \-                          | disable                              |
|                                          | files from a CDN.                 |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Display the feature in GUI.                            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Do not display the feature in GUI.                     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| gui-certificates                         | Enable/disable the System \>      | option                      | \-                          | enable \*\*                          |
|                                          | Certificate GUI page, allowing    |                             |                             |                                      |
|                                          | you to add and configure          |                             |                             |                                      |
|                                          | certificates from the GUI.        |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Display the feature in GUI.                            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Do not display the feature in GUI.                     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| gui-custom-language                      | Enable/disable custom languages   | option                      | \-                          | disable                              |
|                                          | in GUI.                           |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Display the feature in GUI.                            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Do not display the feature in GUI.                     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| gui-date-format                          | Default date format used          | option                      | \-                          | yyyy/MM/dd                           |
|                                          | throughout GUI.                   |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +--------------+--------------------------------------------------------+                                                            |
|                                          | | Option       | Description                                            |                                                            |
|                                          | +==============+========================================================+                                                            |
|                                          | | *yyyy/MM/dd* | Year/Month/Day.                                        |                                                            |
|                                          | +--------------+--------------------------------------------------------+                                                            |
|                                          | | *dd/MM/yyyy* | Day/Month/Year.                                        |                                                            |
|                                          | +--------------+--------------------------------------------------------+                                                            |
|                                          | | *MM/dd/yyyy* | Month/Day/Year.                                        |                                                            |
|                                          | +--------------+--------------------------------------------------------+                                                            |
|                                          | | *yyyy-MM-dd* | Year-Month-Day.                                        |                                                            |
|                                          | +--------------+--------------------------------------------------------+                                                            |
|                                          | | *dd-MM-yyyy* | Day-Month-Year.                                        |                                                            |
|                                          | +--------------+--------------------------------------------------------+                                                            |
|                                          | | *MM-dd-yyyy* | Month-Day-Year.                                        |                                                            |
|                                          | +--------------+--------------------------------------------------------+                                                            |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| gui-date-time-source                     | Source from which the FortiGate   | option                      | \-                          | system                               |
|                                          | GUI uses to display date and time |                             |                             |                                      |
|                                          | entries.                          |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *system*    | Use this FortiGate unit\'s configured timezone.        |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *browser*   | Use the web browser\'s timezone.                       |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| gui-device-latitude                      | Add the latitude of the location  | string                      | Maximum length: 19          |                                      |
|                                          | of this FortiGate to position it  |                             |                             |                                      |
|                                          | on the Threat Map.                |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| gui-device-longitude                     | Add the longitude of the location | string                      | Maximum length: 19          |                                      |
|                                          | of this FortiGate to position it  |                             |                             |                                      |
|                                          | on the Threat Map.                |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| gui-display-hostname                     | Enable/disable displaying the     | option                      | \-                          | disable                              |
|                                          | FortiGate\'s hostname on the GUI  |                             |                             |                                      |
|                                          | login page.                       |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Display the feature in GUI.                            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Do not display the feature in GUI.                     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| gui-firmware-upgrade-warning             | Enable/disable the firmware       | option                      | \-                          | enable                               |
|                                          | upgrade warning on the GUI.       |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Display the feature in GUI.                            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Do not display the feature in GUI.                     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| gui-forticare-registration-setup-warning | Enable/disable the FortiCare      | option                      | \-                          | enable                               |
|                                          | registration setup warning on the |                             |                             |                                      |
|                                          | GUI.                              |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Display the feature in GUI.                            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Do not display the feature in GUI.                     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| gui-fortigate-cloud-sandbox              | Enable/disable displaying         | option                      | \-                          | disable                              |
|                                          | FortiGate Cloud Sandbox on the    |                             |                             |                                      |
|                                          | GUI.                              |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Display the feature in GUI.                            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Do not display the feature in GUI.                     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| gui-ipv6                                 | Enable/disable IPv6 settings on   | option                      | \-                          | disable                              |
|                                          | the GUI.                          |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Display the feature in GUI.                            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Do not display the feature in GUI.                     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| gui-local-out                            | Enable/disable Local-out traffic  | option                      | \-                          | disable                              |
|                                          | on the GUI.                       |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Display the feature in GUI.                            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Do not display the feature in GUI.                     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| gui-replacement-message-groups           | Enable/disable replacement        | option                      | \-                          | disable                              |
|                                          | message groups on the GUI.        |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Display the feature in GUI.                            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Do not display the feature in GUI.                     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| gui-rest-api-cache                       | Enable/disable REST API result    | option                      | \-                          | enable \*\*                          |
|                                          | caching on FortiGate.             |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable REST API result caching on FortiGate.           |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable REST API result caching on FortiGate.          |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| gui-theme                                | Color scheme for the              | option                      | \-                          | jade                                 |
|                                          | administration GUI.               |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------------+--------------------------------------------------------+                                                       |
|                                          | | Option            | Description                                            |                                                       |
|                                          | +===================+========================================================+                                                       |
|                                          | | *jade*            | Jade theme.                                            |                                                       |
|                                          | +-------------------+--------------------------------------------------------+                                                       |
|                                          | | *neutrino*        | Neutrino theme.                                        |                                                       |
|                                          | +-------------------+--------------------------------------------------------+                                                       |
|                                          | | *mariner*         | Mariner theme.                                         |                                                       |
|                                          | +-------------------+--------------------------------------------------------+                                                       |
|                                          | | *graphite*        | Graphite theme.                                        |                                                       |
|                                          | +-------------------+--------------------------------------------------------+                                                       |
|                                          | | *melongene*       | Melongene theme.                                       |                                                       |
|                                          | +-------------------+--------------------------------------------------------+                                                       |
|                                          | | *jet-stream*      | Jet Stream theme.                                      |                                                       |
|                                          | +-------------------+--------------------------------------------------------+                                                       |
|                                          | | *security-fabric* | Security Fabric theme.                                 |                                                       |
|                                          | +-------------------+--------------------------------------------------------+                                                       |
|                                          | | *retro*           | FortiOS v3 Retro theme.                                |                                                       |
|                                          | +-------------------+--------------------------------------------------------+                                                       |
|                                          | | *dark-matter*     | Dark Matter theme.                                     |                                                       |
|                                          | +-------------------+--------------------------------------------------------+                                                       |
|                                          | | *onyx*            | Onyx theme.                                            |                                                       |
|                                          | +-------------------+--------------------------------------------------------+                                                       |
|                                          | | *eclipse*         | Eclipse theme.                                         |                                                       |
|                                          | +-------------------+--------------------------------------------------------+                                                       |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| gui-wireless-opensecurity                | Enable/disable wireless open      | option                      | \-                          | disable                              |
|                                          | security option on the GUI.       |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Display the feature in GUI.                            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Do not display the feature in GUI.                     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| gui-workflow-management                  | Enable/disable Workflow           | option                      | \-                          | disable                              |
|                                          | management features on the GUI.   |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Display the feature in GUI.                            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Do not display the feature in GUI.                     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| ha-affinity                              | Affinity setting for HA daemons   | string                      | Maximum length: 79          | 1                                    |
|                                          | (hexadecimal value up to 256 bits |                             |                             |                                      |
|                                          | in the format of                  |                             |                             |                                      |
|                                          | xxxxxxxxxxxxxxxx).                |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| honor-df                                 | Enable/disable honoring of        | option                      | \-                          | enable                               |
|                                          | Don\'t-Fragment (DF) flag.        |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable honoring of Don\'t-Fragment flag.               |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable honoring of Don\'t-Fragment flag.              |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| hostname                                 | FortiGate unit\'s hostname. Most  | string                      | Maximum length: 35          |                                      |
|                                          | models will truncate names longer |                             |                             |                                      |
|                                          | than 24 characters. Some models   |                             |                             |                                      |
|                                          | support hostnames up to 35        |                             |                             |                                      |
|                                          | characters.                       |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| hyper-scale-vdom-num \*                  | Number of VDOMs for hyper scale   | integer                     | Minimum value: 1 Maximum    | 250                                  |
|                                          | license.                          |                             | value: 250                  |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| igmp-state-limit                         | Maximum number of IGMP            | integer                     | Minimum value: 96 Maximum   | 3200                                 |
|                                          | memberships.                      |                             | value: 128000               |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| interface-subnet-usage                   | Enable/disable allowing use of    | option                      | \-                          | enable                               |
|                                          | interface-subnet setting in       |                             |                             |                                      |
|                                          | firewall addresses.               |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *disable*   | Disallow use of the interface-subnet setting in        |                                                             |
|                                          | |             | firewall addresses. Use in conjunction with the        |                                                             |
|                                          | |             | FortiGate REST API and when a large number of firewall |                                                             |
|                                          | |             | addresses exist in the configuration.                  |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *enable*    | Allow use of the interface-subnet setting in firewall  |                                                             |
|                                          | |             | addresses.                                             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| internal-switch-speed \*                 | Internal port speed.              | option                      | \-                          |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *auto*      | auto                                                   |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *1000full*  | 1000M Full                                             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *100full*   | 100M full.                                             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *100half*   | 100M half.                                             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *10full*    | 10M full.                                              |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *10half*    | 10M half.                                              |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| internet-service-database                | Configure which Internet Service  | option                      | \-                          | full \*\*                            |
|                                          | database size to download from    |                             |                             |                                      |
|                                          | FortiGuard and use.               |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *mini*      | Small sized Internet Service database with very        |                                                             |
|                                          | |             | limited IP addresses.                                  |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *standard*  | Medium sized Internet Service database with most IP    |                                                             |
|                                          | |             | addresses.                                             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *full*      | Full sized Internet Service database with all IP       |                                                             |
|                                          | |             | addresses.                                             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *on-demand* | Internet Service database with customer selected IP    |                                                             |
|                                          | |             | addresses.                                             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| internet-service-download-list `<id>`    | Configure which on-demand         | integer                     | Minimum value: 0 Maximum    |                                      |
|                                          | Internet Service IDs are to be    |                             | value: 4294967295           |                                      |
|                                          | downloaded.                       |                             |                             |                                      |
|                                          |                                   |                             |                             |                                      |
|                                          | Internet Service ID.              |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| interval                                 | Dead gateway detection interval.  | integer                     | Minimum value: 0 Maximum    | 5                                    |
|                                          |                                   |                             | value: 4294967295           |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| ip-fragment-mem-thresholds               | Maximum memory (MB) used to       | integer                     | Minimum value: 32 Maximum   | 32                                   |
|                                          | reassemble IPv4/IPv6 fragments.   |                             | value: 2047                 |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| ip-src-port-range                        | IP source port range used for     | user                        | Not Specified               | 1024-25000                           |
|                                          | traffic originating from the      |                             |                             |                                      |
|                                          | FortiGate unit.                   |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| ips-affinity \*                          | Affinity setting for IPS          | string                      | Maximum length: 79          | 0                                    |
|                                          | (hexadecimal value up to 256 bits |                             |                             |                                      |
|                                          | in the format of                  |                             |                             |                                      |
|                                          | xxxxxxxxxxxxxxxx; allowed CPUs    |                             |                             |                                      |
|                                          | must be less than total number of |                             |                             |                                      |
|                                          | IPS engine daemons).              |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| ipsec-asic-offload \*                    | Enable/disable ASIC offloading    | option                      | \-                          | enable                               |
|                                          | (hardware acceleration) for IPsec |                             |                             |                                      |
|                                          | VPN traffic. Hardware             |                             |                             |                                      |
|                                          | acceleration can offload IPsec    |                             |                             |                                      |
|                                          | VPN sessions and accelerate       |                             |                             |                                      |
|                                          | encryption and decryption.        |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable ASIC offload for IPsec VPN.                     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable ASIC offload for IPsec VPN.                    |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| ipsec-ha-seqjump-rate                    | ESP jump ahead rate (1G - 10G pps | integer                     | Minimum value: 1 Maximum    | 10                                   |
|                                          | equivalent).                      |                             | value: 10                   |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| ipsec-hmac-offload \*                    | Enable/disable offloading         | option                      | \-                          | enable                               |
|                                          | (hardware acceleration) of HMAC   |                             |                             |                                      |
|                                          | processing for IPsec VPN.         |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable offload IPsec HMAC processing to hardware if    |                                                             |
|                                          | |             | possible.                                              |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable offload IPsec HMAC processing to hardware.     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| ipsec-round-robin                        | Enable/disable round-robin        | option                      | \-                          | disable                              |
|                                          | redistribution to multiple CPUs   |                             |                             |                                      |
|                                          | for IPsec VPN traffic.            |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable round-robin redistribution for IPsec VPN.       |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable round-robin redistribution for IPsec VPN.      |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| ipv6-accept-dad                          | Enable/disable acceptance of IPv6 | integer                     | Minimum value: 0 Maximum    | 1                                    |
|                                          | Duplicate Address Detection       |                             | value: 2                    |                                      |
|                                          | (DAD).                            |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| ipv6-allow-anycast-probe                 | Enable/disable IPv6 address probe | option                      | \-                          | disable                              |
|                                          | through Anycast.                  |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable probing of IPv6 address space through Anycast   |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable probing of IPv6 address space through Anycast  |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| ipv6-allow-local-in-slient-drop          | Enable/disable silent drop of     | option                      | \-                          | enable                               |
|                                          | IPv6 local-in traffic.            |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable slient drop of IPv6 local-in traffic.           |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable slient drop of IPv6 local-in traffic.          |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| ipv6-allow-multicast-probe               | Enable/disable IPv6 address probe | option                      | \-                          | disable                              |
|                                          | through Multicast.                |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable probing of IPv6 address space through           |                                                             |
|                                          | |             | Multicast.                                             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable probing of IPv6 address space through          |                                                             |
|                                          | |             | Multicast.                                             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| ipv6-allow-traffic-redirect              | Disable to prevent IPv6 traffic   | option                      | \-                          | enable                               |
|                                          | with same local ingress and       |                             |                             |                                      |
|                                          | egress interface from being       |                             |                             |                                      |
|                                          | forwarded without policy check.   |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable allow traffic IPv6 redirect.                    |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable allow traffic IPv6 redirect.                   |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| irq-time-accounting                      | Configure CPU IRQ time accounting | option                      | \-                          | auto                                 |
|                                          | mode.                             |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *auto*      | Automatically switch CPU accounting mode.              |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *force*     | Force the use of CPU IRQ time accounting mode.         |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| language                                 | GUI display language.             | option                      | \-                          | english                              |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +--------------+--------------------------------------------------------+                                                            |
|                                          | | Option       | Description                                            |                                                            |
|                                          | +==============+========================================================+                                                            |
|                                          | | *english*    | English.                                               |                                                            |
|                                          | +--------------+--------------------------------------------------------+                                                            |
|                                          | | *french*     | French.                                                |                                                            |
|                                          | +--------------+--------------------------------------------------------+                                                            |
|                                          | | *spanish*    | Spanish.                                               |                                                            |
|                                          | +--------------+--------------------------------------------------------+                                                            |
|                                          | | *portuguese* | Portuguese.                                            |                                                            |
|                                          | +--------------+--------------------------------------------------------+                                                            |
|                                          | | *japanese*   | Japanese.                                              |                                                            |
|                                          | +--------------+--------------------------------------------------------+                                                            |
|                                          | | *trach*      | Traditional Chinese.                                   |                                                            |
|                                          | +--------------+--------------------------------------------------------+                                                            |
|                                          | | *simch*      | Simplified Chinese.                                    |                                                            |
|                                          | +--------------+--------------------------------------------------------+                                                            |
|                                          | | *korean*     | Korean.                                                |                                                            |
|                                          | +--------------+--------------------------------------------------------+                                                            |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| ldapconntimeout                          | Global timeout for connections    | integer                     | Minimum value: 1 Maximum    | 500                                  |
|                                          | with remote LDAP servers in       |                             | value: 300000               |                                      |
|                                          | milliseconds.                     |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| legacy-poe-device-support \*             | Enable/disable legacy POE device  | option                      | \-                          | disable                              |
|                                          | support.                          |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable legacy POE device support.                      |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable legacy POE device support.                     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| lldp-reception                           | Enable/disable Link Layer         | option                      | \-                          | disable                              |
|                                          | Discovery Protocol (LLDP)         |                             |                             |                                      |
|                                          | reception.                        |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable reception of Link Layer Discovery Protocol      |                                                             |
|                                          | |             | (LLDP).                                                |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable reception of Link Layer Discovery Protocol     |                                                             |
|                                          | |             | (LLDP).                                                |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| lldp-transmission                        | Enable/disable Link Layer         | option                      | \-                          | disable                              |
|                                          | Discovery Protocol (LLDP)         |                             |                             |                                      |
|                                          | transmission.                     |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable transmission of Link Layer Discovery Protocol   |                                                             |
|                                          | |             | (LLDP).                                                |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable transmission of Link Layer Discovery Protocol  |                                                             |
|                                          | |             | (LLDP).                                                |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| log-single-cpu-high                      | Enable/disable logging the event  | option                      | \-                          | disable                              |
|                                          | of a single CPU core reaching CPU |                             |                             |                                      |
|                                          | usage threshold.                  |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable logging the event of a single CPU core reaching |                                                             |
|                                          | |             | CPU usage threshold.                                   |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable logging the event of a single CPU core         |                                                             |
|                                          | |             | reaching CPU usage threshold.                          |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| log-ssl-connection                       | Enable/disable logging of SSL     | option                      | \-                          | disable                              |
|                                          | connection events.                |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable logging of SSL connection events.               |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable logging of SSL connection events.              |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| log-uuid-address                         | Enable/disable insertion of       | option                      | \-                          | disable                              |
|                                          | address UUIDs to traffic logs.    |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable insertion of address UUID to traffic logs.      |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable insertion of address UUID to traffic logs.     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| login-timestamp                          | Enable/disable login time         | option                      | \-                          | disable                              |
|                                          | recording.                        |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable login time recording.                           |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable login time recording.                          |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| long-vdom-name \*                        | Enable/disable long VDOM name     | option                      | \-                          | disable                              |
|                                          | support.                          |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable long VDOM name support.                         |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable long VDOM name support.                        |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| management-ip                            | Management IP address of this     | string                      | Maximum length: 255         |                                      |
|                                          | FortiGate. Used to log into this  |                             |                             |                                      |
|                                          | FortiGate from another FortiGate  |                             |                             |                                      |
|                                          | in the Security Fabric.           |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| management-port                          | Overriding port for management    | integer                     | Minimum value: 1 Maximum    | 443                                  |
|                                          | connection (Overrides admin       |                             | value: 65535                |                                      |
|                                          | port).                            |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| management-port-use-admin-sport          | Enable/disable use of the         | option                      | \-                          | enable                               |
|                                          | admin-sport setting for the       |                             |                             |                                      |
|                                          | management port. If disabled,     |                             |                             |                                      |
|                                          | FortiGate will allow user to      |                             |                             |                                      |
|                                          | specify management-port.          |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable use of the admin-sport setting for the          |                                                             |
|                                          | |             | management port.                                       |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable use of the admin-sport setting for the         |                                                             |
|                                          | |             | management port.                                       |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| management-vdom                          | Management virtual domain name.   | string                      | Maximum length: 31          | root                                 |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| max-route-cache-size                     | Maximum number of IP route cache  | integer                     | Minimum value: 0 Maximum    | 0                                    |
|                                          | entries.                          |                             | value: 2147483647           |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| memory-use-threshold-extreme             | Threshold at which memory usage   | integer                     | Minimum value: 70 Maximum   | 95                                   |
|                                          | is considered extreme.            |                             | value: 97                   |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| memory-use-threshold-green               | Threshold at which memory usage   | integer                     | Minimum value: 70 Maximum   | 82                                   |
|                                          | forces the FortiGate to exit      |                             | value: 97                   |                                      |
|                                          | conserve mode.                    |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| memory-use-threshold-red                 | Threshold at which memory usage   | integer                     | Minimum value: 70 Maximum   | 88                                   |
|                                          | forces the FortiGate to enter     |                             | value: 97                   |                                      |
|                                          | conserve mode.                    |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| miglog-affinity \*                       | Affinity setting for logging      | string                      | Maximum length: 79          | 0                                    |
|                                          | (hexadecimal value up to 256 bits |                             |                             |                                      |
|                                          | in the format of                  |                             |                             |                                      |
|                                          | xxxxxxxxxxxxxxxx).                |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| miglogd-children                         | Number of logging (miglogd)       | integer                     | Minimum value: 0 Maximum    | 0                                    |
|                                          | processes to be allowed to run.   |                             | value: 15                   |                                      |
|                                          | Higher number can reduce          |                             |                             |                                      |
|                                          | performance; lower number can     |                             |                             |                                      |
|                                          | slow log processing time.         |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| multi-factor-authentication              | Enforce all login methods to      | option                      | \-                          | optional                             |
|                                          | require an additional             |                             |                             |                                      |
|                                          | authentication factor.            |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *optional*  | Do not enforce all login methods to require an         |                                                             |
|                                          | |             | additional authentication factor (controlled by user   |                                                             |
|                                          | |             | settings).                                             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *mandatory* | Enforce all login methods to require an additional     |                                                             |
|                                          | |             | authentication factor.                                 |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| ndp-max-entry                            | Maximum number of NDP table       | integer                     | Minimum value: 65536        | 0                                    |
|                                          | entries (set to 65,536 or higher; |                             | Maximum value: 2147483647   |                                      |
|                                          | if set to 0, kernel holds 65,536  |                             |                             |                                      |
|                                          | entries).                         |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| per-user-bal \*                          | Enable/disable per-user           | option                      | \-                          | disable                              |
|                                          | block/allow list filter.          |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable per-user block/allow list filter.               |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable per-user block/allow list filter.              |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| pmtu-discovery                           | Enable/disable path MTU           | option                      | \-                          | disable                              |
|                                          | discovery.                        |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable path MTU discovery.                             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable path MTU discovery.                            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| policy-auth-concurrent                   | Number of concurrent firewall use | integer                     | Minimum value: 0 Maximum    | 0                                    |
|                                          | logins from the same user.        |                             | value: 100                  |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| post-login-banner                        | Enable/disable displaying the     | option                      | \-                          | disable                              |
|                                          | administrator access disclaimer   |                             |                             |                                      |
|                                          | message after an administrator    |                             |                             |                                      |
|                                          | successfully logs in.             |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *disable*   | Disable post-login banner.                             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *enable*    | Enable post-login banner.                              |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| pre-login-banner                         | Enable/disable displaying the     | option                      | \-                          | disable                              |
|                                          | administrator access disclaimer   |                             |                             |                                      |
|                                          | message on the login page before  |                             |                             |                                      |
|                                          | an administrator logs in.         |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable pre-login banner.                               |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable pre-login banner.                              |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| private-data-encryption                  | Enable/disable private data       | option                      | \-                          | disable                              |
|                                          | encryption using an AES 128-bit   |                             |                             |                                      |
|                                          | key or passpharse.                |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *disable*   | Disable private data encryption using an AES 128-bit   |                                                             |
|                                          | |             | key.                                                   |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *enable*    | Enable private data encryption using an AES 128-bit    |                                                             |
|                                          | |             | key.                                                   |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| proxy-and-explicit-proxy \*              | Enable/disable proxy and explicit | option                      | \-                          | disable                              |
|                                          | proxy.                            |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable proxy and explicit proxy.                       |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable proxy and explicit proxy.                      |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| proxy-auth-lifetime                      | Enable/disable authenticated      | option                      | \-                          | disable                              |
|                                          | users lifetime control. This is a |                             |                             |                                      |
|                                          | cap on the total time a proxy     |                             |                             |                                      |
|                                          | user can be authenticated for     |                             |                             |                                      |
|                                          | after which re-authentication     |                             |                             |                                      |
|                                          | will take place.                  |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable authenticated users lifetime control.           |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable authenticated users lifetime control.          |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| proxy-auth-lifetime-timeout              | Lifetime timeout in minutes for   | integer                     | Minimum value: 5 Maximum    | 480                                  |
|                                          | authenticated users.              |                             | value: 65535                |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| proxy-auth-timeout                       | Authentication timeout in minutes | integer                     | Minimum value: 1 Maximum    | 10                                   |
|                                          | for authenticated users.          |                             | value: 300                  |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| proxy-cert-use-mgmt-vdom                 | Enable/disable using management   | option                      | \-                          | disable                              |
|                                          | VDOM to send requests.            |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable setting.                                        |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable setting.                                       |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| proxy-hardware-acceleration \*           | Enable/disable email proxy        | option                      | \-                          | enable                               |
|                                          | hardware acceleration.            |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *disable*   | Disable email proxy hardware acceleration.             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *enable*    | Enable email proxy hardware acceleration.              |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| proxy-keep-alive-mode                    | Control if users must             | option                      | \-                          | session                              |
|                                          | re-authenticate after a session   |                             |                             |                                      |
|                                          | is closed, traffic has been idle, |                             |                             |                                      |
|                                          | or from the point at which the    |                             |                             |                                      |
|                                          | user was authenticated.           |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +---------------------+--------------------------------------------------------+                                                     |
|                                          | | Option              | Description                                            |                                                     |
|                                          | +=====================+========================================================+                                                     |
|                                          | | *session*           | Proxy keep-alive timeout begins at the closure of the  |                                                     |
|                                          | |                     | session.                                               |                                                     |
|                                          | +---------------------+--------------------------------------------------------+                                                     |
|                                          | | *traffic*           | Proxy keep-alive timeout begins after traffic has not  |                                                     |
|                                          | |                     | been received.                                         |                                                     |
|                                          | +---------------------+--------------------------------------------------------+                                                     |
|                                          | | *re-authentication* | Proxy keep-alive timeout begins when the user was      |                                                     |
|                                          | |                     | authenticated.                                         |                                                     |
|                                          | +---------------------+--------------------------------------------------------+                                                     |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| proxy-re-authentication-time             | The time limit that users must    | integer                     | Minimum value: 1 Maximum    | 30                                   |
|                                          | re-authenticate if                |                             | value: 86400                |                                      |
|                                          | proxy-keep-alive-mode is set to   |                             |                             |                                      |
|                                          | re-authenticate (1 - 86400 sec,   |                             |                             |                                      |
|                                          | default=30s.                      |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| proxy-resource-mode                      | Enable/disable use of the maximum | option                      | \-                          | disable                              |
|                                          | memory usage on the FortiGate     |                             |                             |                                      |
|                                          | unit\'s proxy processing of       |                             |                             |                                      |
|                                          | resources, such as block lists,   |                             |                             |                                      |
|                                          | allow lists, and external         |                             |                             |                                      |
|                                          | resources.                        |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable use of the maximum memory usage.                |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable use of the maximum memory usage.               |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| proxy-worker-count                       | Proxy worker count.               | integer                     | Minimum value: 1 Maximum    | 0                                    |
|                                          |                                   |                             | value: 8 \*\*               |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| purdue-level                             | Purdue Level of this FortiGate.   | option                      | \-                          | 3                                    |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *1*         | Level 1 - Basic Control                                |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *1.5*       | Level 1.5                                              |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *2*         | Level 2 - Area Supervisory Control                     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *2.5*       | Level 2.5                                              |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *3*         | Level 3 - Operations & Control                         |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *3.5*       | Level 3.5                                              |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *4*         | Level 4 - Business Planning & Logistics                |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *5*         | Level 5 - Enterprise Network                           |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *5.5*       | Level 5.5                                              |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| quic-ack-thresold                        | Maximum number of unacknowledged  | integer                     | Minimum value: 2 Maximum    | 3                                    |
|                                          | packets before sending ACK.       |                             | value: 5                    |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| quic-congestion-control-algo             | QUIC congestion control           | option                      | \-                          | cubic                                |
|                                          | algorithm.                        |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *cubic*     | Cubic.                                                 |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *bbr*       | BBR.                                                   |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *bbr2*      | BBR2.                                                  |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *reno*      | Reno.                                                  |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| quic-max-datagram-size                   | Maximum transmit datagram size.   | integer                     | Minimum value: 1200 Maximum | 1500                                 |
|                                          |                                   |                             | value: 1500                 |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| quic-pmtud                               | Enable/disable path MTU           | option                      | \-                          | enable                               |
|                                          | discovery.                        |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable path MTU discovery.                             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable path MTU discovery.                            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| quic-tls-handshake-timeout               | Time-to-live.                     | integer                     | Minimum value: 1 Maximum    | 5                                    |
|                                          |                                   |                             | value: 60                   |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| quic-udp-payload-size-shaping-per-cid    | Enable/disable UDP payload size   | option                      | \-                          | enable                               |
|                                          | shaping per connection ID.        |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable UDP payload size shaping per connection ID.     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable UDP payload size shaping per connection ID.    |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| radius-port                              | RADIUS service port number.       | integer                     | Minimum value: 1 Maximum    | 1812                                 |
|                                          |                                   |                             | value: 65535                |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| reboot-upon-config-restore               | Enable/disable reboot of system   | option                      | \-                          | enable                               |
|                                          | upon restoring configuration.     |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable reboot of system upon restoring configuration.  |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable reboot of system upon restoring configuration. |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| refresh                                  | Statistics refresh interval       | integer                     | Minimum value: 0 Maximum    | 0                                    |
|                                          | second(s) in GUI.                 |                             | value: 4294967295           |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| remoteauthtimeout                        | Number of seconds that the        | integer                     | Minimum value: 1 Maximum    | 5                                    |
|                                          | FortiGate waits for responses     |                             | value: 300                  |                                      |
|                                          | from remote RADIUS, LDAP, or      |                             |                             |                                      |
|                                          | TACACS+ authentication servers..  |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| reset-sessionless-tcp                    | Action to perform if the          | option                      | \-                          | disable                              |
|                                          | FortiGate receives a TCP packet   |                             |                             |                                      |
|                                          | but cannot find a corresponding   |                             |                             |                                      |
|                                          | session in its session table.     |                             |                             |                                      |
|                                          | NAT/Route mode only.              |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable reset session-less TCP.                         |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable reset session-less TCP.                        |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| restart-time                             | Daily restart time (hh:mm).       | user                        | Not Specified               |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| revision-backup-on-logout                | Enable/disable back-up of the     | option                      | \-                          | disable                              |
|                                          | latest configuration revision     |                             |                             |                                      |
|                                          | when an administrator logs out of |                             |                             |                                      |
|                                          | the CLI or GUI.                   |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable revision config backup automatically when       |                                                             |
|                                          | |             | logout.                                                |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable revision config backup automatically when      |                                                             |
|                                          | |             | logout.                                                |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| revision-image-auto-backup               | Enable/disable back-up of the     | option                      | \-                          | disable                              |
|                                          | latest image revision after the   |                             |                             |                                      |
|                                          | firmware is upgraded.             |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable revision image backup automatically when        |                                                             |
|                                          | |             | upgrading image.                                       |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable revision image backup automatically when       |                                                             |
|                                          | |             | upgrading image.                                       |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| scanunit-count                           | Number of scanunits. The range    | integer                     | Minimum value: 1 Maximum    | 0                                    |
|                                          | and the default depend on the     |                             | value: 8 \*\*               |                                      |
|                                          | number of CPUs. Only available on |                             |                             |                                      |
|                                          | FortiGate units with multiple     |                             |                             |                                      |
|                                          | CPUs.                             |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| security-rating-result-submission        | Enable/disable the submission of  | option                      | \-                          | enable                               |
|                                          | Security Rating results to        |                             |                             |                                      |
|                                          | FortiGuard.                       |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable submission of Security Rating results to        |                                                             |
|                                          | |             | FortiGuard.                                            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable submission of Security Rating results to       |                                                             |
|                                          | |             | FortiGuard.                                            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| security-rating-run-on-schedule          | Enable/disable scheduled runs of  | option                      | \-                          | enable                               |
|                                          | Security Rating.                  |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable scheduled runs of Security Rating.              |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable scheduled runs of Security Rating.             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| send-pmtu-icmp                           | Enable/disable sending of path    | option                      | \-                          | enable                               |
|                                          | maximum transmission unit         |                             |                             |                                      |
|                                          | (PMTU) - ICMP destination         |                             |                             |                                      |
|                                          | unreachable packet and to support |                             |                             |                                      |
|                                          | PMTUD protocol on your network to |                             |                             |                                      |
|                                          | reduce fragmentation of packets.  |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable sending of PMTU ICMP destination unreachable    |                                                             |
|                                          | |             | packet.                                                |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable sending of PMTU ICMP destination unreachable   |                                                             |
|                                          | |             | packet.                                                |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| sflowd-max-children-num                  | Maximum number of sflowd child    | integer                     | Minimum value: 0 Maximum    | 6 \*\*                               |
|                                          | processes allowed to run.         |                             | value: 6 \*\*               |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| show-backplane-intf \*                   | show/hide backplane interfaces    | option                      | \-                          | disable                              |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | show backplane interfaces                              |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | hide backplane interfaces                              |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| snat-route-change                        | Enable/disable the ability to     | option                      | \-                          | disable                              |
|                                          | change the source NAT route.      |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable SNAT route change.                              |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable SNAT route change.                             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| special-file-23-support                  | Enable/disable detection of those | option                      | \-                          | disable                              |
|                                          | special format files when using   |                             |                             |                                      |
|                                          | Data Leak Prevention.             |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *disable*   | Disable detection of those special format files when   |                                                             |
|                                          | |             | using Data Leak Prevention.                            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *enable*    | Enable detection of those special format files when    |                                                             |
|                                          | |             | using Data Leak Prevention.                            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| speedtest-server                         | Enable/disable speed test server. | option                      | \-                          | disable                              |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable speed test server service.                      |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable speed test server service.                     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| speedtestd-ctrl-port                     | Speedtest server controller port  | integer                     | Minimum value: 1 Maximum    | 5200                                 |
|                                          | number.                           |                             | value: 65535                |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| speedtestd-server-port                   | Speedtest server port number.     | integer                     | Minimum value: 1 Maximum    | 5201                                 |
|                                          |                                   |                             | value: 65535                |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| split-port \*                            | Split port(s) to multiple 10Gbps  | string                      | Maximum length: 15          |                                      |
|                                          | ports.                            |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| ssd-trim-date \*                         | Date within a month to run ssd    | integer                     | Minimum value: 1 Maximum    | 1                                    |
|                                          | trim.                             |                             | value: 31                   |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| ssd-trim-freq \*                         | How often to run SSD Trim. SSD    | option                      | \-                          | weekly                               |
|                                          | Trim prevents SSD drive data loss |                             |                             |                                      |
|                                          | by finding and isolating errors.  |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *never*     | Never Run SSD Trim.                                    |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *hourly*    | Run SSD Trim Hourly.                                   |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *daily*     | Run SSD Trim Daily.                                    |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *weekly*    | Run SSD Trim Weekly.                                   |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *monthly*   | Run SSD Trim Monthly.                                  |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| ssd-trim-hour \*                         | Hour of the day on which to run   | integer                     | Minimum value: 0 Maximum    | 1                                    |
|                                          | SSD Trim.                         |                             | value: 23                   |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| ssd-trim-min \*                          | Minute of the hour on which to    | integer                     | Minimum value: 0 Maximum    | 60                                   |
|                                          | run SSD Trim.                     |                             | value: 60                   |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| ssd-trim-weekday \*                      | Day of week to run SSD Trim.      | option                      | \-                          | sunday                               |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *sunday*    | Sunday                                                 |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *monday*    | Monday                                                 |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *tuesday*   | Tuesday                                                |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *wednesday* | Wednesday                                              |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *thursday*  | Thursday                                               |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *friday*    | Friday                                                 |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *saturday*  | Saturday                                               |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| ssh-enc-algo                             | Select one or more SSH ciphers.   | option                      | \-                          | chacha20-poly1305@openssh.com        |
|                                          |                                   |                             |                             | aes256-ctr aes256-gcm@openssh.com    |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +---------------------------------+--------------------------------------------------------+                                         |
|                                          | | Option                          | Description                                            |                                         |
|                                          | +=================================+========================================================+                                         |
|                                          | | *chacha20-poly1305@openssh.com* | chacha20-poly1305@openssh.com                          |                                         |
|                                          | +---------------------------------+--------------------------------------------------------+                                         |
|                                          | | *aes128-ctr*                    | aes128-ctr                                             |                                         |
|                                          | +---------------------------------+--------------------------------------------------------+                                         |
|                                          | | *aes192-ctr*                    | aes192-ctr                                             |                                         |
|                                          | +---------------------------------+--------------------------------------------------------+                                         |
|                                          | | *aes256-ctr*                    | aes256-ctr                                             |                                         |
|                                          | +---------------------------------+--------------------------------------------------------+                                         |
|                                          | | *arcfour256*                    | arcfour256                                             |                                         |
|                                          | +---------------------------------+--------------------------------------------------------+                                         |
|                                          | | *arcfour128*                    | arcfour128                                             |                                         |
|                                          | +---------------------------------+--------------------------------------------------------+                                         |
|                                          | | *aes128-cbc*                    | aes128-cbc                                             |                                         |
|                                          | +---------------------------------+--------------------------------------------------------+                                         |
|                                          | | *3des-cbc*                      | 3des-cbc                                               |                                         |
|                                          | +---------------------------------+--------------------------------------------------------+                                         |
|                                          | | *blowfish-cbc*                  | blowfish-cbc                                           |                                         |
|                                          | +---------------------------------+--------------------------------------------------------+                                         |
|                                          | | *cast128-cbc*                   | cast128-cbc                                            |                                         |
|                                          | +---------------------------------+--------------------------------------------------------+                                         |
|                                          | | *aes192-cbc*                    | aes192-cbc                                             |                                         |
|                                          | +---------------------------------+--------------------------------------------------------+                                         |
|                                          | | *aes256-cbc*                    | aes256-cbc                                             |                                         |
|                                          | +---------------------------------+--------------------------------------------------------+                                         |
|                                          | | *arcfour*                       | arcfour                                                |                                         |
|                                          | +---------------------------------+--------------------------------------------------------+                                         |
|                                          | | *rijndael-cbc@lysator.liu.se*   | rijndael-cbc@lysator.liu.se                            |                                         |
|                                          | +---------------------------------+--------------------------------------------------------+                                         |
|                                          | | *aes128-gcm@openssh.com*        | aes128-gcm@openssh.com                                 |                                         |
|                                          | +---------------------------------+--------------------------------------------------------+                                         |
|                                          | | *aes256-gcm@openssh.com*        | aes256-gcm@openssh.com                                 |                                         |
|                                          | +---------------------------------+--------------------------------------------------------+                                         |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| ssh-hostkey                              | Config SSH host key.              | user                        | Not Specified               |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| ssh-hostkey-algo                         | Select one or more SSH hostkey    | option                      | \-                          | ecdsa-sha2-nistp521                  |
|                                          | algorithms.                       |                             |                             | ecdsa-sha2-nistp384                  |
|                                          |                                   |                             |                             | ecdsa-sha2-nistp256 rsa-sha2-256     |
|                                          |                                   |                             |                             | rsa-sha2-512 ssh-ed25519             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-----------------------+--------------------------------------------------------+                                                   |
|                                          | | Option                | Description                                            |                                                   |
|                                          | +=======================+========================================================+                                                   |
|                                          | | *ssh-rsa*             | ssh-rsa                                                |                                                   |
|                                          | +-----------------------+--------------------------------------------------------+                                                   |
|                                          | | *ecdsa-sha2-nistp521* | ecdsa-sha2-nistp521                                    |                                                   |
|                                          | +-----------------------+--------------------------------------------------------+                                                   |
|                                          | | *ecdsa-sha2-nistp384* | ecdsa-sha2-nistp384                                    |                                                   |
|                                          | +-----------------------+--------------------------------------------------------+                                                   |
|                                          | | *ecdsa-sha2-nistp256* | ecdsa-sha2-nistp256                                    |                                                   |
|                                          | +-----------------------+--------------------------------------------------------+                                                   |
|                                          | | *rsa-sha2-256*        | rsa-sha2-256                                           |                                                   |
|                                          | +-----------------------+--------------------------------------------------------+                                                   |
|                                          | | *rsa-sha2-512*        | rsa-sha2-512                                           |                                                   |
|                                          | +-----------------------+--------------------------------------------------------+                                                   |
|                                          | | *ssh-ed25519*         | ssh-ed25519                                            |                                                   |
|                                          | +-----------------------+--------------------------------------------------------+                                                   |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| ssh-hostkey-override                     | Enable/disable SSH host key       | option                      | \-                          | disable                              |
|                                          | override in SSH daemon.           |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *disable*   | Disable SSH host key override in SSH daemon.           |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *enable*    | Enable SSH host key override in SSH daemon.            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| ssh-hostkey-password                     | Password for ssh-hostkey.         | password                    | Not Specified               |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| ssh-kex-algo                             | Select one or more SSH kex        | option                      | \-                          | diffie-hellman-group14-sha256        |
|                                          | algorithms.                       |                             |                             | diffie-hellman-group16-sha512        |
|                                          |                                   |                             |                             | diffie-hellman-group18-sha512        |
|                                          |                                   |                             |                             | diffie-hellman-group-exchange-sha256 |
|                                          |                                   |                             |                             | curve25519-sha256@libssh.org         |
|                                          |                                   |                             |                             | ecdh-sha2-nistp256                   |
|                                          |                                   |                             |                             | ecdh-sha2-nistp384                   |
|                                          |                                   |                             |                             | ecdh-sha2-nistp521                   |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +----------------------------------------+--------------------------------------------------------+                                  |
|                                          | | Option                                 | Description                                            |                                  |
|                                          | +========================================+========================================================+                                  |
|                                          | | *diffie-hellman-group1-sha1*           | diffie-hellman-group1-sha1                             |                                  |
|                                          | +----------------------------------------+--------------------------------------------------------+                                  |
|                                          | | *diffie-hellman-group14-sha1*          | diffie-hellman-group14-sha1                            |                                  |
|                                          | +----------------------------------------+--------------------------------------------------------+                                  |
|                                          | | *diffie-hellman-group14-sha256*        | diffie-hellman-group14-sha256                          |                                  |
|                                          | +----------------------------------------+--------------------------------------------------------+                                  |
|                                          | | *diffie-hellman-group16-sha512*        | diffie-hellman-group16-sha512                          |                                  |
|                                          | +----------------------------------------+--------------------------------------------------------+                                  |
|                                          | | *diffie-hellman-group18-sha512*        | diffie-hellman-group18-sha512                          |                                  |
|                                          | +----------------------------------------+--------------------------------------------------------+                                  |
|                                          | | *diffie-hellman-group-exchange-sha1*   | diffie-hellman-group-exchange-sha1                     |                                  |
|                                          | +----------------------------------------+--------------------------------------------------------+                                  |
|                                          | | *diffie-hellman-group-exchange-sha256* | diffie-hellman-group-exchange-sha256                   |                                  |
|                                          | +----------------------------------------+--------------------------------------------------------+                                  |
|                                          | | *curve25519-sha256@libssh.org*         | curve25519-sha256@libssh.org                           |                                  |
|                                          | +----------------------------------------+--------------------------------------------------------+                                  |
|                                          | | *ecdh-sha2-nistp256*                   | ecdh-sha2-nistp256                                     |                                  |
|                                          | +----------------------------------------+--------------------------------------------------------+                                  |
|                                          | | *ecdh-sha2-nistp384*                   | ecdh-sha2-nistp384                                     |                                  |
|                                          | +----------------------------------------+--------------------------------------------------------+                                  |
|                                          | | *ecdh-sha2-nistp521*                   | ecdh-sha2-nistp521                                     |                                  |
|                                          | +----------------------------------------+--------------------------------------------------------+                                  |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| ssh-mac-algo                             | Select one or more SSH MAC        | option                      | \-                          | hmac-sha2-256                        |
|                                          | algorithms.                       |                             |                             | hmac-sha2-256-etm@openssh.com        |
|                                          |                                   |                             |                             | hmac-sha2-512                        |
|                                          |                                   |                             |                             | hmac-sha2-512-etm@openssh.com        |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +----------------------------------+--------------------------------------------------------+                                        |
|                                          | | Option                           | Description                                            |                                        |
|                                          | +==================================+========================================================+                                        |
|                                          | | *hmac-md5*                       | hmac-md5                                               |                                        |
|                                          | +----------------------------------+--------------------------------------------------------+                                        |
|                                          | | *hmac-md5-etm@openssh.com*       | hmac-md5-etm@openssh.com                               |                                        |
|                                          | +----------------------------------+--------------------------------------------------------+                                        |
|                                          | | *hmac-md5-96*                    | hmac-md5-96                                            |                                        |
|                                          | +----------------------------------+--------------------------------------------------------+                                        |
|                                          | | *hmac-md5-96-etm@openssh.com*    | hmac-md5-96-etm@openssh.com                            |                                        |
|                                          | +----------------------------------+--------------------------------------------------------+                                        |
|                                          | | *hmac-sha1*                      | hmac-sha1                                              |                                        |
|                                          | +----------------------------------+--------------------------------------------------------+                                        |
|                                          | | *hmac-sha1-etm@openssh.com*      | hmac-sha1-etm@openssh.com                              |                                        |
|                                          | +----------------------------------+--------------------------------------------------------+                                        |
|                                          | | *hmac-sha2-256*                  | hmac-sha2-256                                          |                                        |
|                                          | +----------------------------------+--------------------------------------------------------+                                        |
|                                          | | *hmac-sha2-256-etm@openssh.com*  | hmac-sha2-256-etm@openssh.com                          |                                        |
|                                          | +----------------------------------+--------------------------------------------------------+                                        |
|                                          | | *hmac-sha2-512*                  | hmac-sha2-512                                          |                                        |
|                                          | +----------------------------------+--------------------------------------------------------+                                        |
|                                          | | *hmac-sha2-512-etm@openssh.com*  | hmac-sha2-512-etm@openssh.com                          |                                        |
|                                          | +----------------------------------+--------------------------------------------------------+                                        |
|                                          | | *hmac-ripemd160*                 | hmac-ripemd160                                         |                                        |
|                                          | +----------------------------------+--------------------------------------------------------+                                        |
|                                          | | *hmac-ripemd160@openssh.com*     | hmac-ripemd160@openssh.com                             |                                        |
|                                          | +----------------------------------+--------------------------------------------------------+                                        |
|                                          | | *hmac-ripemd160-etm@openssh.com* | hmac-ripemd160-etm@openssh.com                         |                                        |
|                                          | +----------------------------------+--------------------------------------------------------+                                        |
|                                          | | *umac-64@openssh.com*            | umac-64@openssh.com                                    |                                        |
|                                          | +----------------------------------+--------------------------------------------------------+                                        |
|                                          | | *umac-128@openssh.com*           | umac-128@openssh.com                                   |                                        |
|                                          | +----------------------------------+--------------------------------------------------------+                                        |
|                                          | | *umac-64-etm@openssh.com*        | umac-64-etm@openssh.com                                |                                        |
|                                          | +----------------------------------+--------------------------------------------------------+                                        |
|                                          | | *umac-128-etm@openssh.com*       | umac-128-etm@openssh.com                               |                                        |
|                                          | +----------------------------------+--------------------------------------------------------+                                        |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| ssl-min-proto-version                    | Minimum supported protocol        | option                      | \-                          | TLSv1-2                              |
|                                          | version for SSL/TLS connections.  |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *SSLv3*     | SSLv3.                                                 |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *TLSv1*     | TLSv1.                                                 |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *TLSv1-1*   | TLSv1.1.                                               |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *TLSv1-2*   | TLSv1.2.                                               |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *TLSv1-3*   | TLSv1.3.                                               |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| ssl-static-key-ciphers                   | Enable/disable static key ciphers | option                      | \-                          | enable                               |
|                                          | in SSL/TLS connections (e.g.      |                             |                             |                                      |
|                                          | AES128-SHA, AES256-SHA,           |                             |                             |                                      |
|                                          | AES128-SHA256, AES256-SHA256).    |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable static key ciphers in SSL/TLS connections.      |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable static key ciphers in SSL/TLS connections.     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| sslvpn-max-worker-count                  | Maximum number of SSL-VPN         | integer                     | Minimum value: 0 Maximum    | 0                                    |
|                                          | processes. Upper limit for this   |                             | value: 8 \*\*               |                                      |
|                                          | value is the number of CPUs and   |                             |                             |                                      |
|                                          | depends on the model. Default     |                             |                             |                                      |
|                                          | value of zero means the SSLVPN    |                             |                             |                                      |
|                                          | daemon decides the number of      |                             |                             |                                      |
|                                          | worker processes.                 |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| sslvpn-web-mode                          | Enable/disable SSL-VPN web mode.  | option                      | \-                          | disable                              |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable SSL-VPN web mode.                               |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable SSL-VPN web mode.                              |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| strict-dirty-session-check               | Enable to check the session       | option                      | \-                          | enable                               |
|                                          | against the original policy when  |                             |                             |                                      |
|                                          | revalidating. This can prevent    |                             |                             |                                      |
|                                          | dropping of redirected sessions   |                             |                             |                                      |
|                                          | when web-filtering and            |                             |                             |                                      |
|                                          | authentication are enabled        |                             |                             |                                      |
|                                          | together. If this option is       |                             |                             |                                      |
|                                          | enabled, the FortiGate unit       |                             |                             |                                      |
|                                          | deletes a session if a routing or |                             |                             |                                      |
|                                          | policy change causes the session  |                             |                             |                                      |
|                                          | to no longer match the policy     |                             |                             |                                      |
|                                          | that originally allowed the       |                             |                             |                                      |
|                                          | session.                          |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable strict dirty-session check.                     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable strict dirty-session check.                    |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| strong-crypto                            | Enable to use strong encryption   | option                      | \-                          | enable                               |
|                                          | and only allow strong ciphers and |                             |                             |                                      |
|                                          | digest for HTTPS/SSH/TLS/SSL      |                             |                             |                                      |
|                                          | functions.                        |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable strong crypto for HTTPS/SSH/TLS/SSL.            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable strong crypto for HTTPS/SSH/TLS/SSL.           |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| switch-controller \*                     | Enable/disable switch controller  | option                      | \-                          | disable                              |
|                                          | feature. Switch controller allows |                             |                             |                                      |
|                                          | you to manage FortiSwitch from    |                             |                             |                                      |
|                                          | the FortiGate itself.             |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *disable*   | Disable switch controller feature.                     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *enable*    | Enable switch controller feature.                      |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| switch-controller-reserved-network \*    | Configure reserved network subnet | ipv4-classnet-host          | Not Specified               | 10.255.0.1 255.255.0.0               |
|                                          | for managed switches. This is     |                             |                             |                                      |
|                                          | available when the switch         |                             |                             |                                      |
|                                          | controller is enabled.            |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| sys-perf-log-interval                    | Time in minutes between updates   | integer                     | Minimum value: 0 Maximum    | 5                                    |
|                                          | of performance statistics         |                             | value: 15                   |                                      |
|                                          | logging..                         |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| syslog-affinity \*                       | Affinity setting for syslog       | string                      | Maximum length: 79          | 0                                    |
|                                          | (hexadecimal value up to 256 bits |                             |                             |                                      |
|                                          | in the format of                  |                             |                             |                                      |
|                                          | xxxxxxxxxxxxxxxx).                |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| tcp-halfclose-timer                      | Number of seconds the FortiGate   | integer                     | Minimum value: 1 Maximum    | 120                                  |
|                                          | unit should wait to close a       |                             | value: 86400                |                                      |
|                                          | session after one peer has sent a |                             |                             |                                      |
|                                          | FIN packet but the other has not  |                             |                             |                                      |
|                                          | responded.                        |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| tcp-halfopen-timer                       | Number of seconds the FortiGate   | integer                     | Minimum value: 1 Maximum    | 10                                   |
|                                          | unit should wait to close a       |                             | value: 86400                |                                      |
|                                          | session after one peer has sent   |                             |                             |                                      |
|                                          | an open session packet but the    |                             |                             |                                      |
|                                          | other has not responded.          |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| tcp-option                               | Enable SACK, timestamp and MSS    | option                      | \-                          | enable                               |
|                                          | TCP options.                      |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable TCP option.                                     |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable TCP option.                                    |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| tcp-rst-timer                            | Length of the TCP CLOSE state in  | integer                     | Minimum value: 5 Maximum    | 5                                    |
|                                          | seconds.                          |                             | value: 300                  |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| tcp-timewait-timer                       | Length of the TCP TIME-WAIT state | integer                     | Minimum value: 0 Maximum    | 1                                    |
|                                          | in seconds.                       |                             | value: 300                  |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| tftp                                     | Enable/disable TFTP.              | option                      | \-                          | enable                               |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable TFTP.                                           |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable TFTP.                                          |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| timezone                                 | Timezone database name. Enter ?   | string                      | Maximum length: 63          |                                      |
|                                          | to view the list of timezone.     |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| traffic-priority                         | Choose Type of Service (ToS) or   | option                      | \-                          | tos                                  |
|                                          | Differentiated Services Code      |                             |                             |                                      |
|                                          | Point (DSCP) for traffic          |                             |                             |                                      |
|                                          | prioritization in traffic         |                             |                             |                                      |
|                                          | shaping.                          |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *tos*       | IP TOS.                                                |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *dscp*      | DSCP (DiffServ) DS.                                    |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| traffic-priority-level                   | Default system-wide level of      | option                      | \-                          | medium                               |
|                                          | priority for traffic              |                             |                             |                                      |
|                                          | prioritization.                   |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *low*       | Low priority.                                          |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *medium*    | Medium priority.                                       |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *high*      | High priority.                                         |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| two-factor-email-expiry                  | Email-based two-factor            | integer                     | Minimum value: 30 Maximum   | 60                                   |
|                                          | authentication session timeout.   |                             | value: 300                  |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| two-factor-fac-expiry                    | FortiAuthenticator token          | integer                     | Minimum value: 10 Maximum   | 60                                   |
|                                          | authentication session timeout.   |                             | value: 3600                 |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| two-factor-ftk-expiry                    | FortiToken authentication session | integer                     | Minimum value: 60 Maximum   | 60                                   |
|                                          | timeout.                          |                             | value: 600                  |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| two-factor-ftm-expiry                    | FortiToken Mobile session         | integer                     | Minimum value: 1 Maximum    | 72                                   |
|                                          | timeout.                          |                             | value: 168                  |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| two-factor-sms-expiry                    | SMS-based two-factor              | integer                     | Minimum value: 30 Maximum   | 60                                   |
|                                          | authentication session timeout.   |                             | value: 300                  |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| udp-idle-timer                           | UDP connection session timeout.   | integer                     | Minimum value: 1 Maximum    | 180                                  |
|                                          | This command can be useful in     |                             | value: 86400                |                                      |
|                                          | managing CPU and memory           |                             |                             |                                      |
|                                          | resources.                        |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| url-filter-affinity \*                   | URL filter CPU affinity.          | string                      | Maximum length: 79          | 0                                    |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| url-filter-count                         | URL filter daemon count.          | integer                     | Minimum value: 1 Maximum    | 1                                    |
|                                          |                                   |                             | value: 1 \*\*               |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| user-device-store-max-devices            | Maximum number of devices allowed | integer                     | Minimum value: 84219        | 168438 \*\*                          |
|                                          | in user device store.             |                             | Maximum value: 240626 \*\*  |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| user-device-store-max-unified-mem        | Maximum unified memory allowed in | integer                     | Minimum value: 168438579    | 842192896 \*\*                       |
|                                          | user device store.                |                             | Maximum value: 1684385792   |                                      |
|                                          |                                   |                             | \*\*                        |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| user-device-store-max-users              | Maximum number of users allowed   | integer                     | Minimum value: 84219        | 168438 \*\*                          |
|                                          | in user device store.             |                             | Maximum value: 240626 \*\*  |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| vdom-mode \*                             | Enable/disable support for        | option                      | \-                          | no-vdom                              |
|                                          | multiple virtual domains (VDOMs). |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +--------------+--------------------------------------------------------+                                                            |
|                                          | | Option       | Description                                            |                                                            |
|                                          | +==============+========================================================+                                                            |
|                                          | | *no-vdom*    | Disable multiple VDOMs mode.                           |                                                            |
|                                          | +--------------+--------------------------------------------------------+                                                            |
|                                          | | *multi-vdom* | Enable multiple VDOMs mode.                            |                                                            |
|                                          | +--------------+--------------------------------------------------------+                                                            |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| vip-arp-range                            | Controls the number of ARPs that  | option                      | \-                          | restricted                           |
|                                          | the FortiGate sends for a Virtual |                             |                             |                                      |
|                                          | IP (VIP) address range.           |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +--------------+--------------------------------------------------------+                                                            |
|                                          | | Option       | Description                                            |                                                            |
|                                          | +==============+========================================================+                                                            |
|                                          | | *unlimited*  | Send ARPs for all addresses in VIP range.              |                                                            |
|                                          | +--------------+--------------------------------------------------------+                                                            |
|                                          | | *restricted* | Send ARPs for the first 8192 addresses in VIP range.   |                                                            |
|                                          | +--------------+--------------------------------------------------------+                                                            |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| virtual-switch-vlan \*                   | Enable/disable virtual switch     | option                      | \-                          | disable                              |
|                                          | VLAN.                             |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable virtual switch VLAN.                            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable virtual switch VLAN.                           |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| vpn-ems-sn-check                         | Enable/disable verification of    | option                      | \-                          | disable                              |
|                                          | EMS serial number in SSL-VPN and  |                             |                             |                                      |
|                                          | IPsec VPN connection.             |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable verification of EMS serial number in SSL-VPN    |                                                             |
|                                          | |             | and IPsec VPN connection.                              |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable verification of EMS serial number in SSL-VPN   |                                                             |
|                                          | |             | and IPsec VPN connection.                              |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| wad-affinity \*                          | Affinity setting for wad          | string                      | Maximum length: 79          | 0                                    |
|                                          | (hexadecimal value up to 256 bits |                             |                             |                                      |
|                                          | in the format of                  |                             |                             |                                      |
|                                          | xxxxxxxxxxxxxxxx).                |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| wad-csvc-cs-count                        | Number of concurrent              | integer                     | Minimum value: 1 Maximum    | 1                                    |
|                                          | WAD-cache-service object-cache    |                             | value: 1                    |                                      |
|                                          | processes.                        |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| wad-csvc-db-count                        | Number of concurrent              | integer                     | Minimum value: 0 Maximum    | 0                                    |
|                                          | WAD-cache-service byte-cache      |                             | value: 8 \*\*               |                                      |
|                                          | processes.                        |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| wad-memory-change-granularity            | Minimum percentage change in      | integer                     | Minimum value: 5 Maximum    | 10                                   |
|                                          | system memory usage detected by   |                             | value: 25                   |                                      |
|                                          | the wad daemon prior to adjusting |                             |                             |                                      |
|                                          | TCP window size for any active    |                             |                             |                                      |
|                                          | connection.                       |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| wad-restart-end-time                     | WAD workers daily restart end     | user                        | Not Specified               |                                      |
|                                          | time (hh:mm).                     |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| wad-restart-mode                         | WAD worker restart mode.          | option                      | \-                          | none                                 |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *none*      | Disable restart of WAD workers.                        |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *time*      | Enable daily restart of WAD workers.                   |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *memory*    | Enable restart of WAD workers based on memory usage.   |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| wad-restart-start-time                   | WAD workers daily restart time    | user                        | Not Specified               |                                      |
|                                          | (hh:mm).                          |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| wad-source-affinity                      | Enable/disable dispatching        | option                      | \-                          | enable                               |
|                                          | traffic to WAD workers based on   |                             |                             |                                      |
|                                          | source affinity.                  |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *disable*   | Disable dispatching traffic to WAD workers based on    |                                                             |
|                                          | |             | source affinity.                                       |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *enable*    | Enable dispatching traffic to WAD workers based on     |                                                             |
|                                          | |             | source affinity.                                       |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| wad-worker-count                         | Number of explicit proxy WAN      | integer                     | Minimum value: 0 Maximum    | 0                                    |
|                                          | optimization daemon (WAD)         |                             | value: 8 \*\*               |                                      |
|                                          | processes. By default WAN         |                             |                             |                                      |
|                                          | optimization, explicit proxy, and |                             |                             |                                      |
|                                          | web caching is handled by all of  |                             |                             |                                      |
|                                          | the CPU cores in a FortiGate      |                             |                             |                                      |
|                                          | unit.                             |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| wifi-ca-certificate                      | CA certificate that verifies the  | string                      | Maximum length: 79          | Fortinet_Wifi_CA                     |
|                                          | WiFi certificate.                 |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| wifi-certificate                         | Certificate to use for WiFi       | string                      | Maximum length: 35          | Fortinet_Wifi                        |
|                                          | authentication.                   |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| wimax-4g-usb                             | Enable/disable comparability with | option                      | \-                          | disable                              |
|                                          | WiMAX 4G USB devices.             |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable WiMax 4G.                                       |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable WiMax 4G.                                      |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| wireless-controller                      | Enable/disable the wireless       | option                      | \-                          | enable                               |
|                                          | controller feature to use the     |                             |                             |                                      |
|                                          | FortiGate unit to manage          |                             |                             |                                      |
|                                          | FortiAPs.                         |                             |                             |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *enable*    | Enable wireless controller.                            |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *disable*   | Disable wireless controller.                           |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| wireless-controller-port                 | Port used for the control channel | integer                     | Minimum value: 1024 Maximum | 5246                                 |
|                                          | in wireless controller mode.      |                             | value: 49150                |                                      |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
| wireless-mode \*                         | Wireless mode setting.            | option                      | \-                          | ac                                   |
+------------------------------------------+-----------------------------------+-----------------------------+-----------------------------+--------------------------------------+
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | Option      | Description                                            |                                                             |
|                                          | +=============+========================================================+                                                             |
|                                          | | *ac*        | Wireless controller with local wireless.               |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *client*    | Wireless client mode.                                  |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
|                                          | | *fwfap*     | Obsolete wireless AP mode.                             |                                                             |
|                                          | +-------------+--------------------------------------------------------+                                                             |
+------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------+

