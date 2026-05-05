# config system fortiguard

Configure FortiGuard services.

## Syntax

```
config system fortiguard
    Description: Configure FortiGuard services.
    set FDS-license-expiring-days {integer}
    set antispam-cache [enable|disable]
    set antispam-cache-mpermille {integer}
    set antispam-cache-ttl {integer}
    set antispam-expiration {integer}
    set antispam-force-off [enable|disable]
    set antispam-license {integer}
    set antispam-timeout {integer}
    set anycast-sdns-server-ip {ipv4-address}
    set anycast-sdns-server-port {integer}
    set auto-firmware-upgrade [enable|disable]
    set auto-firmware-upgrade-day {option1}, {option2}, ...
    set auto-firmware-upgrade-delay {integer}
    set auto-firmware-upgrade-end-hour {integer}
    set auto-firmware-upgrade-start-hour {integer}
    set auto-join-forticloud [enable|disable]
    set ddns-server-ip {ipv4-address}
    set ddns-server-ip6 {ipv6-address}
    set ddns-server-port {integer}
    set fortiguard-anycast [enable|disable]
    set fortiguard-anycast-source [fortinet|aws|...]
    set interface {string}
    set interface-select-method [auto|sdwan|...]
    set load-balance-servers {integer}
    set outbreak-prevention-cache [enable|disable]
    set outbreak-prevention-cache-mpermille {integer}
    set outbreak-prevention-cache-ttl {integer}
    set outbreak-prevention-expiration {integer}
    set outbreak-prevention-force-off [enable|disable]
    set outbreak-prevention-license {integer}
    set outbreak-prevention-timeout {integer}
    set persistent-connection [enable|disable]
    set port [8888|53|...]
    set protocol [udp|http|...]
    set proxy-password {password}
    set proxy-server-ip {string}
    set proxy-server-port {integer}
    set proxy-username {string}
    set sandbox-inline-scan [enable|disable]
    set sandbox-region {string}
    set sdns-options {option1}, {option2}, ...
    set sdns-server-ip {user}
    set sdns-server-port {integer}
    set service-account-id {string}
    set source-ip {ipv4-address}
    set source-ip6 {ipv6-address}
    set update-build-proxy [enable|disable]
    set update-dldb [enable|disable]
    set update-extdb [enable|disable]
    set update-ffdb [enable|disable]
    set update-server-location [automatic|usa|...]
    set update-uwdb [enable|disable]
    set vdom {string}
    set webfilter-cache [enable|disable]
    set webfilter-cache-ttl {integer}
    set webfilter-expiration {integer}
    set webfilter-force-off [enable|disable]
    set webfilter-license {integer}
    set webfilter-timeout {integer}
end
```

## Parameters

+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| Parameter                           | Description                                                                                                | Type                     | Size                     | Default                  |
+=====================================+============================================================================================================+==========================+==========================+==========================+
| FDS-license-expiring-days           | Threshold for number of days before FortiGuard license expiration to generate license expiring event log.  | integer                  | Minimum value: 1 Maximum | 15                       |
|                                     |                                                                                                            |                          | value: 100               |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| antispam-cache                      | Enable/disable FortiGuard antispam request caching. Uses a small amount of memory but improves             | option                   | \-                       | enable                   |
|                                     | performance.                                                                                               |                          |                          |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | Option      | Description                                            |                                                                                                                    |
|                                     | +=============+========================================================+                                                                                                                    |
|                                     | | *enable*    | Enable FortiGuard antispam request caching.            |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *disable*   | Disable FortiGuard antispam request caching.           |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| antispam-cache-mpermille            | Maximum permille of FortiGate memory the antispam cache is allowed to use.                                 | integer                  | Minimum value: 1 Maximum | 1                        |
|                                     |                                                                                                            |                          | value: 150               |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| antispam-cache-ttl                  | Time-to-live for antispam cache entries in seconds. Lower times reduce the cache size. Higher times may    | integer                  | Minimum value: 300       | 1800                     |
|                                     | improve performance since the cache will have more entries.                                                |                          | Maximum value: 86400     |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| antispam-expiration                 | Expiration date of the FortiGuard antispam contract.                                                       | integer                  | Minimum value: 0 Maximum | 0                        |
|                                     |                                                                                                            |                          | value: 4294967295        |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| antispam-force-off                  | Enable/disable turning off the FortiGuard antispam service.                                                | option                   | \-                       | disable                  |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | Option      | Description                                            |                                                                                                                    |
|                                     | +=============+========================================================+                                                                                                                    |
|                                     | | *enable*    | Turn off the FortiGuard antispam service.              |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *disable*   | Allow the FortiGuard antispam service.                 |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| antispam-license                    | Interval of time between license checks for the FortiGuard antispam contract.                              | integer                  | Minimum value: 0 Maximum | 4294967295               |
|                                     |                                                                                                            |                          | value: 4294967295        |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| antispam-timeout                    | Antispam query time out.                                                                                   | integer                  | Minimum value: 1 Maximum | 7                        |
|                                     |                                                                                                            |                          | value: 30                |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| anycast-sdns-server-ip              | IP address of the FortiGuard anycast DNS rating server.                                                    | ipv4-address             | Not Specified            | 0.0.0.0                  |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| anycast-sdns-server-port            | Port to connect to on the FortiGuard anycast DNS rating server.                                            | integer                  | Minimum value: 1 Maximum | 853                      |
|                                     |                                                                                                            |                          | value: 65535             |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| auto-firmware-upgrade               | Enable/disable automatic patch-level firmware upgrade from FortiGuard. The FortiGate unit searches for new | option                   | \-                       | disable \*\*             |
|                                     | patches only in the same major and minor version. Enabled by default for entry-level FortiGates; see       |                          |                          |                          |
|                                     | [Automatic firmware                                                                                        |                          |                          |                          |
|                                     | updates](https://docs.fortinet.com/document/fortigate/7.4.2/administration-guide/369092){target="_blank"}. |                          |                          |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | Option      | Description                                            |                                                                                                                    |
|                                     | +=============+========================================================+                                                                                                                    |
|                                     | | *enable*    | Enable automatic patch-level firmware upgrade to       |                                                                                                                    |
|                                     | |             | latest version from FortiGuard.                        |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *disable*   | Disable automatic patch-level firmware upgrade to      |                                                                                                                    |
|                                     | |             | latest version from FortiGuard.                        |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| auto-firmware-upgrade-day           | Allowed day. Disallow any day of the week to use auto-firmware-upgrade-delay instead, which waits for      | option                   | \-                       |                          |
|                                     | designated days before installing an automatic patch-level firmware upgrade.                               |                          |                          |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | Option      | Description                                            |                                                                                                                    |
|                                     | +=============+========================================================+                                                                                                                    |
|                                     | | *sunday*    | Sunday.                                                |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *monday*    | Monday.                                                |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *tuesday*   | Tuesday.                                               |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *wednesday* | Wednesday.                                             |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *thursday*  | Thursday.                                              |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *friday*    | Friday.                                                |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *saturday*  | Saturday.                                              |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| auto-firmware-upgrade-delay         | Delay of day of the week for installing an automatic patch-level firmware upgrade.                         | integer                  | Minimum value: 0 Maximum | 3                        |
|                                     |                                                                                                            |                          | value: 14                |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| auto-firmware-upgrade-end-hour      | End time in the designated time window for automatic patch-level firmware upgrade from FortiGuard in 24    | integer                  | Minimum value: 0 Maximum | 4                        |
|                                     | hour time. When the end time is smaller than the start time, the end time is interpreted as the next day.  |                          | value: 23                |                          |
|                                     | The actual upgrade time is selected randomly within the time window.                                       |                          |                          |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| auto-firmware-upgrade-start-hour    | Start time in the designated time window for automatic patch-level firmware upgrade from FortiGuard in 24  | integer                  | Minimum value: 0 Maximum | 1                        |
|                                     | hour time. The actual upgrade time is selected randomly within the time window.                            |                          | value: 23                |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| auto-join-forticloud \*             | Automatically connect to and login to FortiCloud.                                                          | option                   | \-                       | enable                   |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | Option      | Description                                            |                                                                                                                    |
|                                     | +=============+========================================================+                                                                                                                    |
|                                     | | *enable*    | Enable automatic connection and login to FortiCloud.   |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *disable*   | Disable automatic connection and login to FortiCloud.  |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| ddns-server-ip                      | IP address of the FortiDDNS server.                                                                        | ipv4-address             | Not Specified            | 0.0.0.0                  |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| ddns-server-ip6                     | IPv6 address of the FortiDDNS server.                                                                      | ipv6-address             | Not Specified            | ::                       |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| ddns-server-port                    | Port used to communicate with FortiDDNS servers.                                                           | integer                  | Minimum value: 1 Maximum | 443                      |
|                                     |                                                                                                            |                          | value: 65535             |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| fortiguard-anycast                  | Enable/disable use of FortiGuard\'s Anycast network.                                                       | option                   | \-                       | enable                   |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | Option      | Description                                            |                                                                                                                    |
|                                     | +=============+========================================================+                                                                                                                    |
|                                     | | *enable*    | Enable use of FortiGuard\'s Anycast network.           |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *disable*   | Disable use of FortiGuard\'s Anycast network.          |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| fortiguard-anycast-source           | Configure which of Fortinet\'s servers to provide FortiGuard services in FortiGuard\'s anycast network.    | option                   | \-                       | fortinet                 |
|                                     | Default is Fortinet.                                                                                       |                          |                          |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | Option      | Description                                            |                                                                                                                    |
|                                     | +=============+========================================================+                                                                                                                    |
|                                     | | *fortinet*  | Use Fortinet\'s servers to provide FortiGuard services |                                                                                                                    |
|                                     | |             | in FortiGuard\'s anycast network.                      |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *aws*       | Use Fortinet\'s AWS servers to provide FortiGuard      |                                                                                                                    |
|                                     | |             | services in FortiGuard\'s anycast network.             |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *debug*     | Use Fortinet\'s internal test servers to provide       |                                                                                                                    |
|                                     | |             | FortiGuard services in FortiGuard\'s anycast network.  |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| interface                           | Specify outgoing interface to reach server.                                                                | string                   | Maximum length: 15       |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| interface-select-method             | Specify how to select outgoing interface to reach server.                                                  | option                   | \-                       | auto                     |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | Option      | Description                                            |                                                                                                                    |
|                                     | +=============+========================================================+                                                                                                                    |
|                                     | | *auto*      | Set outgoing interface automatically.                  |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *sdwan*     | Set outgoing interface by SD-WAN or policy routing     |                                                                                                                    |
|                                     | |             | rules.                                                 |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *specify*   | Set outgoing interface manually.                       |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| load-balance-servers                | Number of servers to alternate between as first FortiGuard option.                                         | integer                  | Minimum value: 1 Maximum | 1                        |
|                                     |                                                                                                            |                          | value: 266               |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| outbreak-prevention-cache           | Enable/disable FortiGuard Virus Outbreak Prevention cache.                                                 | option                   | \-                       | enable                   |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | Option      | Description                                            |                                                                                                                    |
|                                     | +=============+========================================================+                                                                                                                    |
|                                     | | *enable*    | Enable FortiGuard antivirus caching.                   |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *disable*   | Disable FortiGuard antivirus caching.                  |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| outbreak-prevention-cache-mpermille | Maximum permille of memory FortiGuard Virus Outbreak Prevention cache can use.                             | integer                  | Minimum value: 1 Maximum | 1                        |
|                                     |                                                                                                            |                          | value: 150               |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| outbreak-prevention-cache-ttl       | Time-to-live for FortiGuard Virus Outbreak Prevention cache entries.                                       | integer                  | Minimum value: 300       | 300                      |
|                                     |                                                                                                            |                          | Maximum value: 86400     |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| outbreak-prevention-expiration      | Expiration date of FortiGuard Virus Outbreak Prevention contract.                                          | integer                  | Minimum value: 0 Maximum | 0                        |
|                                     |                                                                                                            |                          | value: 4294967295        |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| outbreak-prevention-force-off       | Turn off FortiGuard Virus Outbreak Prevention service.                                                     | option                   | \-                       | disable                  |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | Option      | Description                                            |                                                                                                                    |
|                                     | +=============+========================================================+                                                                                                                    |
|                                     | | *enable*    | Turn off FortiGuard antivirus service.                 |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *disable*   | Allow the FortiGuard antivirus service.                |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| outbreak-prevention-license         | Interval of time between license checks for FortiGuard Virus Outbreak Prevention contract.                 | integer                  | Minimum value: 0 Maximum | 4294967295               |
|                                     |                                                                                                            |                          | value: 4294967295        |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| outbreak-prevention-timeout         | FortiGuard Virus Outbreak Prevention time out.                                                             | integer                  | Minimum value: 1 Maximum | 7                        |
|                                     |                                                                                                            |                          | value: 30                |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| persistent-connection               | Enable/disable use of persistent connection to receive update notification from FortiGuard.                | option                   | \-                       | disable                  |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | Option      | Description                                            |                                                                                                                    |
|                                     | +=============+========================================================+                                                                                                                    |
|                                     | | *enable*    | Enable persistent connection to receive update         |                                                                                                                    |
|                                     | |             | notification from FortiGuard.                          |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *disable*   | Disable persistent connection to receive update        |                                                                                                                    |
|                                     | |             | notification from FortiGuard.                          |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| port                                | Port used to communicate with the FortiGuard servers.                                                      | option                   | \-                       | 443                      |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | Option      | Description                                            |                                                                                                                    |
|                                     | +=============+========================================================+                                                                                                                    |
|                                     | | *8888*      | port 8888 for server communication.                    |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *53*        | port 53 for server communication.                      |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *80*        | port 80 for server communication.                      |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *443*       | port 443 for server communication.                     |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| protocol                            | Protocol used to communicate with the FortiGuard servers.                                                  | option                   | \-                       | https                    |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | Option      | Description                                            |                                                                                                                    |
|                                     | +=============+========================================================+                                                                                                                    |
|                                     | | *udp*       | UDP for server communication (for use by FortiGuard or |                                                                                                                    |
|                                     | |             | FortiManager).                                         |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *http*      | HTTP for server communication (for use only by         |                                                                                                                    |
|                                     | |             | FortiManager).                                         |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *https*     | HTTPS for server communication (for use by FortiGuard  |                                                                                                                    |
|                                     | |             | or FortiManager).                                      |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| proxy-password                      | Proxy user password.                                                                                       | password                 | Not Specified            |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| proxy-server-ip                     | Hostname or IPv4 address of the proxy server.                                                              | string                   | Maximum length: 63       |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| proxy-server-port                   | Port used to communicate with the proxy server.                                                            | integer                  | Minimum value: 0 Maximum | 0                        |
|                                     |                                                                                                            |                          | value: 65535             |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| proxy-username                      | Proxy user name.                                                                                           | string                   | Maximum length: 64       |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| sandbox-inline-scan                 | Enable/disable FortiCloud Sandbox inline-scan.                                                             | option                   | \-                       | disable                  |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | Option      | Description                                            |                                                                                                                    |
|                                     | +=============+========================================================+                                                                                                                    |
|                                     | | *enable*    | Enable FortiCloud Sandbox inline scan.                 |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *disable*   | Disable FortiCloud Sandbox inline scan.                |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| sandbox-region                      | FortiCloud Sandbox region.                                                                                 | string                   | Maximum length: 63       |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| sdns-options                        | Customization options for the FortiGuard DNS service.                                                      | option                   | \-                       |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +----------------------------+--------------------------------------------------------+                                                                                                     |
|                                     | | Option                     | Description                                            |                                                                                                     |
|                                     | +============================+========================================================+                                                                                                     |
|                                     | | *include-question-section* | Include DNS question section in the FortiGuard DNS     |                                                                                                     |
|                                     | |                            | setup message.                                         |                                                                                                     |
|                                     | +----------------------------+--------------------------------------------------------+                                                                                                     |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| sdns-server-ip                      | IP address of the FortiGuard DNS rating server.                                                            | user                     | Not Specified            |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| sdns-server-port                    | Port to connect to on the FortiGuard DNS rating server.                                                    | integer                  | Minimum value: 1 Maximum | 53                       |
|                                     |                                                                                                            |                          | value: 65535             |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| service-account-id                  | Service account ID.                                                                                        | string                   | Maximum length: 50       |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| source-ip                           | Source IPv4 address used to communicate with FortiGuard.                                                   | ipv4-address             | Not Specified            | 0.0.0.0                  |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| source-ip6                          | Source IPv6 address used to communicate with FortiGuard.                                                   | ipv6-address             | Not Specified            | ::                       |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| update-build-proxy                  | Enable/disable proxy dictionary rebuild.                                                                   | option                   | \-                       | enable                   |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | Option      | Description                                            |                                                                                                                    |
|                                     | +=============+========================================================+                                                                                                                    |
|                                     | | *enable*    | Enable proxy dictionary rebuild.                       |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *disable*   | Disable proxy dictionary rebuild.                      |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| update-dldb                         | Enable/disable DLP signature update.                                                                       | option                   | \-                       | enable                   |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | Option      | Description                                            |                                                                                                                    |
|                                     | +=============+========================================================+                                                                                                                    |
|                                     | | *enable*    | Enable DLP signature update.                           |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *disable*   | Disable DLP signature update.                          |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| update-extdb                        | Enable/disable external resource update.                                                                   | option                   | \-                       | enable                   |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | Option      | Description                                            |                                                                                                                    |
|                                     | +=============+========================================================+                                                                                                                    |
|                                     | | *enable*    | Enable external resource update.                       |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *disable*   | Disable external resource update.                      |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| update-ffdb                         | Enable/disable Internet Service Database update.                                                           | option                   | \-                       | enable                   |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | Option      | Description                                            |                                                                                                                    |
|                                     | +=============+========================================================+                                                                                                                    |
|                                     | | *enable*    | Enable Internet Service Database update.               |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *disable*   | Disable Internet Service Database update.              |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| update-server-location              | Location from which to receive FortiGuard updates.                                                         | option                   | \-                       | automatic                |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | Option      | Description                                            |                                                                                                                    |
|                                     | +=============+========================================================+                                                                                                                    |
|                                     | | *automatic* | FortiGuard servers chosen based on closest proximity   |                                                                                                                    |
|                                     | |             | to FortiGate unit.                                     |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *usa*       | FortiGuard servers in United States.                   |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *eu*        | FortiGuard servers in the European Union.              |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| update-uwdb                         | Enable/disable allowlist update.                                                                           | option                   | \-                       | enable                   |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | Option      | Description                                            |                                                                                                                    |
|                                     | +=============+========================================================+                                                                                                                    |
|                                     | | *enable*    | Enable allowlist update.                               |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *disable*   | Disable allowlist update.                              |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| vdom                                | FortiGuard Service virtual domain name.                                                                    | string                   | Maximum length: 31       |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| webfilter-cache                     | Enable/disable FortiGuard web filter caching.                                                              | option                   | \-                       | enable                   |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | Option      | Description                                            |                                                                                                                    |
|                                     | +=============+========================================================+                                                                                                                    |
|                                     | | *enable*    | Enable FortiGuard web filter caching.                  |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *disable*   | Disable FortiGuard web filter caching.                 |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| webfilter-cache-ttl                 | Time-to-live for web filter cache entries in seconds.                                                      | integer                  | Minimum value: 300       | 3600                     |
|                                     |                                                                                                            |                          | Maximum value: 86400     |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| webfilter-expiration                | Expiration date of the FortiGuard web filter contract.                                                     | integer                  | Minimum value: 0 Maximum | 0                        |
|                                     |                                                                                                            |                          | value: 4294967295        |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| webfilter-force-off                 | Enable/disable turning off the FortiGuard web filtering service.                                           | option                   | \-                       | disable                  |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | Option      | Description                                            |                                                                                                                    |
|                                     | +=============+========================================================+                                                                                                                    |
|                                     | | *enable*    | Turn off the FortiGuard web filtering service.         |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
|                                     | | *disable*   | Allow the FortiGuard web filtering service to operate. |                                                                                                                    |
|                                     | +-------------+--------------------------------------------------------+                                                                                                                    |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| webfilter-license                   | Interval of time between license checks for the FortiGuard web filter contract.                            | integer                  | Minimum value: 0 Maximum | 4294967295               |
|                                     |                                                                                                            |                          | value: 4294967295        |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+
| webfilter-timeout                   | Web filter query time out.                                                                                 | integer                  | Minimum value: 1 Maximum | 15                       |
|                                     |                                                                                                            |                          | value: 30                |                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------+--------------------------+--------------------------+--------------------------+

